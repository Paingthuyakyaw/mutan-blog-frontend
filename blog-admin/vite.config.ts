import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "blog-admin",
      filename: "adminEntry.js",
      exposes: {
        "./admin": "./src/router.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
