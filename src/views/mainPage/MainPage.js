/** @format */

import React from "react";
import {
  MainPageWrapper,
  OnePostContainer,
  PostDescription,
  PostHeading,
  PostImg,
  PostContents,
} from "./MainPageStyles";
import { productsData } from "../../localData/localData";

const MainPage = () => {
  return (
    <>
      <MainPageWrapper>
        {productsData.map((post) => {
          const { productName, productDescription, photo } = post;
          return (
            <>
              <OnePostContainer>
                <PostImg src={photo} />
                <PostContents>
                  <PostHeading>{productName}</PostHeading>
                  <PostDescription>{productDescription}</PostDescription>
                </PostContents>
              </OnePostContainer>
            </>
          );
        })}
      </MainPageWrapper>
    </>
  );
};

export default MainPage;
