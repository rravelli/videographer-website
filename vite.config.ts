import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { outDir: "build", assetsDir: "static" },
  base: "https://rravelli.github.io/videographer-website/",
});
