/** @format */

import React from "react";
import { IconWrapperOptions } from "./IconOptionsStyles";

const IconOptions = ({
  Icon,
  title,
  color,
  onClickFn,
  isLiked,
  temporaryLike,
}) => {
  return (
    <IconWrapperOptions
      onClick={onClickFn}
      disabled={isLiked ? isLiked : temporaryLike}
      isLiked
    >
      <Icon style={{ fill: color }} />
      <h4>{title}</h4>
    </IconWrapperOptions>
  );
};

export default IconOptions;
