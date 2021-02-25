<!--
 * @LineStart: -------------------------------------------
 * @Organization: Xwq
 * @Description: 用户信息相关
 * @LineEnd: ----------------------------------------------
-->
<template>
  <div class="user-info-box">
    <img class="avatar" :src="userAvatar" alt="" />
    <span class="user-name text-overflow">pretty boy</span>
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
.user-info-box {
  display: flex;
  align-items: center;
  .avatar {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }
  .user-name {
    margin-left: 5px;
    max-width: 50px;
  }
}
</style>
