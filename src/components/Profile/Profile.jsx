import { useEffect, useState, useContext } from "react";
// import { Link } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Profile.css";
import "../Main/Main.css";

function Profile({ onUpdateUser, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({
      name,
      email,
    });
    setIsEditing(false);
  };

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

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
            <button type="submit" className="profile__submit">
              Сохранить
            </button>
          </form>
          <p className="profile__edit" onClick={handleEditClick}>
            Редактировать
          </p>
          <p
            //Тут еще нужно jwt из LS удалить
            className="profile__signout"
            onClick={onSignOut}
          >
            Выйти из аккаунта
          </p>
        </div>
      </section>
    </main>
  );
}

export default Profile;
