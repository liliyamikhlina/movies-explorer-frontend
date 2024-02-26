import { useState } from "react";
import "./MoviesCard.css";

function MoviesCard({ name, link, duration }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <li className="card">
      <img alt="Кадр из фильма" className="card__photo" src={link}></img>
      <div className="card__box">
        <h2 className="card__title">{name}</h2>
        <button
          className={`card__like ${isLiked ? "card__like_active" : ""}`}
          onClick={handleLike}
        ></button>
      </div>
      <p className="card__duration">{duration}</p>
    </li>
  );
}

export default MoviesCard;
