import { getChild } from "../utils/utils";
export default {
  name: "Badge",
  props: {
    count: [String, Number],
    dot: Boolean,
    color: String,
    status: {
      type: String,
      // validator: (value) => {
      //   ['default', 'success', 'error', 'warning'].indexOf(value) > -1
      // },
      default: "default",
    },
    text: String,
    maxCount: { type: Number, default: 99 },
  },
  render() {
    const { $slots, maxCount, count, dot, color, status, text } = this;
    let innerText = null,
      statusNode = [];
    const child = getChild($slots.default);

    if (typeof count === "number" && count !== 0) {
      innerText = count > maxCount ? maxCount + "+" : count;
    } else if (typeof count === "string") {
      innerText = count;
    } else if ((status || color) && !dot && !child.length) {
      const props = {
        class: [
          "u-badge-status-dot",
          {
            [`u-badge-status-${status}`]: status,
            [`u-badge-status-${color}`]: color && !/^#/.test(color),
          },
        ],
        style: {
          backgroundColor: /^#/.test(color) ? color : null,
        },
      };
      statusNode.push(<span {...props}></span>);
      if (text)
        statusNode.push(<span class="u-badge-status-text">{text}</span>);
    }

    const props = {
      class: {
        "u-badge-count": count !== undefined,
        "u-badge-dot": dot,
        [`u-badge-${status}`]: status,
      },
      style: { backgroundColor: color },
    };
    const supNode =
      innerText !== null || dot ? <sup {...props}>{innerText}</sup> : null;
    return (
      <div class="u-badge">
        {child}
        {supNode}
        {statusNode}
      </div>
    );
  },
};
