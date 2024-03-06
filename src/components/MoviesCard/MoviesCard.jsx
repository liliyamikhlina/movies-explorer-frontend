import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({ name, link, duration, trailerLink }) {
  const [isSaved, setIsSaved] = useState(false);

  const location = useLocation();

  const handleLike = () => {
    setIsSaved(!isSaved);
  };

  return (
    <li className="card">
      <a className="card__link" href={trailerLink} target="_blank" rel="noreferrer">
        <img alt={name} className="card__photo" src={link}></img>
      </a>
      <div className="card__box">
        <h2 className="card__title">{name}</h2>
        <button
          type="button"
          className={`card__like ${isSaved ? "card__like_active" : ""}`}
          onClick={handleLike}
        ></button>
        {/* <button type="button" className="card__delete"></button> */}
      </div>
      <p className="card__duration">{duration}</p>
    </li>
  );
}

export default MoviesCard;
