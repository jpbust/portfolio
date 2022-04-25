import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer id="footer">
      <span className="footerName">
        Juan Pablo Bustamante - Full-stack Software Developer
      </span>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/jpbust/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="sr-only"> LinkedIn </span>
          </a>
        </li>
        <li>
          <a href="https://github.com/jpbust" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="mailto:cuchobustamante@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="sr-only">Email</span>
          </a>
        </li>
      </ul>
      <span className="rights">
        © 2022 Juan Pablo Bustamante. All rights reserved.
      </span>
    </footer>
  );
}
