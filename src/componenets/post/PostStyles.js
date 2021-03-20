/** @format */

import styled, { css } from "styled-components";

export const PostWrapper = styled.div`
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid lightgray;
`;
export const PostHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export const PostInfo = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.black};
  font-weight: 500;
`;
export const PostBody = styled.div`
  overflow-wrap: anywhere;
`;
export const PostButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
