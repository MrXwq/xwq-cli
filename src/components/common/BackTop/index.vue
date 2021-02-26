<!--
 * @LineStart: -------------------------------------------
 * @Organization: Xwq
 * @Description: 回到顶部
 * @LineEnd: ----------------------------------------------
-->
<template>
  <div @click="toTop" class="back-top-box">
    <i class="el-icon-caret-top"></i>
  </div>
</template>
<script>
export default {
  methods: {
    toTop() {
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>
<style lang="scss" scoped>
.back-top-box {
  position: fixed;
  bottom: 200px;
  right: 200px;
  z-index: 100;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  background: #fff;
  text-align: center;
  cursor: pointer;
  box-shadow: 0px 2px 4px 0px rgba(198, 198, 198, 0.5);
  .el-icon-caret-top {
    font-size: 20px;
    line-height: 36px;
    color: #bbbbbb;
  }
  &:hover {
    background: #f0f8ff;
    .el-icon-caret-top {
      color: #3296fa;
    }
  }
}
</style>
