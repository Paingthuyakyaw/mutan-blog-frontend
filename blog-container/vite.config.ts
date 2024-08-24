import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mutan-blog",
      remotes: {
        profile: "https://mutan-blog-frontend.vercel.app/assets/blogEntry.js",
        admin:
          "https://mutan-blog-frontend-tdt2.vercel.app/assets/adminEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
  },
});
