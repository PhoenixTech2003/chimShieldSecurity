import { Hono } from "hono";
import { LandingPage } from "../partials/landing-page";

const indexRouter = new Hono();

indexRouter.get("/", (c) => {
  return c.html(LandingPage());
});

export default indexRouter;