<!--
 * @LineStart: -------------------------------------------
 * @Organization: Xwq
 * @Description: 文章详情页
 * @LineEnd: ----------------------------------------------
-->
<template>
  <div class="article-detial">
    <h1>{{ article.title }}</h1>
    <div class="list-icon">
      <i class="iconfont icongengxinshijian"
        ><span>{{ article.createTime }}</span></i
      >
      <i class="iconfont icons"
        ><span>{{ article.updateTime }}</span></i
      >
      <i class="iconfont icons"
        ><span>{{ article.tag }}</span></i
      >
    </div>
    <div v-html="showContent" class="article-content"></div>
  </div>
</template>
<script>
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
const rendererMD = new marked.Renderer();

marked.setOptions({
  renderer: rendererMD,
  gfm: true, // 和github一样渲染
  pedantic: false, // 容错，帮你改错再渲染
  sanitize: false, // 不忽略html标签，如果填true，iframe标签会报错
  table: true, // 表格样式是我们github的样式 必须有gfm
  breaks: false, // 是否支持github换行符
  smartLists: true, // 自动渲染我们的列表
  smartypants: false,
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  }
});
export default {
  data() {
    return {
      article: {
        id: 1,
        title: "标题标题标题标题标题标题标题标题",
        createTime: "2020-03-03",
        updateTime: "2020-03-28",
        tag: "前端",
        content: `## 联合类型
### 类型别名`
      }
    };
  },
  computed: {
    showContent() {
      return marked(this.article.content, { sanitize: true }).replace(
        /<pre>/g,
        "<pre class='hljs'>"
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.article-detial {
  background: $background-color;
  h1 {
    text-align: center;
  }
  .list-icon {
    text-align: center;
  }
  .article-content {
    padding: 10px 20px;
  }
}
</style>
