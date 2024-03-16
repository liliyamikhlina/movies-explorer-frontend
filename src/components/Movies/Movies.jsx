import { useState } from "react";
import MoviesTemplate from "../MoviesTemplate/MoviesTemplate";

function Movies({ moviesList, isLoading, handleMovieLike, handleMovieDislike, handleMovieDelete }) {
  const [searchWasDone, setSearchWasDone] = useState(false);

  const handleSearchDone = (value) => {
    setSearchWasDone(value);
  };

  return (
    <MoviesTemplate
      moviesList={moviesList}
      isLoading={isLoading}
      searchWasDone={searchWasDone}
      onSearchDone={handleSearchDone}
      handleMovieLike={handleMovieLike}
      handleMovieDislike={handleMovieDislike}
      handleMovieDelete={handleMovieDelete}
    />
  );
}

export default Movies;
