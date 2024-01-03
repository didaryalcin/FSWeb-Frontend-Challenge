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
    description: "In this project, I created a simple calculator application that can add, multiply, subtract and subtract numbers in any order, as well as add save and callback features.",
    skills: ["JavaScript", "Redux", "useReducer"],
    gitHub: "https://github.com/didaryalcin/fsweb-s10g1-reducer-calculator",
    vievSite: "https://calculator-six-ashen.vercel.app/",
  },
  {
    img: "./icons/nasaI.png",
    title: "Nasa",
    description: "In this project, NASA API has been used, and the design has been customized with CSS and flex.",
    skills: ["JavaScript", "React", "Effect Hook"],
    gitHub: "https://github.com/didaryalcin/FSWeb-S6G3-Nasa",
    vievSite: "https://nasa-didaryalcins-projects.vercel.app/",
  },
  {
    img: "./icons/watchlist.png",
    title: "Watch List",
    description: "In this project, I created a movie list with redux.",
    skills: ["JavaScript", "Redux Middleware", "ApplyMiddleware"],
    gitHub: "https://github.com/didaryalcin/fsweb-s10g3-redux-watchlist",
    vievSite: "https://watchlist-topaz.vercel.app/",
  },
  {
    img: "./icons/s6-challenge.png",
    title: "Star Wars Carecters",
    description: 
    "This project was created with data obtained from the API, styled using styled-components for components, and characters were also placed in the DOM.",
    skills: ["JavaScript", "React", "Bootstrap"],
    gitHub: "https://github.com/didaryalcin/FSWeb-S6-Challenge",
    vievSite: "https://starwarscaracters.vercel.app/",
  },
  {
    img: "./icons/minnet.png",
    title: "Gratitude Diary",
    description:  "It is the project where I get data from an API with redux thunk and an asynchronous action creator, use redux, localStorage and react-toastify.",
    skills: ["JavaScript", "redux", "localStorage"],
    gitHub: "https://github.com/didaryalcin/fsweb-s10g4-thunk-and-apis",
    vievSite: "https://minnet-gunlugum.vercel.app/",
  },
];
const projectsDataTr = [
  {
    img: "./icons/pizzaorder.png",
    title: "Pizza Siparişi",
    description: "Routing, formlar, cypress testleri ve css kullanarak yaptığım bir pizza sipariş sitesi.",
    skills: ["JavaScript", "CSS", "Form"],
    gitHub: "https://github.com/didaryalcin/fsweb-s7-challenge-pizza",
    vievSite: "https://fsweb-s7-challenge-pizza-zkla-eywp3g0g2-didaryalcins-projects.vercel.app",
  },
  {
    img: "./icons/calculator.png",
    title: "Hesap Makinesi",
    description: "Bu projede, sayıları herhangi bir sırayla toplayabilen, çarpabilen, çıkarabilen ve çıkartabilen, ayrıca hafızaya kaydetme ve callback özellikleri ekleyebilen basit bir hesap makinesi uygulaması oluşturdum",
    skills: ["JavaScript", "Redux", "useReducer"],
    gitHub: "https://github.com/didaryalcin/fsweb-s10g1-reducer-calculator",
    vievSite: "https://calculator-six-ashen.vercel.app/",
  },
  {
    img: "./icons/nasaI.png",
    title: "Nasa",
    description: "Bu projede NASA API kullanmıştır, ayrıca css ve flex ile tasarım özelleştirilmiştir",
    skills: ["JavaScript", "React", "Effect Hook"],
    gitHub: "https://github.com/didaryalcin/FSWeb-S6G3-Nasa",
    vievSite: "https://nasa-didaryalcins-projects.vercel.app/",
  },
  {
    img: "./icons/watchlist.png",
    title: "Film Listesi",
    description: "Bu projede redux ile bir film listesi oluşturdum.",
    skills: ["JavaScript", "Redux Middleware", "ApplyMiddleware"],
    gitHub: "https://github.com/didaryalcin/fsweb-s10g3-redux-watchlist",
    vievSite: "https://watchlist-topaz.vercel.app/",
  },
  {
    img: "./icons/s6-challenge.png",
    title: "Star Wars Karakterler",
    description: "Bu proje API'den alınan verilerle oluşturuldu bileşenler için styled-components ile stillendirildi aynı zamanda karakterler DOM'da yer aldı ",
    skills: ["JavaScript", "Reactstrap", "Bootstrap"],
    gitHub: "https://github.com/didaryalcin/FSWeb-S6-Challenge",
    vievSite: "https://starwarscaracters.vercel.app/",
  },
  {
    img: "./icons/minnet.png",
    title: "Minnet Günlüğü",
    description:  "Redux thunk ve asenkron bir action creator ile bir API'dan veri aldığım, redux, localStorage ve react-toastify kullandığım projedir.",
    skills: ["JavaScript", "redux", "localStorage"],
    gitHub: "https://github.com/didaryalcin/fsweb-s10g4-thunk-and-apis",
    vievSite: "https://minnet-gunlugum.vercel.app/",
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
