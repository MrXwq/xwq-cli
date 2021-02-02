<!--
 * @LineStart: -------------------------------------------
 * @Organization: Xwq
 * @Description: 
 * @LineEnd: ----------------------------------------------
-->
<template>
  <div class="layout-box">
    <header>
      <div>
        <span>博客酱</span>
        <i class="iconfont iconxieboke"></i>
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
      <aside>左侧</aside>
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
    position: fixed;
    top: 0;
    z-index: 20;
    width: 100%;
    box-sizing: border-box;
    // box-shadow: 0 0 1px rgb(0 0 25%);
    transition: background-color 0.3s ease-in-out;
    background-color: #fff;
    .el-menu {
      width: 50%;
    }
  }
}
.body {
  position: static;
}
</style>
