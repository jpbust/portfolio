import React, { useState, useEffect } from "react";
import Nav from "./Nav/Nav.jsx";
import Intro from "./Intro/Intro.jsx";
import Contact from "./Contact/Contact.jsx";
import Footer from "./Footer/Footer.jsx";

const App = () => {
  return (
    <div className="mainContainer">
      <Nav />
      <Intro />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
