import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__link-box">
        <p className="portfolio__link">Статичный сайт</p>
        <a href="https://github.com/liliyamikhlina/how-to-learn"
        target="_blank"
        className="portfolio__link-button" rel="noreferrer">↗</a>
      </div>

      <div className="portfolio__link-box">
        <p className="portfolio__link">Адаптивный сайт</p>
        <a href="https://github.com/liliyamikhlina/russian-travel"
        target="_blank"
        className="portfolio__link-button" rel="noreferrer">↗</a>
      </div>
      
     
      <div className="portfolio__link-box">
        <p className="portfolio__link">Одностраничное приложение</p>
        <a href="https://github.com/liliyamikhlina/react-mesto-api-full-gha"
        target="_blank"
        className="portfolio__link-button" rel="noreferrer">↗</a>
      </div>
    </section>
  );
}

export default Portfolio;
