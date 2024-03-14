import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({ movie, onLike, onDelete, savedMovies }) {
  const location = useLocation();
  const currentPage = location.pathname;
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const isMovieSaved = savedMovies.some(
      (savedMovie) => savedMovie.movieId === movie.id
    );
    setIsSaved(isMovieSaved);
  }, [savedMovies, movie.id]);

  const handleLike = () => {
    onLike(movie, !isSaved);
  };

  const handleDelete = () => {
    onDelete(movie);
  };

  const handleLikeToggle = () => {
    setIsSaved(!isSaved)
    if (isSaved === true) {
      handleDelete();
    } else {
      handleLike();
    }
  };

  const formatDuration = (min) => {
    const hours = Math.floor(min / 60);
    const remainder = min % 60;
    return `${hours}ч ${remainder}м`;
  };

  return (
    <li className="card" key={movie.id}>
      <a
        className="card__link"
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt={movie.nameRU}
          className="card__photo"
          src={
            currentPage === "/saved-movies"
              ? movie.image
              : `https://api.nomoreparties.co${movie.image.url}`
          }
        ></img>
      </a>
      <div className="card__box">
        <h2 className="card__title">{movie.nameRU}</h2>

        {currentPage === "/saved-movies" ? (
          <button
            type="button"
            className="card__delete"
            onClick={handleDelete}
          ></button>
        ) : (
          <button
            type="button"
            className={`card__like ${isSaved ? "card__like_active" : ""}`}
            onClick={handleLikeToggle}
          ></button>
        )}
      </div>
      <p className="card__duration">{formatDuration(movie.duration)}</p>
    </li>
  );
}

export default MoviesCard;
