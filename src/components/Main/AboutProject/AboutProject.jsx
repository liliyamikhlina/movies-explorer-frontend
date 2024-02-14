import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="aboutpr">
      <h2 className="title_h2">О проекте</h2>
      <div className="aboutpr__box">
        <p className="aboutpr__paragraph aboutpr__paragraph_big">Дипломный проект включал 5 этапов</p>
        <p className="aboutpr__paragraph aboutpr__paragraph_small">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className="aboutpr__paragraph aboutpr__paragraph_big">На выполнение диплома ушло 5 недель</p>
        <p className="aboutpr__paragraph aboutpr__paragraph_small">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="aboutpr__table">
        <div className="aboutpr__cell aboutpr__cell_green">1 неделя</div>
        <div className="aboutpr__cell aboutpr__cell_grey">4 недели</div>
        <div className="aboutpr__cell">Back-end</div>
        <div className="aboutpr__cell">Front-end</div>
      </div>
    </section>
  );
}

export default AboutProject;
