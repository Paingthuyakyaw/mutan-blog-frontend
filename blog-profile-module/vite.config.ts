import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  plugins: [
    react(),
    federation({
      name: "blog-profile",
      filename: "blogEntry.js",
      exposes: {
        "./Profile": "./src/App.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
