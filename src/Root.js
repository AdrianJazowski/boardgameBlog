/** @format */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase/firebaseConfig";
import { loginUser } from "./actions";
import MainPage from "./views/mainPage/MainPage";
import LoginAndRegister from "./componenets/loginAndRegister/LoginAndRegister";
import { usersCollections } from "./firebase/firestoreUtils";

const Root = () => {
  const selectedUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        usersCollections
          .doc(user.uid)
          .get()
          .then((doc) => dispatch(loginUser(doc.data())))
          .catch((err) => console.log(err));
      } else {
        dispatch(loginUser(null));
      }
    });
  }, []);

  return <>{selectedUser ? <MainPage /> : <LoginAndRegister />}</>;
};

export default Root;
