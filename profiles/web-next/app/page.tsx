import config from "../system.config.json";
export default function Page(){return <main><h1>{config.title}</h1><p>{config.description}</p></main>}
