import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
     
        <a
          href="https://github.com/liliyamikhlina/how-to-learn"
          target="_blank"
          className="portfolio__link"
          rel="noreferrer"
        >
          <p className="portfolio__link-label">Статичный сайт</p><div className="portfolio__arrow">↗</div>
        </a>

        <a
          href="https://github.com/liliyamikhlina/russian-travel"
          target="_blank"
          className="portfolio__link"
          rel="noreferrer"
        >
          <p className="portfolio__link-label">Адаптивный сайт</p><div className="portfolio__arrow">↗</div>
        </a>

        <a
          href="https://github.com/liliyamikhlina/react-mesto-api-full-gha"
          target="_blank"
          className="portfolio__link"
          rel="noreferrer"
        >
          <p className="portfolio__link-label">Одностраничное приложение</p><div className="portfolio__arrow">↗</div>
        </a>
  
    </section>
  );
}

export default Portfolio;
