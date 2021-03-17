/** @format */

import React from "react";
import { RecentItemWrapper } from "./RecentItemStyles";

const RecentItem = ({ topic }) => {
  return (
    <RecentItemWrapper>
      <span>#</span>
      <p>{topic}</p>
    </RecentItemWrapper>
  );
};

export default RecentItem;
