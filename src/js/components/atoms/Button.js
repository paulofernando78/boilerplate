import styleImports from "@css/imports.css?inline";
import styleButton from "@css/components/button.css?inline";
import { menu, lightMode, darkMode } from "../../../assets/images/svg-imports";

class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    [styleImports, styleButton].forEach((imports) => {
      const style = document.createElement("style");
      style.textContent = imports;
      this.shadowRoot.appendChild(style);
    });
  }

  connectedCallback() {
    const icons = { menu, lightMode, darkMode };
    const iconAttr = this.getAttribute("icon");

    const button = document.createElement("button");
    button.innerHTML = icons[iconAttr] || "";

    button.addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("nav-click", {
          bubbles: true,
          composed: true,
          detail: {},
        })
      );
    });

    this.shadowRoot.appendChild(button);
  }
}

export default Button;
