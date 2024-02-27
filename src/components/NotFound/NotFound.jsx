import { useNavigate } from "react-router-dom";
import "./NotFound.css";
import "../Main/Main.css";

function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <main className="main">
      <section className="notfound">
        <h2 className="notfound__title">404</h2>
        <p className="notfound__text">Страница не найдена</p>
        <p onClick={handleGoBack} className="notfound__link">
          Назад
        </p>
      </section>
    </main>
  );
}

export default NotFound;
