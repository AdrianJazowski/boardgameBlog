/** @format */
import styled, { css } from "styled-components";
import logo from "../../assets/svg/boardgame.svg";
import { GiCrossedAxes } from "react-icons/gi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  display: flex;
  background-color: white;
  width: 100%;
  height: 10vh;
  border-bottom: 1px solid black;
  z-index: 90;
  justify-content: space-evenly;
`;
export const Logo = styled(Link)`
  z-index: 100;
  cursor: pointer;
  background-size: 80px;
  height: 80px;
  width: 80px;
  background-repeat: no-repeat;
  background-position: 50%;
  background-image: url(${logo});
  margin: auto 40px;
`;
export const InputWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin: auto 30px;
  height: 40px;
  width: 30%;
  color: gray;
  background-color: #eef3f8;
  border: 1px solid grey;
`;
export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
`;
export const Navigation = styled.ul``;
