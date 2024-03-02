import { useState } from "react";
import "./MoviesCard.css";

function MoviesCard({ name, link, duration }) {
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = () => {
    setIsSaved(!isSaved);
  };

  return (
    <li className="card">
      <img alt={name} className="card__photo" src={link}></img>
      <div className="card__box">
        <h2 className="card__title">{name}</h2>
        <button
          type="button"
          className={`card__like ${isSaved ? "card__like_active" : ""}`}
          onClick={handleLike}
        ></button>
      </div>
      <p className="card__duration">{duration}</p>
    </li>
  );
}

export default MoviesCard;
