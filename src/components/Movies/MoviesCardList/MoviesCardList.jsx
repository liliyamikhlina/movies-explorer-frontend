import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect } from "react";

function MoviesCardList({ movies }) {

  // if (movies.length === 0 ) {
  //   const nothingIsFound = true;
  // }

  return (
    <section className="cards">
      <ul className="cards__box">
        {movies.map((movie) => (
          <MoviesCard 
          key={movie.id}
          link={"https://api.nomoreparties.co" + movie.image.url}
          name={movie.nameRU}
          duration={movie.duration + "м"}
           />
        ))}
      </ul>
      <button type="button" className="cards__more">
        Ещё
      </button>
      {/* <p>Ничего не найдено</p> */}
    </section>
  );
}

export default MoviesCardList;
