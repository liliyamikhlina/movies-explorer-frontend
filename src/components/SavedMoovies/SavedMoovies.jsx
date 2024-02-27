import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import "../Main/Main.css";

function SavedMoovies() {
  return (
    <main className="main">
      <section className="movies">
        <SearchForm />
        <MoviesCardList />
      </section>
    </main>
  );
}

export default SavedMoovies;
