import { Hono } from "hono";
import { LandingPage } from "../partials/landing-page";
import { MainLayout } from "../partials/mainLayout";
const indexRouter = new Hono();

indexRouter.get("/", (c) => {
  if(c.req.header("HX-Request")) {
    return c.html(LandingPage());
  }
  return c.html(MainLayout({ children: LandingPage() }));
});

export default indexRouter;