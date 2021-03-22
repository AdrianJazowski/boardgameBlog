/** @format */

import React from "react";
import { InputOptionWrapper } from "./InputOptionStyles";

const InputOption = ({ Icon, title, color, onClickFn, isLiked }) => {
  console.log(isLiked);
  return (
    <button onClick={onClickFn} disabled={isLiked}>
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </button>
  );
};

export default InputOption;
