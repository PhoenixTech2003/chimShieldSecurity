import { html } from "hono/html";
import { NavigationBar } from "../components/navBar";
import { Footer } from "../components/footer";

export const MainLayout = (props: { children: any }) => html` 
<div>
  ${NavigationBar()}
  ${props.children} 
  ${Footer()}
</div>`;
