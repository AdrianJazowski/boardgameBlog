/** @format */

import React from "react";
import { auth } from "../firebase/firebaseConfig";

const RegisterForm = () => {
  const handleRegisterUser = (e) => {
    e.preventDefault();

    const userEmail = e.target.userEmail.value;
    const userPassword = e.target.userPassword.value;

    auth
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then(() => alert("ZAREJESTROWANO"))
      .catch((err) => alert(`${err}`));
    e.target.reset();
  };

  return (
    <>
      <h2>REGISTER</h2>
      <form onSubmit={handleRegisterUser}>
        <input type="email" name="userEmail" placeholder="type email" />
        <input
          type="password"
          name="userPassword"
          placeholder="type password"
        />
        <button type="submit">register</button>
      </form>
    </>
  );
};

export default RegisterForm;
