import { useState } from "react";
import MoviesTemplate from "../MoviesTemplate/MoviesTemplate";

function Movies({ moviesList, isLoading }) {
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
    />
  );
}

export default Movies;
