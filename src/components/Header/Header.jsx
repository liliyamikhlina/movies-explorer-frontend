import logo from "../../images/logo.svg";
import account from "../../images/icon__COLOR_icon-main.svg";
import "./Header.css";

function Header({ main }) {
  return (
    <header className={`header ${main ? "header_blue" : ""}`}>
      <img alt="Лого" src={logo} className="header__logo" />

      <nav className="header__box header__box_signed">
        <p className="header__link header__link_films">Фильмы</p>
        <p className="header__link">Сохраненные фильмы</p>
      </nav>

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

      {/* <nav className="header__box">
        <p className="header__link">Регистрация</p>
        <button className="header__signin">Войти</button>
      </nav> */}
    </header>
  );
}

export default Header;
