<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.SwitchUi')">
        <div>
          <Switched true-text="Yes" false-text="No" />
          <br /><br />
          <Switched true-text="｜" false-text="〇" />
          <br /><br />
          <Switched true-text="｜" false-text="〇" checked />
          <br /><br />
          <Switched true-text="On" false-text="Off" />
          <br />
          <br />
          <Switched>
            <Icon type="Checkmark" slot="checked" />
            <Icon type="Close" slot="unchecked" />
          </Switched>
          <Switched>
            <Icon type="LogoApple" slot="checked" />
            <Icon type="LogoMicrosoft" slot="unchecked" />
          </Switched>
          <br /><br />
          <Switched>
            <Icon type="Airplane" slot="unchecked" />
            <Icon type="Wifi" slot="checked" />
          </Switched>
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
      checked: false,
    };
  },
};
</script>
<style scoped lang="scss"></style>
