export default {
  name: "Spin",
  props: {
    value: { type: Boolean, default: true },
    delay: { type: Number, default: 500 },
    mode: {
      type: String,
      default: "rotate",
      validator(value) {
        return ["bounce", "flip", "rotate", "zoom"].indexOf(value) >= 0;
      },
    },
  },
  watch: {
    value(v) {
      if (v) {
        this.spinning = v;
      } else {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.spinning = v;
        }, this.delay);
      }
    },
  },
  data() {
    return {
      spinning: this.value,
    };
  },
  render() {
    let { mode, spinning, $slots } = this;
    const classes = [
      {
        [`u-spin-loading`]: spinning,
        [`u-spin-${mode}`]: mode && spinning,
      },
    ];

    const spin = <div class={classes} />;
    return <div class="u-spin">{[spin, $slots.default]}</div>;
  },
};
