/** @format */

import React from "react";
import { MainPageWrapper } from "./MainPageStyles";
import LeftSidebar from "../../componenets/leftSidebar/LeftSidebar";
import RightSidebar from "../../componenets/rightSidebar/RightSidebar";
import Content from "../../componenets/content/Content";

const MainPage = () => {
  return (
    <MainPageWrapper>
      <LeftSidebar />
      <Content />
      <RightSidebar />
    </MainPageWrapper>
  );
};

export default MainPage;
{
  /* <MainPageWrapper>
        {posts.map((post) => {
          const { productName, description, coments, id } = post;
          return (
            <PostsList key={id}>
              <OnePostContainer>
                <PostLink
                  to={{
                    pathname: `/post/${productName.replace(/\s/g, "")}`,
                    state: {
                      ...post,
                    },
                  }}
                ></PostLink>

                <PostContents>
                  <PostHeading>{productName}</PostHeading>
                  <PostHeading>{description}</PostHeading>
                  {coments.map((coment) => (
                    <p>{coment}</p>
                  ))}
                </PostContents>
              </OnePostContainer>
            </PostsList>
          );
        })}
      </MainPageWrapper>  */
}
