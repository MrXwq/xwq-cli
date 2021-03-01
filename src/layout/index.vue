<!--
 * @LineStart: -------------------------------------------
 * @Organization: Xwq
 * @Description: 
 * @LineEnd: ----------------------------------------------
-->
<template>
  <div class="layout-box content-container-top" ref="main">
    <header>
      <div class="home-link">
        <i class="iconfont iconxieboke"></i>
        <span class="home-link-text">BK Rebirth</span>
      </div>
      <el-menu
        :default-active="activeIndex"
        router
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item :index="PATH_MAIN">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">博客类型</template>
          <el-menu-item index="2-1">学习</el-menu-item>
          <el-submenu index="2-2">
            <template slot="title">生活</template>
            <el-menu-item index="2-4-1">家庭</el-menu-item>
            <el-menu-item index="2-4-2">朋友</el-menu-item>
            <el-menu-item index="2-4-3">自己</el-menu-item>
          </el-submenu>
          <el-menu-item index="2-3">工作</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" disabled>留言榜</el-menu-item>
      </el-menu>
      <user-info></user-info>
    </header>
    <section class="flex home-center">
      <router-view class="body" />
      <aside>
        <aside-info></aside-info>
      </aside>
    </section>
    <footer>
      <p>
        Copyright © 2021 - 2021 All.
      </p>
      <p>
        个人公司 版权所有
      </p>
    </footer>
    <back-top :contentHeight="contentHeight" />
  </div>
</template>
<script>
import { PATH_MAIN } from "@/constants/url";
export default {
  data() {
    return {
      activeIndex: "1",
      PATH_MAIN,
      contentHeight: 0
    };
  },
  mounted() {
    this.contentHeight = this.$refs.main.clientHeight;
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {
    "user-info": () => import("@modules/MainHeader/UserInfo/index.vue"), // 用户信息相关
    "aside-info": () => import("@modules/AsideInfo/index.vue"), // 侧边栏用户
    "back-top": () => import("@common/BackTop/index.vue") // 回到顶部
  }
};
</script>
<style lang="scss" scoped>
.layout-box {
  height: 100vh;
  overflow: auto;
  padding-top: 60px;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    right: 0;
    padding: 0 20px;
    z-index: 20;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease-in-out;
    background-color: $background-color;
    .home-link {
      font-size: 30px;
      .iconxieboke {
        font-size: 30px;
      }
      .home-link-text {
        font-family: pumpkinStory;
      }
    }
    .el-menu {
      width: 50%;
    }
  }
  .home-center {
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1100px;
    .body {
      margin: 0 20px;
      flex: auto;
    }
  }
}

aside {
  position: sticky;
  top: 70px;
  flex: 0 0 300px;
  height: 300px;
}
@media screen and (max-width: 600px) {
  aside {
    display: none;
  }
}
footer {
  margin-top: 20px;
  padding: 1.5rem 2.5rem;
  border-top: 1px solid $border-color;
  text-align: center;
  color: #5b5b5b;
}
</style>
