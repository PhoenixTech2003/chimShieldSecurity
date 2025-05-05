import {html} from "hono/html";

export const AdminSidebar = () => html`
    <div class="w-64 bg-gray-800 border-r border-gray-700 p-4 flex flex-col">
        <div class="mb-6">
            <h1 class="text-xl font-bold text-white px-2 py-4"> ChimShield</h1>
        </div>

        <nav class="space-y-1 flex-1">
            <!-- Dashboard -->
            <div class="mb-6">
                <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">Dashboard</h3>
                <ul class="space-y-1">
                    <li class="group">
                        <a hx-get="/v1/api/admin" hx-swap="innerHTML" hx-target="#content" hx-push-url="true" class="flex items-center px-3 py-2 rounded-lg transition-colors text-gray-300 hover:bg-gray-700 hover:text-white group-hover:translate-x-1">
                            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                            </svg>
                            Overview
                        </a>
                    </li>
                    <li class="group">
                        <a href="#" class="flex items-center px-3 py-2 rounded-lg transition-colors text-gray-300 hover:bg-gray-700 hover:text-white group-hover:translate-x-1">
                            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                            </svg>
                            Analytics
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Teams -->
            <div class="mb-6">
                <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">Teams</h3>
                <ul class="space-y-1">
                    <li class="group">
                        <a hx-get="/v1/api/admin/teams" hx-swap="innerHTML" hx-target="#content" hx-push-url="true" class="flex items-center px-3 py-2 rounded-lg transition-colors text-gray-300 hover:bg-gray-700 hover:text-white group-hover:translate-x-1">
                            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                            </svg>
                            Security Teams
                        </a>
                    </li>
                    <li class="group">
                        <a href="#" class="flex items-center px-3 py-2 rounded-lg transition-colors text-gray-300 hover:bg-gray-700 hover:text-white group-hover:translate-x-1">
                            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                            </svg>
                            Team Members
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Bookings -->
            <div class="mb-6">
                <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">Operations</h3>
                <ul class="space-y-1">
                    <li class="group">
                        <a href="#" class="flex items-center px-3 py-2 rounded-lg transition-colors text-gray-300 hover:bg-gray-700 hover:text-white group-hover:translate-x-1">
                            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                            Active Bookings
                        </a>
                    </li>
                    <li class="group">
                        <a href="#" class="flex items-center px-3 py-2 rounded-lg transition-colors text-gray-300 hover:bg-gray-700 hover:text-white group-hover:translate-x-1">
                            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                            </svg>
                            Booking History
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
`;