<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="scss">
html {
  scroll-behavior: smooth;

  font-size: 14px;
  font-family: -apple-system, system-ui, Segoe UI, Roboto, Ubuntu, Cantarell,
    Noto Sans, sans-serif, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", Arial;
  word-break: break-word;
  text-rendering: optimizeLegibility;
  color: #333;
  background-color: #f4f5f5;
}
body,
html {
  height: 100%;
}
.app {
  height: 100%;
}
:root {
  --box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  --box-shadow-hover: 0 2px 16px 0 rgba(0, 0, 0, 0.2);
  --background-color: #fff;
}
</style>
