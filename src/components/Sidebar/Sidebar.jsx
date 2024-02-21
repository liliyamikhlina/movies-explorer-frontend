// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import account from "../../images/profile.png";
import "./Sidebar.css";

function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <section
      className={`sidebar__bg ${isOpen ? "sidebar__bg_active" : ""}`}
    >
      <div className="sidebar">
        <button
          className="sidebar__close-button"
          onClick={onClose}
        />
        <nav className="sidebar__link-box">
          <Link to="/" className="sidebar__link">
            Главная
          </Link>
          <Link
            to="/movies"
            className={`sidebar__link ${
              currentPage === "/movies" ? "sidebar__link_active" : ""
            }`}
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className={`sidebar__link ${
              currentPage === "/saved-movies" ? "sidebar__link_active" : ""
            }`}
          >
            Сохраненные фильмы
          </Link>
        </nav>
        <Link to="/profile" className="sidebar__account-link">
          <img className="sidebar__account" alt="Аккаунт" src={account}></img>
        </Link>
      </div>
    </section>
  );
}

export default Sidebar;
