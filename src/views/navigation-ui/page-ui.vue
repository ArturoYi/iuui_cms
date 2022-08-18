<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.PageUi')">
        <Page :current="1" :total="50" />
        <br />
        <Page :current="10" :total="200" />
        <br />
        <Page :current="10" :total="200" show-elevator />
        <br />
        <Page :current="1" :total="50" size="small" show-elevator show-total />
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
<style scoped lang="scss"></style>
