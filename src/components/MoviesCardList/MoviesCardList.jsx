import { useEffect, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({ movies, searchWasDone, isLoading }) {
  const [nothingIsFound, setNothingIsFound] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(0);
  const [extraCards, setExtraCards] = useState(0);

  const getCardsAmount = () => {
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
  }, []);

  useEffect(() => {
    if (searchWasDone && movies.length === 0) {
      setNothingIsFound(true);
    } else {
      setNothingIsFound(false);
      getCardsAmount();
    }
  }, [searchWasDone, movies]);

  return (
    <section className="cards">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <ul className="cards__box">
            {movies.slice(0, cardsToShow).map((movie) => (
              <MoviesCard
                key={movie.id}
                link={`https://api.nomoreparties.co${movie.image.url}`}
                name={movie.nameRU}
                duration={`${movie.duration} м` ?? 0}
                trailerLink={movie.trailerLink}
              />
            ))}
          </ul>
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
