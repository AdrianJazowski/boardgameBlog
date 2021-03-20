/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions";
import { auth } from "../../firebase/firebaseConfig";
import { LoginForm, LoginP, LoginWrapper } from "./LoginStyles";
import { addUser } from "../../firebase/firestoreUtils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          loginUser({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            author: userAuth.user.author,
          })
        );
      })
      .catch((error) => alert("Coś poszło nie tak sprawdź email lub login"));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((item) => {
        const uid = item.user.uid;
        const newUser = {
          email,
          uid,
          userName: name,
          password,
          role: "user",
        };
        addUser(uid, newUser);
        dispatch(loginUser(newUser));
      })
      .catch((error) => alert(error));
  };

  return (
    <LoginWrapper>
      <LoginForm>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={loginToApp}>
          Sing in
        </button>
      </LoginForm>
      <LoginP>
        Nie masz konta? <span onClick={register}>Zarejestruj się</span>
      </LoginP>
    </LoginWrapper>
  );
};

export default Login;
