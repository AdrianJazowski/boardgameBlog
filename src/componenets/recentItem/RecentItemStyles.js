/** @format */

import styled from "styled-components";

export const RecentItemWrapper = styled.div`
  display: flex;
  font-size: 13px;
  color: red;
  font-weight: bolder;
  cursor: pointer;
  margin-bottom: 5px;
  padding: 5px;
  span {
    margin-right: 10px;
    margin-left: 5px;
  }
  &:hover {
    background-color: whitesmoke;
    border-radius: 10px;
    cursor: pointer;
  }
`;
