import { html } from "hono/html";
import { LandingPageContent } from "../components/landing-page/landing-content";
import { MainLayout } from "../layouts/mainLayout";
export const LandingPage = () => html`
  ${MainLayout({ children: LandingPageContent() })}
`;
