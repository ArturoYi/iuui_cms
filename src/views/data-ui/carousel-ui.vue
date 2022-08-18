<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.CarouselUi')">
        <div class="Carousel">
          <Carousel autoplay>
            <CarouselItem>1121</CarouselItem>
            <CarouselItem>22323</CarouselItem>
            <CarouselItem>33434</CarouselItem>
            <CarouselItem>44545</CarouselItem>
          </Carousel>
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
    return {};
  },
};
</script>
<style scoped lang="scss">
.Carousel {
  margin: 0 auto;
  border: 1px solid rgb(165, 165, 165);
  border-radius: $radius;
  padding: 10px;
  height: 300px;
  max-width: 800px;
}
</style>
