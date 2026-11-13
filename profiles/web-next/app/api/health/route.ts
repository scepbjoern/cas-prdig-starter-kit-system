import config from "../../../system.config.json";
export function GET(){return Response.json({status:"ok",systemId:config.systemId})}
