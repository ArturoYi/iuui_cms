<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.MessageUi')">
        <Space wrap size="large">
          <Button @click="warning" type="warning">Warning </Button>
          <Button @click="success" type="success">Success </Button>
          <Button @click="error" type="danger">Error</Button>
          <br />
          <br />
          <Button @click="config">10秒后关闭</Button>
          <Button @click="config2" type="primary">5秒后关闭</Button>
          <Button @click="config3" type="primary">手动关闭</Button>
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
  methods: {
    warning() {
      this.$Message.warning("警告提示");
    },
    success() {
      this.$Message.success("成功提示");
    },
    error() {
      this.$Message.error("错误提示");
    },
    config() {
      this.$Message.success("10秒后关闭", 10);
    },
    config2() {
      this.$Message.config({
        type: "info",
        duration: 5,
        content: "5秒后关闭",
      });
    },
    config3() {
      this.$Message.config({
        type: "info",
        duration: 0,
        closable: true,
        content: "手动关闭",
        close: () => {
          this.$Message.success("我是回调");
        },
      });
    },
  },
};
</script>
<style scoped lang="scss"></style>
