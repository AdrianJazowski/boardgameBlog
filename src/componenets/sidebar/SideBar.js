/** @format */

import React from "react";
import SidebarDownPart from "../sidebarDownPart/SidebarDownPart";
import SidebarTopPart from "../sidebarTopPart/SidebarTopPart";
import { SidebarWrapper } from "./SideBarStyles";

const SideBar = () => {
  return (
    <SidebarWrapper>
      <SidebarTopPart />
      <SidebarDownPart />
    </SidebarWrapper>
  );
};

export default SideBar;
