import { Hono } from "hono";
import { LandingPage } from "../partials/landing-page/page";
import { RootLayout } from "../partials/layouts/rootLayout";
const indexRouter = new Hono();

indexRouter.get("/", (c) => {
  if(c.req.header("HX-Request")) {
    return c.html(LandingPage());
  }
  return c.html(RootLayout({ children: LandingPage() }));
});

export default indexRouter;