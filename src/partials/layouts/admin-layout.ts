import { html } from "hono/html";
import { AdminSidebar } from "../components/sidebar";

export const AdminLayout = (props:{ children: any }) => html`
    <div class="flex min-h-screen">
        ${AdminSidebar()}
        <main id="content" class="flex-1">
            ${props.children}
        </main>
    </div>
`
    