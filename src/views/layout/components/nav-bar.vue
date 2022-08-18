<template>
  <div class="navbar">
    <div class="nav-left">
      <div @click="clickSideBar">
        <Icon type="menu" size="30" />
      </div>
      <div class="breadcrumb">
        <Breadcrumb>
          <BreadcrumbItem
            :to="toPath(item)"
            v-for="item in levelList"
            :key="item"
            >{{ $t(`${"Router." + item}`) }}</BreadcrumbItem
          >
        </Breadcrumb>
      </div>
    </div>
    <Setting v-if="!phone"></Setting>
    <div class="nav-right" v-if="phone">
      <Dropdown :showPlacementArrow="languageList.length != 0" trigger="click">
        <div class="icon-box">
          <!-- <Tooltip placement="bottom" :title="$t('Language.language')"> -->
          <Icon type="language" size="24" />
          <!-- </Tooltip> -->
        </div>
        <Menu
          v-model="languageList"
          slot="content"
          v-if="languageList.length != 0"
        >
          <MenuItem
            style="text-align: center"
            @click.native="clickLanguage(item)"
            v-for="item in languageList"
            :key="item"
            :title="$t(`${'Language.' + item}`)"
          >
          </MenuItem>
        </Menu>
      </Dropdown>
      <Dropdown :showPlacementArrow="themeList.length != 0" trigger="click">
        <div class="icon-box">
          <!-- <Tooltip title="切換主題"> -->
          <Icon type="color-palette" size="24" />
          <!-- </Tooltip> -->
        </div>
        <Menu v-if="themeList.length != 0" slot="content">
          <MenuItem
            @click.native="clickTheme(item)"
            v-for="item in themeList"
            :key="item"
            :title="$t(`${'Theme.' + item}`)"
          ></MenuItem>
        </Menu>
      </Dropdown>
      <!-- <Dropdown :showPlacementArrow="themeList.length != 0" trigger="click">
        <div class="icon-box">
          <Icon type="person" size="24" />
        </div>
        <Menu v-if="themeList.length != 0" slot="content">
          <MenuItem
            @click.native="clickTheme(item)"
            v-for="item in themeList"
            :key="item"
            :title="$t(`${'Theme.' + item}`)"
          ></MenuItem>
        </Menu>
      </Dropdown> -->
    </div>
  </div>
</template>
<script>
import Setting from "./basecomponents/setting.vue";
import { debounce, deepClone } from "@/utils/tool";
import { setStorage, getStorage } from "@/utils/localStorage";
import { mapMutations, mapGetters } from "vuex";
export default {
  components: {
    Setting,
  },
  data() {
    return {
      open: true,
      languageList: [],
      themeList: ["light", "dark"],
      levelList: null,
      phone: true,
    };
  },
  watch: {
    "$store.state.resize": function (newVal) {
      this.isPhone(newVal);
    },
    $route(route) {
      this.getBreadcrumb();
    },
  },
  computed: {
    ...mapGetters(["sideBarList"]),
  },
  created() {
    this.languageList = this.$i18n.availableLocales;
    // let vuex = JSON.parse(localStorage.getItem("vuex"));
    // if (vuex != null && vuex != undefined && vuex) {
    //   this.$store.replaceState(
    //     Object.assign({}, JSON.parse(localStorage.getItem("vuex")))
    //   );
    // }
    this.$i18n.locale = this.$store.state.language
      ? this.$store.state.language
      : this.$i18n.availableLocales[0];
    this.initTheme();
    this.getBreadcrumb();
    this.isPhone(this.$store.state.resize);
  },
  methods: {
    ...mapMutations(["changeLange", "changeTheme"]),
    clickLanguage(e) {
      if (this.$i18n.locale != e) {
        this.changeLange(e);
        this.$i18n.locale = e;
        this.$Message.config({
          type: "success",
          duration: 2,
          content: this.language(e, null),
        });
      }
    },
    language(e, now) {
      switch (e) {
        case "znch":
          return "语言切换为中文";
        case "enus":
          return "Language switch to English";
        default:
          return e;
      }
    },
    isPhone(newVal) {
      if (newVal > 1200) {
        this.phone = true;
      } else if (newVal > 768) {
        this.phone = true;
      } else {
        this.phone = false;
      }
    },
    clickTheme(e) {
      if (this.$store.state.themeName != e) {
        this.changeTheme(e);
        this.$Message.config({
          type: "success",
          duration: 2,
          content: this.theme(e, null),
        });
      }
    },
    theme(e, now) {
      if (this.$i18n.locale == "znch") {
        switch (e) {
          case "light":
            return "已經切換淺色主題";
          case "dark":
            return "已經切換暗色主題";
          default:
            return e;
        }
      }
      if (this.$i18n.locale == "enus") {
        switch (e) {
          case "light":
            return "Light theme has been switched";
          case "dark":
            return "Dark theme has been switched";
          default:
            return e;
        }
      }
    },
    initTheme() {
      let vuex = JSON.parse(localStorage.getItem("vuex"));
      try {
        if (vuex.themeName) {
          this.changeTheme(vuex.themeName);
        }
      } catch (error) {
        this.changeTheme("light");
      }
    },
    getBreadcrumb() {
      let a = deepClone(this.sideBarList);
      let list = null;
      for (const item of a) {
        let i = this.filterTitleMater(this.$route.meta.title, item);
        if (i) {
          list = item;
        }
      }
      let level = this.breadcrumb(list, this.$route.meta.title);
      this.levelList = level;
    },
    // 深度递归遍历，因为要导航页定制，不作为工具函数封装
    filterTitleMater(title, obj) {
      if (obj.title === title) return obj;
      if (obj.children && obj.children.length) {
        for (const item of obj.children) {
          if (item.title === title) return obj;
          if (item.children && item.children.length) {
            return this.filterTitleMater(title, item.children);
          }
        }
      }
      return false;
    },
    breadcrumb(obj, title) {
      if (!obj || obj == []) return [];
      let list = [];
      if (obj.title != "" && obj.title != "Index") {
        list.push("Index");
      }
      list.push(obj.title);
      if (obj.children && obj.children.length) {
        for (const item of obj.children) {
          if (item.title === title) {
            list.push(title);
          }
          if (item.children && item.children.length) {
            for (const i of item.children) {
              if (item.children === title) {
                list.push(item.title);
                list.push(i.title);
              }
            }
          }
        }
      }
      return list;
    },
    toPath(item) {
      return "";
    },
    clickSideBar: debounce(function () {
      this.$emit("toSideBar");
    }, 0),
  },
};
</script>
<style scoped lang="scss">
.navbar {
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  box-shadow: 0 2px 6px 2px rgba(158, 158, 158, 0.3);
  @include background-color("background-base");
  display: flex;
  align-items: center;
  justify-content: space-between;
  @include color("color-primary");
  .nav-left {
    margin-left: 8px;
    // border: 1px solid red;
    height: 100%;
    display: flex;
    align-items: center;
    .breadcrumb {
      @media (min-width: 1200px) {
        padding-left: 30px;
      }
      @media (max-width: 1200px) {
        padding-left: 10px;
      }
    }
  }
  .nav-right {
    margin-right: 8px;
    // border: 1px solid red;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .icon-box {
      margin-left: 60px;
      width: 24;
    }
  }
  @media (min-width: 1200px) {
    height: 45px;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    height: 40px;
  }
  @media (max-width: 768px) {
    height: 35px;
  }
}
</style>
