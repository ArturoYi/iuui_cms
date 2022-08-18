function createComponent(suffixClass, name) {
  return (Component) => {
    return {
      name,
      render() {
        const prop = {
          props: { suffixClass },
        };
        return <Component {...prop}>{this.$slots.default}</Component>;
      },
    };
  };
}

const Base = {
  props: { suffixClass: String },
  render() {
    const { $slots, suffixClass } = this;
    const prop = {
      class: `u-${suffixClass}`,
    };
    return <div {...prop}>{$slots.default}</div>;
  },
};

const layoutBase = {
  props: { suffixClass: String },
  data() {
    return {
      siders: 0,
    };
  },
  provide() {
    return {
      collectSider: (ismount) => {
        ismount ? this.siders++ : this.siders--;
      },
    };
  },
  computed: {
    classes() {
      const { suffixClass, siders } = this;
      return [`u-${suffixClass}`, { "u-layout-has-sider": siders > 0 }];
    },
  },
  render() {
    const { $slots, classes } = this;
    const prop = {
      class: classes,
    };
    return <div {...prop}>{$slots.default}</div>;
  },
};

const siderBase = {
  props: { suffixClass: String },
  inject: {
    collectSider: { default: e => {} },
  },
  mounted() {
    this.collectSider(true);
  },
  beforeDestroy() {
    this.collectSider();
  },
  render() {
    const { $slots, suffixClass } = this;
    const prop = {
      class: `u-${suffixClass}`,
    };
    return <div {...prop}>{$slots.default}</div>;
  },
};

const Content = createComponent('layout-content', 'Content')(Base)
const Header = createComponent('layout-header', 'Header')(Base)
const Footer = createComponent('layout-footer', 'Footer')(Base)
const Layout = createComponent("layout", "Layout")(layoutBase);
const Sider = createComponent('layout-sider', 'Sider')(siderBase)

export { Layout, Header, Footer, Sider, Content };
