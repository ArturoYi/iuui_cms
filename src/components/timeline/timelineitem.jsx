import Icon from "../icon/icon";
export default {
  name: "TimeLineItem",
  props: {
    color: String,
    icon: [String, Array],
    time: String,
    extra: String,
  },
  render() {
    let { icon, color, time } = this;
    const styles = { color };
    const iconNode =
      this.$slots.dot ||
      (icon ? <Icon type={icon} /> : <span class="u-time-line-head"></span>);
    const iconCls = ["u-time-line-dot"];
    let extra = this.extra || this.$slots.extra;
    return (
      <li class="u-time-line-item">
        <div class={iconCls} style={styles}>
          {iconNode}
        </div>
        <div class="u-time-line-item-content">
          {this.$slots.default}
          {extra && <div class="u-time-line-item-extra">{extra}</div>}
          {time && <div class="u-time-line-item-time">{time}</div>}
        </div>
      </li>
    );
  },
};
