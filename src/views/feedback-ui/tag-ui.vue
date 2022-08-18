<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.TagUi')">
        <Space wrap size="large">
          <Tag :color="color" v-for="(color, i) in colors" :key="i">{{
            color
          }}</Tag>
        </Space>
        <br />
        <br />
        <Space wrap size="large">
          <Tag color="blue" closeable v-for="t in tags" :key="t">{{ t }}</Tag>
          <Input
            v-show="showInput"
            @blur="add"
            size="small"
            style="width: 81px"
            ref="input"
            v-model="tag"
          />
          <Button
            @click="show"
            size="small"
            :icon="Bookmark"
            v-show="!showInput"
            >New Tag</Button
          >
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
      colors: [
        "pink",
        "danger",
        "primary",
        "success",
        "gray",
        "warning",
      ],
      Bookmark: "Bookmark",
      showInput: false,
      tag: "",
      tags: ["Apple", "Banana", "Cat", "Dog"],
    };
  },
  methods: {
    show() {
      this.tag = "";
      this.showInput = true;
      this.$nextTick((_) => {
        this.$refs.input.focus();
      });
    },
    add(e) {
      let value = e.target.value.trim();
      if (value && this.tags.indexOf(value) === -1) {
        this.tags.push(value);
      }
      this.showInput = false;
      this.tag = "";
    },
  },
};
</script>
<style lang="scss" scoped></style>
