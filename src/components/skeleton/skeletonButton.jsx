export default {
  props: {
    animated: Boolean,
    block: Boolean,
    loading: Boolean,
    delay: { type: Number, default: 500 },
    shape: String,
    size: String,
    width: Number,
  },
  watch: {
    loading(v) {
      if (v) {
        this.show = v;
      } else {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.show = v;
        }, this.delay);
      }
    },
  },
  data() {
    return {
      show: this.loading,
    };
  },
  render() {
    let { size, animated, block, shape, show, width } = this;
    let props = {
      class: [
        "u-skeleton u-skeleton-ele",
        {
          "u-skeleton-animated": animated,
          "u-skeleton-block": block,
        },
      ],
    };
    let innerProps = {
      class: [
        "u-skeleton-btn",
        {
          "u-skeleton-btn-lg": size == "large",
          "u-skeleton-btn-sm": size == "small",
          [`u-skeleton-btn-${shape}`]: shape != "default",
        },
      ],
      style: {},
    };
    let child = this.$slots.default;

    if (width) {
      innerProps.style.width = `${width}px`;
    }
    return (
      <div {...props}>
        {child && !show ? child : <span {...innerProps}></span>}
      </div>
    );
  },
};
