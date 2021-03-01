/*
 * @LineStart: -------------------------------------------
 * @Organization: Xwq
 * @Description:
 * @LineEnd: ----------------------------------------------
 */
const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_colors.scss";`
      }
    }
  },
  /* # 对内部的 webpack 配置进行更细粒度的修改。*/
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@scss", resolve("src/assets/scss"))
      .set("@common", resolve("src/components/common"))
      .set("@views", resolve("src/views"))
      .set("@modules", resolve("src/components/modules"))
      .set("@store", resolve("src/store"));
  }
};
