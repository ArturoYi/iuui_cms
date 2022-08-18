// import Button from ""
import Icon from "../icon/icon";
import { getChild } from "../utils/utils";
import cloneVNode from "../utils/clone";
import { t } from "@/lang/config";
import Drop from "./drop";
import Button from "../button/button";
export default {
  name: "BasePop",
  props: {
    preCls: String,
    trigger: { type: String, default: "hover" },
    confirm: Boolean,
    dark: Boolean,
    color: String,
    transfer: { type: Boolean, default: true },
    value: { type: Boolean },
    title: String,
    showPlacementArrow: { type: Boolean, default: true },
    width: [Number, String],
    placement: {
      validator(value) {
        return (
          [
            "top",
            "top-left",
            "top-right",
            "bottom",
            "bottom-left",
            "bottom-right",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-top",
            "right-bottom",
          ].indexOf(value) >= 0
        );
      },
      default: "top",
    },
    okText: String,
    cancelText: String,
    updateKey: [String, Object, Array],
    show: Boolean,
  },
  data() {
    return {
      opened: this.value,
      timer: null,
      selection: null,
    };
  },
  watch: {
    value(show) {
      this.opened = show;
    },
  },
  mounted() {
    this.selection = this.$el;
  },
  methods: {
    ok() {
      this.toggle(false);
      this.$emit("ok");
    },
    cancel() {
      this.toggle(false);
      this.$emit("cancel");
    },
    toggle(value) {
      let show = this.show || value;
      this.opened = show;
      this.$emit("input", show);
    },
    mouseEnter(e) {
      clearTimeout(this.timer);
      if (this.trigger == "hover" && !this.confirm && !this.opened) {
        this.toggle(true);
      }
    },
    mouseLeave(e) {
      if (this.trigger == "hover" && !this.confirm && this.opened) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.toggle(false);
        }, 200);
      }
    },
    contextMenu(e) {
      if (this.trigger == "contextmenu") {
        e.preventDefault();
        this.toggle(true);
        this.$nextTick(() => {
          this.$refs.overlay.showContextmenu(e);
        });

        return false;
      }
    },
    onClick(e) {
      let { trigger, confirm, opened } = this;
      if (
        trigger == "contextmenu" &&
        opened &&
        !this.$refs.overlay.$el.contains(e.target)
      ) {
        this.toggle(false);
      }
      if (trigger == "click" || confirm) {
        if (!opened) {
          this.toggle(true);
        }
      }
    },
    renderPopup() {
      let {
          placement,
          trigger,
          title,
          preCls,
          $slots,
          transfer,
          color,
          updateKey,
        } = this,
        childNode;

      title = title || getChild($slots.title);
      let okText = this.okText || t("pop.ok");
      let cancelText = this.cancelText || t("pop.cancel");
      if (this.showPlacementArrow) {
        let titleNode, contentNode, footerNode;
        if (this.confirm) {
          contentNode = [
            <Icon type="help-circle" />,
            <div class={`u-${preCls}-title`}>{title}</div>,
          ];

          footerNode = (
            <div class={`u-${preCls}-footer`}>
              <Button size="small" onClick={this.cancel}>
                {cancelText}
              </Button>
              <Button type="primary" size="small" onClick={this.ok}>
                {okText}
              </Button>
            </div>
          );
        } else {
          titleNode = title.length ? (
            <div class={`u-${preCls}-title`}>{title}</div>
          ) : null;
          contentNode = $slots.content;
        }
        contentNode = contentNode ? (
          <div class={`u-${preCls}-body`}>{contentNode}</div>
        ) : null;
        childNode = [
          <div
            class={`u-${preCls}-content`}
            style={{ backgroundColor: /^#/.test(color) ? color : null }}
          >
            {[titleNode, contentNode, footerNode]}
            <div class={`u-${preCls}-arrow`}>
              <svg
                style={{ fill: /^#/.test(color) ? color : "currentColor" }}
                viewBox="0 0 24 7"
              >
                <path d="M24 0V1C20 1 18.5 2 16.5 4C14.5 6 14 7 12 7C10 7 9.5 6 7.5 4C5.5 2 4 1 0 1V0H24Z"/>
              </svg>
            </div>
          </div>,
        ];
      } else {
        childNode = $slots.content;
      }
      const props = {
        ref: "overlay",
        props: {
          transfer,
          value: this.opened,
          className: [
            `u-${preCls}`,
            {
              [`u-${preCls}-${color}`]: color && !/^#/.test(color),
              [`u-${preCls}-has-color`]: /^#/.test(color),
              [`u-${preCls}-has-arrow`]: this.showPlacementArrow,
            },
          ],
          width: this.width,
          selection: this.selection,
          placement,
          updateKey,
          color,
          trigger,
          transitionName: `u-${preCls}`,
        },
        on: {
          mouseenter: (e) => {
            if (this.$refs.overlay.$el.contains(e.target)) {
              clearTimeout(this.timer);
            }
          },
          mouseleave: (e) => {
            if (this.trigger == "hover") {
              this.toggle(false);
            }
          },
          hide: () => {
            this.toggle(false);
          },
          input: (e) => {
            this.$emit("input", e);
          },
        },
      };
      return <Drop {...props}>{childNode}</Drop>;
    },
  },

  render() {
    let { $slots } = this;
    let vNode = getChild($slots.default)[0];
    let popup = this.renderPopup();

    const props = {
      on: {
        contextmenu: (e) => this.contextMenu(e),
        mouseenter: (e) => this.mouseEnter(e),
        mouseleave: (e) => this.mouseLeave(e),
        click: (e) => this.onClick(e),
      },
    };
    return cloneVNode(vNode, props, popup);
  },
};
