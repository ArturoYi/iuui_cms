<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.RadioUi')">
        <Radio disabled>disabled</Radio>
        <Radio disabled :value="true">disabled</Radio>
        <br />
        <br />
        <Radio :disabled="disabled" v-model="checked">Radio</Radio>
        <Button @click="checked = !checked" size="small">{{
          checked ? "Checked" : "Uncheck"
        }}</Button>
        <Button @click="disabled = !disabled" size="small">{{
          disabled ? "Enable" : "Disabled"
        }}</Button>
        <br />
        <br />
        <RadioGroup
          :options="types"
          v-model="direction"
          type="button"
          theme="solid"
        />
        <br />
        <br />
        <RadioGroup
          :options="options"
          v-model="cities"
          @change="change"
          :direction="direction"
        />
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
      disabled: false,
      checked: false,
      direction: "horizontal",
      types: [
        { label: "垂直", value: "vertical" },
        { label: "水平", value: "horizontal" },
      ],
      options: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
        { label: "6", value: "6", disabled: true },
      ],
      cities: "1",
    };
  },
  methods: {
    change(item) {
      this.$Message.info(`你選擇了${item.value}`);
    },
  },
};
</script>
<style scoped lang="scss"></style>
