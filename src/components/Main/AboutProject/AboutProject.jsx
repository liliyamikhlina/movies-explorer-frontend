import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="aboutpr">
      <h2 className="aboutpr__title">О проекте</h2>
      <div className="aboutpr__box">
        <p className="aboutpr__paragraph aboutpr__paragraph_big">
          Дипломный проект включал 5&nbsp;этапов
        </p>
        <p className="aboutpr__paragraph aboutpr__paragraph_small">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и&nbsp;финальные доработки.
        </p>
        <p className="aboutpr__paragraph aboutpr__paragraph_big">
          На&nbsp;выполнение диплома ушло 5&nbsp;недель
        </p>
        <p className="aboutpr__paragraph aboutpr__paragraph_small">
          У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно
          было соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <table className="aboutpr__table">
        <tbody>
          <tr className="aboutpr__table-row">
            <td className="aboutpr__table-cell aboutpr__table-cell_green">1 неделя</td>
            <td className="aboutpr__table-cell aboutpr__table-cell_grey">4 недели</td>
          </tr>
          <tr className="aboutpr__table-row">
            <td className="aboutpr__table-cell">Back-end</td>
            <td className="aboutpr__table-cell">Front-end</td>
          </tr>
        </tbody>
      </table>

    </section>
  );
}

export default AboutProject;
