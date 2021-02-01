<!--
 * @LineStart: -------------------------------------------
 * @Organization: Xwq
 * @Description: 
 * @LineEnd: ----------------------------------------------
-->
<template>
  <div>
    <header>头部</header>
    <router-view class="body" />
    <footer>地步</footer>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  box-shadow: 0 0 1px rgb(0 0 0 / 25%);
  transition: background-color 0.3s ease-in-out;
  background-color: #fff;
  height: 40px;
  padding: 10px 60px;
  z-index: 20;
}
.body {
  position: static;
}
</style>
