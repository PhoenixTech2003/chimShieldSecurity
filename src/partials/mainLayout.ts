import { html } from "hono/html";
import { NavigationBar } from "./navBar";
import { Footer } from "./footer";

export const MainLayout = (props: { children: any }) => html` 
<div>
  ${NavigationBar()}
  ${props.children} 
  ${Footer()}
</div>`;
