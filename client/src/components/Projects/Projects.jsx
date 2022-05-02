import React from "react";
import { Project } from "../Common/Project";

const allProjects = [
  {
    title: "Helping Hands",
    content: `Helping Hands is collaborative full-stack application that provides a platform to help those in need. Users can contribute or request items and services. It was developed with a React front end using React Router to handle different URLs of the application. A node/express back end with a PostgreSQL database connected to a cloudinary blob storage web service for images hosting. `,
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
    title: "Whitney, a Full-Stack e-commerce Store Single Page Application",
    content:
      "Witney Shopping Solutions is collaborative full-stack application that provides a vanilla-Javascript shopping experience, deliberately no front-end external libraries where used. This e-commerce store have modern stores features like browsing through pictures, questions & answer section and ratins & reviews.  browse or request items and services.",
    stacks: [
      "React",
      "Node",
      "Vanilla-JS",
      "Express",
      "HTML",
      "CSS",
      "PostgreSQL",
    ],
    gitURL: "https://github.com/Whitney-HR/E-Commerce-React",
    image: {
      url: "https://camo.githubusercontent.com/49e6b929e5008f25005412e1d87997468efc77e83c4ed575236fddef41f10ef0/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6a70627573742f696d6167652f75706c6f61642f76313633333130323233322f53637265656e5f53686f745f323032312d31302d30315f61745f31302e32372e34395f717a636b66682e6a7067",
      alt: "Screenshot of Whiteney web page.",
    },
  },
  {
    title: "Mini Inventory, a Full-Stack inventory solution",
    content:
      "Mini Inventory Management System is a 24 hour sprint full-stack application developed in React that uses API connection to automatically render UPC-code images and other metadata information.",
    stacks: [
      "React",
      "Node",
      "Vanilla-JS",
      "Express",
      "HTML",
      "CSS",
      "PostgreSQL",
    ],
    gitURL: "https://github.com/jpbust/projects-mini-ims",
    image: {
      url: "https://camo.githubusercontent.com/589329c0fc2a703074419389107236f01ebd6cfb9683528f9ab7b414c0a22135/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6a70627573742f696d6167652f75706c6f61642f76313633323736393135342f4d494d535f75746f3566642e6a7067",
      alt: "Screenshot of IMS web page.",
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
