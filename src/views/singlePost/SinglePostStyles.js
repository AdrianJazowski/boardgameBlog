/** @format */

import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const SinglePostWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 90vh;
`;
export const PostContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 53vw;
  margin-left: 20%;
  margin-top: 5%;
`;
export const PostImg = styled.img`
  height: 500px;
  width: 53vw;
  border: 5px solid #26cdc7;
  margin-bottom: 24px;
`;
export const PostTitle = styled.h1`
  align-self: end;
  margin-bottom: 20px;
`;
export const PostDescription = styled.p``;
