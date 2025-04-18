import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "admin",
      filename: "adminRemoteEntry.js",
      exposes: {
        "./AdminPage": "./src/App", // Verifique se o caminho da página está correto
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3001,
    cors: {
      origin: "http://localhost:3000",
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
