import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  return (
    <nav id="nav">
      <ul>
        <li>
          <h1>
            <a href="index.html" className="nameTop">
              <FontAwesomeIcon
                className="fa-brands fa-laptop-code"
                icon={faLaptopCode}
              />
              <span>Juan Pablo Bustamante</span>
            </a>
          </h1>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jpbust/" target="_blank">
            <FontAwesomeIcon
              className="fa-brands fa-linkedin"
              icon={faLinkedin}
            />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/jpbust" target="_blank">
            <FontAwesomeIcon className="fa-brands fa-github" icon={faGithub} />
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1kh3QkzdQTP5Mq7s4-1j-SXaA5S4qPTnz/edit?usp=sharing&ouid=112101043673644164577&rtpof=true&sd=true"
            target="_blank"
            className="button"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
