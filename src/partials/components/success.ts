import { html } from "hono/html";

export const SuccessBox = (message: string) => html`
  <div class="success">
    <p>${message}</p>
  </div>
`;
