/** @format */

import styled from "styled-components";

export const SinglePostWrapper = styled.div`
  width: 60%;
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid lightgray;
  margin: 20px auto;
`;
export const SinglePostHeader = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 10px;
`;

export const SinglePostTitle = styled.h1`
  font-size: 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  :hover {
    color: ${({ theme }) => theme.primary};
  }
`;
export const SinglePostDescription = styled.p`
  overflow-wrap: anywhere;
  color: ${({ theme }) => theme.black};
`;
