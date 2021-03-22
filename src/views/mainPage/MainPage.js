/** @format */

import React from "react";
import { MainPageWrapper } from "./MainPageStyles";
import LeftSidebar from "../../componenets/leftSidebar/LeftSidebar";
import RightSidebar from "../../componenets/rightSidebar/RightSidebar";
import Content from "../../componenets/content/Content";

const MainPage = () => {
  return (
    <MainPageWrapper>
      <Content />
      <LeftSidebar />
      <RightSidebar />
    </MainPageWrapper>
  );
};

export default MainPage;

// <PostLink
//   to={{
//     pathname: `/post/${productName.replace(/\s/g, "")}`,
//     state: {
//       ...post,
//     },
//   }}
// ></PostLink>
