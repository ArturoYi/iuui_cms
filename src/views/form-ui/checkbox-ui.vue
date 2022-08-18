<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.CheckboxUi')">
        <CheckBox disabled>disabled</CheckBox>
        <CheckBox disabled :checked="true">disabled</CheckBox>
        <CheckBox indeterminate disabled>indeterminate</CheckBox>
        <br />
        <br />
        <CheckBox :disabled="disabled" v-model="checked">CheckBox</CheckBox>
        <Button @click="checked = !checked" size="small">{{
          checked ? "Checked" : "Uncheck"
        }}</Button>
        <Button @click="disabled = !disabled" size="small">{{
          disabled ? "Enable" : "Disabled"
        }}</Button>
        <br /><br />
        <RadioGroup :options="types" v-model="direction" type="button" />
        <br />
        <br />
        <CheckboxGroup
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
      cities: ["wuhan"],
    };
  },
  methods: {
    change({ value, label, checked }) {
      this.$Message.info(
        `Value: ${value} , Label:${label} , Checked:${checked}`
      );
    },
  },
};
</script>
<style scoped lang="scss"></style>
