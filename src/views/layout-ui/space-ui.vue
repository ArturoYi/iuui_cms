<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.SpaceUi')">
        <Slider class="slider" v-model="size" :max="50" />
        <Space :size="size" wrap class="warp">
          <Button size="small" v-for="x in 10" :key="x">Wrap</Button>
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
      size: 12,
    };
  },
};
</script>
<style scoped lang="scss">
.slider {
  margin-bottom: 60px;
  width: 95%;
}
.warp {
  width: 56%;
  border-radius: $radius;
  border: 2px solid rgba(90, 90, 90,0.5);
  padding: 20px;
}
</style>
