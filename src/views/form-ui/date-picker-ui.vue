<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.DatePickerUi')">
        <DatePicker />
        <DatePicker placeholder="小尺寸/Small" picker-size="small" />
        <br />
        <br />
        <DatePicker mode="month" placeholder="请选择月份" />
        <br />
        <br />
        <DatePicker mode="range" />
        <DatePicker mode="range" picker-size="small" showTime />
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
