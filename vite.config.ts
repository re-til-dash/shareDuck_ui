/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    include: ["src/**/*.test.ts?(x)"],
  },
  plugins: [react()],
});
