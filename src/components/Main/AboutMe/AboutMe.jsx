import "./AboutMe.css";
import myPhoto from "../../../images/DSC09460.jpg"

function AboutMe() {
  return (
    <section className="aboutme">
      <h2 className="title_h2">Студент</h2>
      <div className="aboutme__box">
        <div className="aboutme__infobox">
          <h3 className="aboutme__name">Лилия</h3>
          <h4 className="aboutme__job">Фронтенд-разработчик, 26 лет</h4>
          <p className="aboutme__bio">
            Я родилась и живу в Москве, закончила исторический факультет МГУ.
            Раньше я работала музейным сотрудником и гидом, рассказывала
            посетителям о произведениях живописи и архитектуры. Сейчас это
            осталось моим хобби, я обожаю путешествовать и посещать лучшие музеи
            мира. А еще я люблю плавать и кататься на велосипеде. Cейчас я
            заканчиваю курс по веб-разработке в Яндекс Практикуме и ищу работу,
            как на фрилансе, так и в офисе.
          </p>
          <a
            href="https://github.com/liliyamikhlina"
            target="_blank"
            rel="noreferrer"
            className="aboutme__github"
          >
            Github
          </a>
        </div>
        <img className="aboutme__photo" alt="Мое фото" src={myPhoto}></img>
      </div>
    </section>
  );
}

export default AboutMe;
