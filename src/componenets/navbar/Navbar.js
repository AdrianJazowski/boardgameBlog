/** @format */

import React from "react";
import { useState } from "react";
import { routes } from "../../routes";
import MainPage from "../../views/mainPage/MainPage";
import {
  NavbarWrapper,
  NavbarUlWideScreen,
  NavbarLiWideScreen,
  NavbarNavigationWideScreen,
  Logo,
  ToggleIcon,
  BackgroundNarrowScreen,
  BackgroundContainerNarrowScreen,
  StyledLink,
  NavContainerNarrowScreen,
} from "./NavbarStyles";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <NavbarWrapper>
      <Logo to={routes.home} onClick={() => setIsMenuOpen(false)} />
      <NavbarNavigationWideScreen>
        <NavbarUlWideScreen>
          <NavbarLiWideScreen to={routes.home}>
            Strona główna
          </NavbarLiWideScreen>
          <NavbarLiWideScreen>Kontakt</NavbarLiWideScreen>
          <NavbarLiWideScreen>Lupka</NavbarLiWideScreen>
        </NavbarUlWideScreen>
      </NavbarNavigationWideScreen>
      <ToggleIcon
        open={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      <BackgroundContainerNarrowScreen isMenuOpen={isMenuOpen}>
        <BackgroundNarrowScreen
          isMenuOpen={isMenuOpen}
          animate={isMenuOpen ? { scale: 200 } : { scale: 0 }}
          transition={
            isMenuOpen
              ? {
                  type: "spring",
                  stiffness: 20,
                  restDelta: 1,
                }
              : {
                  delay: 0.5,
                  type: "spring",
                  stiffness: 400,
                  damping: 40,
                }
          }
        />
      </BackgroundContainerNarrowScreen>
      <NavContainerNarrowScreen
        initial={{ opacity: 0, visibility: "hidden" }}
        animate={
          isMenuOpen
            ? { opacity: 1, visibility: "visible" }
            : { opacity: 0, visibility: "hidden" }
        }
        transition={
          isMenuOpen
            ? {
                type: "spring",
                stiffness: 400,
                damping: 40,
                delay: 0.5,
              }
            : {
                type: "spring",
                stiffness: 400,
                damping: 40,
              }
        }
      >
        <StyledLink smooth onClick={() => setIsMenuOpen(false)}>
          Strona główna
        </StyledLink>
        <StyledLink smooth onClick={() => setIsMenuOpen(false)}>
          Kontakt
        </StyledLink>
        <StyledLink smooth onClick={() => setIsMenuOpen(false)}>
          Lupka
        </StyledLink>
      </NavContainerNarrowScreen>
    </NavbarWrapper>
  );
};

export default Navbar;
