<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Card.BaseButton')">
        <Space wrap size="large">
          <Button type="primary">Primary</Button>
          <Button type="danger">Danger</Button>
          <Button type="success">Success</Button>
          <Button type="warning">Warning</Button>
          <Button>Default</Button>
          <Button type="dashed">dashed</Button>
          <Button type="link">Link</Button>
        </Space>
      </Card>
      <Panel :title="$t('Card.NoInformationTemporarily')" key="1"> </Panel>
    </Collapse>
    <!--  -->
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Card.BorderButton')">
        <Space wrap size="large">
          <Button type="primary" theme="solid">Primary</Button>
          <Button type="danger" theme="solid">Danger</Button>
          <Button type="warning" theme="solid">Warning</Button>
          <Button type="success" theme="solid">Success</Button>
          <Button theme="solid">Default</Button>
          <Button type="dashed" theme="solid">Dashed</Button>
        </Space>
      </Card>
      <Panel :title="$t('Card.NoInformationTemporarily')" key="1"> </Panel>
    </Collapse>
    <!--  -->
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Card.LightButton')">
        <Space wrap size="large">
          <Button type="primary" theme="light">Primary</Button>
          <Button type="danger" theme="light">Danger</Button>
          <Button type="warning" theme="light">Warning</Button>
          <Button theme="light">Default</Button>
          <Button theme="light">Default</Button>
          <Button type="primary" theme="light" icon="accessibility-outline" />
          <Button type="danger" theme="light" icon="accessibility-outline" />
          <Button type="warning" theme="light" icon="accessibility-outline" />
          <Button theme="light" icon="accessibility-outline" />
          <Button
            type="primary"
            theme="light"
            icon="accessibility-outline"
            shape="circle"
          />
          <Button
            type="danger"
            theme="light"
            icon="accessibility-outline"
            shape="circle"
          />
          <Button
            type="warning"
            theme="light"
            icon="accessibility-outline"
            shape="circle"
          />
          <Button theme="light" icon="accessibility-outline" shape="circle" />
        </Space>
      </Card>
      <Panel :title="$t('Card.NoInformationTemporarily')" key="1"> </Panel>
    </Collapse>
    <!--  -->
    <Collapse class="collapseComponent">
      <Card
        class="card"
        name="extra"
        :title="$t('Card.BorderlessNoBackgroundButton')"
      >
        <Space wrap size="large">
          <Button type="primary" theme="normal">主要</Button>
          <Button type="danger" theme="normal">危险</Button>
          <Button type="warning" theme="normal">警告</Button>
          <Button theme="normal">默认</Button>
          <Button type="primary" theme="normal" icon="accessibility-outline" />
          <Button type="danger" theme="normal" icon="accessibility-outline" />
          <Button type="warning" theme="normal" icon="accessibility-outline" />
          <Button theme="normal" icon="accessibility-outline" />
          <Button
            type="primary"
            theme="normal"
            icon="accessibility-outline"
            shape="circle"
          />
          <Button
            type="danger"
            theme="normal"
            icon="accessibility-outline"
            shape="circle"
          />
          <Button
            type="warning"
            theme="normal"
            icon="accessibility-outline"
            shape="circle"
          />
          <Button theme="normal" icon="accessibility-outline" shape="circle" />
        </Space>
      </Card>
      <Panel :title="$t('Card.NoInformationTemporarily')" key="1"> </Panel>
    </Collapse>
    <!--  -->
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Card.IconButton')">
        <Space wrap size="large">
          <Button type="primary" icon="Search" shape="circle"></Button>
          <Button type="primary" icon="Search">搜索</Button>
          <Button icon="Search" shape="circle"></Button>
          <Button icon="Search">搜索</Button>
          <Button type="dashed" icon="Search" shape="circle"></Button>
          <Button type="dashed" icon="Search">搜索</Button>
          <Button type="primary"
            >更多
            <Icon type="chevron-down" />
          </Button>
        </Space>
      </Card>
      <Panel :title="$t('Card.NoInformationTemporarily')" key="1"> </Panel>
    </Collapse>
    <!--  -->
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Card.DisableButton')">
        <Space wrap size="large">
          <Button disabled type="primary">disabled</Button>
          <Button type="danger" disabled>Danger</Button>
          <Button disabled>Default</Button>
          <Button disabled type="dashed">Dashed</Button>
          <Button disabled type="link">Link</Button>
        </Space>
      </Card>
      <Panel :title="$t('Card.NoInformationTemporarily')" key="1"> </Panel>
    </Collapse>
    <!--  -->
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Card.LoadingButton')">
        <Space wrap size="large">
          <Button icon="Search" loading shape="circle" />
          <Button type="primary" :loading="btnLoading">加载中</Button>
        </Space>
      </Card>
      <Panel :title="$t('Card.NoInformationTemporarily')" key="1"> </Panel>
    </Collapse>
    <!--  -->
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Card.ButtonSize')">
        <RadioGroup class="btnRadioGroup" v-model="btnSize">
          <RadioButton value="large" label="Large" />
          <RadioButton value="default" label="Default" />
          <RadioButton value="small" label="Small" />
        </RadioGroup>
        <br />
        <Space wrap size="large">
          <Button type="primary" :size="btnSize">Primary</Button>
          <Button :size="btnSize">Default</Button>
          <Button type="dashed" :size="btnSize">Dashed</Button>
          <Button type="link" :size="btnSize">Link</Button>

          <Button type="primary" :size="btnSize" icon="CloudDownload"></Button>
          <Button
            type="primary"
            shape="circle"
            :size="btnSize"
            icon="CloudDownload"
          ></Button>
          <Button
            type="primary"
            shape="circle"
            :size="btnSize"
            icon="CloudDownload"
            >Download</Button
          >
          <Button type="primary" :size="btnSize" icon="CloudDownload"
            >Download</Button
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
      btnLoading: true,
      btnSize: "default",
    };
  },
};
</script>
<style scoped lang="scss"></style>
