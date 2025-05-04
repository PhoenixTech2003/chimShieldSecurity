import { html } from "hono/html";

export const ErrorBox = (error: string) => html`
  <div class="error">
    <p>${error}</p>
  </div>
`;
