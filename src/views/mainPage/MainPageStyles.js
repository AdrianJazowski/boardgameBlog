/** @format */
import styled, { css } from "styled-components";

export const MainPageWrapper = styled.div`
  width: 65%;
  margin-left: 10%;
  border-right: 1px solid rgba(196, 190, 190, 0.47);
`;

export const OnePostContainer = styled.article`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 10% 80% 10%;
  border-bottom: 1px solid rgba(196, 190, 190, 0.47);
`;

export const PostImg = styled.img`
  width: 80%;
  height: 80%;
  grid-row: 2/3;
  grid-column: 1/2;
  border: 3px solid blue;
  align-self: center;
  place-self: center;
`;

export const PostContents = styled.div`
  width: 80%;
  height: 90%;
  grid-row: 2/3;
  grid-column: 2/3;
  align-self: center;
`;

export const PostHeading = styled.h1``;
export const PostDescription = styled.h4``;
