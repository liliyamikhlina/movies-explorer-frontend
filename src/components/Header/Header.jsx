import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import account from "../../images/profile-no-text.svg";
import Sidebar from "../Sidebar/Sidebar";

function Header({ main, isLoggedIn }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarButtonClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className={`header ${main ? "header_blue" : ""}`}>
      <Link to="/" className="header__logo-link">
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
            Аккаунт
            <img
              className={`header__account-pic ${main ? "header__account-pic_blue" : ""}`}
              alt="Аккаунт"
              src={account}
            ></img>
          </Link>
          <button
            type="button"
            className="header__sidebar-button"
            onClick={handleSidebarButtonClick}
          ></button>
        </>
      )}

      {isLoggedIn && isSidebarOpen && (
        <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarButtonClick} />
      )}

      {!isLoggedIn && (
        <nav className="header__box">
          <Link to="/signup" className="header__link">
            Регистрация
          </Link>
          <Link to="/signin">
            <div className="header__signin">Войти</div>
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
