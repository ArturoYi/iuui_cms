<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.DividerUi')">
        <p>
          明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。
        </p>
        <Divider orientation="left" text="苏轼" />
        <p>床前明月光，疑是地上霜，举头望明月，低头思故乡！</p>
        <Divider>李白</Divider>
        <p>
          国破山河在，城春草木深。 感时花溅泪，恨别鸟惊心。
          烽火连三月，家书抵万金。 白头搔更短，浑欲不胜簪。
        </p>
        <Divider orientation="right" text="杜甫" />
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
p {
  line-height: 1.5;
}
</style>
