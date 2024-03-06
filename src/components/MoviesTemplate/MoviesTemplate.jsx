import { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "../Main/Main.css";
import "../MoviesTemplate/MoviesTemplate.css";

function MoviesTemplate({ moviesList, isLoading }) {  
  const [movies, setMovies] = useState([]);
  const [searchWasDone, setSearchWasDone] = useState(false);

  useEffect(()=>{
    setMovies(moviesList);
  }, [moviesList])

  const handleSearchSubmit = (inputValue) => {
    const results = moviesList.filter((result) => result.nameRU.includes(inputValue));
    setMovies(results);
    setSearchWasDone(true);
  };

  return (
    <main className="main">
      <section className="movies">
        <SearchForm
          handleClick={handleSearchSubmit}
        />
        <MoviesCardList movies={movies}
         searchWasDone={searchWasDone} 
         isLoading={isLoading}/>
      </section>
    </main>
  );
}

export default MoviesTemplate;
