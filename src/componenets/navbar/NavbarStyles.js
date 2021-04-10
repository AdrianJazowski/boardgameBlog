/** @format */
import styled from "styled-components";
import logo from "../../assets/svg/boardgame.svg";
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
  background-size: contain;
  height: 80%;
  width: 5rem;
  background-repeat: no-repeat;
  background-position: 50%;
  background-image: url(${logo});
  margin: auto 40px;
`;
export const InputWrapper = styled.form`
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
export const InputButton = styled.button`
  display: flex;
  outline: none;
  background-color: transparent;
  background: none;
  border: none;
  cursor: pointer;
`;
export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background: none;
`;
export const Navigation = styled.ul`
  display: flex;
  align-items: center;
`;
