import "@/css/styles.css";
import "/src/js/utils/components-import.js";

const menuBtn = document.querySelector("wc-button[icon='menu']");
const navBar = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav li a");

menuBtn.addEventListener("nav-click", (e) => {
  navBar.classList.toggle("visible")
})
