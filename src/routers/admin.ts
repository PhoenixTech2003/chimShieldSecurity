import { Hono } from "hono";

const adminRouter = new Hono();
adminRouter.get("/admin", (c) => {
  return c.html("Admin");
});

