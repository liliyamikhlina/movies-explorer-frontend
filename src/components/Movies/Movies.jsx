import MoviesTemplate from "../MoviesTemplate/MoviesTemplate";

function Movies({
  moviesList,
  isLoading,
  handleMovieLike,
  handleMovieDislike,
  handleMovieDelete,
}) {
  return (
    <MoviesTemplate
      moviesList={moviesList}
      isLoading={isLoading}
      handleMovieLike={handleMovieLike}
      handleMovieDislike={handleMovieDislike}
      handleMovieDelete={handleMovieDelete}
    />
  );
}

export default Movies;
