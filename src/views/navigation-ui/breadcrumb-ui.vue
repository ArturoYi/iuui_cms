<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.BreadcrumbUi')">
        <Breadcrumb>
          <BreadcrumbItem to="/breadcrumb-ui" icon="Home">Home</BreadcrumbItem>
          <BreadcrumbItem to="/breadcrumb-ui" icon="Cloud"
            >navigation-ui</BreadcrumbItem
          >
          <BreadcrumbItem to="/breadcrumb-ui" icon="Cloud"
            >breadcrumb-ui</BreadcrumbItem
          >
        </Breadcrumb>
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
