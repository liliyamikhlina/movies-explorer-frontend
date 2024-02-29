import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Auth.css";
import "../Main/Main.css";
import mainApi from "../../utils/MainApi";

function Auth({ title, button, text, linkTo, linkText }) {
  
  const location = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = location.pathname === "/signup";

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    mainApi
      .loginUser(email, password)
      .then((data) => {
        if (data.token) {
          setEmail("");
          setPassword("");
        }
        navigate("/movies", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      return;
    }
    mainApi
      .registerUser(name, email, password)
      .then(() => {
        //Даем обратную связь: успех или фейл
        navigate("/signin");
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="main">
      <section className="auth">
        <div className="auth__box">
          <Link to="/" className="auth__logo-link">
            <img alt="Лого" src={logo} className="auth__logo" />
          </Link>
          <h1 className="auth__title">{title}</h1>
          <form
            className="auth__form"
            onSubmit={register ? handleRegisterSubmit : handleLoginSubmit}
          >
            {register && (
              <div className="auth__input-box">
                <label className="auth__input-label">Имя</label>
                <input
                  type="text"
                  className="auth__input"
                  placeholder="Введите ваше имя"
                  required
                  minLength="2"
                  maxLength="30"
                  value={name}
                  onChange={handleNameChange}
                ></input>
              </div>
            )}
            <div className="auth__input-box">
              <label className="auth__input-label">E-mail</label>
              <input
                type="email"
                className="auth__input"
                placeholder="Введите ваш email"
                required
                minLength="2"
                maxLength="30"
                value={email}
                onChange={handleEmailChange}
              ></input>
            </div>
            <div className="auth__input-box">
              <label className="auth__input-label">Пароль</label>
              <input
                type="password"
                className="auth__input"
                placeholder="Введите пароль"
                required
                minLength="2"
                maxLength="30"
                value={password}
                onChange={handlePasswordChange}
              ></input>
            </div>
            <span className="auth__input-error auth__input-error_inactive">
              Что-то пошло не так...
            </span>
            <button
              type="submit"
              className={`auth__button ${
                register ? "auth__button_register" : ""
              }`}
            >
              {button}
            </button>
          </form>
          <div className="auth__link-box">
            <p className="auth__text">{text}</p>
            <Link className="auth__text auth__link" to={linkTo}>
              {linkText}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Auth;
