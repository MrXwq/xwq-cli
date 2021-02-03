<!--
 * @LineStart: -------------------------------------------
 * @Organization: Xwq
 * @Description: 
 * @LineEnd: ----------------------------------------------
-->
<template>
  <div class="layout-box">
    <header>
      <div class="home-link">
        <i class="iconfont iconxieboke"></i>
        <span class="home-link-text">BK Rebirth</span>
      </div>
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">首页</el-menu-item>
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
    <section>
      <router-view class="body" />
      <aside>右侧</aside>
    </section>
    <footer>地步</footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {
    "user-info": () =>
      import("@/components/modules/MainHeader/UserInfo/index.vue") // 用户信息相关
  }
};
</script>
<style lang="scss" scoped>
.layout-box {
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
    background-color: #fff;
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
}
.body {
  position: static;
}
</style>
