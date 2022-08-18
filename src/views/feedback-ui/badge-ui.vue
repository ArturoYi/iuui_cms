<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.BadgeUi')">
        <Space wrap size="large">
          <Badge :count="99">
            <div class="box"></div>
          </Badge>
          <Badge :count="100">
            <div class="box"></div>
          </Badge>
          <Badge :count="20" :max-count="10">
            <div class="box"></div>
          </Badge>
          <Badge :count="1000" :max-count="999">
            <div class="box"></div>
          </Badge>
          <Badge count="hot">
            <div class="box"></div>
          </Badge>
          <Badge count="new">
            <div class="box"></div>
          </Badge>
          <Badge :dot="show">
            <div class="box"></div>
          </Badge>
          <Badge :dot="show">
            <Icon :type="NotificationsOutline" />
          </Badge>
          <Badge :dot="show">
            <a>我是一个连接</a>
          </Badge>
          <Switched @change="show = !show" />
          <br />
          <br />
          <Badge :count="count" :max-count="20">
            <div class="box"></div>
          </Badge>
          <ButtonGroup circle>
            <Button @click="count--">-</Button>
            <Button @click="count++">+</Button>
          </ButtonGroup>
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
      NotificationsOutline: "NotificationsOutline",
      show: true,
      count: 15,
    };
  },
};
</script>
<style scoped lang="scss">
.box {
  width: 50px;
  height: 50px;
  background: #7f7f7f55;
  border-radius: 5px;
}
</style>
