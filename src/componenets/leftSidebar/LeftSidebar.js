/** @format */

import React from "react";
import RecentItem from "../recentItem/RecentItem";
import { SidebarH2 } from "../rightSidebar/RightSidebarStyles";
import { LeftSidebarWrapper, TopPart } from "./LeftSidebarStyles";

const LeftSidebar = () => {
  return (
    <LeftSidebarWrapper>
      <TopPart>
        <SidebarH2>Zaobserwuj jedną z naszych grup</SidebarH2>
        <RecentItem topic={"Gra roku"} />
        <RecentItem topic={"Najlepszy eurosuchar"} />
        <RecentItem topic={"10 gier dla dwojga"} />
        <RecentItem topic={"Czy to będzie nowość na rynku"} />
        <RecentItem topic={"Co najlepsze na nude"} />
        <RecentItem topic={"Tematy dnia"} />
        <RecentItem topic={"Catan"} />
      </TopPart>
    </LeftSidebarWrapper>
  );
};

export default LeftSidebar;
