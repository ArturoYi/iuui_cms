import src from "./lib/sprite.svg";
// 低級封裝，本地資源
export default {
  name: "Icon",
  props: {
    type: String,
    size: [String, Number],
    color: {
      type: String,
    },
    spin: Boolean,
    strokWidth: [String, Number],
  },
  methods: {
    // 驼峰命名转换
    getKebabCase(str) {
      if (typeof str != "string") {
        return str;
      }
      let temp = str.replace(/[A-Z]/g, function (i) {
        return "-" + i.toLowerCase();
      });
      if (temp.slice(0, 1) === "-") {
        temp = temp.slice(1); //如果首字母是大写，执行replace时会多一个_，需要去掉
      }
      return temp;
    },
  },
  render() {
    const { $listeners, spin, color, size } = this;
    const type = this.getKebabCase(this.type);
    const classes = ["u-icon", { "u-load-loop": spin }];
    const styles = {
      color,
    };
    if (size) {
      styles.fontSize = `${size}px`;
    }
    const props = {
      style: styles,
      class: classes,
      on: {
        ...$listeners,
        click: (e) => this.$emit("click", e),
      },
    };
    return (
      <i {...props}>
        <svg id={type} width="1em" height="1em">
          <use xlinkHref={`${src}#${type}`}></use>
        </svg>
        {this.$slots.default}
      </i>
    );
  },
};
