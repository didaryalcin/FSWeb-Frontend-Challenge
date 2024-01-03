import React from "react";

export default function Profile({ language }) {
  return (
    <div className="profile">
      <span className="profileLine"></span>
      <h3>{language === "en" ? "Profile" : "Profil"}</h3>
      <div className="profileBox1">
        <div className="profileBox">
          <h4>{language === "en" ? "Profile" : "Profil"}</h4>
          <div className="dogumTarihi">
            <div className="solBolum">
              <p>{language === "en" ? "Date of birth" : "Doğum tarihi"}</p>
              <p>{language === "en" ? "City of residence" : "İkamet şehri"}</p>
              <p>
                {language === "en" ? "Educational status" : "Eğitim bilgileri"}
              </p>
              <br />
              <br />
              <p>
                {language === "en" ? "Preferred role" : "Tercih ettiği rol"}
              </p>
            </div>
            <div className="sagBolum">
              <p>24.05.1992</p>
              <p>İstanbul</p>
              <p>
                Doğus Unv. EUT
                <br />
                {language === "en" ? "Licence" : "Lisans"}, 2020
                <br />
                <br />
              </p>
              <p>Frontend, UI</p>
            </div>
          </div>
        </div>
        {language === "en" ? (
          <div className="aboutMe">
            <h4>About Me</h4>
            <p>
              I graduated from the Industrial Product Design department at Doğuş
              University. During my education, I had the opportunity to study in
              Italy for a year thanks to the Erasmus program. After graduation,
              I worked in the shipbuilding sector and was involved in the design
              and production stages of 65 ships, specializing in equipment
              design. My school and work experiences helped me develop the
              ability to effectively use different software and programs and
              enhance my problem-solving skills. Therefore, I can easily utilize
              my skills in collaborating with teams <br /> <br /> I have
              enrolled in a 6-month intensive and accelerated full stack web
              development online school with
              <span style={{ color: "#4731d3" }}> Workintech</span> , I enrolled
              in a six-month intensive and accelerated full-stack web
              development online school. Within this program, I had the
              opportunity to learn and apply real-world software projects
              through team collaborations. Throughout this process, I gained
              proficiency in various technologies and actively participated in
              project development processes.
            </p>
          </div>
        ) : (
          <div className="aboutMe">
            <h4>Hakkımda</h4>
            <p>
              Doğuş Üniversitesi Endüstri Ürünleri Tasarımı bölümünden mezun
              oldum. Eğitimim süresince, Erasmus programı fırsatıyla bir yıl
              boyunca İtalya'da öğrenim gördüm. Mezuniyetimin ardından gemi
              inşaat sektöründe çalıştım ve 65 geminin tasarım ve üretim
              aşamalarında yer aldım, özellikle de donatım tasarımı konusunda
              uzmanlaştım. Okul ve iş deneyimlerim, farklı yazılım ve
              programları etkin bir şekilde kullanma yeteneğimi geliştirmeme ve
              sorunları çözme becerilerimi artırmama yardımcı oldu. Bu nedenle,
              takımlarla uyum sağlama konusunda da kolaylıkla yeteneklerimi
              kullanabilirim. <br /> <br />
              <span style={{ color: "#4731d3" }}>Workintech</span> Altı aylık
              yoğun ve hızlandırılmış bir tam yığın web geliştirme çevrimiçi
              okuluna kayıt oldum. Bu programın içerisinde, gerçek dünya yazılım
              projelerini ekip çalışmalarıyla öğrenme ve uygulama fırsatım oldu.
              Bu süreç boyunca çeşitli teknolojilerde yeterlilik kazandım ve
              proje geliştirme süreçlerine aktif olarak katıldım.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
