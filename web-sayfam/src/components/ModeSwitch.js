import React from "react";
import { useState, useEffect } from "react";

export default function ModeSwitch({ handleLanguageChange, language }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    const body = document.body;
    body.classList.toggle("dark-mode", darkMode);
    const footer = document.querySelector(".footer");
    footer.classList.toggle("dark-mode", darkMode);
    const footerModeText = document.querySelector(".modeText");
    footerModeText.classList.toggle("dark-mode", darkMode);
    const lang = document.querySelector(".lang");
    lang.classList.toggle("dark-mode", darkMode);
    const emailcss = document.querySelector(".emailcss");
    emailcss.classList.toggle("dark-mode", darkMode);
    const techStack = document.querySelector(".techStack");
    techStack.classList.toggle("dark-mode", darkMode);
    const logo = document.querySelector(".logo");
    logo.classList.toggle("dark-mode", darkMode);
    const isim = document.querySelector(".isim");
    isim.classList.toggle("dark-mode", darkMode);
    const line = document.querySelector(".line");
    line.classList.toggle("dark-mode", darkMode);
    const headerNav = document.querySelector(".headerNav");
    headerNav.classList.toggle("dark-mode", darkMode);
    const heroLeft = document.querySelector(".heroLeft");
    heroLeft.classList.toggle("dark-mode", darkMode);
    const skills = document.querySelector(".skills");
    skills.classList.toggle("dark-mode", darkMode);
    const profileLine = document.querySelector(".profileLine");
    profileLine.classList.toggle("dark-mode", darkMode);
    const profile = document.querySelector(".profile");
    profile.classList.toggle("dark-mode", darkMode);
    const projects = document.querySelector(".projects");
    projects.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <div className="modeSwitch">
        <label className="toggle-switch">
          <input
            type="checkbox"
            className="toggle-switch-checkbox"
            onChange={handleToggle}
            checked={darkMode}
          />
          <span className="slider round"></span>
        </label>
        <div className="modeText">{darkMode ? "LIGHT MODE" : "DARK MODE"}</div>
        <div className="modeText">|</div>
        {language === "en" ? (
          <div className="modeText">
            <span
              className="lang"
              style={{ color: "#4731d3" }}
              onClick={handleLanguageChange}
            >
              TÜRKÇE
            </span>
            'YE GEÇ
          </div>
        ) : (
          <div className="modeText">
            <span className="lang" onClick={handleLanguageChange}>
              ENGLISH
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
