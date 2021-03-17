/** @format */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase/firebaseConfig";
import { loginAdmin } from "./actions";
import { mainTheme } from "./globalStyles/mainTheme";
import MainPage from "./views/mainPage/MainPage";

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
      {selectedAdmin ? (
        <MainPage />
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <p>zaloguj sie </p>
      )}
    </>
  );
};

export default Root;
