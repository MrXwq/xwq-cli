<!--
 * @LineStart: -------------------------------------------
 * @Organization: Xwq
 * @Description: 侧边栏信息
 * @LineEnd: ----------------------------------------------
-->
<template>
  <div class="aside-box">
    <img :src="userAvatar" alt="" />
    <span class="name">pretty boy</span>
    <hr />
    <div class="tags">
      <span>
        标签1
      </span>
      <span>
        标签2
      </span>
      <span>
        标签13
      </span>
      <span>
        标签14
      </span>
      <span>
        标签5
      </span>
      <span>
        标签6
      </span>
    </div>
  </div>
</template>
<script>
import userAvatar from "@/assets/img/userAvatar.jpeg";
export default {
  data() {
    return {
      userAvatar
    };
  }
};
</script>
<style lang="scss" scoped>
.aside-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  box-shadow: var(--box-shadow);
  border-radius: 0.25rem;
  box-sizing: border-box;
  background: var(--background-color);
  img {
    display: block;
    width: 6rem;
    height: 6rem;
    padding: 10px 0;
    border-radius: 50%;
  }
  .name {
    font-size: 20px;
  }
  hr {
    width: 100%;
    border: 0;
    border-top: 1px solid $border-color;
  }
  .tags {
    span {
      display: inline-block;
      padding: 4px 8px;
      margin: 4px 4px 10px;
      cursor: pointer;
      border-radius: 0.25rem;
      background-color: rgb(103, 204, 134);
    }
  }
}
</style>
