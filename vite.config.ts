import { InlineConfig, UserConfig, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
       lib:{
          entry: path.resolve(__dirname, "src/index.tsx"),
          name:'index',
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
     commonjsOptions: {
      esmExternals: ["react"],
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
