/** @format */

import React from "react";
import { TopPart } from "../leftSidebar/LeftSidebarStyles";
import RecentGropups from "../RecentGroups/RecentGropups";

import { RightSidebarWrapper, SidebarH2 } from "./RightSidebarStyles";

const RightSidebar = () => {
  return (
    <RightSidebarWrapper>
      <TopPart>
        <SidebarH2>Zaobserwuj jedną z naszych grup</SidebarH2>
        <RecentGropups name={"Planszowkownicy"} />
        <RecentGropups name={"Planszowkownicy"} />
        <RecentGropups name={"Planszowkownicy"} />
        <RecentGropups name={"Planszowkownicy"} />
        <RecentGropups name={"Planszowkownicy"} />
        <RecentGropups name={"Planszowkownicy"} />
        <RecentGropups name={"Planszowkownicy"} />
        <RecentGropups name={"Planszowkownicy"} />
        <RecentGropups name={"Planszowkownicy"} />
      </TopPart>
    </RightSidebarWrapper>
  );
};

export default RightSidebar;
