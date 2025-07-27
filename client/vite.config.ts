import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: ".", // this is your client folder
  base: "./", // 👈 this ensures correct relative paths in index.html
  build: {
    outDir: "dist", // Vercel expects "dist" to exist after build
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
