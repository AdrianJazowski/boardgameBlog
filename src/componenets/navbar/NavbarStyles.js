/** @format */
import styled, { css } from "styled-components";

export const NavbarWrapper = styled.nav`
  display: grid;
  grid-template-columns: 10% 35% 40% 15%;
  grid-template-rows: 1fr;
  width: 100vw;
  height: 10vh;
  border-bottom: 1px solid black;
  font-size: 18px;
  font-weight: 600;
`;
export const BrandName = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  grid-column: 2/3;
  height: 100%;
  width: 100%;
  font-size: 22px;
  &:hover {
    color: red;
  }
`;

export const NavbarNavigation = styled.div`
  grid-column: 3/4;
`;
export const NavbarUl = styled.ul`
  list-style-type: none;
  display: flex;
  height: 100%;
  width: 100%;
`;
export const NavbarLi = styled.li`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: red;
    transition: 0.3s;
  }
`;
