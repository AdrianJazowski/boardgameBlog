/** @format */

import styled from "styled-components";

export const PostWrapper = styled.div`
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid lightgray;
`;
export const PostHeader = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 10px;
`;
export const PostInfo = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.black};
`;
export const PostBody = styled.div`
  overflow-wrap: anywhere;
  color: ${({ theme }) => theme.black};
`;
export const PostButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const LikeCounter = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  color: ${({ theme }) => theme.black};
  font-size: 18px;
  align-items: center;
`;
