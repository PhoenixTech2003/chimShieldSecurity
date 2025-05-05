import { html } from "hono/html";

export const LandingPageContent = () => html`
  <section class="relative">
    <div
      class="bg-[url('https://i.postimg.cc/MG0gdPM9/R-2.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div class="bg-black bg-opacity-50 text-white py-20 px-8 text-center">
        <div class="max-w-3xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold mb-16 mt-8">
            Book Professional Teams for Your Events
          </h1>
          <p class="text-xl md:text-2xl mb-20 mt-8">
            Find the perfect team for any occasion and manage everything in one
            place
          </p>
        </div>
      </div>
    </div>

    <div class="max-w-3xl mx-auto -mt-8 relative z-10 px-4">
      <form
        class="search-form bg-white rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div class="flex flex-col">
          <label for="event-type" class="text-sm font-medium text-gray-700 mb-1"
            >Event Type</label
          >
          <select
            id="event-type"
            class="form-select rounded-lg border-gray-300 focus:border-blue-600 focus:ring-blue-600"
          >
            <option value="">Select Type</option>
            <option value="corporate">Corporate</option>
            <option value="private">Private</option>
            <option value="public">Public</option>
          </select>
        </div>
        <div class="flex flex-col">
          <label for="location" class="text-sm font-medium text-gray-700 mb-1"
            >Location</label
          >
          <input
            type="text"
            id="location"
            class="form-input rounded-lg border-gray-300 focus:border-blue-600 focus:ring-blue-600"
            placeholder="Enter location"
          />
        </div>
        <div class="flex flex-col">
          <label for="guests" class="text-sm font-medium text-gray-700 mb-1"
            >Number of Guests</label
          >
          <input
            type="number"
            id="guests"
            class="form-input rounded-lg border-gray-300 focus:border-blue-600 focus:ring-blue-600"
            placeholder="e.g. 100"
          />
        </div>
        <button
          type="submit"
          class="md:col-span-3 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Book Teams
        </button>
      </form>
    </div>
  </section>

  <div class="max-w-7xl mx-auto px-4 py-12">
    <section id="features">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          We provide top-notch security services with experienced teams ready to
          handle any situation.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div
          class="bg-white rounded-xl p-8 shadow-md text-center transform transition-transform hover:-translate-y-2"
        >
          <i class="fas fa-shield-alt text-4xl text-blue-600 mb-6"></i>
          <h3 class="text-xl font-semibold mb-4">Professional Teams</h3>
          <p class="text-gray-600">
            Highly trained and experienced security personnel for all your
            needs.
          </p>
        </div>

        <div
          class="bg-white rounded-xl p-8 shadow-md text-center transform transition-transform hover:-translate-y-2"
        >
          <i class="fas fa-clock text-4xl text-blue-600 mb-6"></i>
          <h3 class="text-xl font-semibold mb-4">24/7 Availability</h3>
          <p class="text-gray-600">
            Round-the-clock security services to protect your assets.
          </p>
        </div>

        <div
          class="bg-white rounded-xl p-8 shadow-md text-center transform transition-transform hover:-translate-y-2"
        >
          <i class="fas fa-star text-4xl text-blue-600 mb-6"></i>
          <h3 class="text-xl font-semibold mb-4">Top Rated Service</h3>
          <p class="text-gray-600">
            Consistently high-rated security services by our clients.
          </p>
        </div>
      </div>
    </section>

    <section id="teams" class="py-12">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Our Security Teams
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Choose from our wide range of specialized security teams.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Team cards will be dynamically populated by JavaScript -->
      </div>
    </section>
  </div>

  <div class="container">
    <section id="report" class="py-12">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Report an Incident
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Submit a report for any security concerns or incidents.
        </p>
      </div>

      <div class="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
        <form class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex flex-col">
              <label
                for="booking-id"
                class="text-sm font-medium text-gray-700 mb-1"
                >Booking ID</label
              >
              <input
                type="text"
                id="booking-id"
                class="form-input rounded-lg border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                placeholder="Enter your booking ID"
              />
            </div>
            <div class="flex flex-col">
              <label
                for="incident-type"
                class="text-sm font-medium text-gray-700 mb-1"
                >Incident Type</label
              >
              <select
                id="incident-type"
                class="form-select rounded-lg border-gray-300 focus:border-blue-600 focus:ring-blue-600"
              >
                <option value="">Select incident type</option>
                <option value="security-breach">Security Breach</option>
                <option value="theft">Theft</option>
                <option value="harassment">Harassment</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div class="flex flex-col">
            <label
              for="description"
              class="text-sm font-medium text-gray-700 mb-1"
              >Description</label
            >
            <textarea
              id="description"
              rows="4"
              class="form-textarea rounded-lg border-gray-300 focus:border-blue-600 focus:ring-blue-600"
              placeholder="Describe the incident in detail"
            ></textarea>
          </div>

          <div class="flex justify-end gap-4">
            <button
              type="button"
              class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </section>

    <section id="contact" class="py-12">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Get in touch with us through any of these channels
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div class="bg-white rounded-xl p-8 shadow-md text-center">
          <i class="fas fa-phone text-4xl text-blue-600 mb-6"></i>
          <h3 class="text-xl font-semibold mb-4">Phone</h3>
          <p class="text-gray-600">+265 999 999 999</p>
        </div>

        <div class="bg-white rounded-xl p-8 shadow-md text-center">
          <i class="fas fa-envelope text-4xl text-blue-600 mb-6"></i>
          <h3 class="text-xl font-semibold mb-4">Email</h3>
          <p class="text-gray-600">support@chimshield.com</p>
        </div>

        <div class="bg-white rounded-xl p-8 shadow-md text-center">
          <i class="fas fa-map-marker-alt text-4xl text-blue-600 mb-6"></i>
          <h3 class="text-xl font-semibold mb-4">Address</h3>
          <p class="text-gray-600">Area 4, Lilongwe, Malawi</p>
        </div>
      </div>
    </section>
  </div>
`;
