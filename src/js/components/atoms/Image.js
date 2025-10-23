import styleImports from "@css/imports.css?inline";
import styleComponent from "@css/components/.css?inline";

class Image extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    [styleImports, styleComponent].forEach((imports) => {
      const style = document.createElement("style");
      style.textContent = imports;
      this.shadowRoot.appendChild(style);
    });
  }
}

export default Image;