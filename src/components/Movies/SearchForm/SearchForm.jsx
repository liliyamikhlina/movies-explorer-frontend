import "./SearchForm.css";
import search from "../../../images/search.svg";

function SearchForm() {
  return (
    <section className="search">
      <div className="search__box">
        <img alt="Лупа" className="search__pic" src={search}></img>
        <form className="search__form">
          <input className="search__input" placeholder="Фильм"></input>
          <button className="search__button">Найти</button>
        </form>
        <button className="search_short-button"></button>
        <p className="search__paraghraph">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
