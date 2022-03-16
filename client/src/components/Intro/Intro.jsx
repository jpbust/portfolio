import React, { Component } from "react";

export class Intro extends Component {
  render() {
    return (
      <section id="intro">
        <p className="name">
          Hi, my name is <span>Juan Pablo Bustamante.</span>
        </p>

        <h2>I am Full-Stack Software Developer.</h2>

        <p>
          I'm a Javascript/Typescript developer working in bringing impatcfull
          and scalable business solutions using React, React Native, Node,
          Express, MySql, MongoDB among other frameworks.
        </p>

        <p>
          Currently, I'm a Front-End Software Developer at{" "}
          <a href="https://www.thryv.com/" target="_blank">
            Thryv
          </a>{" "}
          and also building some indepent software projects.{" "}
        </p>
      </section>
    );
  }
}

export default Intro;
