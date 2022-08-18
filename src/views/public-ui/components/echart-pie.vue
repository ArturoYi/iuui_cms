<template>
  <div ref="Chart" id="pie"></div>
</template>
<script>
//全部引入
var echarts = require("echarts");
export default {
  data() {
    return {
      chart: null,
      options: {},
    };
  },
  watch: {
    options: {
      handler(options) {
        console.log("深度监听到变化");
      },
      deep: true,
    },
    "$store.state.resize": function (newVal) {
      this.$nextTick(() => {
        this.chart.resize();
      });
    },
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el);
      this.setOptions();
    },
    setOptions() {
      this.chart.setOption({
        // title: {
        //   text: "ECharts 入门示例",
        //   subtext: "Fake Data",
        //   left: "center",
        // },
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    },
  },
};
</script>
<style scoped lang="scss">
#pie {
  width: 100%;
  height: 100%;
}
</style>
