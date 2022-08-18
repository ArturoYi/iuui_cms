<template>
  <div>
    <BackTop element="main" />
    <Collapse class="collapseComponent">
      <Card class="card" name="extra" :title="$t('Router.TableUi')">
        <Form
          :labelCol="{ span: 5 }"
          :wrapperCol="{ span: 16 }"
          layout="inline"
        >
          <FormItem label="Size">
            <RadioGroup v-model="size" size="small">
              <RadioButton value="large" label="Large" />
              <RadioButton value="default" label="Default" />
              <RadioButton value="small" label="Small" />
            </RadioGroup>
          </FormItem>
          <FormItem label="Bordered">
            <Switched v-model="bordered" />
          </FormItem>
          <FormItem label="Loading">
            <Switched v-model="loading" />
          </FormItem>
          <FormItem label="Checkbox">
            <Switched v-model="checkbox" @change="setCheckbox" />
          </FormItem>
          <FormItem label="CheckType">
            <RadioGroup v-model="checkType" size="small" @change="setCheckType">
              <RadioButton value="checkbox" label="checkbox" />
              <RadioButton value="radio" label="radio" />
            </RadioGroup>
          </FormItem>
          <FormItem label="Empty">
            <Switched v-model="empty" @change="setEmpty" />
          </FormItem>
        </Form>

        <Table
          :data="data"
          :columns="columns"
          :loading="loading"
          :size="size"
          :bordered="bordered"
        >
          <template v-slot:tags="values">
            <Tag
              v-for="tag in values"
              :key="tag"
              :color="tag == 'Python' ? 'red' : 'orange'"
              >{{ tag }}</Tag
            >
          </template>
          <Icon
            :type="text == 1 ? Moon : Sunny"
            slot="gender"
            slot-scope="text"
            :color="text == 1 ? 'blue' : '#f50cff'"
            size="15"
          />
          <template v-slot:action>
            <a href="javascript:;">Edit</a>
            <a href="javascript:;">Delete</a>
          </template>
        </Table>
      </Card>
      <Panel :title="$t('Card.NoInformationTemporarily')" key="1"> </Panel>
    </Collapse>
    <!--  -->
  </div>
</template>
<script>
const data = [
  {
    key: "0",
    name: "Li Lei",
    gender: 0,
    age: 32,
    address: "Wu Han Guanggu No. 328",
    tags: ["Python", "Java"],
  },
  {
    key: "1",
    name: "Liu Hao",
    gender: 1,
    age: 28,
    address: "Wu Han Hongshan No. 128",
    tags: ["Python", "Java"],
  },
  {
    key: "2",
    name: "Hu Cong",
    gender: 0,
    age: 28,
    address: "Wu Han Nanhu No. 198",
    tags: ["JS", "CSS"],
  },
  {
    key: "3",
    name: "Chuchur",
    gender: 1,
    age: 28,
    address: "Wu Han Nanhu No. 188",
    tags: ["Go", "Python"],
  },
];
export default {
  data() {
    return {
      Moon: "moon",
      Sunny: "sunny",
      size: "default",
      checkbox: true,
      bordered: true,
      showHeader: true,
      showFooter: true,
      loading: false,
      empty: false,
      checkType: "checkbox",
      data: data,
      columns: [
        { type: "selection", checkType: "checkbox", ellipsis: true },
        { title: "Name", key: "name", ellipsis: true },
        { title: "Age", key: "age", sorter: true, ellipsis: true },
        { title: "Gender", key: "gender", ellipsis: true },
        { title: "Address", key: "address", ellipsis: true },
        { title: "Tags", key: "tags", ellipsis: true },
        { title: "Action", key: "action", ellipsis: true },
      ],
    };
  },
  methods: {
    setCheckbox(checked) {
      !checked
        ? this.columns.splice(0, 1)
        : this.columns.unshift({
            type: "selection",
            checkType: this.checkType,
          });
    },
    setEmpty(empty) {
      this.data = empty ? [] : data;
    },
    setCheckType({ value }) {
      if (this.checkbox) {
        this.checkType = value;
        this.columns[0].checkType = value;
      }
    },
  },
};
</script>
