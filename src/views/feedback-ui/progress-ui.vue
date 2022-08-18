<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.ProgressUi')">
        <Space wrap>
          <Progress type="circle" :percent="50" />
          <Progress type="circle" :percent="70" status="exception" />
          <Progress type="circle" :percent="100" />
          <Progress type="circle" :percent="50">
            <div slot="format" class="demo-progress">
              <h2>13389</h2>
              <span>今日步数</span>
            </div>
          </Progress>
        </Space>
        <br />
        <br />
        <Progress :percent="30" /><br />
        <br />
        <Progress :percent="50" status="active" /><br />
        <br />
        <Progress :percent="70" status="exception" /><br />
        <br />
        <Progress :percent="100" /><br />
        <br />
        <Progress :percent="50" :showInfo="false" /><br />
        <br />
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
<style lang="scss" scoped></style>
