<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.MenuUi')">
        <Menu mode="horizontal" v-model="current">
          <MenuItem key="1" icon="Mail">Navigation One</MenuItem>
          <MenuItem key="2" icon="Heart" disabled>Navigation Two</MenuItem>
          <SubMenu key="3" icon="Settings" title="Navigation - Submenu">
            <MenuItem key="3-1">Option 1</MenuItem>
            <MenuItem key="3-2">Option 2</MenuItem>
            <MenuItem key="3-3">Option 1</MenuItem>
            <MenuItem key="3-4">Option 2</MenuItem>
            <SubMenu key="3-5" title="Submenu">
              <MenuItem key="3-5-1">Option 1</MenuItem>
              <MenuItem key="3-5-2">Option 2</MenuItem>
              <MenuItem key="3-5-3">Option 1</MenuItem>
              <MenuItem key="3-5-4">Option 2</MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuItem key="4">
            <a target="_blank">Navigation -Link</a>
          </MenuItem>
        </Menu>
        <div class="buttonBox">
          <div class="menuTest">
            <Menu v-model="currentTwo" :open-keys="openKeys" mode="inline">
              <SubMenu key="sub1" icon="Mail" title="Navigation One">
                <MenuItem key="1-1">Option 1</MenuItem>
                <MenuItem key="1-2">Option 2</MenuItem>
                <MenuItem key="1-3">Option 3</MenuItem>
              </SubMenu>
              <SubMenu key="sub2" icon="Heart" title="Navigation Two">
                <MenuItem key="2-1">Option 4</MenuItem>
                <MenuItem key="2-2">Option 5</MenuItem>
                <SubMenu key="sub2-1" title="SubMenu">
                  <MenuItem key="2-3">Option 6</MenuItem>
                  <MenuItem key="2-4">Option 7</MenuItem>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub3" icon="Settings" title="Navigation Three">
                <MenuItem key="3-1">Option 8</MenuItem>
                <MenuItem key="3-2">Option 9</MenuItem>
                <MenuItem key="3-3">Option 10</MenuItem>
              </SubMenu>
            </Menu>
          </div>
          <div class="menuTest">
            <Button @click="change" icon="Menu" type="primary"></Button>
            <br />

            <!--:open-keys="openKeysThere" -->
            <Menu
              v-model="currentThere"
              theme="dark"
              :inline-collapsed="!collapsed"
              mode="inline"
            >
              <MenuItem key="1-1" icon="Mail">Option 1</MenuItem>
              <MenuItem key="1-2" icon="Grid"><span>Option 2</span></MenuItem>
              <SubMenu key="sub2" icon="Heart" title="Navigation Two">
                <MenuItem key="2-1">Option 5</MenuItem>
                <MenuItem key="2-2">Option 6</MenuItem>
                <SubMenu title="SubMenu" key="sub2-1">
                  <MenuItem key="2-3">Option 7</MenuItem>
                  <MenuItem key="2-4">Option 8</MenuItem>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub3" icon="Settings" title="Navigation Three">
                <MenuItem key="3-1">Option 9</MenuItem>
                <MenuItem key="3-2">Option 10</MenuItem>
                <MenuItem key="3-3">Option 11</MenuItem>
                <MenuItem key="3-4">Option 12</MenuItem>
              </SubMenu>
            </Menu>
          </div>
        </div>
      </Card>
      <Panel :title="$t('Card.NoInformationTemporarily')" key="1"> </Panel>
    </Collapse>
    <!--  -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ["1"],
      currentTwo: ["1-1"],
      currentThere: ["1-1"],
      openKeys: ["sub1"],
      // openKeysThere: ["sub2"],
      collapsed: false,
    };
  },
  methods: {
    change() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>
<style scoped lang="scss">
.buttonBox {
  .menuTest {
    margin-top: 20px;
    width: 200px;
    margin-bottom: 20px;
  }
}
</style>
