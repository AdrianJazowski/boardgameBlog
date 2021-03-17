/** @format */

import styled, { css } from "styled-components";

export const SidebarWrapper = styled.div`
  display: none;
  @media ${({ theme }) => theme.viewPorts.viewport7} {
    position: fixed;
    border: 1px solid rgba(196, 190, 190, 0.47);
    height: 100vh;
    width: 30vh;
    left: 75%;
    display: flex;
  }
`;
export const ImgSIdebarPhoto = styled.img`
  width: 100%;
  height: 200px;
  margin-top: 10%;

  ${({ banner }) =>
    banner &&
    css`
      width: 100%;
      height: auto;
      cursor: pointer;
    `}
`;
export const InnerWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const SidebarTitle = styled.h4`
  margin-top: 10%;
  color: #555;
`;
export const SidebarDescription = styled.h5`
  margin-top: 5%;
`;
