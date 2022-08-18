<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.UploadUi')">
        <Upload
          action="https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2"
          name="file"
          :headers="headers"
          @change="handleChange"
          multiple
          accept="image/*"
        >
          <Button icon="image">Upload Image</Button>
        </Upload>
        <br />
        <Upload
          action="https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2"
          name="file"
          :headers="headers"
          @change="handleChange"
          multiple
          accept="video/*"
        >
          <Button icon="Videocam">Upload Video</Button>
        </Upload>
        <br />
        <Upload
          action="https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2"
          name="file"
          :headers="headers"
          @change="handleChange"
          multiple
          accept=".pdf,.png,.jpeg"
        >
          <Button icon="CloudUpload">Upload PDF,PNG,JPEG</Button>
        </Upload>
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
      headers: {
        authorization: "here is token",
      },
    };
  },
  methods: {
    handleChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "success") {
        this.$Message.success(`${info.file.filename} uploaded successfully`);
      } else if (info.file.status === "error") {
        this.$Message.error(`${info.file.filename} upload failed.`);
      }
    },
  },
};
</script>
<style scoped lang="scss"></style>
