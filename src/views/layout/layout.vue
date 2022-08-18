<template>
  <div class="layout">
    <Layout style="height: 100vh">
      <Sider class="sider"><SideBar ref="sidebar"></SideBar></Sider>
      <Layout class="right">
        <Header><NavBar @toSideBar="postSideBar"></NavBar></Header>
        <Content id="main" class="main"><AppMain></AppMain></Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import AppMain from "./components/app-main.vue";
import SideBar from "./components/side-bar.vue";
import NavBar from "./components/nav-bar.vue";
export default {
  components: {
    NavBar,
    SideBar,
    AppMain,
  },
  data() {
    return {};
  },
  methods: {
    postSideBar() {
      this.$refs.sidebar.updateMenu();
    },
  },
};
</script>
<style scoped lang="scss">
.layout {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .sider {
    width: auto;
    height: auto;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */
    overflow-y: auto;
  }
  .sider::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  .right {
    width: 100%;
    .main {
      overflow-y: auto;
      width: 100%;
    }
  }
}
</style>
