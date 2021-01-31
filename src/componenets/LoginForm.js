/** @format */

import React from "react";
import { auth } from "../firebase/firebaseConfig";

const LoginForm = () => {
  const handleLoginForm = (e) => {
    e.preventDefault();

    const userEmail = e.target.userEmail.value;
    const userPassword = e.target.userPassword.value;

    auth
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then(() => alert("Zalogowano"))
      .catch((err) => alert(err));

    e.target.reset();
  };
  return (
    <form onSubmit={handleLoginForm}>
      <input type="email" name="userEmail" placeholder="e-mail" />
      <input type="password" name="userPassword" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
