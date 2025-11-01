const routes = {
  "/": "wc-home",
  "/link-one": "wc-link-1",
  "/link-two": "wc-link-1",
  "/link-three": "wc-link-1"
};

export function navigateTo(path) {
  window.history.pushState({}, "", path);
  renderRoute();
}

export function renderRoute() {
  const app = document.querySelector("#app");
  const path = window.location.pathname;
  const tagName = routes[path] || "wc-home";
  app.innerHTML = `<${tagName}></${tagName}>`;
}

window.addEventListener("popstate", renderRoute)
