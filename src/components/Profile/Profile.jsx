import { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile({ name, email }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <section className="profile">
      <div className="profile__box">
        <h1 className="profile__title">Привет, {name}!</h1>
        <form method="get">
          <div className="profile__input-box">
            <label className="profile__input-label">Имя</label>
            <input className="profile__input" value={name} disabled={!isEditing}></input>
          </div>
          <div className="profile__input-box">
            <label className="profile__input-label">E-mail</label>
            <input className="profile__input" value={email} disabled={!isEditing}></input>
          </div>
        </form>
        <p className="profile__edit" onClick={handleEditClick}>Редактировать</p>
        <Link to="/" className="profile__signout">Выйти из аккаунта</Link>
      </div>
    </section>
  );
}

export default Profile;
