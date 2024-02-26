import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__beat">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__box">
        <p className="footer__date">
          &copy; {new Date().getFullYear()}
        </p>
        <a
          href="https://practicum.yandex.ru/"
          target="_blank"
          className="footer__paraphaph footer__paraphaph_yandex"
          rel="noreferrer"
        >
          Яндекс.Практикум
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          className="footer__paraphaph"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </footer>
  );
}

export default Footer;
