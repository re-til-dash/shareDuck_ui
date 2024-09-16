// vite.config.ts
import { defineConfig } from "file:///home/sleepingoff/shareDuck/shareDuck_ui/.yarn/__virtual__/vite-virtual-45cf386ed4/3/.yarn/berry/cache/vite-npm-5.3.3-7061e07df9-10c0.zip/node_modules/vite/dist/node/index.js";
import react from "file:///home/sleepingoff/shareDuck/shareDuck_ui/.yarn/__virtual__/@vitejs-plugin-react-virtual-3a33f73455/3/.yarn/berry/cache/@vitejs-plugin-react-npm-4.3.1-cbe92983ea-10c0.zip/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "/home/sleepingoff/shareDuck/shareDuck_ui";
var vite_config_default = defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/index.tsx"),
      // Path to your entry file
      name: "ShareDuck"
      // Global name in UMD build
    },
    publicDir: "public",
    rollupOptions: {
      external: ["react", "react-dom", "**/*.stories.*", "dist/icons"],
      input: {
        index: "./src/index.tsx",
        packageJson: "./package.json"
        // package.json 포함
      },
      output: [
        {
          exports: "named"
        },
        {
          format: "cjs",
          file: "dist/cjs/shareduck-ui.[format].js"
        },
        {
          format: "es",
          file: "dist/es/shareduck-ui.[format].js"
        },
        {
          format: "es",
          dir: "dist/es",
          // ESM 모듈 출력
          entryFileNames: "[name].[format].js"
        },
        {
          format: "cjs",
          dir: "dist/cjs",
          // CommonJS 모듈 출력
          entryFileNames: "[name].[format].js"
        }
      ]
    },
    commonjsOptions: {
      esmExternals: ["react"]
    }
  },
  test: {
    //전역 변수 사용 허용
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/config/testSetup.js",
    include: ["**/*.test.ts?(x)"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9zbGVlcGluZ29mZi9zaGFyZUR1Y2svc2hhcmVEdWNrX3VpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9zbGVlcGluZ29mZi9zaGFyZUR1Y2svc2hhcmVEdWNrX3VpL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3NsZWVwaW5nb2ZmL3NoYXJlRHVjay9zaGFyZUR1Y2tfdWkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBJbmxpbmVDb25maWcsIFVzZXJDb25maWcsIGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW50ZXJmYWNlIFZpdGVzdENvbmZpZ0V4cG9ydCBleHRlbmRzIFVzZXJDb25maWcge1xuICB0ZXN0OiBJbmxpbmVDb25maWc7XG59XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50c3gnKSwgLy8gUGF0aCB0byB5b3VyIGVudHJ5IGZpbGVcbiAgICAgIG5hbWU6ICdTaGFyZUR1Y2snLCAvLyBHbG9iYWwgbmFtZSBpbiBVTUQgYnVpbGRcbiAgICAgIFxuICAgIH0sXG4gICAgcHVibGljRGlyOiAncHVibGljJyxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nLCAnKiovKi5zdG9yaWVzLionLCAnZGlzdC9pY29ucyddLFxuICAgICAgIGlucHV0OiB7XG4gICAgICAgIGluZGV4OiAnLi9zcmMvaW5kZXgudHN4JyxcbiAgICAgICAgcGFja2FnZUpzb246ICcuL3BhY2thZ2UuanNvbicgLy8gcGFja2FnZS5qc29uIFx1RDNFQ1x1RDU2OFxuICAgICAgfSxcbiAgICAgICBvdXRwdXQ6IFtcbiAgICAgICAge1xuICAgICAgICAgIGV4cG9ydHM6ICduYW1lZCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZvcm1hdDogJ2NqcycsXG4gICAgICAgICAgZmlsZTogJ2Rpc3QvY2pzL3NoYXJlZHVjay11aS5bZm9ybWF0XS5qcycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmb3JtYXQ6ICdlcycsXG4gICAgICAgICAgZmlsZTogJ2Rpc3QvZXMvc2hhcmVkdWNrLXVpLltmb3JtYXRdLmpzJyxcbiAgICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZm9ybWF0OiAnZXMnLFxuICAgICAgICBkaXI6ICdkaXN0L2VzJywgIC8vIEVTTSBcdUJBQThcdUI0QzggXHVDRDlDXHVCODI1XG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnW25hbWVdLltmb3JtYXRdLmpzJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZvcm1hdDogJ2NqcycsXG4gICAgICAgIGRpcjogJ2Rpc3QvY2pzJywgIC8vIENvbW1vbkpTIFx1QkFBOFx1QjRDOCBcdUNEOUNcdUI4MjVcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0uW2Zvcm1hdF0uanMnLFxuICAgICAgfSxcbiAgICBdLFxuXG4gICAgfSxcbiAgICAgY29tbW9uanNPcHRpb25zOiB7XG4gICAgICBlc21FeHRlcm5hbHM6IFtcInJlYWN0XCJdLFxuICAgIH0sXG4gIH0sXG4gIHRlc3Q6IHtcbiAgICAvL1x1QzgwNFx1QzVFRCBcdUJDQzBcdUMyMTggXHVDMEFDXHVDNkE5IFx1RDVDOFx1QzZBOVxuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgZW52aXJvbm1lbnQ6IFwianNkb21cIixcbiAgICBzZXR1cEZpbGVzOiBcIi4vc3JjL2NvbmZpZy90ZXN0U2V0dXAuanNcIixcbiAgICBpbmNsdWRlOiBbXCIqKi8qLnRlc3QudHM/KHgpXCJdLFxuICB9LFxufSBhcyBWaXRlc3RDb25maWdFeHBvcnQpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwUyxTQUFtQyxvQkFBb0I7QUFDalcsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUZqQixJQUFNLG1DQUFtQztBQVF6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxLQUFLLFFBQVEsa0NBQVcsZUFBZTtBQUFBO0FBQUEsTUFDOUMsTUFBTTtBQUFBO0FBQUEsSUFFUjtBQUFBLElBQ0EsV0FBVztBQUFBLElBQ1gsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsYUFBYSxrQkFBa0IsWUFBWTtBQUFBLE1BQzlELE9BQU87QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQTtBQUFBLE1BQ2Y7QUFBQSxNQUNDLFFBQVE7QUFBQSxRQUNQO0FBQUEsVUFDRSxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLFFBQVE7QUFBQSxVQUNSLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsUUFBUTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNGO0FBQUEsVUFDRSxRQUFRO0FBQUEsVUFDUixLQUFLO0FBQUE7QUFBQSxVQUNMLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsUUFDQTtBQUFBLFVBQ0UsUUFBUTtBQUFBLFVBQ1IsS0FBSztBQUFBO0FBQUEsVUFDTCxnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxJQUVBO0FBQUEsSUFDQyxpQkFBaUI7QUFBQSxNQUNoQixjQUFjLENBQUMsT0FBTztBQUFBLElBQ3hCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUFBO0FBQUEsSUFFSixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixZQUFZO0FBQUEsSUFDWixTQUFTLENBQUMsa0JBQWtCO0FBQUEsRUFDOUI7QUFDRixDQUF1QjsiLAogICJuYW1lcyI6IFtdCn0K
