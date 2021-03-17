/** @format */

import React from "react";
import { InputOptionWrapper } from "./InputOptionStyles";

const InputOption = ({ Icon, title, color }) => {
  return (
    <InputOptionWrapper>
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </InputOptionWrapper>
  );
};

export default InputOption;
