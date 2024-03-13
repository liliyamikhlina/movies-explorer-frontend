import { useEffect, useState, useContext } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Profile.css";
import "../Main/Main.css";

function Profile({ onUpdateUser, onSignOut, userUpdateError, successMessage }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [generalError, setGeneralError] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === currentUser.name && email === currentUser.email) {
      setGeneralError("Необходимо внести изменения");
      return;
    }

    onUpdateUser({
      name,
      email,
    })
    if (userUpdateError) {
      setGeneralError(userUpdateError);
    } else {
      setIsEditing(false);
    }
  };

  const isFormValid = !nameError && !emailError && name && email;

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__box">
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <form method="get" onSubmit={handleSubmit}>
            <div className="profile__input-box">
              <label className="profile__input-label">Имя</label>
              <input
                className="profile__input"
                type="text"
                value={name}
                disabled={!isEditing}
                placeholder="Введите ваше имя"
                required
                minLength="2"
                maxLength="30"
                onChange={handleNameChange}
              ></input>
            </div>
            <p className="auth__input-error">{nameError}</p>
            <div className="profile__input-box">
              <label className="profile__input-label">E-mail</label>
              <input
                className="profile__input"
                type="email"
                value={email}
                disabled={!isEditing}
                placeholder="Введите ваш email"
                required
                minLength="2"
                maxLength="30"
                onChange={handleEmailChange}
              ></input>
            </div>
            <p className="auth__input-error">{emailError}</p>
            {isEditing && (
              <>
                <p className="profile__general-error">{generalError}</p>
                <button
                  type="submit"
                  className="profile__submit"
                  disabled={!isFormValid}
                >
                  Сохранить
                </button>
              </>
            )}
          </form>
          {!isEditing && (
            <div className="profile__edit-box">
              <p className="profile__success">{successMessage}</p>
              <p className="profile__edit" onClick={handleEditClick}>
                Редактировать
              </p>
              <p className="profile__signout" onClick={onSignOut}>
                Выйти из аккаунта
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Profile;
