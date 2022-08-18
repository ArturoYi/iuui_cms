<template>
  <transition :name="sideOpen" appear>
    <div :class="isPhoneOrScree" :style="itemOpen" v-show="screen">
      <Menu
        :mode="mode"
        v-model="current"
        :open-keys="openKeys"
        :inline-collapsed="inlineCollapsed"
        @click.native="clickMenuItem"
        @open-change="openChangeSub"
        :class="openClass"
        style="height: 100vh"
      >
        <!--  -->
        <!-- <div>{{$t('Router.Orange')}}</div> -->
        <!--  -->
        <!-- 頂層只有一級的路由 -->
        <router-link
          :to="one.path"
          v-for="one in menuSidItem(sideBarList)"
          :key="one.path"
        >
          <MenuItem
            icon="mail"
            :key="one.path"
            :title="$t(`${'Router.' + one.title}`)"
          ></MenuItem>
        </router-link>
        <SubMenu
          v-for="one in menuSideBar(sideBarList)"
          :key="one.name"
          icon="mail"
          :title="$t(`${'Router.' + one.title}`)"
        >
          <!-- 二級菜單 -->
          <SubMenu
            v-for="two in menuSideBar(one.children)"
            :key="two.name"
            :title="$t(`${'Router.' + two.title}`)"
          >
            <!-- 三級路由 -->
            <router-link
              v-for="there in menuSidItem(two.children)"
              :key="there.path"
              :to="there.path"
            >
              <MenuItem
                :key="there.path"
                :title="$t(`${'Router.' + there.title}`)"
              ></MenuItem>
            </router-link>
          </SubMenu>
          <router-link
            :to="two.path"
            v-for="two in menuSidItem(one.children)"
            :key="two.path"
          >
            <MenuItem
              :key="two.path"
              :title="$t(`${'Router.' + two.title}`)"
            ></MenuItem>
          </router-link>
        </SubMenu>
      </Menu>
      <transition name="u-drawer-fade" appear>
        <div @click="clickBorder" class="back" v-show="screen"></div>
      </transition>
    </div>
  </transition>
</template>
<script>
import { mapGetters } from "vuex";
import { deepTravel, getRandomStr, recursion } from "@/utils/tool";
export default {
  data() {
    return {
      show: false,
      //全部路由，map標記
      groups: [],
      //
      current: (this.current = [this.$route.path]),
      openKeys: recursion(this.sideBarList, this.$route.path),
      // 側邊欄展開方式
      mode: "inline",
      //側邊欄是否縮放
      inlineCollapsed: false,
      accordion: false, //是否只展開一個
      //側邊欄隱藏或顯示
      screen: false,
      sideOpen: "",
    };
  },
  computed: {
    ...mapGetters(["sideBarList"]),
    //路由菜單key不可以重複且不能是index問題，如果能確保router-path不一樣也可以直接使用path作為key
    idMap: function () {
      const { sideBarList } = this;
      const mapData = {};
      deepTravel(sideBarList, (item) => {
        mapData[item.name] = getRandomStr();
      });
      return mapData;
    },
    openClass() {
      if (this.$store.state.resize > 1200 && this.inlineCollapsed === false) {
        return "media";
      } else if (this.$store.state.resize < 768) {
        return "menu";
      }
    },
    isPhoneOrScree() {
      if (this.$store.state.resize < 768) {
        return "menuBox minwidth";
      } else {
        return "minwidth";
      }
    },
    // border() {
    //   if (this.screen && this.$store.state.resize <= 768) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // },
    itemOpen() {
      if (
        this.$store.state.resize > 768 &&
        this.$store.state.resize < 1200 &&
        this.mode == "inline"
      ) {
        return {
          width: "260px",
          display: "block !important",
        };
      } else {
        return {};
      }
    },
  },
  watch: {
    "$store.state.resize": function (newVal) {
      if (newVal > 1200) {
        this.mode = "inline";
        this.inlineCollapsed = false;
        this.sideOpen = "";
        this.screen = true;
      } else if (newVal > 768) {
        this.mode = "vertical";
        this.inlineCollapsed = true;
        this.sideOpen = "";
        this.screen = true;
      } else {
        this.inlineCollapsed = false;
        this.mode = "inline";
        this.sideOpen = "sideOpen";
        this.screen = false;
      }
    },
  },
  created() {
    //可以通過router-link方式保存menu狀態，性能會更好
    this.initMenu();
  },
  mounted() {
    if (this.$store.state.resize > 1200) {
      this.mode = "inline";
      this.inlineCollapsed = false;
      this.screen = true;
    } else if (this.$store.state.resize > 768) {
      this.mode = "vertical";
      this.inlineCollapsed = true;
      this.screen = true;
    } else {
      this.inlineCollapsed = false;
      this.mode = "inline";
      this.screen = false;
    }
    //
  },
  methods: {
    //用這兩個方法代替template，解決v-for和v-if同時使用問題
    menuSideBar(list) {
      const sub = list.filter((item) => {
        return item.children;
      });
      // this.current = [this.$route.path];
      // this.openKeys = [recursion(this.sideBarList, this.$route.path)];
      return sub;
    },
    menuSidItem(list) {
      const item = list.filter((item) => {
        return !item.children;
      });
      return item;
    },
    clickMenuItem() {
      return false;
      // if (this.$store.state.resize <= 768 && this.screen == true) {
      //   // this.screen = false;
      //   console.log(this.current);
      //   console.log(this.$route.meta.type);
      // }
    },
    openChangeSub(e) {
      return false;
    },
    clickBorder() {
      this.screen = false;
    },
    initMenu() {
      if (this.$route.meta.type === "view") {
        this.$forceUpdate();
        this.current = [this.$route.path];
      }
      this.openKeys = [recursion(this.sideBarList, this.$route.path)];
    },
    updateMenu() {
      if (
        this.$store.state.resize > 768 &&
        this.inlineCollapsed === false &&
        this.mode === "inline" &&
        this.screen == true
      ) {
        this.inlineCollapsed = true;
        this.mode = "vertical";
        this.screen = true;
      } else if (
        this.$store.state.resize > 768 &&
        this.inlineCollapsed === true &&
        this.mode === "vertical" &&
        this.screen == true
      ) {
        this.mode = "inline";
        this.inlineCollapsed = false;
        this.screen = true;
      } else if (this.screen === false && this.$store.state.resize <= 768) {
        this.mode = "inline";
        this.inlineCollapsed = false;
        this.screen = true;
      } else if (this.screen === true && this.$store.state.resize <= 768) {
        this.mode = "inline";
        this.inlineCollapsed = false;
        this.screen = false;
      }
    },
  },
};
</script>
<style scoped lang="scss">
.menu {
  width: 50%;
  height: 100vh;
  z-index: 9999;
  border: none;
  overflow-y: auto;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
}
.menu::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.menuBox {
  position: fixed;
  z-index: 9999;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  border: none;
  background: rgba(136, 136, 136, 0.5);
}

.back {
  border: none;
  float: right;
  background: rgba(136, 136, 136, 0.5);
  z-index: 9999;
  width: 50%;
  // height: 100vh;
}

.media {
  @media (min-width: 1200px) and(max-width: 1600px) {
    width: 18.5rem;
  }
  @media (min-width: 1600px) {
    width: 16.5rem;
  }
}
</style>
