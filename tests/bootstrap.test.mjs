import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import os from 'node:os';import path from 'node:path';import {execFileSync} from 'node:child_process';import {bootstrap} from '../tools/bootstrap.mjs';
function fixture(){
 const base=fs.mkdtempSync(path.join(os.tmpdir(),'prdig-bootstrap-')),target=path.join(base,'system'),e2e=path.join(base,'e2e');fs.mkdirSync(target);fs.mkdirSync(e2e);
 const put=(root,p,v)=>{const f=path.join(root,p);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,typeof v==='string'?v:JSON.stringify(v));};
 for(const p of ['docs/prototype-brief.md','docs/solution-architecture.md','contracts/data-shared.md'])put(e2e,p,'Bestätigte synthetische Vorgabe');
 const git=a=>execFileSync('git',['-C',e2e,...a],{encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();
 git(['init']);git(['add','.']);git(['-c','user.name=Fixture','-c','user.email=fixture@example.invalid','commit','-m','Testgrundlagen']);
 const ref=git(['rev-parse','HEAD']);
 put(target,'package.json',{name:'kit',scripts:{test:'node --test tests/*.test.mjs'}});
 put(target,'project.json',{kind:'system',systemId:'portal',e2e:{localPath:'../e2e',revision:ref}});
 for(const p of ['docs/prd.md','docs/system-architecture.md','docs/design-brief.md'])put(target,p,'Bestätigte Vorgabe');
 const cfg={systemId:'portal',title:'Projektportal',description:'Konkreter Testauftrag',port:3191,ui:true,e2ePath:'../e2e',e2eRevision:ref,contracts:['contracts/data-shared.md'],documents:{prd:'docs/prd.md',architecture:'docs/system-architecture.md',design:'docs/design-brief.md'}};
 const configPath=path.join(target,'bootstrap.config.json');put(target,'bootstrap.config.json',cfg);return {target,configPath,cfg,put};
}
test('Bootstrap liest echte E2E-Revision, Vorschau schreibt nichts, zweiter Aufbau schützt Dateien',()=>{
 const f=fixture();assert.equal(bootstrap(f.configPath,{target:f.target}).applied,false);assert.equal(fs.existsSync(path.join(f.target,'app')),false);
 bootstrap(f.configPath,{target:f.target,apply:true});assert.equal(JSON.parse(fs.readFileSync(path.join(f.target,'system.config.json'))).systemId,'portal');
 assert.throws(()=>bootstrap(f.configPath,{target:f.target,apply:true}),/Bestehende Anwendung|Vorhandene Datei/);
});
test('Fehlende E2E-Quelle oder Designgrundlage verhindern den Aufbau',()=>{
 const f=fixture();f.cfg.contracts=['contracts/fehlt.md'];f.put(f.target,'bootstrap.config.json',f.cfg);
 assert.throws(()=>bootstrap(f.configPath,{target:f.target,apply:true}));assert.equal(fs.existsSync(path.join(f.target,'app')),false);
 f.cfg.contracts=['contracts/data-shared.md'];f.cfg.documents.design='docs/nicht-vorhanden.md';f.put(f.target,'bootstrap.config.json',f.cfg);
 assert.throws(()=>bootstrap(f.configPath,{target:f.target}),/Dokument nicht lesbar/);
});
