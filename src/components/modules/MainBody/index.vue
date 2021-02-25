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
