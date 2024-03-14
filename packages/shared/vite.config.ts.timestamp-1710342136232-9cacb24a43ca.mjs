// vite.config.ts
import path, { resolve } from "path";
import preact from "file:///Users/sams386003/Documents/GitHub/project-luth/node_modules/@preact/preset-vite/dist/esm/index.mjs";
import { defineConfig } from "file:///Users/sams386003/Documents/GitHub/project-luth/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/sams386003/Documents/GitHub/project-luth/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/sams386003/Documents/GitHub/project-luth/packages/shared";
var vite_config_default = defineConfig({
  plugins: [preact(), dts({ outDir: "lib/types" })],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      react: "preact/compat",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime"
    }
  },
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "shared",
      fileName: (format) => `index.${format}.js`
    },
    outDir: "lib",
    sourcemap: true,
    cssCodeSplit: true,
    rollupOptions: {
      external: ["preact", "preact/hooks"],
      output: [
        {
          format: "es",
          globals: {
            preact: "preact"
          },
          dir: "lib/esm",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: ({ name: fileName }) => `${fileName}.js`
        },
        {
          format: "cjs",
          globals: {
            preact: "preact"
          },
          dir: "lib/cjs",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: ({ name: fileName }) => `${fileName}.js`
        }
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc2FtczM4NjAwMy9Eb2N1bWVudHMvR2l0SHViL3Byb2plY3QtbHV0aC9wYWNrYWdlcy9zaGFyZWRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9zYW1zMzg2MDAzL0RvY3VtZW50cy9HaXRIdWIvcHJvamVjdC1sdXRoL3BhY2thZ2VzL3NoYXJlZC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvc2FtczM4NjAwMy9Eb2N1bWVudHMvR2l0SHViL3Byb2plY3QtbHV0aC9wYWNrYWdlcy9zaGFyZWQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCwgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCBwcmVhY3QgZnJvbSAnQHByZWFjdC9wcmVzZXQtdml0ZSdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtwcmVhY3QoKSwgZHRzKHsgb3V0RGlyOiAnbGliL3R5cGVzJyB9KV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgICAgIHJlYWN0OiAncHJlYWN0L2NvbXBhdCcsXG4gICAgICAncmVhY3QtZG9tJzogJ3ByZWFjdC9jb21wYXQnLFxuICAgICAgJ3JlYWN0L2pzeC1ydW50aW1lJzogJ3ByZWFjdC9qc3gtcnVudGltZScsXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50cycpLFxuICAgICAgbmFtZTogJ3NoYXJlZCcsXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2AsXG4gICAgfSxcbiAgICBvdXREaXI6ICdsaWInLFxuICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICBjc3NDb2RlU3BsaXQ6IHRydWUsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsncHJlYWN0JywgJ3ByZWFjdC9ob29rcyddLFxuICAgICAgb3V0cHV0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBmb3JtYXQ6ICdlcycsXG4gICAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgICAgcHJlYWN0OiAncHJlYWN0JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRpcjogJ2xpYi9lc20nLFxuICAgICAgICAgIHByZXNlcnZlTW9kdWxlczogdHJ1ZSxcbiAgICAgICAgICBwcmVzZXJ2ZU1vZHVsZXNSb290OiAnc3JjJyxcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogKHsgbmFtZTogZmlsZU5hbWUgfSkgPT4gYCR7ZmlsZU5hbWV9LmpzYCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZvcm1hdDogJ2NqcycsXG4gICAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgICAgcHJlYWN0OiAncHJlYWN0JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRpcjogJ2xpYi9janMnLFxuICAgICAgICAgIHByZXNlcnZlTW9kdWxlczogdHJ1ZSxcbiAgICAgICAgICBwcmVzZXJ2ZU1vZHVsZXNSb290OiAnc3JjJyxcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogKHsgbmFtZTogZmlsZU5hbWUgfSkgPT4gYCR7ZmlsZU5hbWV9LmpzYCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStXLE9BQU8sUUFBUSxlQUFlO0FBQzdZLE9BQU8sWUFBWTtBQUNuQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFIaEIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsUUFBUSxZQUFZLENBQUMsQ0FBQztBQUFBLEVBQ2hELFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUNwQyxPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixxQkFBcUI7QUFBQSxJQUN2QjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDeEMsTUFBTTtBQUFBLE1BQ04sVUFBVSxDQUFDLFdBQVcsU0FBUyxNQUFNO0FBQUEsSUFDdkM7QUFBQSxJQUNBLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLGNBQWM7QUFBQSxJQUNkLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxVQUFVLGNBQWM7QUFBQSxNQUNuQyxRQUFRO0FBQUEsUUFDTjtBQUFBLFVBQ0UsUUFBUTtBQUFBLFVBQ1IsU0FBUztBQUFBLFlBQ1AsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLGlCQUFpQjtBQUFBLFVBQ2pCLHFCQUFxQjtBQUFBLFVBQ3JCLGdCQUFnQixDQUFDLEVBQUUsTUFBTSxTQUFTLE1BQU0sR0FBRyxRQUFRO0FBQUEsUUFDckQ7QUFBQSxRQUNBO0FBQUEsVUFDRSxRQUFRO0FBQUEsVUFDUixTQUFTO0FBQUEsWUFDUCxRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsaUJBQWlCO0FBQUEsVUFDakIscUJBQXFCO0FBQUEsVUFDckIsZ0JBQWdCLENBQUMsRUFBRSxNQUFNLFNBQVMsTUFBTSxHQUFHLFFBQVE7QUFBQSxRQUNyRDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
