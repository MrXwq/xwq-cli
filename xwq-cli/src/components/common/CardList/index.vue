<!--
 * @LineStart: -------------------------------------------
 * @Organization: Xwq
 * @Description: 文章列表
 * @LineEnd: ----------------------------------------------
-->
<template>
  <div class="card-list">
    <div class="card" v-for="(article, index) in articleList" :key="index">
      <div>{{ article.title }}</div>
      <div>
        <i
          ><span>{{ article.createTime }}</span></i
        >
        <i
          ><span>{{ article.updateTime }}</span></i
        >
        <i
          ><span>{{ article.tag }}</span></i
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articleList: [
        {
          title: "标题标题标题标题标题标题标题标题",
          createTime: "2020-03-03",
          updateTime: "2020-03-28",
          tag: "前端"
        },
        {
          title: "标题标题标题标题标题标题标题标题",
          createTime: "2020-03-03",
          updateTime: "2020-03-28",
          tag: "前端"
        },
        {
          title: "标题标题标题标题标题标题标题标题",
          createTime: "2020-03-03",
          updateTime: "2020-03-28",
          tag: "前端"
        },
        {
          title: "标题标题标题标题标题标题标题标题",
          createTime: "2020-03-03",
          updateTime: "2020-03-28",
          tag: "前端"
        },
        {
          title: "标题标题标题标题标题标题标题标题",
          createTime: "2020-03-03",
          updateTime: "2020-03-28",
          tag: "前端"
        },
        {
          title: "标题标题标题标题标题标题标题标题",
          createTime: "2020-03-03",
          updateTime: "2020-03-28",
          tag: "前端"
        },
        {
          title: "标题标题标题标题标题标题标题标题",
          createTime: "2020-03-03",
          updateTime: "2020-03-28",
          tag: "前端"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.card {
  position: relative;
  margin: 0 auto 20px;
  padding: 16px 20px;
  width: 100%;
  overflow: hidden;
  border-radius: 0.25rem;
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  transition: all 0.3s;
  background-color: var(--background-color);
  cursor: pointer;
  &:hover {
    box-shadow: var(--box-shadow-hover);
  }
}
</style>
