import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NewsletterModal from "./components/newsletter-modal/NewsletterModal";
import useModal from "./hooks/useModal";
import MainContainer from "./containers/main-container/MainContainer";
import { withRouter } from "react-router";
import api from "./services/api";
import "./App.css";

const App = (props) => {
  const { isShowing, toggle } = useModal();
  const dispatch = useDispatch();

  const checkLoggedIn = (user) => {
    if (user.expires) {
      const expiresAt = Date.parse(user.expires) - Date.now();
      setTimeout(logOut, expiresAt);
    }
    dispatch({ type: "SET_CURRENT_USER", payload: user.id });
    dispatch({ type: "SET_LOGGED_IN", payload: user.loggedIn });
    dispatch({ type: "SET_IS_ADMIN", payload: user.isAdmin });
    dispatch({ type: "ERROR_OCCURED", payload: user.error || null });
    dispatch({ type: "SET_FIRST_NAME", payload: user.firstName });
  };

  useEffect(() => {
    const timer = () =>
      setTimeout(() => {
        toggle();
      }, 5000);
    timer();
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    api.auth
      .autoLogin()
      .then((res) => res.json())
      .then((json) => checkLoggedIn(json))
      .catch((err) => console.log(err));
  }, []);

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

    dispatch({ type: "LOG_OUT_USER" });
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
      <Header logOut={logOut} />
      <MainContainer afterLogin={afterLogin} />
      <NewsletterModal isShowing={isShowing} hide={toggle} />
      <Footer />
    </div>
  );
};

export default withRouter(App);
