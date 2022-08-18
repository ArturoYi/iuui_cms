<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.SelectUi')">
        <div>
          <RadioGroup :value="size" @change="setSize" icon="Search">
            <RadioButton value="large" label="large" />
            <RadioButton value="default" label="default" />
            <RadioButton value="small" label="small" />
          </RadioGroup>
          <br />
          <br />
          <Select :width="256" :size="size" clearable filterable icon="Search">
            <Option value="1" label="Apple" />
            <Option value="2" label="Orange" />
            <Option value="3" label="Banana" />
            <Option value="4" label="Pear" />
          </Select>
          <br />
          <br />
          <Select
            :width="256"
            :size="size"
            multiple
            v-model="value"
            filterable
            icon="Search"
          >
            <Option value="1" label="Apple" />
            <Option value="2" label="Orange" />
            <Option value="3" label="Banana" />
            <Option value="4" label="Pear" />
          </Select>
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
      size: "default",
      value: ["1", "3"],
    };
  },
  methods: {
    setSize({ value }) {
      this.size = value;
    },
  },
};
</script>
<style scoped lang="scss"></style>
