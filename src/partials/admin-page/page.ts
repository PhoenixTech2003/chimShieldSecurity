import { AdminLayout } from "../layouts/admin-layout";
import { html } from "hono/html";

export const AdminPage = async (props:{ children: any }) => {
  return html` ${AdminLayout({ children: props.children })} `;
};
