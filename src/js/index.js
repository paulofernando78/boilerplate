import {
  darkMode,
  lightMode,
} from "../assets/images/svg-imports";

const menuBtn = document.querySelector("wc-button[icon='menu']");
const navBar = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav li a");

menuBtn.addEventListener("nav-click", () => {
  navBar.classList.toggle("visible");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.remove("visible");
  });
});

const darkModeBtn = document.querySelector("wc-button[icon='darkMode']");

darkModeBtn.addEventListener("click", () => {
  const current = document.body.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", newTheme);
  darkModeBtn.innerHTML = newTheme === "dark" ? darkMode : lightMode;
});
