import styleImports from "@css/imports.css?inline";
import styleHome from "@css/pages/home.css?inline";

class Home extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    [styleImports, styleHome].forEach((imports) => {
      const style = document.createElement("style");
      style.textContent = imports;
      this.shadowRoot.appendChild(style);
    });

    this.container = document.createElement("div");
    this.shadowRoot.appendChild(this.container);
  }

  connectedCallback() {
    this.render()
  }

  render() {
    /* html */ 
    this.container.innerHTML = `
      <h1 class="title">Home</h1>
      <p>Welcome to the Home Page</p>
    `
  }
}

export default Home;