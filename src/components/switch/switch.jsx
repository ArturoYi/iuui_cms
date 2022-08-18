import { hasProp } from "../utils/utils";
import Icon from "../icon/icon";
export default {
  name: "Switched",
  props: {
    checked: [Boolean, Number],
    type: String,
    disabled: Boolean,
    loading: Boolean,
    size: {
      default: "default",
      validator(value) {
        return ["small", "default", "large"].indexOf(value) >= 0;
      },
    },
    trueText: String,
    falseText: String,
  },
  model: {
    prop: "checked",
  },
  watch: {
    checked(val, Oval) {
      this.defaultChecked = val;
    },
  },
  data() {
    const checked = hasProp(this, "checked") ? this.checked : false;
    return {
      defaultChecked: checked,
    };
  },
  methods: {
    change(e) {
      if (this.disabled) {
        return false;
      }
      let checked = !this.defaultChecked;
      this.defaultChecked = checked;
      this.$emit("input", checked);
      this.$emit("change", checked);
    },
  },
  render() {
    let {
      disabled,
      type,
      size,
      change,
      falseText,
      trueText,
      loading,
      defaultChecked,
      $slots,
    } = this;
    const classes = [
      "u-switch",
      {
        ["u-switch-checked"]: defaultChecked,
        ["u-switch-disabled"]: disabled || loading,
        [`u-switch-${type}`]: !!type,
        ["u-switch-sm"]: size == "small",
      },
    ];
    const children =
      $slots.checked || trueText || $slots.unchecked || falseText;
    const loadNode = loading ? (
      <Icon spin type="sync" class="u-switch-loading" />
    ) : null;

    const textNode =
      size != "small" && children ? (
        <span class="u-switch-inner">
          {defaultChecked
            ? $slots.checked || trueText
            : $slots.unchecked || falseText}
        </span>
      ) : null;
    return (
      <button
        class={classes}
        onClick={change}
        disabled={disabled || loading}
        type="button"
      >
        {textNode}
        {loadNode}
      </button>
    );
  },
};
