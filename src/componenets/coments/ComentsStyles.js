/** @format */

import styled, { css } from "styled-components";

export const WrapperForComentsComponent = styled.div`
  ${({ visible }) =>
    !visible &&
    css`
      display: none;
    `}
`;

export const ComentsWrapper = styled.div`
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid lightgray;
`;

export const ComentsLi = styled.li`
  list-style: none;
`;
export const OneComentAuthorAndContents = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputInComents = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  justify-content: center;
  input {
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    margin: 5px auto;
    height: 40px;
    width: 100%;
    color: gray;
    border: 1px solid grey;
  }
`;
