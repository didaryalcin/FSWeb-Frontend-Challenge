import React from "react";
import { Link } from "react-scroll";

export default function Bio({ language }) {
  return (
    <div className="hero">
      <div className="heroLeft">
        <div className="isim">
          <div className="line"></div>
          <p>Didar Yalçın</p>
        </div>
        {language === "en" ? (
          <div>
            <h2>
            Forward-Looking Solutions  
              <br />
              in the Digital World
            </h2>{" "}
            <br /> <br />
            <p className="isimP">
              Hello, I'm Didar. I'm a Full Stack Web Developer based in
              Istanbul. Thanks to my passion and curiosity for technology, I
              learn new things every day and strive to provide my clients with
              the best solutions by applying this knowledge to my projects.
              Welcome to my website. Please don't hesitate to reach out if you
              have any questions or need assistance. I'm looking forward to
              collaborating with you! 👩‍💻🚀
            </p>
          </div>
        ) : (
          <div>
            <h2>
            "Dijital Dünyada İleriye 
              <br />
              Yönelik Çözümler
            </h2>
            <p className="isimP">
              Merhaba, Ben Didar. İstanbul'da yaşayan bir Full Stack Web
              Geliştiricisi'yim. Teknolojiye olan ilgim ve tutkum sayesinde her
              gün yeni şeyler öğreniyor ve bu bilgileri projelerimde kullanarak
              müşterilerime en iyi çözümleri sunmaya çalışıyorum. Web sitemi
              ziyaret ettiğiniz için hoş geldiniz. Herhangi bir sorunuz veya
              ihtiyacınız olduğunda benimle iletişime geçmekten çekinmeyin.
              İşbirliği yapmayı dört gözle bekliyorum! 👩‍💻🚀
            </p>
          </div>
        )}
        {language === "en" ? (
          <div className="buttons">
            <div className="button-1">
              <Link to="footer" smooth={true} duration={2000}>
                <p>Contact me</p>
              </Link>
            </div>
            <div className="button-2">
              <img src=".\icons\github.png" alt="github" />
              <a
                href="https://github.com/didaryalcin"
                target="_blank"
                rel="noreferrer"
              >
                <p>GitHub</p>
              </a>
            </div>
            <div className="button-2">
              <img src=".\icons\LinkedIn.png" alt="linkedIn" />
              <a
                href="www.linkedin.com/in/didaryalcin"
                target="_blank"
                rel="noreferrer"
              >
                <p>LinkedIn</p>
              </a>
            </div>
          </div>
        ) : (
          <div className="buttons">
            <div className="button-1">
              <Link to="footer" smooth={true} duration={2000}>
                <p>İletişime geç</p>
              </Link>
            </div>
            <div className="button-2">
              <img src=".\icons\github.png" alt="github" />
              <a
                href="https://github.com/didaryalcin"
                target="_blank"
                rel="noreferrer"
              >
                <p>GitHub</p>
              </a>
            </div>
            <div className="button-2">
              <img src=".\icons\LinkedIn.png" alt="linkedIn" />
              <a
                href="www.linkedin.com/in/didaryalcin"
                target="_blank"
                rel="noreferrer"
              >
                <p>LinkedIn</p>
              </a>
            </div>
          </div>
        )}
      </div>

      <img className="pPhoto" src=".\icons\didar.png" alt="icon" />
    </div>
  );
}
