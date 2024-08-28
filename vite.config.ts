import { InlineConfig, UserConfig, defineConfig } from "vite";
import react from "@vitejs/plugin-react";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
       lib:{
          entry:'lib.js',
          name:'shareduck-ui',
          fileName:'index'
      },
      output: {
        external:['react','react-dom'],
        globals:{
            react:'React',
            'react-dom':'ReactDOM'
        },
        assetFileNames: (assetInfo) => {
          let extType = assetInfo?.name?.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType!)) {
            extType = "img";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
  test: {
    //전역 변수 사용 허용
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/config/testSetup.js",
    include: ["**/*.test.ts?(x)"],
  },
} as VitestConfigExport);
