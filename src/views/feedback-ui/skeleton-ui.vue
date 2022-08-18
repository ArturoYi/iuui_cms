<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.SkeletonUi')">
        <Space :size="15">
          <CheckBox v-model="animated" label="Animated" />
          <CheckBox v-model="block" label="Button block" />
          Size: <RadioGroup :options="sizes" v-model="size" type="button" />
        </Space>
        <br />
        <br />
        <Space :size="15">
          Button Shape:
          <RadioGroup :options="btnShapes" v-model="btnShape" type="button" />
          Avatar Shape:
          <RadioGroup
            :options="avatarShapes"
            v-model="avatarShape"
            type="button"
          />
        </Space>
        <br />
        <br />
        <Space :size="15" style="width: 300px">
          Image radius: <Slider v-model="radius" />
        </Space>
        <Space :size="15" style="width: 300px">
          Image Size: <Slider v-model="imgSize" range :min="80" :max="320" />
        </Space>
        <br />
        <br />
        <Space>
          <SkeletonButton :animated="animated" :size="size" :shape="btnShape" />
          <SkeletonAvatar
            :animated="animated"
            :size="size"
            :shape="avatarShape"
          />
          <SkeletonText
            :animated="animated"
            :size="size"
            style="width: 200px"
          />
        </Space>
        <br />
        <br />
        <SkeletonButton
          :animated="animated"
          :size="size"
          :shape="btnShape"
          :block="block"
        />
        <br />
        <br />
        <SkeletonImage :animated="animated" :radius="radius" :size="imgSize" />
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
      sizes: [
        { label: "Small", value: "small" },
        { label: "Default", value: "default" },
        { label: "Large", value: "large" },
      ],
      btnShapes: [
        { label: "Round", value: "round" },
        { label: "Default", value: "default" },
        { label: "Circle", value: "circle" },
      ],
      avatarShapes: [
        { label: "Square", value: "square" },
        { label: "Circle", value: "circle" },
      ],
      imgSize: [96, 96],
      animated: true,
      size: "default",
      block: false,
      radius: 10,
      avatarShape: "square",
      btnShape: "default",
      imgShape: "default",
    };
  },
};
</script>
<style scoped lang="scss"></style>
