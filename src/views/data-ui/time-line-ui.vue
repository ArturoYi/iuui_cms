<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.TimeLineUi')">
        <Space wrap size="large">
          <div class="TimeLine">
            <RadioGroup v-model="mode">
              <Radio label="left" value="left" />
              <Radio label="center" value="center" />
              <Radio label="alternate" value="alternate" />
              <Radio label="right" value="right" />
            </RadioGroup>
            <br />
            <br />
            <TimeLine :mode="mode">
              <TimeLineItem
                color="green"
                time="2020-11-03"
                extra="更多的辅助细节"
                >优化成吨的改善和体验</TimeLineItem
              >
              <TimeLineItem color="orange" time="2020-11-02">
                <p>新增一些很友好的功能</p>
                <p>新增一些很友好的功能</p>
                <p>新增一些很友好的功能</p>
                <template slot="extra">更多的辅助细节</template>
              </TimeLineItem>
              <TimeLineItem
                :icon="Ribbon"
                color="#3593ff"
                time="2020-11-01"
                extra="更多的辅助细节"
                >发布2.0版本</TimeLineItem
              >
              <TimeLineItem
                :icon="Build"
                color="red"
                time="2020-10-03"
                extra="更多的辅助细节"
                >修复bug</TimeLineItem
              >
              <TimeLineItem time="2020-10-01" extra="更多的辅助细节"
                >发布1.0版本</TimeLineItem
              >
            </TimeLine>
          </div>
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
      Ribbon: "ribbon",
      Build: "build",
      mode: "left",
    };
  },
};
</script>
<style scoped lang="scss">
.TimeLine {
  margin: 0 auto;
  min-width: 600px;
  width: 80%;
  padding: 10px;
  border: 1px solid rgb(206, 206, 206);
}
</style>
