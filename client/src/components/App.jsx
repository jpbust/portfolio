import React, { useState, useEffect } from "react";
import Nav from "./Nav/Nav.jsx";
import Intro from "./Intro/Intro.jsx";
import Contact from "./Contact/Contact.jsx";
import Footer from "./Footer/Footer.jsx";
import GradientLine from "./GradientLine.jsx";
import { Projects } from "./Projects/Projects.jsx";

const App = () => {
  return (
    <div className="mainContainer">
      <Nav />
      <GradientLine />
      <Intro />
      <GradientLine />
      <Projects />
      <GradientLine />
      <Contact />
      <GradientLine />
      <Footer />
    </div>
  );
};

export default App;
