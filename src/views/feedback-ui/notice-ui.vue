<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.NoticeUi')">
        <Space wrap size="large">
          <Button @click="notice('info')" type="primary">消息提示 </Button>
          <Button @click="notice('warning')" type="warning">警告提示 </Button>
          <Button @click="notice('success')" type="success">成功提示 </Button>
          <Button @click="notice('error')" type="danger">错误提示 </Button>
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
    notice(type) {
      this.$Notice[type]({
        title: "通知的标题",
        content: "通知的描述",
        duration: 5,
      });
    },
    config() {
      this.$Notice.open({
        type: "success",
        duration: 10,
        title: "温馨提示",
        content: "10秒后关闭",
      });
    },
    config2() {
      this.$Notice.open({
        type: "info",
        duration: 5,
        title: "温馨提示",
        content: "5秒后关闭",
      });
    },
    config3() {
      this.$Notice.open({
        type: "info",
        duration: 0,
        title: "温馨提示",
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
