/** @format */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase/firebaseConfig";
import { loginAdmin, loginUser } from "./actions";
import MainPage from "./views/mainPage/MainPage";
import Login from "./componenets/login/Login";
import { usersCollections } from "./firebase/firestoreUtils";

const Root = () => {
  const [loading, setLoading] = useState(false);

  const selectedUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    auth.onAuthStateChanged((user) => {
      if (user) {
        usersCollections
          .doc(user.uid)
          .get()
          .then((doc) => dispatch(loginUser(doc.data())))
          .catch((err) => console.log(err));

        setLoading(false);
      } else {
        dispatch(loginUser(null));
      }
    });
  }, []);

  return <>{selectedUser ? <MainPage /> : <Login />}</>;
};

export default Root;
