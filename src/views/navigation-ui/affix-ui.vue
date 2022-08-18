<template>
  <div class="affixBox">
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.AffixUi')">
        <Affix :target="getElement" @change="change" :offsetTop="100">
          <Button type="primary">往下滑吸顶</Button>
        </Affix>
      </Card>
      <Panel :title="$t('Card.NoInformationTemporarily')" key="1"> </Panel>
    </Collapse>
    <!--  -->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    change(value) {
      this.$Message.info(value ? "固定" : "取消固定");
    },
    getElement() {
      return document.getElementById("main");
    },
  },
};
</script>
<style scoped lang="scss">
.affixBox {
  height: 2000px;
}
</style>
