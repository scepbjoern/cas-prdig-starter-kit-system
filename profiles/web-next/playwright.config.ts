import {defineConfig} from "@playwright/test";
import config from "./system.config.json" with {type:"json"};
const port=Number(process.env.TEST_PORT??config.port);
export default defineConfig({
 testDir:"./e2e",use:{baseURL:"http://127.0.0.1:"+port, ...(process.env.PLAYWRIGHT_CHANNEL?{channel:process.env.PLAYWRIGHT_CHANNEL}:{})},
 webServer:{command:"node node_modules/next/dist/bin/next dev --hostname 127.0.0.1 --port "+port,url:"http://127.0.0.1:"+port+"/api/health",reuseExistingServer:false,timeout:120000},
 reporter:"list"
});
