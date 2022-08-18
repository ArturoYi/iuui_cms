import Icon from "../icon/icon";
import { getTranstionProp } from "../base/transition";
let { InformationCircle, CloseCircle, CheckmarkCircle, AlertCircle, Close } = {
  InformationCircle: "information-circle",
  CloseCircle: "close-circle",
  CheckmarkCircle: "checkmark-circle",
  AlertCircle: "alert-circle",
  Close: "close",
};
export default {
  name: "Alert",
  props: {
    type: { type: String, default: "warning" },
    closable: Boolean,
    showIcon: Boolean,
    message: String,
    description: String,
  },
  data() {
    return {
      closed: false,
    };
  },
  methods: {
    close() {
      this.closed = true;
      this.$emit("close");
    },
  },
  render() {
    let {
      closed,
      showIcon,
      closable,
      close,
      $slots,
      type,
      description,
      message,
    } = this;
    const classes = [
      "u-alert",
      {
        [`u-alert-${this.type}`]: type,
        "u-alert-has-icon": showIcon,
        "u-alert-has-close": closable,
        "u-alert-has-description": description,
      },
    ];
    let icons = {
      info: InformationCircle,
      error: CloseCircle,
      success: CheckmarkCircle,
      warning: AlertCircle,
    };
    const iconNode = showIcon ? (
      <Icon type={icons[this.type]} class="u-alert-icon" />
    ) : null;
    const closeIcon = closable ? (
      <Icon class="u-alert-close" type={Close} onClick={close} />
    ) : null;
    description = <div class="u-alert-description">{description}</div>;
    const msg = <div class="u-alert-message">{message || $slots.default}</div>;
    const aniprop = getTranstionProp("u-alert-slide");
    return (
      <transition {...aniprop} name="u-alert-slide">
        <div class={classes} v-show={!closed}>
          {iconNode}
          {msg}
          {description}
          {closeIcon}
        </div>
      </transition>
    );
  },
};
