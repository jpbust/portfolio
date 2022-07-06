import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import GradientLine from "../GradientLine";

const Nav = () => {
  return (
    <div className="navBarContainer">
      <nav id="nav">
        <ul>
          <li>
            <h1>
              <Link to="/">
                <a className="nameTop">
                  <FontAwesomeIcon
                    className="fa-brands fa-laptop-code"
                    icon={faLaptopCode}
                  />
                  <span>Juan Pablo Bustamante</span>
                </a>
              </Link>
            </h1>
          </li>
          <li>
            <HashLink to="/#projects">
              <a>Projects</a>
            </HashLink>
          </li>
          <li>
            <Link to="aboutme">About</Link>
          </li>
          <li>
            <HashLink to="/#contact">
              <a>Contact</a>
            </HashLink>
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
              <FontAwesomeIcon
                className="fa-brands fa-github"
                icon={faGithub}
              />
              <span className="sr-only">Github</span>
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/16hqbmaj0SG-u1bNTflAGII0ayt9CIYPL/edit?usp=sharing&ouid=112101043673644164577&rtpof=true&sd=true"
              target="_blank"
              className="button"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <GradientLine />
    </div>
  );
};

export default Nav;
