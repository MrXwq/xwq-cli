<template>
  <div class="hello">
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="editor"
    >
    </el-input>
    <div v-html="dataMark"></div>
  </div>
</template>

<script lang="ts">
// import { Component, Prop, Vue } from "vue-property-decorator";

// @Component
// export default class HelloWorld extends Vue {
//   @Prop() private msg!: string;
// }
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
      editor: ""
    };
  },
  computed: {
    dataMark() {
      return marked(this.editor, { sanitize: true }).replace(
        /<pre>/g,
        "<pre class='hljs'>"
      );
    }
  }
};
</script>
