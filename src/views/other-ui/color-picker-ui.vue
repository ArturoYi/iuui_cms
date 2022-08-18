<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.ColorPickerUi')">
        <Space wrap size="large">
          <Form>
            <FormItem label="Default">
              <ColorPicker showMode v-model="color1" />
            </FormItem>
            <FormItem label="Rgba">
              <ColorPicker showMode v-model="color2" mode="rgba" />
            </FormItem>
            <FormItem label="Hsla">
              <ColorPicker showMode v-model="color3" mode="hsla" />
            </FormItem>
          </Form>
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
    return { color1: "#f44336", color2: "#9c27b0", color3: "#03a9f4" };
  },
};
</script>
<style lang="sass" scoped></style>
