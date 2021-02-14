/** @format */

import React from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "../componenets/navbar/Navbar";

import GlobalStyles from "../globalStyles/GlobalStyles";
import { mainTheme } from "../globalStyles/mainTheme";

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={mainTheme}>
        <Navbar />
        {children}
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
