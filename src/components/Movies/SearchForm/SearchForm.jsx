import "./SearchForm.css";
import search from "../../../images/search.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <div className="search__box">
        <img alt="Лупа" className="search__pic" src={search}></img>
        <form className="search__form" type="submit">
          <input className="search__input" placeholder="Фильм"></input>
          <button className="search__button">Найти</button>
        </form>
      </div>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
