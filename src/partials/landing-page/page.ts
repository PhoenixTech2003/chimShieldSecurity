import { html } from "hono/html";
import { LandingPageContent } from "./content";
import { MainLayout } from "../layouts/mainLayout";
export const LandingPage = () => html`
  ${MainLayout({ children: LandingPageContent() })}
`;
