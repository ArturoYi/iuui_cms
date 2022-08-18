import Icon from "../icon/icon";
let { Close, InformationCircle, CloseCircle, CheckmarkCircle, AlertCircle } = {
  Close: "close",
  InformationCircle: "information-circle",
  CloseCircle: "close-circle",
  CheckmarkCircle: "checkmark-circle",
  AlertCircle: "alert-circle",
};
export default {
  props: {
    type: { type: String, default: "info" },
    title: String,
    name: String,
    content: [String, Object],
    icon: [String, Array],
    color: String,
    closable: Boolean,
    noticeType: { type: String, default: "message" },
    onClose: { type: Function, default: () => {} },
  },
  render() {
    let { noticeType, type, content, title, onClose, closable, icon, color } =
      this;
    const classes = [
      `u-${noticeType}-box`,
      `u-${noticeType}-${type}`,
      {
        "u-notice-has-icon": noticeType == "notice" && type != "default",
      },
    ];
    let childNode;
    let icons = {
      info: InformationCircle,
      error: CloseCircle,
      success: CheckmarkCircle,
      warning: AlertCircle,
    };
    let iconNode =
      type != "default" ? (
        <Icon
          type={icon || icons[type]}
          color={color}
          class={`u-${noticeType}-icon`}
        />
      ) : null;
    if (noticeType == "message") {
      childNode = (
        <div class="u-message-content">
          {iconNode}
          <span>{content}</span>
          {closable ? (
            <Icon class="u-message-close" type={Close} onClick={onClose} />
          ) : null}
        </div>
      );
    } else {
      childNode = (
        <div class="u-notice-content">
          {iconNode}
          <div class="u-notice-title">{title}</div>
          <div class="u-notoce-desc">{content}</div>
          <Icon class="u-notice-close" type={Close} onClick={onClose} />
        </div>
      );
    }
    return <div class={classes}>{childNode}</div>;
  },
};
