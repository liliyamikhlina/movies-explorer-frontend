import "./Movies.css";
import "../Main/Main.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";
// import Preloader from "./Preloader/Preloader";
import moviesApi from "../../utils/MoviesApi";

function Moovies() {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    handleCardsGet();
  }, []);

  const handleCardsGet = () => {
    moviesApi
      .getMovies()
      .then((moviesList) => {
        setMovies(moviesList);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="main">
      <section className="movies">
        <SearchForm movies={movies} setSearchResults={setSearchResults}/>
        <MoviesCardList movies={searchResults} />
      </section>
    </main>
  );
}

export default Moovies;
