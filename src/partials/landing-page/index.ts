import { html } from "hono/html";
import { env } from "@/env/server";

export const LandingPage = () => html`
  <div>
    <h1>Landing Page</h1>
    <div class="flex gap-2">
      <a
        hx-get="${env.BASE_URL}/v1/api"
        hx-target="#response"
        hx-swap="innerHTML"
        >Sign In</a
      >
      <a href="${env.BASE_URL}/v1/api/auth/sign-up">Sign Up</a>
    </div>
    <div id="response"></div>
  </div>
`;
