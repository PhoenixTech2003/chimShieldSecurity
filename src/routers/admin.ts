import { Hono } from "hono";
import { AdminPage } from "../partials/admin-page/page";
import { RootLayout } from "../partials/layouts/rootLayout";
import { DashboardContent } from "@/partials/components/admin/dashboard-content";
import { getSecurityTeams } from "@/db/queries/security-teams";
import { html } from "hono/html";

const adminRouter = new Hono();
adminRouter.get("/", async (c) => {
  if (c.req.header("HX-Request")) {
    return c.html(DashboardContent({ teams: await getSecurityTeams() }));
  }
  return c.html(
    RootLayout({
      children: AdminPage({
        children: DashboardContent({ teams: await getSecurityTeams() }),
      }),
    })
  );
});

adminRouter.get("/teams", async (c) => {
  if (c.req.header("HX-Request")) {
    return c.html(html`<h1>Teams</h1>`);
  }
  return c.html(
    RootLayout({
      children: AdminPage({
        children: html`<h1>Teams</h1>`,
      }),
    })
  );
});

export default adminRouter;
