import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__heading">7 технологий</h3>
      <p className="techs__paragraph">
        На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.
      </p>
      <ul className="techs__box">
        <li className="techs__option">HTML</li>
        <li className="techs__option">CSS</li>
        <li className="techs__option">JS</li>
        <li className="techs__option">React</li>
        <li className="techs__option">Git</li>
        <li className="techs__option">Express.js</li>
        <li className="techs__option">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
