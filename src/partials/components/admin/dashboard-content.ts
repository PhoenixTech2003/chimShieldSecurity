import { html } from "hono/html";
import { GetSecurityTeamsValues } from "@/lib/admin";

export const DashboardContent = ({
  teams,
}: {
  teams: GetSecurityTeamsValues;
}) => {
  const { data, error } = teams;

  return html`
    <div class="flex-1 p-8">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <div class="text-lg font-semibold">May 4, 2025</div>
        <div class="flex items-center gap-4">
          <div class="flex gap-2">
            <input
              type="text"
              placeholder="Search..."
              class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
            />
            <button
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </div>
          <a
            href="./index.html"
            class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >Logout</a
          >
        </div>
      </div>

      <!-- Dashboard Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-xl p-6 shadow-md">
          <div class="text-gray-600 text-sm">Active Users</div>
          <div class="text-2xl font-bold my-2">25</div>
          <div class="flex items-center">
            <div class="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
            <span class="text-sm text-gray-600">Online now</span>
          </div>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-md">
          <div class="text-gray-600 text-sm">Total Teams</div>
          <div class="text-2xl font-bold my-2">12</div>
          <div class="text-sm text-gray-600">4 teams available</div>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-md">
          <div class="text-gray-600 text-sm">Incident Reports</div>
          <div class="text-2xl font-bold my-2">7</div>
          <div class="text-sm text-gray-600">Pending resolution</div>
        </div>
      </div>

      <!-- Teams Table -->
      <div class="bg-white rounded-xl shadow-md p-6 mb-8">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-semibold">Teams Overview</h2>
          <button
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add Team
          </button>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50">
              <tr>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Team ID
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Type
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Team Leader
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Members
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              ${data?.map(
                (team) =>
                  html`
                    <tr class="hover:bg-gray-50">
                      <td class="px-6 py-4 whitespace-nowrap">
                        ${team.teamId}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">${team.name}</td>
                      <td class="px-6 py-4 whitespace-nowrap">${team.type}</td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        ${team.teamLeader}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        ${team.members}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">${team.price}</td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <button
                          class="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        >
                          View
                        </button>
                        <button
                          class="px-3 py-1 text-center bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  `
              )}

            </tbody>
          </table>
          ${error ? html`<p class="text-red-500">${error}</p>` : null}
          ${data?.length === 0 ? html`<p class="text-center text-gray-500">No teams available at  the moment</p>` : null}
        </div>

        <div class="flex justify-center mt-6 gap-2">
          <button
            class="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            1
          </button>
          <button
            class="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            2
          </button>
          <button
            class="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            3
          </button>
        </div>
      </div>

      <!-- Messages Section -->
      <div class="bg-white rounded-xl shadow-md p-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-semibold">Recent Messages</h2>
          <button
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All
          </button>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50">
              <tr>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  User ID
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Message
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Time
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">user_12345</td>
                <td class="px-6 py-4">I need help with my booking...</td>
                <td class="px-6 py-4 whitespace-nowrap">10:15 AM</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-full"
                    >Unread</span
                  >
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <button
                    class="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Reply
                  </button>
                </td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">user_67890</td>
                <td class="px-6 py-4">When will the team arrive?</td>
                <td class="px-6 py-4 whitespace-nowrap">09:30 AM</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 py-1 text-sm bg-green-100 text-green-800 rounded-full"
                    >Replied</span
                  >
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <button
                    class="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Reply
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
};
