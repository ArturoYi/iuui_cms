<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.FlexUi')">
        <Slider
          class="slider"
          v-model="h"
          :min="8"
          :marks="{ 8: '8', 16: '16', 24: '24', 32: '32', 40: '40' }"
          :max="40"
          :step="null"
        />
        <Slider
          class="slider"
          v-model="v"
          :min="8"
          :max="40"
          :marks="{ 8: '8', 16: '16', 24: '24', 32: '32', 40: '40' }"
          :step="null"
        />
        <Slider
          class="slider"
          v-model="cols"
          :min="2"
          :marks="{ 2: '2', 3: '3', 4: '4', 6: '6', 8: '8', 12: '12' }"
          :max="12"
          :step="null"
        />
        <Row :gutter="[v, h]">
          <Col :span="24 / cols" v-for="col in cols" :key="col+100"
            ><div class="cols">col-{{ cols }}</div></Col
          >
          <Col :span="24 / cols" v-for="col in cols" :key="col-100"
            ><div class="cols">col-{{ cols }}</div></Col
          >
        </Row>
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
      h: 8,
      v: 8,
      cols: 4,
    };
  },
};
</script>
<style scoped lang="scss">
.slider {
  margin-bottom: 60px;
  width: 95%;
}
.cols {
  padding: 20px;
  line-height: 20px;
  text-align: center;
  @include background("primary");
}
</style>
