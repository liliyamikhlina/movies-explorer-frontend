import MoviesTemplate from "../MoviesTemplate/MoviesTemplate";
import { useEffect, useState } from "react";

function SavedMovies({
  moviesList,
  handleMovieLike,
  handleMovieDislike,
  handleMovieDelete,
}) {
  return (
    <MoviesTemplate
      moviesList={moviesList}
      isLoading={false}
      handleMovieLike={handleMovieLike}
      handleMovieDislike={handleMovieDislike}
      handleMovieDelete={handleMovieDelete}
    />
  );
}

export default SavedMovies;
