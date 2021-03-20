/** @format */

import React from "react";
import { routes } from "../../routes";
import HeaderOption from "../headerOption/HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import {
  NavbarWrapper,
  Logo,
  Input,
  InputWrapper,
  Navigation,
} from "./NavbarStyles";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../actions";
import { auth } from "../../firebase/firebaseConfig";

const Navbar = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser(null));
    auth.signOut();
  };

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
        <HeaderOption
          Icon={HomeIcon}
          title="Strona główna"
          direction={routes.home}
        />
        <HeaderOption Icon={HomeIcon} title="Wyloguj" onClick={logout} />
      </Navigation>
    </NavbarWrapper>
  );
};

export default Navbar;
