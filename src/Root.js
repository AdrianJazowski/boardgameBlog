/** @format */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase/firebaseConfig";
import Router from "./routing/Router";
import MainPage from "./views/mainPage/MainPage";
import Home from "./views/Home";
import { loginAdmin } from "./actions";
import MainTemplate from "./templates/MainTemplate";
// import RegisterForm from "./componenets/RegisterForm";

const Root = () => {
  const selectedAdmin = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(loginAdmin(user.uid));
      } else {
        dispatch(loginAdmin(null));
      }
    });
  }, [selectedAdmin]);

  return (
    <>
      <MainTemplate />
      {selectedAdmin ? <MainPage /> : <Home />}
    </>
  );
};

export default Root;
