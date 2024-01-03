import React from "react";

export default function Footer({ language }) {
  return (
    <div className="footer">
      {language === "en" ? (
        <h3 className="letsWork">
          Let's work together and take your next 
          <br />
          product to success.
        </h3>
      ) : (
        <h3 className="letsWork">
          "Birlikte çalışalım ve sonraki ürününüzü 
          <br />
          başarıya taşıyalım.
        </h3>
      )}
      <div className="rectangle">
        <a className="email" href="ddrylcn@gmail.com">
          <img src=".\icons\el.svg" alt="icon" />
          <p className="emailcss">ddrylcn@gmail.com</p>
        </a>

        <nav className="sagF">
          {/* <a className="sagF1" href="#">
            Personal Blog
          </a> */}
          <a
            className="sagF2"
            href="https://github.com/didaryalcin"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="sagF3"
            href="https://www.linkedin.com/in/didaryalcin/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </nav>
      </div>
    </div>
  );
}
