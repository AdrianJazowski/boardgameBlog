/** @format */

import styled from "styled-components";

export const RecentGropupsWrapper = styled.div`
  display: flex;
  font-size: 13px;
  color: gray;
  font-weight: bolder;
  margin-bottom: 5px;
  padding: 5px;
`;
export const OneGroup = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 16px;
    color: ${({ theme }) => theme.black};
  }
  button {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.black};
    width: 150px;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #ffc069;
    }
  }
`;
