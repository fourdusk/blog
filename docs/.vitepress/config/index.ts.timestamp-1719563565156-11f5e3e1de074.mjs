// docs/.vitepress/config/build.ts
import { defineConfig } from "file:///E:/Practice/Code/fourdusk.github.io/node_modules/.pnpm/vitepress@1.2.3_@algolia+client-search@4.23.3_@types+node@20.14.9_postcss@8.4.38_sass@1.77.6__vkot7twauwa2rvvhcpn7wdxlpu/node_modules/vitepress/dist/node/index.js";
var build_default = defineConfig({
  srcDir: ".",
  srcExclude: [],
  outDir: "./.vitepress/dist",
  assetsDir: "assets",
  cacheDir: "./.vitepress/cache",
  ignoreDeadLinks: false,
  buildEnd: () => {
  },
  postRender: () => {
  },
  transformHead: () => {
  },
  transformPageData: () => {
  },
  transformHtml: () => {
  }
});

// docs/.vitepress/config/markdown.ts
import { defineConfig as defineConfig2 } from "file:///E:/Practice/Code/fourdusk.github.io/node_modules/.pnpm/vitepress@1.2.3_@algolia+client-search@4.23.3_@types+node@20.14.9_postcss@8.4.38_sass@1.77.6__vkot7twauwa2rvvhcpn7wdxlpu/node_modules/vitepress/dist/node/index.js";
var markdown_default = defineConfig2({
  markdown: {}
});

// docs/.vitepress/config/meta.ts
import { defineConfig as defineConfig3 } from "file:///E:/Practice/Code/fourdusk.github.io/node_modules/.pnpm/vitepress@1.2.3_@algolia+client-search@4.23.3_@types+node@20.14.9_postcss@8.4.38_sass@1.77.6__vkot7twauwa2rvvhcpn7wdxlpu/node_modules/vitepress/dist/node/index.js";
var meta_default = defineConfig3({
  base: "/",
  lang: "zh-CN",
  title: "\u56DB\u5915\u7684\u535A\u5BA2",
  titleTemplate: false,
  description: "\u4E00\u4E2A\u5B9E\u7528\u7684\u535A\u5BA2",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  lastUpdated: true
});

// docs/.vitepress/config/router.ts
import { defineConfig as defineConfig4 } from "file:///E:/Practice/Code/fourdusk.github.io/node_modules/.pnpm/vitepress@1.2.3_@algolia+client-search@4.23.3_@types+node@20.14.9_postcss@8.4.38_sass@1.77.6__vkot7twauwa2rvvhcpn7wdxlpu/node_modules/vitepress/dist/node/index.js";
var router_default = defineConfig4({
  cleanUrls: false
});

// docs/.vitepress/config/theme.ts
import { defineConfig as defineConfig5 } from "file:///E:/Practice/Code/fourdusk.github.io/node_modules/.pnpm/vitepress@1.2.3_@algolia+client-search@4.23.3_@types+node@20.14.9_postcss@8.4.38_sass@1.77.6__vkot7twauwa2rvvhcpn7wdxlpu/node_modules/vitepress/dist/node/index.js";
var theme_default = defineConfig5({
  appearance: true,
  lastUpdated: true,
  themeConfig: {
    lastUpdated: {
      text: "\u6700\u8FD1\u66F4\u65B0\u65F6\u95F4"
    },
    docFooter: {
      prev: "\u4E0A\u4E00\u7BC7",
      next: "\u4E0B\u4E00\u7BC7"
    },
    footer: {
      message: "@2024 by Fourdusk",
      copyright: "Power by vitepress"
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" }
    ],
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" }
        ]
      }
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }]
  }
});

// docs/.vitepress/config/vite.ts
import { defineConfig as defineConfig6 } from "file:///E:/Practice/Code/fourdusk.github.io/node_modules/.pnpm/vitepress@1.2.3_@algolia+client-search@4.23.3_@types+node@20.14.9_postcss@8.4.38_sass@1.77.6__vkot7twauwa2rvvhcpn7wdxlpu/node_modules/vitepress/dist/node/index.js";
import { resolve } from "path";
import vueJsx from "file:///E:/Practice/Code/fourdusk.github.io/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.0_vite@5.3.2_vue@3.4.30/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
var __vite_injected_original_dirname = "E:\\Practice\\Code\\fourdusk.github.io\\docs\\.vitepress\\config";
var vite_default = defineConfig6({
  vite: {
    resolve: {
      alias: {
        "@": resolve(__vite_injected_original_dirname, "../")
      }
    },
    plugins: [vueJsx()]
  }
});

// docs/.vitepress/config/vue.ts
import { defineConfig as defineConfig7 } from "file:///E:/Practice/Code/fourdusk.github.io/node_modules/.pnpm/vitepress@1.2.3_@algolia+client-search@4.23.3_@types+node@20.14.9_postcss@8.4.38_sass@1.77.6__vkot7twauwa2rvvhcpn7wdxlpu/node_modules/vitepress/dist/node/index.js";
var vue_default = defineConfig7({
  vue: {}
});

// docs/.vitepress/config/index.ts
var mergeConfig = Object.assign({}, build_default, markdown_default, meta_default, router_default, theme_default, vite_default, vue_default);
var config_default = mergeConfig;
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy9idWlsZC50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL21hcmtkb3duLnRzIiwgImRvY3MvLnZpdGVwcmVzcy9jb25maWcvbWV0YS50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL3JvdXRlci50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL3RoZW1lLnRzIiwgImRvY3MvLnZpdGVwcmVzcy9jb25maWcvdml0ZS50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL3Z1ZS50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcUHJhY3RpY2VcXFxcQ29kZVxcXFxmb3VyZHVzay5naXRodWIuaW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcUHJhY3RpY2VcXFxcQ29kZVxcXFxmb3VyZHVzay5naXRodWIuaW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxidWlsZC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovUHJhY3RpY2UvQ29kZS9mb3VyZHVzay5naXRodWIuaW8vZG9jcy8udml0ZXByZXNzL2NvbmZpZy9idWlsZC50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgc3JjRGlyOiAnLicsXHJcbiAgc3JjRXhjbHVkZTogW10sXHJcbiAgb3V0RGlyOiAnLi8udml0ZXByZXNzL2Rpc3QnLFxyXG4gIGFzc2V0c0RpcjogJ2Fzc2V0cycsXHJcbiAgY2FjaGVEaXI6ICcuLy52aXRlcHJlc3MvY2FjaGUnLFxyXG4gIGlnbm9yZURlYWRMaW5rczogZmFsc2UsXHJcbiAgYnVpbGRFbmQ6ICgpID0+IHt9LFxyXG4gIHBvc3RSZW5kZXI6ICgpID0+IHt9LFxyXG4gIHRyYW5zZm9ybUhlYWQ6ICgpID0+IHt9LFxyXG4gIHRyYW5zZm9ybVBhZ2VEYXRhOiAoKSA9PiB7fSxcclxuICB0cmFuc2Zvcm1IdG1sOiAoKSA9PiB7fVxyXG59KVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXFByYWN0aWNlXFxcXENvZGVcXFxcZm91cmR1c2suZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFByYWN0aWNlXFxcXENvZGVcXFxcZm91cmR1c2suZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcbWFya2Rvd24udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L1ByYWN0aWNlL0NvZGUvZm91cmR1c2suZ2l0aHViLmlvL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvbWFya2Rvd24udHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIG1hcmtkb3duOiB7fVxyXG59KVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXFByYWN0aWNlXFxcXENvZGVcXFxcZm91cmR1c2suZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFByYWN0aWNlXFxcXENvZGVcXFxcZm91cmR1c2suZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcbWV0YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovUHJhY3RpY2UvQ29kZS9mb3VyZHVzay5naXRodWIuaW8vZG9jcy8udml0ZXByZXNzL2NvbmZpZy9tZXRhLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBiYXNlOiAnLycsXHJcbiAgbGFuZzogJ3poLUNOJyxcclxuICB0aXRsZTogJ1x1NTZEQlx1NTkxNVx1NzY4NFx1NTM1QVx1NUJBMicsXHJcbiAgdGl0bGVUZW1wbGF0ZTogZmFsc2UsXHJcbiAgZGVzY3JpcHRpb246ICdcdTRFMDBcdTRFMkFcdTVCOUVcdTc1MjhcdTc2ODRcdTUzNUFcdTVCQTInLFxyXG4gIGhlYWQ6IFtbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiAnL2Zhdmljb24uaWNvJyB9XV0sXHJcbiAgbGFzdFVwZGF0ZWQ6IHRydWVcclxufSlcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxQcmFjdGljZVxcXFxDb2RlXFxcXGZvdXJkdXNrLmdpdGh1Yi5pb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxQcmFjdGljZVxcXFxDb2RlXFxcXGZvdXJkdXNrLmdpdGh1Yi5pb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXFxcXHJvdXRlci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovUHJhY3RpY2UvQ29kZS9mb3VyZHVzay5naXRodWIuaW8vZG9jcy8udml0ZXByZXNzL2NvbmZpZy9yb3V0ZXIudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGNsZWFuVXJsczogZmFsc2VcclxufSlcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxQcmFjdGljZVxcXFxDb2RlXFxcXGZvdXJkdXNrLmdpdGh1Yi5pb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxQcmFjdGljZVxcXFxDb2RlXFxcXGZvdXJkdXNrLmdpdGh1Yi5pb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXFxcXHRoZW1lLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9QcmFjdGljZS9Db2RlL2ZvdXJkdXNrLmdpdGh1Yi5pby9kb2NzLy52aXRlcHJlc3MvY29uZmlnL3RoZW1lLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBhcHBlYXJhbmNlOiB0cnVlLFxyXG4gIGxhc3RVcGRhdGVkOiB0cnVlLFxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICBsYXN0VXBkYXRlZDoge1xyXG4gICAgICB0ZXh0OiAnXHU2NzAwXHU4RkQxXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0J1xyXG4gICAgfSxcclxuICAgIGRvY0Zvb3Rlcjoge1xyXG4gICAgICBwcmV2OiAnXHU0RTBBXHU0RTAwXHU3QkM3JyxcclxuICAgICAgbmV4dDogJ1x1NEUwQlx1NEUwMFx1N0JDNydcclxuICAgIH0sXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgbWVzc2FnZTogJ0AyMDI0IGJ5IEZvdXJkdXNrJyxcclxuICAgICAgY29weXJpZ2h0OiAnUG93ZXIgYnkgdml0ZXByZXNzJ1xyXG4gICAgfSxcclxuICAgIG5hdjogW1xyXG4gICAgICB7IHRleHQ6ICdIb21lJywgbGluazogJy8nIH0sXHJcbiAgICAgIHsgdGV4dDogJ0V4YW1wbGVzJywgbGluazogJy9tYXJrZG93bi1leGFtcGxlcycgfVxyXG4gICAgXSxcclxuXHJcbiAgICBzaWRlYmFyOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnRXhhbXBsZXMnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IHRleHQ6ICdNYXJrZG93biBFeGFtcGxlcycsIGxpbms6ICcvbWFya2Rvd24tZXhhbXBsZXMnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdSdW50aW1lIEFQSSBFeGFtcGxlcycsIGxpbms6ICcvYXBpLWV4YW1wbGVzJyB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICBdLFxyXG5cclxuICAgIHNvY2lhbExpbmtzOiBbeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92aXRlcHJlc3MnIH1dXHJcbiAgfVxyXG59KVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXFByYWN0aWNlXFxcXENvZGVcXFxcZm91cmR1c2suZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFByYWN0aWNlXFxcXENvZGVcXFxcZm91cmR1c2suZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcdml0ZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovUHJhY3RpY2UvQ29kZS9mb3VyZHVzay5naXRodWIuaW8vZG9jcy8udml0ZXByZXNzL2NvbmZpZy92aXRlLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICB2aXRlOiB7XHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgJ0AnOiByZXNvbHZlKF9fZGlybmFtZSwgJy4uLycpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiBbdnVlSnN4KCldXHJcbiAgfVxyXG59KVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXFByYWN0aWNlXFxcXENvZGVcXFxcZm91cmR1c2suZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFByYWN0aWNlXFxcXENvZGVcXFxcZm91cmR1c2suZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcdnVlLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9QcmFjdGljZS9Db2RlL2ZvdXJkdXNrLmdpdGh1Yi5pby9kb2NzLy52aXRlcHJlc3MvY29uZmlnL3Z1ZS50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgdnVlOiB7fVxyXG59KVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXFByYWN0aWNlXFxcXENvZGVcXFxcZm91cmR1c2suZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFByYWN0aWNlXFxcXENvZGVcXFxcZm91cmR1c2suZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L1ByYWN0aWNlL0NvZGUvZm91cmR1c2suZ2l0aHViLmlvL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvaW5kZXgudHNcIjtpbXBvcnQgYnVpbGQgZnJvbSAnLi9idWlsZCdcclxuaW1wb3J0IG1hcmtkb3duIGZyb20gJy4vbWFya2Rvd24nXHJcbmltcG9ydCBtZXRhIGZyb20gJy4vbWV0YSdcclxuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcidcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4vdGhlbWUnXHJcbmltcG9ydCB2aXRlIGZyb20gJy4vdml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICcuL3Z1ZSdcclxuXHJcbmNvbnN0IG1lcmdlQ29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgYnVpbGQsIG1hcmtkb3duLCBtZXRhLCByb3V0ZXIsIHRoZW1lLCB2aXRlLCB2dWUpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZXJnZUNvbmZpZ1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtXLFNBQVMsb0JBQW9CO0FBRS9YLElBQU8sZ0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxFQUNSLFlBQVksQ0FBQztBQUFBLEVBQ2IsUUFBUTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsVUFBVTtBQUFBLEVBQ1YsaUJBQWlCO0FBQUEsRUFDakIsVUFBVSxNQUFNO0FBQUEsRUFBQztBQUFBLEVBQ2pCLFlBQVksTUFBTTtBQUFBLEVBQUM7QUFBQSxFQUNuQixlQUFlLE1BQU07QUFBQSxFQUFDO0FBQUEsRUFDdEIsbUJBQW1CLE1BQU07QUFBQSxFQUFDO0FBQUEsRUFDMUIsZUFBZSxNQUFNO0FBQUEsRUFBQztBQUN4QixDQUFDOzs7QUNkdVcsU0FBUyxnQkFBQUEscUJBQW9CO0FBRXJZLElBQU8sbUJBQVFDLGNBQWE7QUFBQSxFQUMxQixVQUFVLENBQUM7QUFDYixDQUFDOzs7QUNKK1YsU0FBUyxnQkFBQUMscUJBQW9CO0FBRTdYLElBQU8sZUFBUUMsY0FBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGVBQWU7QUFBQSxFQUNmLGFBQWE7QUFBQSxFQUNiLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLFFBQVEsTUFBTSxlQUFlLENBQUMsQ0FBQztBQUFBLEVBQ3RELGFBQWE7QUFDZixDQUFDOzs7QUNWbVcsU0FBUyxnQkFBQUMscUJBQW9CO0FBRWpZLElBQU8saUJBQVFDLGNBQWE7QUFBQSxFQUMxQixXQUFXO0FBQ2IsQ0FBQzs7O0FDSmlXLFNBQVMsZ0JBQUFDLHFCQUFvQjtBQUUvWCxJQUFPLGdCQUFRQyxjQUFhO0FBQUEsRUFDMUIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLElBQ1gsYUFBYTtBQUFBLE1BQ1gsTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxXQUFXO0FBQUEsSUFDYjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsRUFBRSxNQUFNLFFBQVEsTUFBTSxJQUFJO0FBQUEsTUFDMUIsRUFBRSxNQUFNLFlBQVksTUFBTSxxQkFBcUI7QUFBQSxJQUNqRDtBQUFBLElBRUEsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMLEVBQUUsTUFBTSxxQkFBcUIsTUFBTSxxQkFBcUI7QUFBQSxVQUN4RCxFQUFFLE1BQU0sd0JBQXdCLE1BQU0sZ0JBQWdCO0FBQUEsUUFDeEQ7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBRUEsYUFBYSxDQUFDLEVBQUUsTUFBTSxVQUFVLE1BQU0scUNBQXFDLENBQUM7QUFBQSxFQUM5RTtBQUNGLENBQUM7OztBQ2xDK1YsU0FBUyxnQkFBQUMscUJBQW9CO0FBQzdYLFNBQVMsZUFBZTtBQUN4QixPQUFPLFlBQVk7QUFGbkIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxlQUFRQyxjQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxNQUMvQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVMsQ0FBQyxPQUFPLENBQUM7QUFBQSxFQUNwQjtBQUNGLENBQUM7OztBQ2I2VixTQUFTLGdCQUFBQyxxQkFBb0I7QUFFM1gsSUFBTyxjQUFRQyxjQUFhO0FBQUEsRUFDMUIsS0FBSyxDQUFDO0FBQ1IsQ0FBQzs7O0FDSUQsSUFBTSxjQUFjLE9BQU8sT0FBTyxDQUFDLEdBQUcsZUFBTyxrQkFBVSxjQUFNLGdCQUFRLGVBQU8sY0FBTSxXQUFHO0FBRXJGLElBQU8saUJBQVE7IiwKICAibmFtZXMiOiBbImRlZmluZUNvbmZpZyIsICJkZWZpbmVDb25maWciLCAiZGVmaW5lQ29uZmlnIiwgImRlZmluZUNvbmZpZyIsICJkZWZpbmVDb25maWciLCAiZGVmaW5lQ29uZmlnIiwgImRlZmluZUNvbmZpZyIsICJkZWZpbmVDb25maWciLCAiZGVmaW5lQ29uZmlnIiwgImRlZmluZUNvbmZpZyIsICJkZWZpbmVDb25maWciLCAiZGVmaW5lQ29uZmlnIl0KfQo=