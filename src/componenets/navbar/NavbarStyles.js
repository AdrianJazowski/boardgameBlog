/** @format */
import styled, { css } from "styled-components";
import logo from "../../assets/svg/boardgame.svg";
import { GiCrossedAxes } from "react-icons/gi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  position: sticky;
  top: 0;
  display: grid;
  background-color: white;
  grid-template-columns: 20% 35% 40% 5%;
  grid-template-rows: 1fr;
  width: 100%;
  height: 10vh;
  border-bottom: 1px solid black;
  font-size: 18px;
  font-weight: 600;
  z-index: 100;

  @media ${({ theme }) => theme.viewPorts.viewport7} {
    grid-template-columns: 10% 35% 40% 15%;
  }
`;

export const Logo = styled(Link)`
  z-index: 100;
  cursor: pointer;
  background-size: ${({ theme }) => theme.fontSize.m};
  background-repeat: no-repeat;
  background-position: 50%;
  background-image: url(${logo});

  @media ${({ theme }) => theme.viewPorts.viewport4} {
    background-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const NavbarNavigationWideScreen = styled.div`
  display: none;
  grid-column: 3/4;

  @media ${({ theme }) => theme.viewPorts.viewport7} {
    display: block;
  }
`;
export const ToggleIcon = styled(GiCrossedAxes)`
  position: absolute;
  align-self: center;
  justify-self: end;
  margin-right: 40px;
  font-size: 40px;
  cursor: pointer;
  fill: ${({ open, theme }) => (open ? theme.yellow : theme.black)};
  z-index:100;
}

  @media ${({ theme }) => theme.viewPorts.viewport7} {
    display: none;
  }
`;
export const BackgroundContainerNarrowScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  visibility: ${({ isMenuOpen }) => (isMenuOpen ? "visible" : "hidden")};
  transition-delay: ${({ isMenuOpen }) => !isMenuOpen && "1s"};

  @media ${({ theme }) => theme.viewPorts.viewport7} {
    display: none;
  }
`;

export const BackgroundNarrowScreen = styled(motion.div)`
  position: absolute;
  top: 3rem;
  right: 3rem;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.black};

  @media ${({ theme }) => theme.viewPorts.viewport7} {
    top: -3rem;
    left: 50%;
  }
`;

export const NavbarUlWideScreen = styled.ul`
  list-style-type: none;
  display: flex;
  height: 100%;
  width: 100%;
`;
export const NavbarLiWideScreen = styled(Link)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #26cdc7;
    transition: 0.3s;
  }
`;
export const NavContainerNarrowScreen = styled(motion.nav)`
  position: absolute;
  top: 9rem;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.viewPorts.viewport7} {
    display: none;
  }
`;

export const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.yellow};
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;
  margin-right: auto;
  color: ${({ theme }) => theme.yellow};
`;
