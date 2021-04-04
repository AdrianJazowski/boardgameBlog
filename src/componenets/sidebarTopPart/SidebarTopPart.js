/** @format */

import React from "react";
import RecentTopic from "../recentTopic/RecentTopic";
import {
  SidebarH2,
  SidebarPartsTopAndBotWrapper,
} from "../sidebar/SideBarStyles";

const SidebarTopPart = () => {
  return (
    <SidebarPartsTopAndBotWrapper>
      <SidebarH2>Zaobserwuj jedną z naszych grup</SidebarH2>
      <RecentTopic topic={"Gra roku"} />
      <RecentTopic topic={"Najlepszy eurosuchar"} />
      <RecentTopic topic={"10 gier dla dwojga"} />
      <RecentTopic topic={"Czy to będzie nowość na rynku"} />
      <RecentTopic topic={"Co najlepsze na nude"} />
      <RecentTopic topic={"Tematy dnia"} />
      <RecentTopic topic={"Catan"} />
    </SidebarPartsTopAndBotWrapper>
  );
};

export default SidebarTopPart;
