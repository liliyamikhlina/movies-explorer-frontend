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
  searchWasDone,
  onSearchDone,
}) {

  const [movies, setMovies] = useState([]); 
  const [savedMovies, setSavedMovies] = useState([]);
  const [isShortFilmsChecked, setIsShortFilmsChecked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation();
  const currentPage = location.pathname;

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
    }
  }, [moviesList]);

  useEffect(() => {
      mainApi
      .getSavedMovies()
      .then((smovies) => {
        setSavedMovies(smovies);
      })
      .catch((err) => console.log(err));
   
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

    currentPage === "/movies" ? setMovies(finalMovies) : setSavedMovies(finalMovies);
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
    onSearchDone(true);
  };

  const handleShortFilmsCheckbox = () => {
    const isShortFilms = !isShortFilmsChecked;
    setIsShortFilmsChecked(isShortFilms);
    handleSearchSubmit(searchQuery, isShortFilms);
  };

  const handleMovieLike = (movie, isLiked) => {
    const movieToAdd = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
    };

    mainApi
      .addSavedMovie(movieToAdd)
      .then((savedMovie) => {
        savedMovies.push(savedMovie);
        setSavedMovies(savedMovies);
      })
      .catch((err) => console.log(err));
  };

  const handleMovieDelete = (movie) => {
    if (!movie._id) {
      const foundMovie = savedMovies.find(
        (savedMovie) => savedMovie.nameRU === movie.nameRU
      );

      if (foundMovie) {
        mainApi
          .deleteSavedMovie(foundMovie._id)
          .then(() => {
            setSavedMovies((list) =>
              list.filter((item) => item._id !== foundMovie._id)
            );
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      mainApi
        .deleteSavedMovie(movie._id)
        .then(() => {
          setSavedMovies((list) =>
            list.filter((item) => item._id !== movie._id)
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <main className="main">
      <section className="movies">
        <SearchForm
          handleClick={handleSearchSubmit}
          handleShortFilmsCheckbox={handleShortFilmsCheckbox}
          isShortFilmsChecked={isShortFilmsChecked}
          searchQuery={searchQuery}
        />
        {searchWasDone && (
          <MoviesCardList
            movies={movies}
            savedMovies={savedMovies}
            searchWasDone={searchWasDone}
            isLoading={isLoading}
            onLike={handleMovieLike}
            onDelete={handleMovieDelete}
          />
        )}
      </section>
    </main>
  );
}

export default MoviesTemplate;
