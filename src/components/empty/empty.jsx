import Icon from "../icon/icon";
import { t } from "@/lang/config";

export default {
  name: "Empty",
  props: {
    description: String,
    image: String,
    imageStyle: Object,
  },
  render() {
    let { image, imageStyle, $slots, description } = this;
    // description = getChild($slots.description).length > 0 || description
    // image = getChild($slots.image)
    // console.log(description, $slots.description)

    return (
      <div class="u-empty">
        {!image && !$slots.image ? (
          <Icon type="file-tray-outline" class="u-empty-icon" />
        ) : $slots.image ? (
          $slots.image
        ) : (
          <img src={image} class="u-empty-image" style={imageStyle} />
        )}
        {description !== null ? (
          <p class="u-empty-description">
            {description || $slots.description || t("empty.description")}
          </p>
        ) : null}
        {$slots.default ? (
          <div class="u-empty-footer">{$slots.default}</div>
        ) : null}
      </div>
    );
  },
};
