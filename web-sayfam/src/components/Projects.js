import React from "react";
const projectsData = [
  {
    img: "./icons/pizzaorder.png",
    title: "Order Pizza",
    description:
      "A pizza ordering site that I made using routing, forms, cypress tests and css.",
    skills: ["JavaScript", "CSS", "Form"],
    gitHub: "https://github.com/didaryalcin/fsweb-s7-challenge-pizza",
    vievSite: "",
  },
  {
    img: "./icons/calculator.png",
    title: "Calculator",
    description:
      "",
    skills: ["JavaScript", "redux", "axios"],
    gitHub: "",
    vievSite: "",
  },
  {
    img: "./icons/nasaI.png",
    title: "Nasa",
    description: "",
    skills: ["JavaScript", "redux", "axios"],
    gitHub: "",
    vievSite: "",
  },
  {
    img: "./icons/watchlist.png",
    title: "Watch List",
    description:
      "",
    skills: ["JavaScript", "redux", "axios"],
    gitHub: "",
    vievSite: "",
  },
  {
    img: "./icons/s6-challenge.png",
    title: "Star Wars Carecters",
    description:
      "",
    skills: ["JavaScript", "redux", "useReducer"],
    gitHub: "",
    vievSite: "/",
  },
  {
    img: "./icons/s9g2-ornek.png",
    title: "Task",
    description:
      "",
    skills: ["JavaScript", "redux", "localStorage"],
    gitHub: "",
    vievSite: "",
  },
];
const projectsDataTr = [
  {
    img: "./icons/pizzaorder.png",
    title: "Pizza Siparişi",
    description:
      "",
    skills: ["JavaScript", "CSS", "Form"],
    gitHub: "",
    vievSite: "",
  },
  {
    img: "./icons/calculator.png",
    title: "Calculator",
    description:
      "",
    skills: ["JavaScript", "redux", "axios"],
    gitHub: "",
    vievSite: "",
  },
  {
    img: "./icons/nasaI.png",
    title: "Nasa",
    description: "",
    skills: ["JavaScript", "redux", "axios"],
    gitHub: "",
    vievSite: "",
  },
  {
    img: "./icons/watchlist.png",
    title: "Watch List",
    description:
      "",
    skills: ["JavaScript", "redux", "axios"],
    gitHub: "",
    vievSite: "",
  },
  {
    img: "./icons/s6-challenge.png",
    title: "Star Wars Carecters",
    description:
      "",
    skills: ["JavaScript", "redux", "useReducer"],
    gitHub: "",
    vievSite: "",
  },
  {
    img: "./icons/s9g2-ornek.png",
    title: "Task",
    description:
      "",
    skills: ["JavaScript", "redux", "localStorage"],
    gitHub: "",
    vievSite: "",
  },
];

export default function Projects({ language }) {
  return language === "en" ? (
    <div className="projects">
      <span className="profileLine"></span>
      <h3>Projects</h3>
      <div className="kartlarGrup">
        {projectsData.map((project) => (
          <div className="projects-list" key={project.name}>
            <img src={project.img} alt="" />
            <h4>{project.title}</h4>
            <p className="aciklama">{project.description}</p>
            <div className="techStack">
              <p>{project.skills[0]}</p>
              <p>{project.skills[1]}</p>
              <p>{project.skills[2]}</p>
            </div>
            <div className="details">
              <a href={project.gitHub} target="_blank" rel="noreferrer">
                <p>GitHub</p>
              </a>
              <a href={project.vievSite} target="_blank" rel="noreferrer">
                <p>Viev Site</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="projects">
      <span className="profileLine"></span>
      <h3>Projelerim</h3>
      <div className="kartlarGrup">
        {projectsDataTr.map((project) => (
          <div className="projects-list" key={project.name}>
            <img src={project.img} alt="" />
            <h4>{project.title}</h4>
            <p className="aciklama">{project.description}</p>
            <div className="techStack">
              <p>{project.skills[0]}</p>
              <p>{project.skills[1]}</p>
              <p>{project.skills[2]}</p>
            </div>
            <div className="details">
              <a href={project.gitHub} target="_blank" rel="noreferrer">
                <p>GitHub</p>
              </a>
              <a href={project.vievSite} target="_blank" rel="noreferrer">
                <p>Siteye Git</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
