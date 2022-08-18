<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.ImageUi')">
        <Space wrap size="large">
          <ImageGroup>
            <UImage
              :width="120"
              src="https://s3.bmp.ovh/imgs/2022/08/15/e7e072f04a54d5e6.png"
            />
            <UImage
              :width="120"
              src="https://s3.bmp.ovh/imgs/2022/08/15/e7e072f04a54d5e6.png"
            />
          </ImageGroup>
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
    return {};
  },
};
</script>
<style scoped lang="scss"></style>
