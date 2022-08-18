import Icon from "../icon/icon";
let { Close } = { Close: "close" };
export default {
  name: "Tag",
  props: {
    closeable: Boolean,
    color: String,
  },
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    close(e) {
      this.$emit("close", e);
      this.visible = false;
    },
  },
  render() {
    const {
      visible,
      styles,
      handle,
      color,
      $slots,
      close,
      classes,
      closeable,
    } = this;
    const props = {
      on: {
        ...this.$listeners,
      },
      class: [
        "u-tag",
        {
          [`u-tag-${color}`]: color && !/^#/.test(color),
          ["u-tag-has-color"]: /^#/.test(color),
        },
      ],
      style: { backgroundColor: /^#/.test(color) ? color : null },
    };
    return (
      <transition name="u-tag">
        <div {...props} v-show={visible}>
          <span class="u-tag-text">{$slots.default}</span>
          {closeable ? (
            <Icon class="u-tag-close" type={Close} onClick={close} />
          ) : null}
        </div>
      </transition>
    );
  },
};
