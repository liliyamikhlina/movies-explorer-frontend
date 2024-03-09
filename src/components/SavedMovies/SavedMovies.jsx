import MoviesTemplate from "../MoviesTemplate/MoviesTemplate";
import { useEffect, useState } from "react";

function SavedMovies({ moviesList }) {
  const [searchWasDone, setSearchWasDone] = useState(false);

  const handleSearchDone = (value) => {
    setSearchWasDone(value);
  }

  useEffect(() => {
    setSearchWasDone(true);
  }, []);
  
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
