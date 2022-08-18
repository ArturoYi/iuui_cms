<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  watch: {
    $route() {
      document.title = "🍊🍊";
    },
  },
  mounted() {},
  created() {
    document.documentElement.setAttribute("data-theme", "light");
  },

  methods: {},
};
</script>
<style lang="scss">
@import "~assets/index.scss";
@import "~assets/style/project/index.scss";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @include background-color("back");
  overflow: hidden;
}
</style>
