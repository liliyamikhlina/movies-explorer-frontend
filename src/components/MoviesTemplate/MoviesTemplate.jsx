import { useEffect, useState } from "react";
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
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setMovies(moviesList);
  }, [moviesList]);

  useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((smovies) => {
        setSavedMovies(smovies);
      })
      .catch((err) => console.log(err));
  }, []);

  //   const filterMoviesByDuration = (movies) => {
  //     return movies.filter((movie) => movie.duration <= 40);
  // };

  const handleSearchSubmit = (inputValue) => {
    const results = moviesList.filter(
      (result) =>
        result.nameEN.toLowerCase().includes(inputValue.toLowerCase()) ||
        result.nameRU.toLowerCase().includes(inputValue.toLowerCase())
    );
    setMovies(results);
    onSearchDone(true);
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
      const foundMovie = savedMovies.find(savedMovie => savedMovie.nameRU === movie.nameRU);
  
      if (foundMovie) {
        mainApi
          .deleteSavedMovie(foundMovie._id)
          .then(() => {
            setSavedMovies((list) => list.filter((item) => item._id !== foundMovie._id));
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      mainApi
        .deleteSavedMovie(movie._id)
        .then(() => {
          setSavedMovies((list) => list.filter((item) => item._id !== movie._id));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <main className="main">
      <section className="movies">
        <SearchForm handleClick={handleSearchSubmit} />
        {searchWasDone && (
          <MoviesCardList
            movies={movies}
            savedMovies={savedMovies}
            searchWasDone={searchWasDone}
            isLoading={isLoading}
            onLike={handleMovieLike}
            onDelete={handleMovieDelete}
            isSaved={isSaved}
          />
        )}
      </section>
    </main>
  );
}

export default MoviesTemplate;
