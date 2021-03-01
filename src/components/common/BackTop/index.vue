<!--
 * @LineStart: -------------------------------------------
 * @Organization: Xwq
 * @Description: 回到顶部
 * @LineEnd: ----------------------------------------------
-->
<template>
  <transition name="el-fade-in">
    <div @click="toTop" v-show="toTopShow" class="back-top-box">
      <i class="el-icon-caret-top"></i>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    contentHeight: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      toTopShow: false // 是否展示回到顶部
    };
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("scroll", this.handleScroll, true); // 取消事件冒泡，防止绑定失败
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll, true); // 取消事件冒泡
  },
  methods: {
    handleScroll() {
      /* 获取回到顶部的位置元素 .content-container-top */
      const dom = document.getElementsByClassName("content-container-top")[0];
      this.innerTop = dom && dom.scrollTop;
      console.log(this.innerTop, this.contentHeight, [
        document.getElementsByClassName("content-container-top")[0]
      ]);
      if (this.innerTop > this.contentHeight / 2) {
        this.toTopShow = true;
      } else {
        this.toTopShow = false;
      }
    },
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
