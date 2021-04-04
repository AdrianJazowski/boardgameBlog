/** @format */

import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: sticky;
  top: 35px;
  flex: 0.2;
  border-radius: 10px;
  text-align: center;
  height: fit-content;
  margin: 0 20px;
`;
export const SidebarPartsTopAndBotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;
export const SidebarH2 = styled.h2`
  color: ${({ theme }) => theme.black};
  font-size: 16px;
  margin: 12px;
`;
