import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainContainer from "./containers/main-container/MainContainer";
import "./App.css";

const App = () => (
  <div>
    <Header />
    <MainContainer />
    <Footer />
  </div>
);

export default App;
