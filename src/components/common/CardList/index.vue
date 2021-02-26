<!--
 * @LineStart: -------------------------------------------
 * @Organization: Xwq
 * @Description: 文章列表
 * @LineEnd: ----------------------------------------------
-->
<template>
  <div class="card-list">
    <div
      class="card"
      v-for="(article, index) in articleList"
      :key="index"
      @click="goArticleDetail(article.id)"
    >
      <div class="card-title">{{ article.title }}</div>
      <div class="card-bottom">
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
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </el-pagination>
  </div>
</template>
<script>
import { PATH_ARTICLE_DETAIL } from "@/constants/url";
export default {
  data() {
    return {
      articleList: [
        {
          id: 1,
          title: "标题标题标题标题标题标题标题标题",
          createTime: "2020-03-03",
          updateTime: "2020-03-28",
          tag: "前端"
        },
        {
          id: 2,
          title: "标题标题标题标题标题标题标题标题",
          createTime: "2020-03-03",
          updateTime: "2020-03-28",
          tag: "前端"
        },
        {
          id: 3,
          title: "标题标题标题标题标题标题标题标题",
          createTime: "2020-03-03",
          updateTime: "2020-03-28",
          tag: "前端"
        },
        {
          id: 4,
          title: "标题标题标题标题标题标题标题标题",
          createTime: "2020-03-03",
          updateTime: "2020-03-28",
          tag: "前端"
        },
        {
          id: 5,
          title: "标题标题标题标题标题标题标题标题",
          createTime: "2020-03-03",
          updateTime: "2020-03-28",
          tag: "前端"
        },
        {
          id: 6,
          title: "标题标题标题标题标题标题标题标题",
          createTime: "2020-03-03",
          updateTime: "2020-03-28",
          tag: "前端"
        },
        {
          id: 7,
          title: "标题标题标题标题标题标题标题标题",
          createTime: "2020-03-03",
          updateTime: "2020-03-28",
          tag: "前端"
        },
        {
          id: 8,
          title: "标题标题标题标题标题标题标题标题",
          createTime: "2020-03-03",
          updateTime: "2020-03-28",
          tag: "前端"
        },
        {
          id: 9,
          title: "标题标题标题标题标题标题标题标题",
          createTime: "2020-03-03",
          updateTime: "2020-03-28",
          tag: "前端"
        },
        {
          id: 10,
          title: "标题标题标题标题标题标题标题标题",
          createTime: "2020-03-03",
          updateTime: "2020-03-28",
          tag: "前端"
        }
      ],
      currentPage: 1
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(val);
    },
    handleCurrentChange(val) {
      console.log(val);
    },
    goArticleDetail(id) {
      this.$router.push({
        path: PATH_ARTICLE_DETAIL,
        query: {
          id
        }
      });
    }
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
  .card-title {
    font-size: 1.28rem;
    font-weight: 500;
    line-height: 46px;
  }
  .card-bottom {
    i {
      &:not(:first-of-type) {
        margin-left: 10px;
      }
      span {
        margin-left: 8px;
      }
    }
  }
  &:hover {
    box-shadow: var(--box-shadow-hover);
  }
}
</style>
