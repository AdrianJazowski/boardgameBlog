/** @format */

import styled, { css } from "styled-components";

export const WrapperForCommentsComponent = styled.div`
  ${({ visible }) =>
    !visible &&
    css`
      display: none;
    `}
`;

export const CommentsWrapper = styled.div`
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid lightgray;
`;

export const CommentsLi = styled.li`
  list-style: none;
`;
export const OneCommentAuthorAndContents = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 12px;
    margin: 0 0 5px 0;
  }
  h4 {
    font-size: 18px;
    color: ${({ theme }) => theme.black};
  }
`;

export const FormInComments = styled.form`
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
    outline: none;
  }
`;
