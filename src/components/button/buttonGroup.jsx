import { getChild } from "../utils/utils";
export default {
  name: "ButtonGroup",
  props: {
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
    shape: String,
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      const { size, shape } = this;
      return [
        "u-btn-group",
        {
          ["u-btn-group-sm"]: size == "small",
          ["u-btn-group-lg"]: size == "large",
          ["u-btn-group-circle"]: shape == "circle",
        },
      ];
    },
  },
  render() {
    return <div class={this.classes}>{getChild(this.$slots.default)}</div>;
  },
};
