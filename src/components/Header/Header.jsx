import logo from "../../images/logo.svg";
import account from "../../images/icon__COLOR_icon-main.svg"
import "./Header.css";

function Header() {
  return (
    <header className="header header_blue">
      <img alt="Лого" src={logo} className="header__logo" />

      <div className="header__box header__box_signed">
        <p className="header__link header__link_films">Фильмы</p>
        <p className="header__link">Сохраненные фильмы</p>
      </div>

      <div className="header__box">
        <p className="header__link">Аккаунт</p>
      <img className="header__account-pic" alt="Аккаунт" src={account}></img>
      </div>

      {/* <div className="header__box">
        <p className="header__link">Регистрация</p>
        <button className="header__signin">Войти</button>
      </div> */}
    </header>
  );
}

export default Header;
