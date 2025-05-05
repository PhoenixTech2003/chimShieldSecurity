import { AdminLayout } from "../layouts/admin-layout";
import { DashboardContent } from "../components/admin/dashboard-content";
import { getSecurityTeams } from "@/db/queries/security-teams";
import { html } from "hono/html";

export const AdminPage = async () => {
  const teams = await getSecurityTeams();
  return html` ${AdminLayout({ children: DashboardContent({ teams }) })} `;
};
