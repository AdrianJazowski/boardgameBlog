/** @format */

import React from "react";
import {
  BrandName,
  NavbarWrapper,
  NavbarUl,
  NavbarLi,
  NavbarNavigation,
} from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <BrandName>BoardGame Blog</BrandName>
      <NavbarNavigation>
        <NavbarUl>
          <NavbarLi>Strona główna</NavbarLi>
          <NavbarLi>Kontakt</NavbarLi>
          <NavbarLi>Lupka</NavbarLi>
        </NavbarUl>
      </NavbarNavigation>
    </NavbarWrapper>
  );
};

export default Navbar;
