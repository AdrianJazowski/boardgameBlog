/** @format */

import React from "react";
import {
  SidebarH2,
  SidebarPartsTopAndBotWrapper,
} from "../sidebar/SideBarStyles";
import RecentGropups from "../RecentGroups/RecentGropups";

const SidebarDownPart = () => {
  return (
    <SidebarPartsTopAndBotWrapper>
      <SidebarH2>Zaobserwuj jedną z naszych grup</SidebarH2>
      <RecentGropups name={"Planszowkownicy"} />
      <RecentGropups name={"Projekt gaja"} />
      <RecentGropups name={"Chaos w starym świecie"} />
      <RecentGropups name={"Inne"} />
      <RecentGropups name={"Catan"} />
    </SidebarPartsTopAndBotWrapper>
  );
};

export default SidebarDownPart;
