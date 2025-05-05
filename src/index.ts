import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { auth } from "@/lib/auth";
import { cors } from "hono/cors";
import authRouter from "./routers/auth";
import indexRouter from "./routers";
import { serveStatic } from "@hono/node-server/serve-static";

const app = new Hono<{
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}>();
app.use(
  "*", // or replace with "*" to enable cors for all routes
  cors({
    origin: "http://localhost:5173", // remove trailing slash
    allowHeaders: [
      "Origin",
      "Content-Type",
      "Accept",
      "Authorization",
      "HX-Request", 
      "HX-Trigger",
      "HX-Target",
      "HX-Current-URL", 
      "HX-Swap", 
      "HX-Indicator",
      "HX-Prompt",
      "HX-Boost",
      "HX-History-Restore-Request",
      "HX-Trigger-Name",
      "HX-Boosted"
    ],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  })
);

app.use("*", async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });

  if (!session) {
    c.set("user", null);
    c.set("session", null);
    return next();
  }

  c.set("user", session.user);
  c.set("session", session.session);
  return next();
});

// Serve static files from the backend assets directory
app.use("/static/*", serveStatic({ root: "./src/assets" }));

app.route("/v1/api", indexRouter);
app.route("/v1/api/auth", authRouter);

app.on(["GET", "POST"], "/api/auth/*", (c) => {
  return auth.handler(c.req.raw);
});

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
