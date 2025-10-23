const menuBtn = document.querySelector("wc-button[icon='menu']");
const navBar = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav li a");

menuBtn.addEventListener("nav-click", (e) => {
  navBar.classList.toggle("visible");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.remove("visible");
  });
});

const darkMode = document.querySelector("wc-button[icon='darkMode']");

darkMode.addEventListener("click", () => {
  const current = document.body.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", newTheme);
});
