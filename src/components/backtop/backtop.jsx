import Icon from "../icon/icon";
import scroll from "../utils/scroll";
export default {
  name: "BackTop",
  directives: { scroll },
  props: {
    height: { type: [String, Number], default: 400 },
    right: [String, Number],
    bottom: [String, Number],
    size:{type:String,default:"26"},
    element: { type: String, default: "" },
  },
  data() {
    return {
      timer: null,
      visible: false,
    };
  },
  watch: {
    visible(value) {
      // console.log(value);
    },
  },
  methods: {
    scroll() {
      let top =
        document.body.scrollTop ||
        document.documentElement.scrollTop ||
        window.scrollY;
      if (this.element != "") {
        top = document.getElementById("main").scrollTop;
      }
      this.visible = top >= this.height;
    },
    handle(e) {
      this.$emit("click", e);
      if (this.timer) {
        clearInterval(this.timer);
      }
      let height = 90;
      this.timer = setInterval(() => {
        var oTop =
          document.body.scrollTop ||
          document.documentElement.scrollTop ||
          window.scrollY;
        if (this.element != "") {
          oTop = document.getElementById("main").scrollTop;
        }
        if (oTop > 0) {
          if (this.element != "") {
            document.getElementById("main").scrollTop = oTop - height;
          } else {
            document.body.scrollTop = document.documentElement.scrollTop =
              oTop - height;
          }
          // window.setWindowScroll(-height)
          this.scroll();
        } else {
          clearInterval(this.timer);
        }
        if (height <= 15) height = 15;
        else height -= 1;
      }, 10);
      //ie 9 不兼容 cancelAnimationFrame
      // cancelAnimationFrame(this.timer);
      // let _this = this
      // this.timer = requestAnimationFrame(function fn() {
      //     var oTop = document.body.scrollTop || document.documentElement.scrollTop;
      //     if (oTop > 0) {
      //         document.body.scrollTop = document.documentElement.scrollTop = oTop - 150;
      //         _this.timer = requestAnimationFrame(fn);
      //     } else {
      //         cancelAnimationFrame(_this.timer);
      //     }
      // });
    },
  },
  render() {
    let child = this.$slots.default;
    if (!child) {
      child = (
        <div class="u-backtop-content">
          <Icon size={this.size} type="arrow-up"/>
        </div>
      );
    }
    const styles = {
      bottom: `${this.bottom}px`,
      left: `${this.right}px`,
    };
    return (
      <transition name="u-backtop-fade">
        <div
          class="u-backtop"
          onClick={this.handle}
          v-show={this.visible}
          v-scroll={this.scroll}
          style={styles}
        >
          {child}
        </div>
      </transition>
    );
  },
};
