<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.InputUi')">
        <div style="width: 256px">
          <Input
            placeholder="请输入验证码"
            icon="ShieldCheckmark"
            :maxlength="8"
          >
            <template slot="suffix">
              <Button
                size="small"
                type="primary"
                v-if="time == 60"
                @click="sendCode"
                >获取验证码</Button
              >
              <span v-else>{{ time }}(s)</span>
            </template>
          </Input>
          <br /><br />
          <Input placeholder="请填写你要喝的Coffee" icon="Gift">
            <template slot="suffix">
              <Tooltip title="此处如果不知道怎么填，请咨询管理员">
                <Icon type="InformationCircleOutline" color="orange" />
              </Tooltip>
            </template>
          </Input>
          <br /><br />
          <Input placeholder="请输入手机号码">
            <Select
              :bordered="false"
              style="width: 80px"
              slot="prefix"
              value="0"
            >
              <Option value="0" label="+86" />
              <Option value="1" label="+52" />
            </Select>
          </Input>
          <br /><br />
          <Input placeholder="请输入金额" suffix="元" prefix="$" /><br /><br />
          <Input
            placeholder="请输入域名"
            suffix=".com"
            prefix="https://"
          /><br /><br />
          <Input placeholder="请输入金额" suffix=".00" /><br /><br />
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
    return {
      time: 60,
      timer: null,
    };
  },
  beforDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    sendCode() {
      this.time = 59;
      this.$Message.success("验证码发送成功，请注意查收");
      this.timer = setInterval((e) => {
        if (this.time < 0) {
          clearInterval(this.timer);
          this.time = 60;
        } else {
          this.time--;
        }
      }, 1000);
    },
  },
};
</script>
<style scoped lang="scss"></style>
