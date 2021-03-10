/** @format */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase/firebaseConfig";
import { loginAdmin } from "./actions";
import AdminTemplate from "./templates/AdminTemplate";
import UserTemplate from "./templates/UserTemplate";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./globalStyles/mainTheme";

const Root = () => {
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(mainTheme);

  const selectedAdmin = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(loginAdmin(user.uid));
        setLoading(false);
      } else {
        dispatch(loginAdmin(null));
      }
    });
  }, [selectedAdmin]);

  return (
    <>
      <ThemeProvider theme={theme}></ThemeProvider>
      {selectedAdmin ? (
        <AdminTemplate />
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <UserTemplate />
      )}
    </>
  );
};

export default Root;
