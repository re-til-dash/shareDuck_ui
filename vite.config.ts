import { InlineConfig, UserConfig, defineConfig } from "vite";
import react from "@vitejs/plugin-react";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    //전역 변수 사용 허용
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/config/testSetup.js",
    include: ["**/*.test.ts?(x)"],
  },
} as VitestConfigExport);
