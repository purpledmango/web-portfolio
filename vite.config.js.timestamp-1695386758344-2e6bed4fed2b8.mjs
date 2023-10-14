// vite.config.js
import { defineConfig } from "file:///home/nitish/Desktop/projects/frontend/web-portfolio/node_modules/vite/dist/node/index.js";
import react from "file:///home/nitish/Desktop/projects/frontend/web-portfolio/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  base: "/web-portfolio",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Preserve the original file name and extension for all assets
        assetFileNames: "[name][extname]"
      }
    }
  },
  assetsInclude: ["**/*.docx"],
  // Include .docx files as assets
  assets: {
    include: ["**/*.docx"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9uaXRpc2gvRGVza3RvcC9wcm9qZWN0cy9mcm9udGVuZC93ZWItcG9ydGZvbGlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9uaXRpc2gvRGVza3RvcC9wcm9qZWN0cy9mcm9udGVuZC93ZWItcG9ydGZvbGlvL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL25pdGlzaC9EZXNrdG9wL3Byb2plY3RzL2Zyb250ZW5kL3dlYi1wb3J0Zm9saW8vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6IFwiL3dlYi1wb3J0Zm9saW9cIixcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICAvLyBQcmVzZXJ2ZSB0aGUgb3JpZ2luYWwgZmlsZSBuYW1lIGFuZCBleHRlbnNpb24gZm9yIGFsbCBhc3NldHNcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdbbmFtZV1bZXh0bmFtZV0nLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBhc3NldHNJbmNsdWRlOiBbXCIqKi8qLmRvY3hcIl0sXG4gIC8vIEluY2x1ZGUgLmRvY3ggZmlsZXMgYXMgYXNzZXRzXG4gIGFzc2V0czoge1xuICAgIGluY2x1ZGU6IFtcIioqLyouZG9jeFwiXSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4VSxTQUFTLG9CQUFvQjtBQUMzVyxPQUFPLFdBQVc7QUFFbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQTtBQUFBLFFBRU4sZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsZUFBZSxDQUFDLFdBQVc7QUFBQTtBQUFBLEVBRTNCLFFBQVE7QUFBQSxJQUNOLFNBQVMsQ0FBQyxXQUFXO0FBQUEsRUFDdkI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
