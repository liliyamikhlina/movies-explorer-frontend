import "./Movies.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Moovies() {
    return (
      <section className="movies">
        <Header main={false}/>
        <SearchForm />
        <MoviesCardList />
        <Footer />
      </section>
    );
  }
  
  export default Moovies;
  