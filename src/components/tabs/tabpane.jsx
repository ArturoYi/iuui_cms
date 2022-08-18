export default {
    name: "TabPane",
    props: {
      title: String,
      icon: [String, Array],
      disabled: Boolean,
      closable: Boolean
    },
    inject: {
      Tabs: { default: {} },
    },
    beforeDestroy() {
      this.Tabs && this.Tabs.resetNavPosition();
    },
    mounted() {
      this.Tabs && this.Tabs.resetNavPosition();
    },
    render() {
      return (
        <div class={['u-tabs-tabpane', { 'u-tabs-tabpane-active': this.Tabs.activeKey == this.$vnode.key }]}>
          {this.$slots.default}
        </div>
      )
    }
  }