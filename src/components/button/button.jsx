import Icon from "../icon/icon";
import { getChild } from "../utils/utils";
export default {
  name: "Button",
  props: {
    htmlType: {
      default: "button",
      validator(value) {
        return ["button", "submit", "reset"].indexOf(value) >= 0;
      },
    },
    icon: String,
    block: Boolean,
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
    loading: Boolean,
    type: {
      default: "gray",
      validator(value) {
        return (
          [
            "danger",
            "primary",
            "warning",
            "link",
            "gray",
            "success",
            "dashed",
          ].indexOf(value) >= 0
        );
      },
      // default: "default",
    },
    disabled: Boolean,
    theme: {
      type: String,
      default: "default",
      validator(value) {
        return (
          ["default", "light", "solid", "normal", "card"].indexOf(value) > -1
        );
      },
    },
    shape: String,
  },
  methods: {
    click(e) {
      if (!this.loading) {
        this.$emit("click", e);
      }
    },
  },

  render() {
    const {
      $slots,
      $attrs,
      size,
      disabled,
      click,
      theme,
      shape,
      htmlType,
      icon,
      loading,
      $listeners,
      type,
      block,
    } = this;
    const onlyIcon = !getChild($slots.default).length && icon;
    const classes = [
      "u-btn",
      {
        [`u-btn-${type}`]: !!type && type != "default",
        ["u-btn-sm"]: size == "small",
        ["u-btn-block"]: !!block,
        ["u-btn-loading"]: loading,
        ["u-btn-icon-only"]: onlyIcon,
        ["u-btn-lg"]: size == "large",
        ["u-btn-circle"]: shape == "circle",
        [`u-btn-${theme}`]: !!theme && theme != "default",
      },
    ];
    const props = {
      attrs: { ...$attrs, disabled, type: htmlType },
      class: classes,
      on: {
        ...$listeners,
        click: click,
      },
    };
    const iconType = loading ? "sync" : icon;
    const iconNode = iconType ? <Icon type={iconType} spin={loading} /> : null;
    const child = getChild($slots.default);
    const childs = child.map((c) => {
      if (typeof c.text == "string") {
        return <span>{c.text.trim()}</span>;
      }
      return c;
    });
    const button = (
      <button {...props}>
        {iconNode}
        {childs}
      </button>
    );
    return button;
  },
};
