/** @format */

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import MainPage from "../../views/mainPage/MainPage";
import HeaderOption from "../headerOption/HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import {
  NavbarWrapper,
  Logo,
  Input,
  InputWrapper,
  Navigation,
} from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo />
      <InputWrapper>
        <Input />
      </InputWrapper>
      <Navigation>
        <HeaderOption
          Icon={HomeIcon}
          title="Strona główna"
          direction={routes.home}
        />
      </Navigation>
    </NavbarWrapper>
  );
};

export default Navbar;
