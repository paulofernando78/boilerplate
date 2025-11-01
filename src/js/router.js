// 👇 Define all available routes in your SPA
// If the user navigates to a path not listed here, it will fall back to "wc-404"
const routes = {
  404: "wc-404", // Fallback component for invalid routes
  "/": "wc-home",
  "/about": "wc-about",
  "/contact": "wc-contact",
};

// 👇 Used for navigation without page reload
export function navigateTo(path) {
  // Updates the browser's URL (History API)
  window.history.pushState({}, "", path);
  renderRoute();
}

// 👇 Decides which component to render based on the current URL
export function renderRoute() {
  const app = document.querySelector("#app"); // Main container
  const path = window.location.pathname;      // Current route path

  // If path doesn't exist in routes, use wc-404 as fallback
  const tagName = routes[path] || "wc-404";

  // Injects the selected Web Component into the DOM
  app.innerHTML = `<${tagName}></${tagName}>`;
}

// 👇 Handles browser navigation (Back/Forward buttons)
window.addEventListener("popstate", renderRoute);