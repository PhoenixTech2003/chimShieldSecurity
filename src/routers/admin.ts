import { Hono } from "hono";
import { AdminPage } from "../partials/admin-page/page";
import { RootLayout } from "../partials/layouts/rootLayout";
const adminRouter = new Hono();
adminRouter.get("/", (c) => {
    if(c.req.header("HX-Request")) {
        return c.html(AdminPage());
    }
  return c.html(RootLayout({ children: AdminPage() }));
});

export default adminRouter;

