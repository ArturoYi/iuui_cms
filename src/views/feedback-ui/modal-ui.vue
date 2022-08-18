<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.ModalUi')">
        <Space wrap size="large">
          <Button @click="show1 = true" type="primary">可以拖动</Button>
          <Button @click="show2 = true" type="primary">居中显示</Button>
          <Button @click="show3 = true" type="primary">顶部 200px</Button>
          <Button @click="show4 = true" type="primary">最大化</Button>
          <Button @click="show5 = true" type="primary">没有蒙层</Button>
          <Button @click="show6 = true" type="primary">没有页脚</Button>
          <Button @click="Async()">异步关闭</Button>
          <Modal
            title="Draggable"
            v-model="show1"
            draggable
            @ok="show1 = false"
          >
            {{ text }}
          </Modal>

          <Modal title="Centered" v-model="show2" centered @ok="show2 = false">
            {{ text }}
          </Modal>

          <Modal
            title="Top 200px"
            v-model="show3"
            :top="200"
            @ok="show3 = false"
          >
            {{ text }}
          </Modal>

          <Modal
            title="Maximized"
            v-model="show4"
            maximized
            @ok="show4 = false"
          >
            {{ text }}
          </Modal>

          <Modal
            title="Click mask dont't be close"
            v-model="show5"
            :mask="false"
            :mask-closable="false"
            @ok="show5 = false"
          >
            {{ text }}
          </Modal>

          <Modal
            title="No footer"
            v-model="show6"
            :footer="null"
            @ok="show6 = false"
          >
            {{ text }}
          </Modal>
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
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      text: "wowowoowowo",
    };
  },
  methods: {
    Async() {
      this.$Modal.confirm({
        title: "您确认要这么做吗",
        content: "此操作不可逆转，谨慎！！！",
        onOk: () => {
          return new Promise((resolve, reject) => {
            setTimeout(resolve, 2000);
          });
        },
        onCancel: () => {
          //用户点了取消 应该中断 异步执行
          clearTimeout(this.timer);
        },
      });
    },
  },
};
</script>
<style scoped lang="scss"></style>
