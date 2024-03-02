import { useState } from "react";
import "./SearchForm.css";
import search from "../../../images/search.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ movies, setSearchResults }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const results = movies.filter((result) => result.nameRU.includes(inputValue));
    setSearchResults(results);
    console.log(results);
  };

  return (
    <form className="search" method="post">
      <div className="search__box">
        <img alt="Лупа" className="search__pic" src={search}></img>
        <div className="search__input-box">
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            required
            value={inputValue}
            onChange={handleInputChange}
          ></input>
          <button className="search__button" type="submit" onClick={handleSearchSubmit}>
            Найти
          </button>
        </div>
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
