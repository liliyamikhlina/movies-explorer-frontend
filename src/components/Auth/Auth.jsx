import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Auth.css";
import "../Main/Main.css";
import mainApi from "../../utils/MainApi";

function Auth({ title, button, text, linkTo, linkText, tokenError }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const register = location.pathname === "/signup";

  const handleNameChange = (e) => {
    const nameRegex = /^[A-Za-zА-Яа-яЁё\s-]*$/;
    const isValidInput = nameRegex.test(e.target.value);
    setName(e.target.value);
    if (!e.target.value) {
      setNameError("Поле должно быть заполнено");
    } else if (!isValidInput) {
      setNameError(
        "Имя должно содержать только латинские или кириллические символы, пробелы или дефисы"
      );
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(e.target.value);
    setEmail(e.target.value);
    if (!e.target.value) {
      setEmailError("Поле должно быть заполнено");
    } else if (!isValidEmail) {
      setEmailError("Введите корректный email");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setPasswordError("Поле должно быть заполнено");
    } else {
      setPasswordError("");
    }
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
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          setGeneralError("Вы ввели неправильный логин или пароль.");
        } else if (tokenError) {
          setGeneralError(tokenError);
        } else {
          setGeneralError(
            "При авторизации произошла ошибка. Пожалуйста, попробуйте еще раз."
          );
        }
      });
  };
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setGeneralError("");
    if (!name || !email || !password) {
      return;
    }
    mainApi
      .registerUser(name, email, password)
      .then(
        (res) => {
          navigate("/signin");
        },
        (error) => {
          if (error.response && error.response.status === 409) {
            setGeneralError("Пользователь с таким email уже существует.");
          } else {
            setGeneralError(
              "При регистрации пользователя произошла ошибка. Пожалуйста, попробуйте еще раз."
            );
          }
        }
      )
      .catch((err) => {
        setGeneralError(
          "При регистрации пользователя произошла ошибка. Пожалуйста, попробуйте еще раз."
        );
        console.log(err);
      });
  };

  const isFormValid = register
    ? !nameError && !emailError && !passwordError && name && email && password
    : !emailError && !passwordError && email && password;

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
                />
                <p className="auth__input-error">{nameError}</p>
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
              />
              <p className="auth__input-error">{emailError}</p>
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
              />
              <p className="auth__input-error">{passwordError}</p>
            </div>
            <div
              className={`auth__button-box ${
                register ? "auth__button-box_register" : ""
              }`}
            >
              {generalError && (
                <p className="auth__general-error">{generalError}</p>
              )}
              <button
                type="submit"
                className={`auth__button
              }`}
                disabled={!isFormValid}
              >
                {button}
              </button>
            </div>
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
