<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.SpinUi')">
        <div>
          <Spin v-model="spinning" :mode="mode">
            <div class="deme-spin-container">
              床前明月光，疑是地上霜。<br />
              举头望明月，低头思故乡。
            </div>
          </Spin>
          <br />
          <br />
          Loading state：<Switched v-model="spinning" @change="change" />
          <br />
          <br />
          <RadioGroup v-model="mode" @change="changeMode">
            <Radio value="bounce" label="Bounce" />
            <Radio value="flip" label="Flip" />
          </RadioGroup>
          <br />
          <br />
          <RadioGroup v-model="mode" @change="changeMode">
            <Radio value="rotate" label="Rotate" />
            <Radio value="zoom" label="Zoom" />
          </RadioGroup>
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
      spinning: false,
      mode: "bounce",
    };
  },
  methods: {
    change(checked) {
      this.spinning = checked;
    },
    changeMode({ value }) {
      this.mode = value;
    },
  },
};
</script>
<style scoped lang="scss">
.deme-spin-container {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  line-height: 3;
}
</style>
