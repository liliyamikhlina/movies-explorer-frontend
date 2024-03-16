import MoviesTemplate from "../MoviesTemplate/MoviesTemplate";
import { useEffect, useState } from "react";

function SavedMovies({ moviesList, handleMovieLike, handleMovieDislike, handleMovieDelete }) {
  const [searchWasDone, setSearchWasDone] = useState(false);

  useEffect(() => {
    setSearchWasDone(true);
  }, []);

  const handleSearchDone = (value) => {
    setSearchWasDone(value);
  };

  return (
    <MoviesTemplate
      moviesList={moviesList}
      isLoading={false}
      searchWasDone={searchWasDone}
      onSearchDone={handleSearchDone}
      handleMovieLike={handleMovieLike}
      handleMovieDislike={handleMovieDislike}
      handleMovieDelete={handleMovieDelete}
    />
  );
}

export default SavedMovies;
