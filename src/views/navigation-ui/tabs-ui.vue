<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.TabsUi')">
        <Tabs v-model="current" @change="change">
          <TabPane key="1" title="Tab 1"> Content of Tab Pane 1 </TabPane>
          <TabPane key="2" title="Tab 2"> Content of Tab Pane 2 </TabPane>
          <TabPane key="3" title="Tab 3"> Content of Tab Pane 3 </TabPane>
        </Tabs>
        <br />
        <br />
        <Tabs v-model="currentTwo" card>
          <TabPane key="1" title="Tab 1"> Content of Tab Pane 1 </TabPane>
          <TabPane key="2" title="Tab 2"> Content of Tab Pane 2 </TabPane>
          <TabPane key="3" title="Tab 3"> Content of Tab Pane 3 </TabPane>
        </Tabs>
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
      current: "1",
      currentTwo: "1",
    };
  },
  methods: {
    change(key) {
      console.log(key);
    },
  },
};
</script>
<style scoped lang="scss"></style>
