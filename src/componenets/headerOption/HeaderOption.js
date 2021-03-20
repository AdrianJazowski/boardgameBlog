/** @format */

import React from "react";
import { routes } from "../../routes";
import { HeaderOptionWrapper } from "./HeaderOptionStyles";

const HeaderOption = ({ Icon, title, direction, onClick }) => {
  return (
    <div onClick={onClick}>
      <HeaderOptionWrapper to={direction}>
        <Icon />
        <h3>{title}</h3>
      </HeaderOptionWrapper>
    </div>
  );
};

export default HeaderOption;
