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
            в&nbsp;музее. Сейчас изучение искусства осталось моим хобби.
            На&nbsp;данный момент я&nbsp;заканчиваю курс по&nbsp;веб-разработке
            и&nbsp;ищу работу в&nbsp;этой сфере. Писать хороший код и&nbsp;создавать красивые функциональные сайты для меня — тоже чрезычайно творческий и&nbsp;созидательный процесс.
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
