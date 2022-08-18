<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.DescriptionsUi')">
        <RadioGroup :options="types" v-model="size" type="button" />
        <br />
        <br />
        <Descriptions :column="column" title="订单信息" bordered :size="size">
          <Button slot="extra" size="small" type="primary">更新信息</Button>
          <DescriptionsItem label="订单编号">20202203302200</DescriptionsItem>
          <DescriptionsItem label="姓名">王大锤</DescriptionsItem>
          <DescriptionsItem label="电话">13888888888</DescriptionsItem>
          <DescriptionsItem label="价格">￥ 199.99</DescriptionsItem>
          <DescriptionsItem label="优惠金额">￥ 0.99</DescriptionsItem>
          <DescriptionsItem label="实付金额">￥ 199.00</DescriptionsItem>
          <DescriptionsItem label="备注信息" :span="1">
            请把货物发至: <br />
            湖北省武汉市洪山区 光谷 188号 <br />
            让快递小哥轻拿轻放<br />
            谢谢！
          </DescriptionsItem>
        </Descriptions>
        <br />
        <br />
        <Descriptions :column="column" title="订单信息" :size="size">
          <Button slot="extra" size="small" type="primary">更新信息</Button>
          <DescriptionsItem label="订单编号">20202203302200</DescriptionsItem>
          <DescriptionsItem label="价格">￥ 199.99</DescriptionsItem>
          <DescriptionsItem label="姓名">王大锤</DescriptionsItem>
          <DescriptionsItem label="电话">13888888888</DescriptionsItem>
          <DescriptionsItem label="收货地址">
            湖北省武汉市洪山区 光谷 188号
          </DescriptionsItem>
        </Descriptions>
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
      types: [
        { label: "Default", value: "default" },
        { label: "Middle", value: "middle" },
        { label: "Small", value: "small" },
      ],
      size: "default",
      column: 3,
    };
  },
  watch: {
    "$store.state.resize": function (newVal) {
      if (newVal <= 760) {
        this.column = 1;
      } else if (newVal <= 900) {
        this.column = 2;
      } else if (newVal > 900) {
        this.column = 3;
      }
    },
  },
  mounted() {
    if (document.body.clientWidth <= 760) {
      this.column = 1;
    }
  },
};
</script>
<style scoped lang="scss"></style>
