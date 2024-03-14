import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({ movie, onLike, onDislike, savedMovies, onDelete }) {
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
    onLike(movie)
      .then((res) => {
        setIsSaved(true);
        console.log(res);
      })
      .catch((err) => console.err(err));
  };

  const handleDislike = () => {
    onDislike(movie)
      .then((res) => {
        setIsSaved(false);
        console.log(res);
      })
      .catch((err) => console.err(err));
  };

  const handleLikeToggle = () => {
    if (isSaved === true) {
      handleDislike();
    } else {
      handleLike();
    }
  };

  const handleDelete = () => {
    onDelete(movie);
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
