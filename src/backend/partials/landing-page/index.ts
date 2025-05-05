import { html } from "hono/html";
import { env } from "@/env/server";

export const LandingPage = () => html`
  <div hx-boost="true">
    <h1>Landing Page</h1>
    <a href="${env.BASE_URL}/v1/api/auth/sign-in">Sign In</a>
    <a href="${env.BASE_URL}/v1/api/auth/sign-up">Sign Up</a>
  </div>
`;