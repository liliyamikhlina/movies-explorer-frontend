import "./Auth.css";
import logo from "../../images/logo.svg";

function Auth({ register, title, button, link }) {
  return (
    <section className="auth">
      <div className="auth__box">
        <img alt="Лого" src={logo} className="auth__logo" />
        <h2 className="auth__title">{title}</h2>
        <form>
          {register && (
            <div className="auth__input-box">
              <label className="auth__input-label">Имя</label>
              <input className="auth__input"></input>
            </div>
          )}
          <div className="auth__input-box">
            <label className="auth__input-label">E-mail</label>
            <input className="auth__input"></input>
          </div>
          <div className="auth__input-box">
            <label className="auth__input-label">Пароль</label>
            <input className="auth__input"></input>
          </div>
          <span className="auth__input-error auth__input-error_inactive">
            Что-то пошло не так...
          </span>
          <button className="auth__button">{button}</button>
          <p className="auth__link">{link}</p>
        </form>
      </div>
    </section>
  );
}

export default Auth;
