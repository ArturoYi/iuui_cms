<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.DrawerUi')">
        <Space wrap size="large">
          <RadioGroup v-model="placement">
            <Radio label="left" value="left" />
            <Radio label="top" value="top" />
            <Radio label="right" value="right" />
            <Radio label="bottom" value="bottom" />
          </RadioGroup>
          <Button @click="show = true">Open</Button>
          <Drawer
            v-model="show"
            height="300"
            :placement="placement"
            title="What's your name? "
            cancelText="Cancel"
            okText="Ok"
            >My name is chuchur.</Drawer
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
    return { show: false, placement: "left" };
  },
};
</script>
<style scoped lang="scss"></style>
