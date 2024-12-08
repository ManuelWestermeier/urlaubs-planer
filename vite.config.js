import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "docs",
  },
  server: {
    port: 80,
  },
  base: "urlaubs-planer",
});
