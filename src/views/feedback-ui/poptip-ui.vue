<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.PoptipUi')">
        <Space wrap size="large">
          <Poptip placement="top-left">
            <Button>TopLeft</Button>
            <template slot="content">
              <p>{{ tip }}</p>
              <p>{{ tip }}</p>
            </template>
          </Poptip>
          <Poptip placement="top">
            <Button>Top</Button>
            <template slot="content">
              <p>{{ tip }}</p>
              <p>{{ tip }}</p>
            </template>
          </Poptip>
          <Poptip placement="top-right">
            <Button>TopRight</Button>
            <template slot="content">
              <p>{{ tip }}</p>
              <p>{{ tip }}</p>
            </template>
          </Poptip>
          <Poptip placement="left-top">
            <Button>LeftTop</Button>
            <template slot="content">
              <p>{{ tip }}</p>
              <p>{{ tip }}</p>
            </template>
          </Poptip>
          <Poptip placement="left">
            <Button>Left</Button>
            <template slot="content">
              <p>{{ tip }}</p>
              <p>{{ tip }}</p>
            </template>
          </Poptip>
          <Poptip placement="left-bottom">
            <Button>LeftBottom</Button>
            <template slot="content">
              <p>{{ tip }}</p>
              <p>{{ tip }}</p>
            </template>
          </Poptip>
          <Poptip placement="right-top">
            <Button>RightTop</Button>
            <template slot="content">
              <p>{{ tip }}</p>
              <p>{{ tip }}</p>
            </template>
          </Poptip>
          <Poptip placement="right">
            <Button>Right</Button>
            <template slot="content">
              <p>{{ tip }}</p>
              <p>{{ tip }}</p>
            </template>
          </Poptip>
          <Poptip placement="right-bottom">
            <Button>RightBottom</Button>
            <template slot="content">
              <p>{{ tip }}</p>
              <p>{{ tip }}</p>
            </template>
          </Poptip>
          <Poptip placement="bottom-left">
            <Button>BottomLeft</Button>
            <template slot="content">
              <p>{{ tip }}</p>
              <p>{{ tip }}</p>
            </template>
          </Poptip>
          <Poptip placement="bottom">
            <Button>Bottom</Button>
            <template slot="content">
              <p>{{ tip }}</p>
              <p>{{ tip }}</p>
            </template>
          </Poptip>
          <Poptip placement="bottom-right">
            <Button>BottomRight</Button>
            <template slot="content">
              <p>{{ tip }}</p>
              <p>{{ tip }}</p>
            </template>
          </Poptip>
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
    return { tip: "明月几时有,把酒问青天!" };
  },
};
</script>
<style scoped lang="scss">
.pop {
  border: 1px solid red;
  width: 200px;
  margin: 0 auto;
}
</style>
