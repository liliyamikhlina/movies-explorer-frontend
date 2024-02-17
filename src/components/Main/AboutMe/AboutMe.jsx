import "./AboutMe.css";
import myPhoto from "../../../images/DSC09460.jpg";

function AboutMe() {
  return (
    <section className="aboutme">
      <h2 className="title_h2">Студент</h2>
      <div className="aboutme__box">
        <div className="aboutme__infobox">
          <h3 className="aboutme__name">Лилия</h3>
          <h4 className="aboutme__job">Фронтенд-разработчик, 26 лет</h4>
          <p className="aboutme__bio">
            Я&nbsp;родилась и&nbsp;живу в&nbsp;Москве, закончила исторический
            факультет МГУ. Раньше я&nbsp;работала научным сотрудником
            и&nbsp;гидом в&nbsp;музее, рассказывала посетителям
            о&nbsp;произведениях живописи и&nbsp;архитектуры. Сейчас изучение
            истории искусства осталось моим хобби, я&nbsp;обожаю путешествовать
            и&nbsp;посещать музеи по&nbsp;всему миру.
          </p>
          <p className="aboutme__bio">
            На&nbsp;данный момент я&nbsp;заканчиваю курс по&nbsp;веб-разработке
            в&nbsp;Яндекс Практикуме и&nbsp;ищу работу, как на&nbsp;фрилансе,
            так и&nbsp;в&nbsp;офисе. Писать хороший код и&nbsp;создавать
            красивые и&nbsp;функциональные сайты для меня - тоже своего рода
            искусство.
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
