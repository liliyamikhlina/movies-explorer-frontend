import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import account from "../../images/icon__COLOR_icon-main.svg";
import "./Header.css";

function Header({ main, isLoggedIn }) {
  return (
    <header className={`header ${main ? "header_blue" : ""}`}>
      <Link to="/">
        <img alt="Лого" src={logo} className="header__logo" />
      </Link>

      {isLoggedIn && (
        <nav className="header__box header__box_signed">
          <Link to="/movies" className="header__link header__link_films">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="header__link">
            Сохраненные фильмы
          </Link>
        </nav>
      )}

      {isLoggedIn && (
        <Link to="/profile">
          <nav className="header__box">
            <p className="header__link">Аккаунт</p>
            <img
              className={`header__account-pic ${
                main ? "header__account-pic_blue" : ""
              }`}
              alt="Аккаунт"
              src={account}
            ></img>
          </nav>
        </Link>
      )}

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
