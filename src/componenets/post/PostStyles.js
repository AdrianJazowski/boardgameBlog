/** @format */

import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostWrapper = styled.div`
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid lightgray;
`;
export const PostHeader = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 10px;
`;
export const PostInfo = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  :hover {
    color: ${({ theme }) => theme.primary};
  }
`;
export const PostBody = styled.div`
  overflow-wrap: anywhere;
  color: ${({ theme }) => theme.black};
`;
export const PostButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const LikeCounter = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  color: ${({ theme }) => theme.black};
  font-size: 18px;
  align-items: center;
`;
export const AuthorAndDelete = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    outline: none;
    border: none;
    background-color: transparent;
    transition: 0.3s;
    border-radius: 5px;
    padding: 5px;
    :hover {
      background-color: lightgray;
    }
  }
`;
