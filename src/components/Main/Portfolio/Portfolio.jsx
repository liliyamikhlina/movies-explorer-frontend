import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__link-box">
        <p className="portfolio__link">Статичный сайт</p>
        <button className="portfolio__link-button">↗</button>
      </div>

      <div className="portfolio__link-box">
        <p className="portfolio__link">Адаптивный сайт</p>
        <button className="portfolio__link-button">↗</button>
      </div>
      
      <div className="portfolio__link-box">
        <p className="portfolio__link">Одностраничное приложение</p>
        <button className="portfolio__link-button">↗</button>
      </div>
    </section>
  );
}

export default Portfolio;
