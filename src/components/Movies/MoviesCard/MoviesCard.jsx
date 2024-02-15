import "./MoviesCard.css";

function MoviesCard({ name, link, duration, isLiked }) {
  return (
    <section className="card">
      <img alt="Кадр из фильма" className="card__photo" src={link}></img>
      <div className="card__box">
        <h4 className="card__title">{name}</h4>
        <button className={`card__like ${isLiked ? "card__like_active" : ""}`}></button>
      </div>
      <p className="card__duration">{duration}</p>
    </section>
  );
}

export default MoviesCard;