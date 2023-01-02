import React, { useState } from "react";

import QuestionBox from "./components/QuestionBox/QuestionBox";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Register from "./components/Route/Register";

function App() {
  const [route, setRoute] = useState("Register");

  function routeHandler(routes) {
    setRoute(route);

    if (routes === "QuestionBox") {
      setRoute("QuestionBox");
    }
  }

  return (
    <div className="App">
      <Header />
      {route === "Register" && <Register onRoute={routeHandler} />}
      {route === "QuestionBox" && <QuestionBox />}
      {/*
      <IntroForm />
      */}
      <Footer />
    </div>
  );
}

export default App;
