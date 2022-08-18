<template>
  <div>
    <div class="indexOne">
      <div class="item"><div class="card">🍊想回家种田🍊</div></div>
      <div @click="httpClick" class="item">
        <div class="card">{{ content }}</div>
      </div>
      <div @click="clickThere" class="item">
        <div class="card poker">{{ poker }}</div>
      </div>
      <div class="item"><div class="card">🍊我喜欢这个，🍊UI</div></div>
    </div>
    <!-- 组件 -->
    <div class="indexTwo">
      <div class="chardPie">
        <Pie></Pie>
      </div>
      <!--  -->
      <div class="chardPie">
        <Pie></Pie>
      </div>
    </div>
  </div>
</template>
<script>
import Pie from "./components/echart-pie.vue";
export default {
  components: {
    Pie,
  },
  data() {
    return {
      author: "",
      content: "",
      number: [
        "A",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
      ],
      colors: ["♥", "♣", "♦", "♠"],
      poker: "点？",
    };
  },
  methods: {
    clickThere() {
      let a = Math.floor(Math.random() * 14) + 0;
      let b = Math.floor(Math.random() * 4) + 0;
      this.poker = this.colors[b] + "  " + this.number[a];
    },
    httpClick() {
      let xml = new XMLHttpRequest();
      xml.open("GET", "https://saying.api.azwcl.com/saying/get");
      xml.send();
      xml.onreadystatechange = () => {
        if (xml.readyState == 4 && xml.status == 200) {
          this.content = JSON.parse(xml.response).data.content;
          this.author = JSON.parse(xml.response).data.author;
        }
      };
    },
  },
};
</script>
<style scoped lang="scss">
.indexOne {
  display: inline-table;
  width: 100%;
  margin-bottom: 30px;
  .item {
    display: inline-block;
    height: 100px;
    // border: 1px solid red;
    @media (max-width: 765px) {
      width: 100%;
    }
    @media (min-width: 765px) and (max-width: 1200px) {
      width: 50%;
    }
    @media (min-width: 1200px) {
      width: 25%;
    }
    .card {
      float: left;
      border-radius: $radius;
      margin: 3%;
      width: 94%;
      height: 90%;
      padding: 5px;
      text-align: center;
      // @include color("color-primary");
      @include background("background-four");
    }
    .poker {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 50px;
    }
  }
}
.indexTwo {
  height: 100%;
  width: 100%;
  .chardPie {
    height: 380px;
    transition: all 0.3s;
    @media (max-width: 765px) {
      width: 100%;
    }
    @media (min-width: 765px) and (max-width: 1200px) {
      width: 50%;
      float: left;
    }
    @media (min-width: 1200px) {
      width: 50%;
      float: left;
    }
    &:focus,
    &:hover {
      box-shadow: 0px 0px 5px rgb(170, 169, 169);
    }
  }
}
</style>
