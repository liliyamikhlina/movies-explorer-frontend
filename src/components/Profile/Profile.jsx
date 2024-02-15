import "./Profile.css";

function Profile({ name, email }) {
  return (
    <section className="profile">
      <div className="profile__box">
        <h2 className="profile__title">Привет, {name}!</h2>
        <form>
          <div className="profile__input-box">
            <label className="profile__input-label">Имя</label>
            <input className="profile__input" value={name} disabled></input>
          </div>
          <div className="profile__input-box">
            <label className="profile__input-label">E-mail</label>
            <input className="profile__input" value={email} disabled></input>
          </div>
        </form>
        <p className="profile__edit">Редактировать</p>
        <p className="profile__signout">Выйти из аккаунта</p>
      </div>
    </section>
  );
}

export default Profile;
