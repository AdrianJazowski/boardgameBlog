/** @format */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase/firebaseConfig";
import Router from "./routing/Router";
import Admin from "./views/Admin";
import Home from "./views/Home";
import { loginAdmin } from "./actions";
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
    <div>
      <Router />
      {selectedAdmin ? <Admin /> : <Home />}
    </div>
  );
};

export default Root;
