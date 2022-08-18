import Icon from "../icon/icon";
export default {
  name: "Card",
  props: {
    bordered: { type: Boolean, default: true },
    title: String,
    icon: [String, Array],
  },
  render() {
    const { title, icon, $slots, bordered } = this;
    const classes = [
      "u-card",
      {
        ["u-card-bordered"]: bordered,
      },
    ];
    const extra = $slots.extra ? (
      <div class="u-card-extra">{$slots.extra}</div>
    ) : null;
    const iconNode = icon ? <Icon type={icon} /> : null;
    const titleNode = title ? (
      <span class="u-card-title">{title}</span>
    ) : (
      $slots.title || null
    );
    return (
      <div class={classes}>
        <div class="u-card-head">
          {iconNode}
          {titleNode}
          {extra}
        </div>
        {$slots.default ? (
          <div class="u-card-body">{$slots.default}</div>
        ) : null}
      </div>
    );
  },
};
