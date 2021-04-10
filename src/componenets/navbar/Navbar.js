/** @format */

import React from "react";
import { routes } from "../../routes";
import HeaderOption from "../headerOption/HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import PostAddIcon from "@material-ui/icons/PostAdd";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SearchIcon from "@material-ui/icons/Search";
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

    e.target.reset();
  };

  return (
    <NavbarWrapper>
      <Logo to={routes.home} />
      <InputWrapper onSubmit={handleSearchPost}>
        <Input name="searchPost" />
        <InputButton>
          <SearchIcon />
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
