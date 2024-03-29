import { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import "../Main/Main.css";

function Profile({ name, email }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__box">
          <h1 className="profile__title">Привет, {name}!</h1>
          <form method="get">
            <div className="profile__input-box">
              <label className="profile__input-label">Имя</label>
              <input
                className="profile__input"
                value={name}
                disabled={!isEditing}
                placeholder="Введите ваше имя"
                required
                minLength="2"
                maxLength="30"
              ></input>
            </div>
            <div className="profile__input-box">
              <label className="profile__input-label">E-mail</label>
              <input
                className="profile__input"
                value={email}
                disabled={!isEditing}
                placeholder="Введите ваш email"
                required
                minLength="2"
                maxLength="30"
              ></input>
            </div>
          </form>
          <p className="profile__edit" onClick={handleEditClick}>
            Редактировать
          </p>
          <Link to="/" className="profile__signout">
            Выйти из аккаунта
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Profile;
