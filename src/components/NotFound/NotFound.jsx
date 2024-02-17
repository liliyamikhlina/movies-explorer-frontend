import "./NotFound.css";
import { useNavigate } from "react-router-dom"

function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className="notfound">
        <h2 className="notfound__title">404</h2>
        <p className="notfound__text">Страница не найдена</p>
        <p onClick={handleGoBack} className="notfound__link">Назад</p>
    </section>
  );
}

export default NotFound;
