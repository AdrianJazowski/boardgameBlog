/** @format */
import styled, { css } from "styled-components";

export const RightSidebarWrapper = styled.div`
  position: sticky;
  top: 35px;
  flex: 0.2;
  border-radius: 10px;
  text-align: center;
  height: fit-content;
`;
export const SidebarH2 = styled.h2`
  color: ${({ theme }) => theme.black};
  font-size: 16px;
  margin: 12px;
`;
