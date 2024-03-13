import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({
  movies,
  savedMovies,
  searchWasDone,
  isLoading,
  onLike,
  onDelete,
}) {
  const [nothingIsFound, setNothingIsFound] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(0);
  const [extraCards, setExtraCards] = useState(0);

  const location = useLocation();
  const currentPage = location.pathname;

  const getCardsAmount = () => {
    if (currentPage === "/saved-movies") {
      setCardsToShow(savedMovies.length)
      return
    }

    if (window.innerWidth >= 1024) {
      setCardsToShow(16);
      setExtraCards(4);
    } else if (window.innerWidth >= 990) {
      setCardsToShow(12);
      setExtraCards(3);
    } else if (window.innerWidth >= 768) {
      setCardsToShow(8);
      setExtraCards(2);
    } else {
      setCardsToShow(5);
      setExtraCards(2);
    }
  };

  const handleLoadMore = () => {
    const newAmount = cardsToShow + extraCards;
    setCardsToShow(newAmount);
  };

  useEffect(() => {
    getCardsAmount();

    const handleResize = () => {
      let resizeTimer;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(getCardsAmount, 300);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  useEffect(() => {
    let currentArray;
    currentPage === "/movies" ? currentArray = movies : currentArray = savedMovies;
    if (searchWasDone && currentArray.length === 0 ) {
      setNothingIsFound(true);
    } else {
      setNothingIsFound(false);
      getCardsAmount();
    }
  }, [searchWasDone, movies, savedMovies]);

  return (
    <section className="cards">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {currentPage === "/saved-movies" ? (
            <ul className="cards__box">
              {savedMovies.map((savedMovie) => (
                <MoviesCard
                  movie={savedMovie}
                  key={savedMovie.movieId}
                  onLike={onLike}
                  onDelete={onDelete}
                  savedMovies={savedMovies}
                />
              ))}
            </ul>
          ) : (
            <ul className="cards__box">
              {movies.slice(0, cardsToShow).map((movie) => (
                <MoviesCard
                  movie={movie}
                  key={movie.id}
                  onLike={onLike}
                  onDelete={onDelete}
                  savedMovies={savedMovies}
                />
              ))}
            </ul>
          )}
          {nothingIsFound && (
            <span className="cards__notfound">Ничего не найдено</span>
          )}
          {cardsToShow < movies.length && (
            <button
              type="button"
              className="cards__more"
              onClick={handleLoadMore}
            >
              Ещё
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
