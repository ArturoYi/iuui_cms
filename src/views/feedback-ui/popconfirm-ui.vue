<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.PopconfirmUi')">
        <Space wrap size="large">
          <Popconfirm :title="title" placement="top-left">
            <Button>TL</Button>
          </Popconfirm>
          <Popconfirm :title="title" placement="top">
            <Button>Top</Button>
          </Popconfirm>
          <Popconfirm :title="title" placement="top-right">
            <Button>TR</Button>
          </Popconfirm>
          <Popconfirm :title="title" placement="left-top">
            <Button>LT</Button>
          </Popconfirm>
          <Popconfirm :title="title" placement="left">
            <Button>Left</Button>
          </Popconfirm>
          <Popconfirm :title="title" placement="left-bottom">
            <Button>LB</Button>
          </Popconfirm>
          <Popconfirm :title="title" placement="right-top">
            <Button>RT</Button>
          </Popconfirm>
          <Popconfirm :title="title" placement="right">
            <Button>Right</Button>
          </Popconfirm>
          <Popconfirm :title="title" placement="right-bottom">
            <Button>RB</Button>
          </Popconfirm>
          <Popconfirm :title="title" placement="bottom-left">
            <Button>BL</Button>
          </Popconfirm>
          <Popconfirm :title="title" placement="bottom">
            <Button>Bottom</Button>
          </Popconfirm>
          <Popconfirm :title="title" placement="bottom-right">
            <Button>BR</Button>
          </Popconfirm>
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
    return { title: "Are you sure to delete this task?" };
  },
};
</script>
<style scoped lang="scss">
.pop {
  border: 1px solid red;
  width: 200px;
  margin: 0 auto;
}
</style>
