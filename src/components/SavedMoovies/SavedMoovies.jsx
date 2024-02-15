import "../Movies/Movies.css";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList"

function SavedMoovies() {
    return (
      <section className="movies">
        <SearchForm />
        <MoviesCardList />
      </section>
    );
  }
  
  export default SavedMoovies;
  