import {test,expect} from "@playwright/test";
import config from "../system.config.json" with {type:"json"};
test("projektspezifischer Start und Systemidentität",async({page,request})=>{
 const health=await request.get("/api/health");expect(health.ok()).toBeTruthy();
 expect(await health.json()).toEqual({status:"ok",systemId:config.systemId});
 await page.goto("/");await expect(page.getByRole("heading",{name:config.title,exact:true})).toBeVisible();
});
