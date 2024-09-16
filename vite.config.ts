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
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'), // Path to your entry file
      name: 'ShareDuck', // Global name in UMD build
      
    },
    publicDir: 'public',

    rollupOptions: {
      //제외할 dependencies 혹은 파일들 설정
      external: ['react', 'react-dom'],
       input: {
        index: './src/index.tsx',
        packageJson: './package.json' // package.json 포함
      },
       output: [
      {
        format: 'es',
        dir: 'dist/es',  // ESM 모듈 출력
        entryFileNames: '[name].[format].js',
      },
      {
        format: 'cjs',
        dir: 'dist/cjs',  // CommonJS 모듈 출력
        entryFileNames: '[name].[format].js',
      },
    ],

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
