import MoviesTemplate from "../MoviesTemplate/MoviesTemplate";
import { useEffect, useState } from "react";

function SavedMovies({ moviesList }) {
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
    />
  );
}

export default SavedMovies;
