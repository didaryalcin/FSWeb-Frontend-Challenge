import React from "react";
const projectsData = [
  {
    img: "./icons/pizzaorder.png",
    title: "Order Pizza",
    description:
      "A pizza ordering site that I made using routing, forms, cypress tests and css.",
    skills: ["JavaScript", "CSS", "Form"],
    gitHub: "https://github.com/didaryalcin/fsweb-s7-challenge-pizza",
    vievSite: "https://fsweb-s7-challenge-pizza-zkla-eywp3g0g2-didaryalcins-projects.vercel.app",
  },
  {
    img: "./icons/calculator.png",
    title: "Calculator",
    description:
      "In this project, I created a simple calculator application that can add, multiply, subtract and subtract numbers in any order, as well as add save and callback features.",
    skills: ["JavaScript", "Redux", "useReducer"],
    gitHub: "https://github.com/didaryalcin/fsweb-s10g1-reducer-calculator",
    vievSite: "",
  },
  {
    img: "./icons/nasaI.png",
    title: "Nasa",
    description: "",
    skills: ["JavaScript", "React", "Effect Hook"],
    gitHub: "https://github.com/didaryalcin/FSWeb-S6G3-Nasa",
    vievSite: "",
  },
  {
    img: "./icons/watchlist.png",
    title: "Watch List",
    description: "",
    skills: ["JavaScript", "Redux Middleware", "ApplyMiddleware"],
    gitHub: "https://github.com/didaryalcin/fsweb-s10g3-redux-watchlist",
    vievSite: "",
  },
  {
    img: "./icons/s6-challenge.png",
    title: "Star Wars Carecters",
    description: "",
    skills: ["JavaScript", "React", "Bootstrap"],
    gitHub: "https://github.com/didaryalcin/FSWeb-S6-Challenge",
    vievSite: "/",
  },
  {
    img: "./icons/s9g2-ornek.png",
    title: "Task",
    description: "",
    skills: ["JavaScript", "React", "Tailwindcss"],
    gitHub: "https://github.com/didaryalcin/fsweb-s9g2-task-yonetimi-2",
    vievSite: "",
  },
];
const projectsDataTr = [
  {
    img: "./icons/pizzaorder.png",
    title: "Pizza Siparişi",
    description: "",
    skills: ["JavaScript", "CSS", "Form"],
    gitHub: "https://github.com/didaryalcin/fsweb-s7-challenge-pizza",
    vievSite: "",
  },
  {
    img: "./icons/calculator.png",
    title: "Calculator",
    description: "",
    skills: ["JavaScript", "Redux", "useReducer"],
    gitHub: "https://github.com/didaryalcin/fsweb-s10g1-reducer-calculator",
    vievSite: "",
  },
  {
    img: "./icons/nasaI.png",
    title: "Nasa",
    description: "",
    skills: ["JavaScript", "React", "Effect Hook"],
    gitHub: "https://github.com/didaryalcin/FSWeb-S6G3-Nasa",
    vievSite: "",
  },
  {
    img: "./icons/watchlist.png",
    title: "Watch List",
    description: "",
    skills: ["JavaScript", "Redux Middleware", "ApplyMiddleware"],
    gitHub: "https://github.com/didaryalcin/fsweb-s10g3-redux-watchlist",
    vievSite: "",
  },
  {
    img: "./icons/s6-challenge.png",
    title: "Star Wars Carecters",
    description: "",
    skills: ["JavaScript", "Reactstrap", "Bootstrap"],
    gitHub: "https://github.com/didaryalcin/FSWeb-S6-Challenge",
    vievSite: "",
  },
  {
    img: "./icons/s9g2-ornek.png",
    title: "Task",
    description: "",
    skills: ["JavaScript", "React", "Tailwindcss"],
    gitHub: "https://github.com/didaryalcin/fsweb-s9g2-task-yonetimi-2",
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
