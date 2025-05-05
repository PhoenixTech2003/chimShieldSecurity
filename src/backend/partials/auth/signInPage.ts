import { html } from "hono/html";
import { env } from "@/env/server";
export const SignInPage = () => html`
    <div class="min-h-screen flex items-center justify-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://images.unsplash.com/photo-1531058020387-3be344556be6')] bg-cover bg-center font-montserrat">

      <div class="container bg-white rounded-[30px] shadow-lg relative overflow-hidden w-[768px] max-w-full min-h-[480px] transition-all duration-600" id="container">
        <div class="form-container sign-up absolute top-0 h-full w-1/2 opacity-0 z-[1] transition-all duration-600">
          <form
            id="signupForm"
            hx-post="${env.BASE_URL}/auth/sign-up"
            hx-target="#response"
            hx-swap="innerHTML"
            hx-indicator="#signupSubmitBtn"
            hx-ext="json-enc"
            class="bg-white flex flex-col items-center justify-center h-full px-10"
          >
            <h1 class="text-2xl font-bold mb-4">Create Account</h1>
            <div class="social-icons flex gap-3 my-5">
              <a href="#" class="icon w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                <i class="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" class="icon w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" class="icon w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="#" class="icon w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <span class="text-sm text-gray-600">or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="signupName"
              required
              class="bg-gray-100 border-none my-2 px-4 py-2.5 text-sm rounded-full w-full outline-none focus:ring-2 focus:ring-[#2da0a8] transition-all"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="signupEmail"
              required
              class="bg-gray-100 border-none my-2 px-4 py-2.5 text-sm rounded-full w-full outline-none focus:ring-2 focus:ring-[#2da0a8] transition-all"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="signupPassword"
              required
              class="bg-gray-100 border-none my-2 px-4 py-2.5 text-sm rounded-full w-full outline-none focus:ring-2 focus:ring-[#2da0a8] transition-all"
            />
            <div class="error-message text-red-500 text-sm hidden" id="signupError"></div>
            <button type="submit" class="bg-[#2da0a8] text-white text-xs px-11 py-2.5 rounded-lg font-semibold uppercase tracking-wider mt-2.5 cursor-pointer hover:opacity-90 transition-opacity">Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in absolute top-0 h-full w-1/2 z-[2] transition-all duration-600">
          <form id="loginForm" 
          hx-post="http://localhost:3000/auth/sign-in"
          hx-target="#response"
          hx-swap="innerHTML"
          hx-indicator="#loginSubmitBtn"
          hx-ext="json-enc"
          class="bg-white flex flex-col items-center justify-center h-full px-10">
            <h1 class="text-2xl font-bold mb-4">Sign In</h1>
            <div class="social-icons flex gap-3 my-5">
              <a href="#" class="icon w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                <i class="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" class="icon w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" class="icon w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="#" class="icon w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <span class="text-sm text-gray-600">or use your email password</span>
            <input type="text" name="name" placeholder="Name" id="loginName" required 
              class="bg-gray-100 border-none my-2 px-4 py-2.5 text-sm rounded-full w-full outline-none focus:ring-2 focus:ring-[#2da0a8] transition-all"/>
            <input type="email" placeholder="Email" name="email" id="loginEmail" required 
              class="bg-gray-100 border-none my-2 px-4 py-2.5 text-sm rounded-full w-full outline-none focus:ring-2 focus:ring-[#2da0a8] transition-all"/>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="loginPassword"
              required
              class="bg-gray-100 border-none my-2 px-4 py-2.5 text-sm rounded-full w-full outline-none focus:ring-2 focus:ring-[#2da0a8] transition-all"
            />
            <div class="error-message text-red-500 text-sm hidden" id="loginError"></div>
            <a href="#" class="text-gray-700 text-sm no-underline my-4">Forget Your Password?</a>
            <button type="submit" class="bg-[#2da0a8] text-white text-xs px-11 py-2.5 rounded-lg font-semibold uppercase tracking-wider mt-2.5 cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2">
              Sign In 
              <span><img class="h-auto w-8" src="/loading.gif" alt="" /></span>
            </button>
            <div id="response"></div>
          </form>
        </div>
        <div class="toggle-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-600 z-[1000]">
          <div class="toggle bg-gradient-to-r from-[#14194e] to-[#2da0a8] relative -left-full h-full w-[200%] transform translate-x-0 transition-all duration-600">
            <div class="toggle-panel toggle-left absolute w-1/2 h-full flex flex-col items-center justify-center px-8 text-white">
              <h1 class="text-2xl font-bold mb-2">Welcome Back!</h1>
              <p class="text-sm text-center">Enter your personal details to use all of site features</p>
              <button class="bg-transparent border border-white text-white text-xs px-11 py-2.5 rounded-lg font-semibold uppercase tracking-wider mt-5 cursor-pointer hover:bg-white/10 transition-colors" id="login">Sign In</button>
            </div>
            <div class="toggle-panel toggle-right absolute right-0 w-1/2 h-full flex flex-col items-center justify-center px-8 text-white">
              <h1 class="text-2xl font-bold mb-2">Hello, Friend!</h1>
              <p class="text-sm text-center">Register with your personal details to use all of site features</p>
              <button class="bg-transparent border border-white text-white text-xs px-11 py-2.5 rounded-lg font-semibold uppercase tracking-wider mt-5 cursor-pointer hover:bg-white/10 transition-colors" id="register">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
`;