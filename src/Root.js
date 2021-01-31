/** @format */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { auth } from "./firebase/firebaseConfig";
import Router from "./routing/Router";
import Admin from "./views/Admin";
import Home from "./views/Home";
// import RegisterForm from "./componenets/RegisterForm";

const Root = ({ currentUser, setCurrentUser }) => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, [currentUser]);

  return (
    <div>
      <Router />
      {currentUser ? <Admin /> : <Home />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUserAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
