<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.DropdownUi')">
        <Space wrap :size="[50, 50]">
          <Dropdown>
            <Button type="primary">
              滑动展开 <Icon type="ChevronDown" />
            </Button>
            <Menu slot="content">
              <MenuItem>
                <a href="javascript:;">1st menu item</a>
              </MenuItem>
              <MenuItem>
                <a href="javascript:;">2nd menu item</a>
              </MenuItem>
              <MenuItem>
                <a href="javascript:;">3rd menu item</a>
              </MenuItem>
            </Menu>
          </Dropdown>
          <!--  -->
          <Dropdown trigger="click">
            <Button type="primary">
              点击展开 <Icon type="ChevronDown" />
            </Button>
            <Menu slot="content">
              <MenuItem>
                <a href="javascript:;">1st menu item</a>
              </MenuItem>
              <MenuItem>
                <a href="javascript:;">2nd menu item</a>
              </MenuItem>
              <MenuItem>
                <a href="javascript:;">3rd menu item</a>
              </MenuItem>
            </Menu>
          </Dropdown>
          <!--  -->
          <Dropdown>
            <Button type="primary">
              多级菜单 <Icon type="ChevronDown" />
            </Button>
            <Menu slot="content">
              <MenuItem>1st menu item</MenuItem>
              <MenuItem>2nd menu item</MenuItem>
              <SubMenu key="test" title="sub menu">
                <MenuItem>3rd menu item</MenuItem>
                <MenuItem>4th menu item</MenuItem>
              </SubMenu>
              <SubMenu title="disabled sub menu" disabled>
                <MenuItem>5d menu item</MenuItem>
                <MenuItem>6th menu item</MenuItem>
              </SubMenu>
            </Menu>
          </Dropdown>
          <!--  -->
          <Dropdown
            v-for="(placement, index) in placements"
            :key="index"
            :placement="placement"
            show-placement-arrow
          >
            <Button type="primary"
              >{{ getPlacements(placement) }}<Icon type="ChevronDown"
            /></Button>
            <Menu slot="content">
              <MenuItem>
                <a target="_blank" rel="noopener noreferrer">1st menu item</a>
              </MenuItem>
              <MenuItem>
                <a target="_blank" rel="noopener noreferrer">2nd menu item</a>
              </MenuItem>
              <MenuItem>
                <a target="_blank" rel="noopener noreferrer">3rd menu item</a>
              </MenuItem>
            </Menu>
          </Dropdown>
        </Space>
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
      placements: [
        "bottom-left",
        "bottom",
        "bottom-right",
        "top-left",
        "top",
        "top-right",
      ],
    };
  },
  methods: {
    getPlacements(e) {
      switch (e) {
        case "bottom-left":
          return "左下展开";
        case "bottom":
          return "下方展开";
        case "bottom-right":
          return "右下展开";
        case "top-left":
          return "左上展开";
        case "top":
          return "上方展开";
        case "top-right":
          return "右上展开";
      }
    },
  },
};
</script>
<style scoped lang="scss"></style>
