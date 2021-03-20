/** @format */
import styled, { css } from "styled-components";

export const LoginWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  input {
    width: 350px;
    height: 50px;
    font-style: 20px;
    padding-left: 20px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  button {
    width: 350px;
    height: 50px;
    font-size: large;
    color: #fff;
    background-color: #0075b1;
    border-radius: 5px;
  }
`;
export const LoginP = styled.p`
  margin-top: 20px;
  span {
    color: #0177b7;
    cursor: pointer;
  }
`;
