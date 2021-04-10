/** @format */

import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderOptionWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  color: gray;
  cursor: pointer;
  text-decoration: none;

  h3 {
    font-size: 12px;
    font-weight: 400;
  }
  svg {
    object-fit: contain;
    height: 25px;
    width: 25px;
    &:hover {
      fill: black;
    }
  }
`;
