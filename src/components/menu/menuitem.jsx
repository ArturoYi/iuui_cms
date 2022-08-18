import Icon from "../icon/icon";
import Tooltip from "../tooltip/tooltip";
import { isVnode, getChild } from "../utils/utils";
export default {
  name: "MenuItem",
  props: {
    path: String,
    icon: String,
    title: String,
    disabled: Boolean,
  },
  inject: {
    Menu: { default: null },
    SubMenu: { default: null },
    Dropdown: { default: null },
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {},

  mounted() {
    let { SubMenu, Menu } = this;
    if (Menu && SubMenu) {
      let { selectedKeys } = Menu;
      let key = this.$vnode.key || "item_" + this._uid;
      let selected = selectedKeys.indexOf(key) >= 0;
      if (selected && selectedKeys.indexOf(SubMenu.$vnode.key) < 0) {
        Menu.selectedKeys.push(SubMenu.$vnode.key);
      }
    }
  },
  render() {
    let { icon, disabled, Menu, SubMenu, Dropdown, title } = this;
    let key = this.$vnode.key || "item_" + this._uid;
    let selected = Menu.selectedKeys.indexOf(key) >= 0;

    const item = this;
    const preCls = Dropdown ? "dropdown-menu" : "menu";

    const props = {
      class: [
        `u-${preCls}-item`,
        {
          [`u-${preCls}-item-active`]: this.active,
          [`u-${preCls}-item-selected`]: selected && !Dropdown,
          [`u-${preCls}-item-disabled`]: disabled,
        },
      ],
      on: {
        mouseenter: () => {
          if (disabled) return;
          this.active = true;
        },
        mouseleave: () => {
          this.active = false;
        },
        click: (e) => {
          if (!disabled) {
            let key = this.$vnode.key || "item_" + this._uid;
            let path = this.$vnode.path || null;
            let options = {
              path,
              key,
              keyPath: [key],
              item,
              event: e,
            };
            let parent = SubMenu || Menu;
            if (parent) {
              parent.handleClick(options);
            }
          }
        },
      },
    };
    const showTooltip = !SubMenu && Menu.inlineCollapsed;
    let child = title || getChild(this.$slots.default);
    let titleNode =
      child.length > 1 ? (
        <span>{child}</span>
      ) : isVnode(child[0]) ? (
        child
      ) : (
        <span>{child}</span>
      );
    return (
      <Tooltip placement="right">
        <li {...props}>
          {icon ? (
            <Icon type={icon} class={`u-${preCls}-item-icon`} />
          ) : (
            <span class={`u-${preCls}-icon-temp`} />
          )}
          {titleNode}
        </li>
        {showTooltip ? (
          <template slot="title">{this.$slots.default}</template>
        ) : null}
      </Tooltip>
    );
  },
};
