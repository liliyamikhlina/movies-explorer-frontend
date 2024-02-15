import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
// import Preloader from "./Preloader/Preloader"

function Moovies() {
    return (
      <section className="movies">
        <SearchForm />
        <MoviesCardList />
      </section>
    );
  }
  
  export default Moovies;
  