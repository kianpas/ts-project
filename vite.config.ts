import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      {
        find: "@components",
        replacement: "/src/components",
      },
      {
        find: "@ui",
        replacement: "/src/components/ui",
      },
      {
        find: "@page",
        replacement: "/src/components/page",
      },
    ],
  },
});
