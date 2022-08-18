import Icon from "../icon/icon";
export default {
  name: "BreadcrumbItem",
  props: {
    separator: { type: String, default: "/" },
    to: String,
    replace: Boolean,
    icon: String,
  },
  methods: {
    toPath() {
      if (this.to !="" &&this.$route.path != this.to) {
        this.to && this.replace
          ? this.$router.replace({ path: this.replace })
          : this.$router.push({ path: this.to });
      }
    },
  },
  render() {
    const { $slots, toPath, icon, separator } = this;
    return (
      <span class="u-breadcrumb-item">
        {icon ? <Icon type={icon} /> : null}
        <span class="u-breadcrumb-link" onClick={toPath}>
          {$slots.default}
        </span>
        <span class="u-breadcrumb-separator">{separator}</span>
      </span>
    );
  },
};
