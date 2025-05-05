import { html } from "hono/html";
import { env } from "@/env/server";

export const RootLayout = (props:{ children: any }) => html`
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>ChimShield Security</title>
            <link rel="stylesheet" href="${env.BASE_URL}/static/output.css">
            <script src="https://unpkg.com/htmx.org@1.9.10"></script>
        </head>
        <body class="min-h-screen bg-gray-50">
            ${props.children}
        </body>
    </html>
`