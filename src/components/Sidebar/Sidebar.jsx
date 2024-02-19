import { Link } from "react-router-dom";
import account from "../../images/profile.png";
import "./Sidebar.css";

function Sidebar() {
  return (
    <section className="sidebar">
      <nav className="sidebar__link-box">
        <Link to="/" className="sidebar__link">
          Главная
        </Link>
        <Link to="/movies" className="sidebar__link">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="sidebar__link">
          Сохраненные фильмы
        </Link>
      </nav>
      <Link to="/profile" className="">
        <img className="sidebar__account" alt="Аккаунт" src={account}></img>
      </Link>
    </section>
  );
}

export default Sidebar;
