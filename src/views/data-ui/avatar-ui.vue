<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.AvatarUi')">
        <Space wrap size="large">
          <span
            ><Avatar :size="64">IUUI</Avatar>
            <Avatar size="large">IUUI</Avatar>
            <Avatar>IUUI</Avatar>
            <Avatar size="small">IUUI</Avatar></span
          >
          <br />
          <br />
          <span>
            <Avatar shape="square" :size="64">IUUI</Avatar>
            <Avatar shape="square" size="large">IUUI</Avatar>
            <Avatar shape="square">IUUI</Avatar>
            <Avatar shape="square" size="small">IUUI</Avatar></span
          >
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
    return {};
  },
};
</script>
<style scoped lang="scss"></style>
