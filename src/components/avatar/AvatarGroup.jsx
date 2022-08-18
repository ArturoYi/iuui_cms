import { getChild, cloneVNode } from "../utils/utils";

export default {
  props: {
    maxCount: Number,
    shape: String,
    size: [String, Number],
  },
  render() {
    let child = getChild(this.$slots.default);
    let { shape, size } = this;
    return (
      <div class="u-avatar-group">
        {child.map((c) => {
          return cloneVNode(c, { props: { shape, size } });
        })}
      </div>
    );
  },
};
