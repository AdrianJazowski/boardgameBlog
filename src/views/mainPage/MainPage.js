/** @format */

import React from "react";
import { MainPageWrapper } from "./MainPageStyles";
import SideBar from "../../componenets/sidebar/SideBar";
import Content from "../../componenets/content/Content";

const MainPage = () => {
  return (
    <MainPageWrapper>
      <Content />
      <SideBar />
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
