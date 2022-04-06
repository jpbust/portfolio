import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Project = ({
  title,
  description,
  stacks,
  image,
  gitURL,
  deployed,
}) => {
  return (
    <article>
      <div className="text">
        <h3>{title}</h3>
        <p className="blackBox">{description}</p>
        <div className="projectLinks">
          <a href={gitURL} target="_blank">
            <FontAwesomeIcon className="fa-brands fa-github" icon={faGithub} />
            <span className="sr-only">Github</span>
          </a>
          {deployed && (
            <a className="button" href={deployed} target="_blank">
              Live Page
            </a>
          )}
        </div>

        <h4>Technologies used include:</h4>
        <ul>
          {stacks.map((tech, index) => {
            return <li key={index}>{tech}</li>;
          })}
        </ul>
      </div>

      <img className="appPreview" src={image.url} alt={image.alt}></img>
    </article>
  );
};
