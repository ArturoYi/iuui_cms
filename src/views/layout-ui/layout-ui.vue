<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.LayoutUi')">
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
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
};
</script>
<style scoped lang="scss">
.u-layout {
  text-align: center;
}
.u-layout-footer,
.u-layout-header {
  @include background-color("primary-60");
  height: 64px;
  line-height: 64px;
}
.u-layout-content {
  min-height: 120px;
  line-height: 120px;
  @include background-color("primary-30");
}
.u-layout-sider {
  line-height: 120px;
  @include background-color("primary-10");
  width: 200px;
}
</style>
