import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";
import path from "path";
import FullReload from "vite-plugin-full-reload";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "root",
      remotes: {
        admin: "http://localhost:3001/assets/adminRemoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
    FullReload(["../admin/dist/assets/*"], {
      delay: 100,
      log: true,
    }),
  ],
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
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
