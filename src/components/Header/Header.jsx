import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import account from "../../images/profile.png";
import account_blue from "../../images/profile-blue.png";
import Sidebar from "../Sidebar/Sidebar";

function Header({ main, isLoggedIn }) {
  return (
    <header className={`header ${main ? "header_blue" : ""}`}>
      <Link to="/">
        <img alt="Лого" src={logo} className="header__logo" />
      </Link>

      {isLoggedIn && (
        <>
          <nav className="header__box header__box_signed">
            <Link to="/movies" className="header__link header__link_films">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="header__link">
              Сохраненные фильмы
            </Link>
          </nav>
          <Link to="/profile" className="header__account-link">
              <img
                className="header__account-pic"
                alt="Аккаунт"
                src={main ? account_blue : account}
              ></img>
            </Link>
            <button className="header__sidebar-button"></button>
        </>
      )}

      {isLoggedIn && (<Sidebar />)}

      {!isLoggedIn && (
        <nav className="header__box">
          <Link to="/signup" className="header__link">
            Регистрация
          </Link>
          <Link to="/signin">
            <button className="header__signin">Войти</button>
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
