<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.AlertUi')">
          <div>
            <Alert type="success" showIcon closable>Success Text</Alert>
            <Alert type="info" showIcon closable>Info Text</Alert>
            <Alert type="warning" showIcon closable>Warning Text</Alert>
            <Alert type="error" showIcon closable>Error Text</Alert>
            <Alert
              type="success"
              showIcon
              closable
              message="Success Tip"
              description="Congratulations, the operation is successful."
            />
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
    return {};
  },
};
</script>
<style scoped lang="scss"></style>
