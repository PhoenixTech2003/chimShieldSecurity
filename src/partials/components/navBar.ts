import { html } from "hono/html";

export const NavigationBar = () => html`
        <header class="bg-white shadow-md sticky top-0 z-50">
        <nav class="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
            <a href="#" class="text-3xl font-bold text-blue-600">Chim-Shield</a>
            <div class="flex gap-8">
                <a href="#" class="text-gray-800 font-medium hover:text-blue-600 transition-colors">Home</a>
                <a href="#teams" class="text-gray-800 font-medium hover:text-blue-600 transition-colors">Teams</a>
                <a href="#report" class="text-gray-800 font-medium hover:text-blue-600 transition-colors">Report</a>
                <a href="#contact" class="text-gray-800 font-medium hover:text-blue-600 transition-colors">Contact</a>
                <a href="./trial.html" class="logout" >Logout</a>
            </div>

        </nav>
    </header>
`