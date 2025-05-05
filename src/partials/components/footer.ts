import { html } from "hono/html";

export const Footer = () => html`
  <footer class="bg-gray-900 text-white py-12 px-4">
    <div class="max-w-7xl mx-auto text-center">
      <div class="flex justify-center gap-8 mb-8">
        <a href="#" class="hover:text-blue-600 transition-colors">Home</a>
        <a href="#teams" class="hover:text-blue-600 transition-colors">Teams</a>
        <a href="#about" class="hover:text-blue-600 transition-colors">About</a>
        <a href="#contact" class="hover:text-blue-600 transition-colors">Contact</a>
      </div>

      <div class="flex justify-center gap-6 mb-8">
        <a href="#" class="text-2xl hover:text-blue-600 transition-colors"><i class="fab fa-facebook"></i></a>
        <a href="#" class="text-2xl hover:text-blue-600 transition-colors"><i class="fab fa-twitter"></i></a>
        <a href="#" class="text-2xl hover:text-blue-600 transition-colors"><i class="fab fa-instagram"></i></a>
        <a href="#" class="text-2xl hover:text-blue-600 transition-colors"><i class="fab fa-linkedin"></i></a>
      </div>

      <p class="text-gray-400">&copy; 2025 Chim-Shield. All rights reserved.</p>
    </div>
  </footer>
`;
