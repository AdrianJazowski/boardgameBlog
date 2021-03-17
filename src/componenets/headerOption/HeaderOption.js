/** @format */

import React from "react";
import { routes } from "../../routes";
import { HeaderOptionWrapper } from "./HeaderOptionStyles";

const HeaderOption = ({ Icon, title, direction }) => {
  return (
    <HeaderOptionWrapper to={direction}>
      <Icon />
      <h3>{title}</h3>
    </HeaderOptionWrapper>
  );
};

export default HeaderOption;
