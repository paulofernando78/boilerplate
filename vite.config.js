import { defineConfig } from "vite"
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./public/assets"),
      "@": path.resolve(__dirname, "./src"),
      "@js": path.resolve(__dirname, "./src/js"),
      "@css": path.resolve(__dirname, "./src/css"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@components": path.resolve(__dirname, "./src/js/components"),
      "@utils": path.resolve(__dirname, "./src/js/utils"),
      "@pages": path.resolve(__dirname, "./src/pages")
    }
  }
})