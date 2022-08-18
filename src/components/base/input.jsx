import Icon from "../icon/icon";
import { isNotEmpty } from "../utils/utils";
// import { Search, CloseCircle, EyeOutline, EyeOffOutline } from '
export default {
  name: "baseInput",
  props: {
    clearable: Boolean,
    id: String,
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
    inputType: { type: String, default: "input" },
    value: [String, Number, Array, Object],
    disabled: Boolean,
    type: {
      validator(value) {
        return (
          [
            "text",
            "textarea",
            "password",
            "url",
            "email",
            "date",
            "search",
            "hidden",
          ].indexOf(value) >= 0
        );
      },
      default: "text",
    },
    icon: [String, Array],
    suffix: String,
    prefix: String,
    theme: String,
    shape: String,
    formatter: Function,
    parser: Function,
  },
  data() {
    return {
      currentValue: this.value,
      isFocus: false,
      isEnter: false,
      isPassword: true,
    };
  },
  inject: {
    Input: { default: null },
    TextArea: { default: null },
  },
  watch: {
    value(value) {
      this.currentValue = value;
    },
  },
  mounted() {
    let textInput = this.Input || this.TextArea || {};
    textInput.focus = (e) => {
      this.$nextTick(() => this.$refs.input.focus(e));
    };
    textInput.blur = (e) => {
      this.$nextTick(() => this.$refs.input.blur(e));
    };
  },
  methods: {
    clear() {
      this.setValue({ input: "", output: "" });
      this.$nextTick((e) => this.$refs.input.focus());
    },
    iconClick() {
      !this.disabled && this.$emit("icon-click");
    },
    handleFocus(e) {
      this.isFocus = true;
      let intput = this.Input || this.TextArea;
      intput && intput.$emit("focus", e);
    },
    handleBlur(e) {
      let intput = this.Input || this.TextArea;
      // console.log('base blur')
      this.$emit("blur", e);
      intput && intput.$emit("blur", e);
      this.isFocus = false;
    },
    handleInput(e) {
      let v = e.target.value + "",
        input = v,
        output = v + "";
      let { parser, formatter } = this;

      if (parser) {
        output = parser(v);
      }

      // console.log('output', output)

      if (output !== "" && formatter) {
        input = formatter(output);
        // e.target.value = v
      }
      // console.log('res', input, output)
      e.target.value = input;
      if (input === "") {
        output = "";
      }

      // e.target.value = e.target.value.replace(/\D/g, '')
      this.setValue({ input, output });
    },
    showPassword() {
      if (this.disabled) return;
      let type = this.isPassword ? "text" : "password";
      this.isPassword = !this.isPassword;
      this.$refs.input.type = type;
    },
    setValue({ input, output }) {
      this.currentValue = input;
      this.$emit("input", output);
      this.$emit("change", output);
    },

    searchEvent() {
      if (this.disabled) return;
      this.$listeners.search(this.currentValue);
    },
    getSuffix() {
      let { $listeners, suffix } = this;
      const SearchNode =
        "search" in $listeners ? (
          <Icon
            type="search"
            class="u-input-icon-search"
            onClick={this.searchEvent}
          />
        ) : null;

      const Password =
        this.type == "password" ? (
          <Icon
            type={!this.isPassword ? "eye-outline" : "eyeOff-outline"}
            onClick={this.showPassword}
          />
        ) : null;

      return (
        Password ||
        SearchNode ||
        this.$slots.suffix ||
        (suffix ? <div class="u-input-suffix">{suffix}</div> : null)
      );
    },
    getTextInput(mult) {
      const {
        disabled,
        size,
        type,
        inputType,
        currentValue,
        id,
        theme,
        shape,
      } = this;
      let isTextArea = inputType == "textarea";
      const props = {
        domProps: {
          value: currentValue,
        },
        class: [
          {
            [`u-${inputType}`]: !mult,
            [`u-${inputType}-text`]: mult,
            [`u-${inputType}-disabled`]: disabled,
            [`u-${inputType}-sm`]: size == "small" && !isTextArea && !mult,
            [`u-${inputType}-lg`]: size == "large" && !isTextArea && !mult,
            [`u-${inputType}-${theme}`]: theme != "solid" && !mult,
            [`u-${inputType}-circle`]:
              shape == "circle" && !isTextArea && !mult,
          },
        ],
        ref: "input",
        attrs: {
          ...this.$attrs,
          disabled,
          id,
        },
        on: {
          ...this.$listeners,
          focus: this.handleFocus,
          blur: this.handleBlur,
          input: this.handleInput,
        },
      };

      if (!isTextArea) {
        props.attrs.type = type;
      }
      return isTextArea ? <textarea {...props} /> : <input {...props} single />;
    },
  },
  render() {
    const {
      inputType,
      icon,
      $slots,
      size,
      disabled,
      type,
      $listeners,
      clearable,
      suffix,
      theme,
      prefix,
      shape,
    } = this;

    let isTextArea = inputType == "textarea";
    let mult =
      icon ||
      "search" in $listeners ||
      $slots.suffix ||
      suffix ||
      $slots.prefix ||
      prefix ||
      type == "password" ||
      clearable;

    let textInput = this.getTextInput(mult);

    if (isTextArea || !mult) return textInput;

    let { isFocus, isEnter, currentValue } = this;
    let clearableShow =
      clearable && (isFocus || isEnter) && isNotEmpty(currentValue);
    const props = {
      class: [
        `u-${inputType}`,
        {
          [`u-${inputType}-focus`]: isFocus,
          [`u-${inputType}-disabled`]: disabled,
          [`u-${inputType}-sm`]: size == "small",
          [`u-${inputType}-lg`]: size == "large",
          [`u-${inputType}-${theme}`]: theme && theme != "solid",
          [`u-${inputType}-circle`]: shape == "circle" && !isTextArea,
        },
      ],
      on: {
        mouseenter: () => (this.isEnter = true),
        mouseleave: () => (this.isEnter = false),
      },
    };
    const suffixNode = this.getSuffix();
    const prefixNode =
      $slots.prefix ||
      (prefix ? <div class={`u-${inputType}-prefix`}>{prefix}</div> : null);
    return (
      <div {...props} mult>
        {icon ? (
          <Icon
            type={icon}
            class={`u-${inputType}-icon`}
            onClick={this.iconClick}
          />
        ) : null}
        {prefixNode ? prefixNode : null}
        {textInput}
        {clearableShow ? (
          <Icon
            type="close-circle"
            class={`u-${inputType}-clearable`}
            onClick={this.clear}
          />
        ) : null}
        {suffixNode ? suffixNode : null}
      </div>
    );
  },
};
