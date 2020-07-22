import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainContainer from "./containers/main-container/MainContainer";
import { withRouter } from "react-router";
import api from "./services/api";
import "./App.css";

const App = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [firstName, setFirstName] = useState(null);

  useEffect(() => {
    api.auth
      .autoLogin()
      .then((res) => res.json())
      .then((status) => checkLoggedIn(status))
      .catch((err) => console.log("error:", err));
  }, []);

  const checkLoggedIn = (user) => {
    if (user.expires) {
      const expiresAt = Date.parse(user.expires) - Date.now();
      setTimeout(logOut, expiresAt);
    }
    setLoggedIn(user.loggedIn);
    setIsAdmin(user.isAdmin);
    setLoginError(user.error || null);
    setFirstName(user.firstName);
  };

  const logOut = () => {
    const config = {
      method: "DELETE",
      credentials: "include",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    api.auth.logOut(config).then((res) => res.json());

    setLoggedIn(false);
    setIsAdmin(false);
    setFirstName(null);
    setLoginError("Your session has timed out.");
    return () => props.history.push("/signin");
  };

  const afterLogin = (user) => {
    checkLoggedIn(user);
    if (user.loggedIn) {
      props.history.push("/");
    }
  };

  return (
    <div>
      <Header
        loggedIn={loggedIn}
        loginError={loginError}
        isAdmin={isAdmin}
        firstName={firstName}
        logOut={logOut}
      />
      <MainContainer
        loggedIn={loggedIn}
        afterLogin={afterLogin}
        loginError={loginError}
        isAdmin={isAdmin}
        firstName={firstName}
      />
      <div className="space"></div>
      <Footer />
    </div>
  );
};

export default withRouter(App);
