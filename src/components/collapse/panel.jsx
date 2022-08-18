import { getTranstionProp } from "../base/transition";
import Icon from "../icon/icon";
export default {
  name: "Panel",
  props: {
    title: String,
    actived: Boolean,
  },
  inject: {
    Collapse: { default: null },
  },
  data() {
    return {
      visible: this.actived,
      rendered: this.actived == true,
    };
  },
  watch: {
    actived(actived) {
      this.rendered = true;
      this.$nextTick(() => (this.visible = actived));
    },
  },
  methods: {
    handleClick() {
      if (this.Collapse) {
        this.Collapse.change(this.$vnode.key);
      }
    },
    renderPanel() {
      const aniprop = getTranstionProp("u-collaplse-slide");
      return this.rendered ? (
        <transition {...aniprop}>
          <div class="u-collapse-content" v-show={this.visible}>
            <div class="u-collapse-content-box">{this.$slots.default}</div>
          </div>
        </transition>
      ) : null;
    },
  },
  render() {
    let { Collapse, actived, $vnode, $slots } = this;
    const classes = [
      "u-collapse-item",
      { ["u-collapse-item-active"]: actived },
    ];
    return (
      <div class={classes}>
        <div class="u-collapse-header" onClick={this.handleClick}>
          <Icon type="chevron-forward" class="u-collapse-arrow" />
          <span class="u-collapse-title">{this.title}</span>
          {$slots.extra ? (
            <span class="u-collapse-extra">{$slots.extra}</span>
          ) : null}
        </div>
        {this.renderPanel()}
      </div>
    );
  },
};
