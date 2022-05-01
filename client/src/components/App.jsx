import React from "react";
import { Routes, Route, browserHistory } from "react-router-dom";
import Nav from "./Nav/Nav.jsx";
import Intro from "./Intro/Intro.jsx";
import Contact from "./Contact/Contact.jsx";
import Footer from "./Footer/Footer.jsx";
import GradientLine from "./GradientLine.jsx";
import { Projects } from "./Projects/Projects.jsx";
import { AboutMe } from "../routes/AboutMe.jsx";
import { NotFound } from "../routes/NotFound.jsx";

const landingPage = (
  <>
    <Intro />
    <GradientLine />
    <Projects />
    <GradientLine />
    <Contact />
    <GradientLine />
  </>
);

const App = () => {
  return (
    <div className="mainContainer">
      <Nav />
      <Routes>
        <Route path="/" element={landingPage}></Route>
        <Route path="/aboutme" element={<AboutMe />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
