<template>
  <div class="app-container">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AppMain",
  watch: {
    $route() {
      // console.log(this.$route);
    },
  },
};
</script>
<style lang="scss" scoped>
.app-container {
  padding: 20px;
  margin: 30px;
  border-radius: 10px;
  min-height: 80%;
  @include background-color("background-base");
}
</style>
