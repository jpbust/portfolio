import React from "react";
import { Project } from "../Common/Project";

const allProjects = [
  {
    title: "Helping Hands",
    content: `Helping Hands is collaborative full-stack application that provides a platform to help those in need. Users can contribute or request items and services. It was developed with a React front end using React Router to handle different URLs of the application. A node/express back end with a PostgreSQL database connected to a cloudinary blob storage web service for images. `,
    stacks: [
      "React",
      "Node",
      "Express",
      "React Router",
      "HTML",
      "CSS",
      "Cloudinary",
      "Heroku",
      "Passport JS",
      "PostgreSQL",
    ],
    gitURL: "https://github.com/Redwood-Interactive/helping-hands",
    deployed: "https://helping-hands-redwood.herokuapp.com/",
    image: {
      url: "https://i.imgur.com/UOjt1PU.png",
      alt: "Screenshot of helping hands web page.",
    },
  },
  {
    title: "Whitney e-commerce solution",
    content:
      "Witney Shopping Solutions is collaborative full-stack application that provides a vanilla-Javascript shopping experience, deliberately no front-end external libraries where used. This e-commerce store have modern stores features like browsing through pictures, questions & answer section and ratins & reviews.  browse or request items and services.",
    stacks: [
      "React",
      "Node",
      "Express",
      "HTML",
      "CSS",
      "Cloudinary",
      "PostgreSQL",
    ],
    gitURL: "https://github.com/Redwood-Interactive/helping-hands",
    deployed: "https://helping-hands-redwood.herokuapp.com/",
    image: {
      url: "https://i.imgur.com/UOjt1PU.png",
      alt: "Screenshot of helping hands web page.",
    },
  },
];

export const Projects = () => {
  return (
    <div className="section-darkBlue">
      <div id="projects">
        <h3>Projects I'm proud of</h3>
        <h4>Latest Projects</h4>

        {allProjects.map((project, index) => {
          return (
            <Project
              key={project.title}
              title={project.title}
              description={project.content}
              stacks={project.stacks}
              image={project.image}
              deployed={project.deployed}
              gitURL={project.gitURL}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};