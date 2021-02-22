<!--
 * @LineStart: -------------------------------------------
 * @Organization: Xwq
 * @Description: 
 * @LineEnd: ----------------------------------------------
-->
<template>
  <div class="main-content">
    <cardlist />
  </div>
</template>
<script>
export default {
  components: {
    cardlist: () => import("@/components/common/CardList/index.vue")
  }
};
</script>
<style lang="scss" scoped>
.main-content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
