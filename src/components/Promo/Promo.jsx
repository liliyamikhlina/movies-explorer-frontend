import "./Promo.css";
import promo from "../../images/text__COLOR_landing-logo.svg"

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__text">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img alt="Промо" src={promo} className="promo__image"/>
    </section>
  );
}

export default Promo;
