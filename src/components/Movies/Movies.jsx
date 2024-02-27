import "./Movies.css";
import "../Main/Main.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
// import Preloader from "./Preloader/Preloader"

function Moovies() {
  return (
    <main className="main">
      <section className="movies">
        <SearchForm />
        <MoviesCardList />
      </section>
    </main>
  );
}

export default Moovies;
