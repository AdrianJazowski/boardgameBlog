/** @format */

import React from "react";
import { RecentTopicWrapper } from "./RecentTopicStyles";

const RecentTopic = ({ topic }) => {
  return (
    <RecentTopicWrapper>
      <span>#</span>
      <p>{topic}</p>
    </RecentTopicWrapper>
  );
};

export default RecentTopic;
