import type {ReactNode} from "react";
import config from "../system.config.json";
import "./globals.css";
export const metadata={title:config.title,description:config.description};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="de"><body>{children}</body></html>}
