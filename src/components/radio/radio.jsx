import { hasProp } from "../utils/utils";
export default {
  name: "Radio",
  props: {
    value: { type: [String, Number, Boolean], default: false },
    disabled: Boolean,
    checked: [Boolean, Number],
    label: [String, Number],
  },
  inject: {
    groupContext: { default: null },
  },
  model: {
    prop: "checked",
  },
  data() {
    const checked = hasProp(this, "checked")
      ? this.checked
      : this.value === true;
    return {
      defaultChecked: checked,
    };
  },
  // watch: {
  // checked(checked) {
  // this.$emit("input", checked);
  // }
  // },
  methods: {
    change(e) {
      let { disabled, value, $slots, label, groupContext } = this;
      if (disabled) {
        return false;
      }
      const checked = e.target.checked;
      this.defaultChecked = checked;
      if (groupContext) {
        label = label || $slots.default.text;
        this.groupContext.change({ label, value });
      } else {
        this.$emit("input", checked);
        this.$emit("change", e);
      }
    },
  },

  render() {
    let {
      disabled,
      change,
      $slots,
      label,
      groupContext,
      value,
      checked,
      defaultChecked,
    } = this;
    if (groupContext) {
      checked = groupContext.defaultValue == value;
      disabled = disabled || groupContext.disabled;
    } else {
      if (!hasProp(this, "checked")) {
        checked = defaultChecked;
      }
    }
    const wpclasses = [
      "u-radio",
      { ["u-radio-disabled"]: disabled, ["u-radio-checked"]: checked },
    ];

    const labelNode = label || $slots.default;
    return (
      <label class={wpclasses} onClick={(e) => e.stopPropagation()}>
        <span class="u-radio-symbol">
          <input
            type="radio"
            class="u-radio-input"
            disabled={disabled}
            checked={checked}
            onChange={change}
          />
          <span class="u-radio-inner"></span>
        </span>
        {labelNode ? <span class="u-radio-label">{labelNode}</span> : null}
      </label>
    );
  },
};
