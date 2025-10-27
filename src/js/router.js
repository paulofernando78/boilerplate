import Home from "@pages/home.js";
import LinkOne from "@pages/LinkOne.js";
import LinkTwo from "@pages/LinkTwo.js";
import LinkThree from "@pages/LinkThree.js";

const routes = {
  "/": Home,
  "/link-one": LinkOne,
  "/link-two": LinkTwo,
  "/link-three": LinkThree,
};

export function navigateTo(path) {
  window.history.pushState({}, "", path);
  renderRoute();
}

export function renderRoute() {
  const app = document.querySelector("#app");
  const path = window.location.pathname;
  const page = routes[path] || Home;
  app.innerHTML = page();
}

window.addEventListener("popstate", renderRoute)
