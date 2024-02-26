import "./SearchForm.css";
import search from "../../../images/search.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <form className="search" method="post">
      <div className="search__box">
        <img alt="Лупа" className="search__pic" src={search}></img>
        <div className="search__input-box">
          <input className="search__input" placeholder="Фильм"></input>
          <button className="search__button" type="submit">Найти</button>
        </div>
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
