import "./Auth.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Auth({ register, title, button, text, linkTo, linkText }) {
  return (
    <section className="auth">
      <div className="auth__box">
        <Link to="/" className="auth__logo-link">
          <img alt="Лого" src={logo} className="auth__logo" />
        </Link>
        <h2 className="auth__title">{title}</h2>
        <form className="auth__form">
          {register && (
            <div className="auth__input-box">
              <label className="auth__input-label">Имя</label>
              <input type="text" className="auth__input"></input>
            </div>
          )}
          <div className="auth__input-box">
            <label className="auth__input-label">E-mail</label>
            <input type="email" className="auth__input"></input>
          </div>
          <div className="auth__input-box">
            <label className="auth__input-label">Пароль</label>
            <input type="password" className="auth__input"></input>
          </div>
          <span className="auth__input-error auth__input-error_inactive">
            Что-то пошло не так...
          </span>
          <button type="submit" className={`auth__button ${register ? "auth__button_register" : ""}`}>{button}</button>
        </form>
        <div className="auth__link-box">
          <p className="auth__text">{text}</p>
          <Link className="auth__text auth__link" to={linkTo}>
            {linkText}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Auth;
