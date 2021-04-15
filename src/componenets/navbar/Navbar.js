/** @format */

import React, { useState } from "react";
import { routes } from "../../routes";
import HeaderOption from "../headerOption/HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import PostAddIcon from "@material-ui/icons/PostAdd";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import {
  NavbarWrapper,
  Logo,
  Input,
  InputWrapper,
  Navigation,
  InputButton,
} from "./NavbarStyles";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, searchPosts } from "../../actions";
import { auth } from "../../firebase/firebaseConfig";

const Navbar = () => {
  const selectedInitalPosts = useSelector(({ initalPosts }) => initalPosts);
  const [temporaryInputValue, setTemporaryInputValue] = useState("");

  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser(null));
    auth.signOut();
  };

  const handleSearchPost = (e) => {
    e.preventDefault();

    const searchInputValue = e.target.searchPost.value.toLowerCase();

    const filteredPosts = selectedInitalPosts.filter((post) => {
      const lowerCasePostName = post.postTitle.toLowerCase();

      return lowerCasePostName.includes(searchInputValue);
    });

    dispatch(searchPosts(filteredPosts));
    if (searchInputValue.length === 0) {
      dispatch(searchPosts(selectedInitalPosts));
    }
    setTemporaryInputValue(searchInputValue);
  };

  const handleResetPosts = (e) => {
    e.preventDefault();

    dispatch(searchPosts(selectedInitalPosts));
    setTemporaryInputValue("");
  };

  return (
    <NavbarWrapper>
      <Logo to={routes.home} />
      <InputWrapper>
        <form onSubmit={handleSearchPost}>
          <Input name="searchPost" />
          <InputButton>
            {temporaryInputValue.length === 0 ? <SearchIcon /> : null}
          </InputButton>
        </form>
        <InputButton>
          {temporaryInputValue.length !== 0 ? (
            <ClearIcon onClick={handleResetPosts} />
          ) : null}
        </InputButton>
      </InputWrapper>

      <Navigation>
        <HeaderOption
          Icon={HomeIcon}
          title="Strona główna"
          direction={routes.home}
        />
        <HeaderOption
          Icon={PostAddIcon}
          title="Dodaj post"
          direction={routes.addPost}
        />
        <HeaderOption
          Icon={PowerSettingsNewIcon}
          title="Wyloguj"
          onClick={logout}
        />
      </Navigation>
    </NavbarWrapper>
  );
};

export default Navbar;
