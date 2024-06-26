import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "../Main/Main.css";
import "../MoviesTemplate/MoviesTemplate.css";
import mainApi from "../../utils/MainApi";

function MoviesTemplate({
  moviesList,
  isLoading,
  handleMovieLike,
  handleMovieDislike,
  handleMovieDelete,
}) {
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isShortFilmsChecked, setIsShortFilmsChecked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchWasDone, setSearchWasDone] = useState(false);

  const location = useLocation();
  const currentPage = location.pathname;

  useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((smovies) => {
        setSavedMovies(smovies);
      })
      .catch((err) => console.log(err));
  }, [moviesList]);

  useEffect(() => {
    if (currentPage === "/saved-movies" && moviesList.length !== 0)
      setSearchWasDone(true);
  }, []);

  useEffect(() => {
    if (currentPage === "/movies") {
      const searchData = localStorage.getItem("searchData");
      if (searchData) {
        const { query, isShortFilms, foundMovies } = JSON.parse(searchData);
        setSearchQuery(query);
        setIsShortFilmsChecked(isShortFilms);
        setMovies(foundMovies);
        handleSearchSubmit(query, isShortFilms);
      } else {
        setMovies(moviesList);
      }
    } else if (currentPage === "/saved-movies") {
      setSavedMovies(moviesList);
    }
  }, [moviesList]);

  const handleSearchSubmit = (inputValue, isShortFilms) => {
    const foundMovies = moviesList.filter(
      (result) =>
        result.nameEN.toLowerCase().includes(inputValue.toLowerCase()) ||
        result.nameRU.toLowerCase().includes(inputValue.toLowerCase())
    );

    let finalMovies;
    if (isShortFilms) {
      const shortFilms = foundMovies.filter((movie) => movie.duration <= 40);
      finalMovies = shortFilms;
    } else {
      finalMovies = foundMovies;
    }

    if (currentPage === "/movies") {
      setMovies(finalMovies);
    } else {
      setSavedMovies(finalMovies);
    }
    setSearchQuery(inputValue);
    setIsShortFilmsChecked(isShortFilms);
    if (currentPage === "/movies") {
      const searchData = {
        query: inputValue,
        isShortFilms,
        foundMovies: finalMovies,
      };

      localStorage.setItem("searchData", JSON.stringify(searchData));
    }
    setSearchWasDone(true);
  };

  const handleShortFilmsCheckbox = () => {
    const isShortFilms = !isShortFilmsChecked;
    setIsShortFilmsChecked(isShortFilms);
    handleSearchSubmit(searchQuery, isShortFilms);
  };

  return (
    <main className="main">
      <section className="movies">
        <SearchForm
          handleClick={handleSearchSubmit}
          handleShortFilmsCheckbox={handleShortFilmsCheckbox}
          isShortFilmsChecked={isShortFilmsChecked}
          searchQuery={searchQuery}
          isLoading={isLoading}
        />
        {searchWasDone && (
          <MoviesCardList
            movies={movies}
            savedMovies={savedMovies}
            searchWasDone={searchWasDone}
            isLoading={isLoading}
            onLike={handleMovieLike}
            onDislike={handleMovieDislike}
            onDelete={handleMovieDelete}
          />
        )}
      </section>
    </main>
  );
}

export default MoviesTemplate;
