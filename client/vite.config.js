import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import EnvironmentPlugin from "vite-plugin-environment";
import { fileURLToPath, URL } from "node:url";
import Sitemap from "vite-plugin-sitemap";

export default defineConfig({
  server: {
    port: 5173
  },
  plugins: [
    vue(),
    vueJsx(),
    EnvironmentPlugin({
      API_BASE_URL: "https://api.makeitlogical.io/v1",
      NODE_ENV: process.env.NODE_ENV || "development"
    }),
    Sitemap({
      hostname: "https://makeitlogical.io",
      dynamicRoutes: [
        "/",
        "/services",
        "/process",
        "/contact",
        "/terms",
        "/tools",
        "/privacy",
      ]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {}
      }
    }
  }
});