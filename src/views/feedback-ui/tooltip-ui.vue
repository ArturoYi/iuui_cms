<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.TooltipUi')">
        <Space wrap size="large">
          <Tooltip
            :color="color"
            :title="color"
            v-for="color in colors"
            :key="color"
          >
            <Tag :color="color">{{ color }}</Tag>
          </Tooltip></Space
        >
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
      colors: ["pink", "danger", "primary", "success", "gray", "warning"],
    };
  },
};
</script>
<style scoped lang="scss"></style>
