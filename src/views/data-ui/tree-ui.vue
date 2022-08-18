<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.TreeUi')">
        <Space wrap size="large">
          <div>
            <CheckBox v-model="directory" label="Directory" />
            <CheckBox v-model="showLine" label="showLine" />
            <CheckBox v-model="draggable" label="Draggable" />
            <CheckBox v-model="checkable" label="Checkable" />
            <CheckBox v-model="showIcon" label="ShowIcon" />
            <CheckBox v-model="showExtra" label="ShowExtra" />
            <br />
            <br />
            <Tree
              :data="data"
              style="width: 512px"
              @expand="expand"
              :directory="directory"
              :draggable="draggable"
              :checkable="checkable"
              :show-line="showLine"
              :show-icon="showIcon"
              :show-extra="showExtra"
              :selectedKeys="selectedKeys"
              :expandedKeys="expandedKeys"
            >
              <template v-slot:extra="{ node, parent }">
                <Icon :type="Add" @click="(e) => append(e, node)" />
                <Icon
                  :type="Trash"
                  @click="(e) => remove(e, node, parent)"
                  v-if="node.key != '0-0'"
                />
                <Icon :type="IconEdit" @click="(e) => edit(e, node)" />
              </template>
            </Tree>
          </div>
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
      Add: "add",
      Trash: "trash",
      IconEdit: "iconEdit",
      FolderOutline:'FolderOutline',
      FolderOpenOutline:'FolderOpenOutline',
      directory: true,
      showLine: true,
      showIcon: true,
      draggable: true,
      checkable: true,
      showExtra: true,
      expandedKeys: ["0-0", "1-0", "1-1", "1-2"],
      selectedKeys: ["0-0"],
      data: [
        {
          title: "src",
          key: "0-0",
          icon: "FolderOpenOutline",
          children: [
            {
              title: "assets",
              key: "1-0",
              icon: "FolderOpenOutline",
              children: [
                { title: "main.js", icon: "LogoTwitter", disabled: true },
                { title: "test.py", icon: "LogoQq" },
              ],
            },
            {
              title: "pages",
              key: "1-1",
              icon: "FolderOpenOutline",
              children: [
                { title: "index.html", icon: "LogoFeishu" },
                { title: "index.md", icon: "LogoWechat" },
              ],
            },
            {
              title: "app",
              key: "1-2",
              icon: "FolderOpenOutline",
              children: [
                { title: "zen.apk", icon: "LogoAndroid" },
                { title: "zen.ipa", icon: "LogoApple" },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    edit(e, node) {
      e.stopPropagation();
      let pop = prompt("修改节点名称", node.title);
      if (pop != null && pop.trim() != "") {
        node.title = pop;
      }
    },
    append(e, node) {
      e.stopPropagation();
      const newChild = { title: "Append Node", children: [] };
      if (!node.children) {
        node.children = [];
      }
      //展开节点
      if (this.expandedKeys.indexOf(node.key) < 0) {
        this.expandedKeys.push(node.key);
      }
      //添加子节点
      node.children.push(newChild);
    },
    remove(e, node, parent) {
      let { data } = this;
      const loop = (data, key, callback) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].key === key) {
            return callback(data[i], i, data);
          }
          if (data[i].children) {
            loop(data[i].children, key, callback);
          }
        }
      };
      loop(data, node.key, (item, index, arr) => {
        arr.splice(index, 1);
      });
    },
    expand({ expanded, node, expandedKeys }) {
      node.icon = expanded ? this.FolderOpenOutline : this.FolderOutline;
      console.log(node);
    },
  },
};
</script>
<style scoped lang="scss"></style>
