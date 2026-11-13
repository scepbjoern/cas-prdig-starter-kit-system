import fs from 'node:fs';import path from 'node:path';import {execFileSync} from 'node:child_process';import {fileURLToPath} from 'node:url';
const kit=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
function files(dir){return fs.readdirSync(dir,{withFileTypes:true}).filter(e=>!['node_modules','.next'].includes(e.name)).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)]);}
function read(p){return JSON.parse(fs.readFileSync(p,'utf8'));}
export function bootstrap(configPath,{apply=false,target=kit}={}){
 target=path.resolve(target);const cfg=read(configPath),project=read(path.join(target,'project.json'));
 if(!/^[a-z][a-z0-9-]*$/.test(cfg.systemId)||!Number.isInteger(cfg.port)||cfg.port<1024||cfg.port>65535)throw Error('System-ID oder Port ungültig.');
 if(typeof cfg.title!=='string'||!cfg.title.trim()||typeof cfg.description!=='string')throw Error('Projektspezifischer Titel und Beschreibung fehlen.');
 if(project.kind!=='system'||project.systemId!==cfg.systemId)throw Error('project.json passt nicht zum System.');
 const e2e=path.resolve(target,cfg.e2ePath);
 if(!/^[a-f0-9]{40}$/.test(cfg.e2eRevision)||project.e2e?.revision!==cfg.e2eRevision||path.resolve(target,project.e2e.localPath)!==e2e)throw Error('E2E-Pfad oder Revision nicht konsistent.');
 const git=args=>execFileSync('git',['-C',e2e,...args],{encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();
 for(const rel of ['docs/prototype-brief.md','docs/solution-architecture.md',...(cfg.contracts??[])]){
  if(!/^(docs|contracts)\/[a-zA-Z0-9/_-]+\.md$/.test(rel))throw Error('Unzulässiger E2E-Quellpfad.');
  if(!git(['show',cfg.e2eRevision+':'+rel]))throw Error('Leere E2E-Quelle: '+rel);
 }
 if(!cfg.contracts?.length)throw Error('Mindestens ein tatsächlich gelesener Vertragsverweis erforderlich.');
 for(const key of ['prd','architecture',...(cfg.ui===false?[]:['design'])]){
  const rel=cfg.documents?.[key];if(!rel)throw Error('Dokument fehlt: '+key);
  const p=path.resolve(target,rel);if(!p.startsWith(target+path.sep)||!fs.existsSync(p)||!fs.readFileSync(p,'utf8').trim())throw Error('Dokument nicht lesbar: '+key);
 }
 const profile=path.join(kit,'profiles/web-next');
 const entries=files(profile).filter(p=>!p.endsWith('PROFILE.md')).map(p=>({rel:path.relative(profile,p),bytes:fs.readFileSync(p)}));
 const old=read(path.join(target,'package.json'));
 if(old.dependencies||old.devDependencies)throw Error('Bestehende Anwendung nicht überschreiben; Bootstrap ist nur für den leeren Kit-Stand.');
 for(const e of entries)if(e.rel!=='package.json'&&fs.existsSync(path.join(target,e.rel)))throw Error('Vorhandene Datei wird nicht überschrieben: '+e.rel);
 if(fs.existsSync(path.join(target,'system.config.json')))throw Error('System bereits aufgebaut.');
 const pkg=JSON.parse(entries.find(e=>e.rel==='package.json').bytes);
 pkg.name=cfg.systemId;pkg.version='0.1.0';pkg.scripts={'test:kit':old.scripts?.test,...pkg.scripts};
 entries.find(e=>e.rel==='package.json').bytes=Buffer.from(JSON.stringify(pkg,null,2)+'\n');
 const lockEntry=entries.find(e=>e.rel==='package-lock.json');
 if(lockEntry){const lock=JSON.parse(lockEntry.bytes);lock.name=cfg.systemId;lock.version='0.1.0';lock.packages[''].name=cfg.systemId;lock.packages[''].version='0.1.0';lockEntry.bytes=Buffer.from(JSON.stringify(lock,null,2)+'\n');}
 entries.push({rel:'system.config.json',bytes:Buffer.from(JSON.stringify({systemId:cfg.systemId,title:cfg.title,description:cfg.description,port:cfg.port},null,2)+'\n')});
 if(apply)for(const e of entries){const p=path.join(target,e.rel);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,e.bytes);}
 return {systemId:cfg.systemId,e2eRevision:cfg.e2eRevision,port:cfg.port,files:entries.map(e=>e.rel),applied:apply};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const args=process.argv.slice(2),config=args.find(a=>!a.startsWith('--'));
 if(!config)throw Error('Aufruf: node tools/bootstrap.mjs bootstrap.config.json [--apply]');
 console.log(JSON.stringify(bootstrap(path.resolve(config),{apply:args.includes('--apply')}),null,2));
}
