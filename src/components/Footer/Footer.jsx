import "./Footer.css"

function Footer() {
  return (
    <section className="footer">
      <p className="footer__beat">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__box">
        <p className="footer__paraphaph footer__paraphaph_date">&copy; {new Date().getFullYear()}</p>
        <p className="footer__paraphaph footer__paraphaph_yandex">Яндекс.Практикум</p>
        <p className="footer__paraphaph">Github</p>
      </div>
    </section>
  );
}

export default Footer;
