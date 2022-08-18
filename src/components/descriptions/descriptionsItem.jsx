export default {
  name: "DescriptionsItem",
  props: {
    label: String,
    span: { type: Number, default: 1 },
    type: String,
    bordered: Boolean,
    layout: String,
  },

  render() {
    let child = this.$slots.default;
    let { bordered, label, span, type, layout } = this;
    // let { bordered = false } = descContext

    if (bordered && layout != "vertical") {
      if (type == "label") {
        return (
          <th class="u-descriptions-item-label" colSpan={span}>
            {label}
          </th>
        );
      }
      return (
        <td class="u-descriptions-item-content" colSpan={span}>
          {child}
        </td>
      );
    }
    if (layout == "vertical") {
      if (bordered) {
        if (type == "label") {
          return (
            <th class="u-descriptions-item-label" colSpan={span}>
              {label}
            </th>
          );
        }
        return (
          <td class="u-descriptions-item-content" colSpan={span}>
            {child}
          </td>
        );
      }
      if (type == "label") {
        return (
          <td class="u-descripts-item" colSpan={span}>
            <div class="u-descriptions-item-inner">
              <div class="u-descriptions-item-label">{label}</div>
            </div>
          </td>
        );
      }
      return (
        <td class="u-descripts-item" colSpan={span}>
          <div class="u-descriptions-item-inner">
            <div class="u-descriptions-item-content">{child}</div>
          </div>
        </td>
      );
    }
    return (
      <td class="u-descripts-item" colSpan={span}>
        <div class="u-descriptions-item-inner">
          <div class="u-descriptions-item-label">{label}</div>
          <div class="u-descriptions-item-content">{child}</div>
        </div>
      </td>
    );
  },
};
