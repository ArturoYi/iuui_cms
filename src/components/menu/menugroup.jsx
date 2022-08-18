
export default {
  name: "MenuGroup",
  props: {
    title: { type: String, required: true }
  },
  render() {
    return (
      <li class="u-menu-item-group">
        <div class="u-menu-item-group-title">{this.$slots.title || this.title}</div>
        <ul class="u-menu-item-group-list">
          {this.$slots.default}
        </ul>
      </li>
    )
  },
}