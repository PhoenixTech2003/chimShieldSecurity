import {html} from "hono/html";

export const AdminSidebar = () => html`
    <div class="w-64 bg-gray-900 text-white p-6">
            <div class="mb-8">
                <h2 class="text-lg font-semibold text-gray-100 mb-4">TIMELINE</h2>
                <ul class="space-y-2">
                    <li class="text-gray-400 hover:text-white cursor-pointer transition-colors">2025</li>
                    <li class="text-gray-400 hover:text-white cursor-pointer transition-colors">2026</li>
                    <li class="text-gray-400 hover:text-white cursor-pointer transition-colors">2027</li>
                </ul>
            </div>
            
            <div>
                <h2 class="text-lg font-semibold text-gray-100 mb-4">COMMUNICATION</h2>
                <ul class="space-y-2">
                    <li class="text-gray-400 hover:text-white cursor-pointer transition-colors">Messages</li>
                    <li class="text-gray-400 hover:text-white cursor-pointer transition-colors">Call Logs</li>
                </ul>
            </div>
        </div>
`