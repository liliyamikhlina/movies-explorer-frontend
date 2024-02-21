import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <h2 className="title_h2">Технологии</h2>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__paragraph">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className="techs__box">
        <div className="techs__option">HTML</div>
        <div className="techs__option">CSS</div>
        <div className="techs__option">JS</div>
        <div className="techs__option">React</div>
        <div className="techs__option">Git</div>
        <div className="techs__option">Express.js</div>
        <div className="techs__option">mongoDB</div>
      </div>
    </section>
  );
}

export default Techs;
