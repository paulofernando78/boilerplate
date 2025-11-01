import { navigateTo, renderRoute } from "./router";

// Run router when the page first loads
document.addEventListener("DOMContentLoaded", renderRoute);

// Intercept link clicks
document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    const path = e.target.getAttribute("href");
    navigateTo(path);
  }
});
