<template>
  <div class="setting">
    <Icon type="settings" @click="show = !show" size="26"></Icon>
    <Drawer
      v-model="show"
      :closable="false"
      width="70%"
      :footer="null"
      :title="null"
    >
      <Menu :accordion="true" mode="inline">
        <SubMenu
          key="sub1"
          icon="language"
          :title="$t(`${'Language.language'}`)"
        >
          <MenuItem
            @click.native="clickLanguage(item)"
            v-for="item in languageList"
            :key="item"
            :title="$t(`${'Language.' + item}`)"
          ></MenuItem>
        </SubMenu>
        <SubMenu key="sub2" :icon="Heart" :title="$t(`${'Theme.theme'}`)">
          <MenuItem
            @click.native="clickTheme(item)"
            v-for="item in themeList"
            :key="item"
            :title="$t(`${'Theme.' + item}`)"
          ></MenuItem>
        </SubMenu>
      </Menu>
    </Drawer>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      show: false,
      Heart: "heart",
      Settings: "Settings",
      themeList: ["light", "dark"],
      languageList: [],
    };
  },
  created() {
    this.languageList = this.$i18n.availableLocales;
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
  },
};
</script>
<style lang="scss">
.setting{
  margin-right: 8px;
}
</style>
