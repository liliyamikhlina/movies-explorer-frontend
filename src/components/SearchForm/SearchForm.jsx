import { useState } from "react";
import "./SearchForm.css";
import search from "../../images/search.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ setSearchResults, handleClick }) {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setErrorMessage("");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      setErrorMessage("Нужно ввести ключевое слово");
      return;
    }
    handleClick(inputValue);
  };

  return (
    <form className="search" method="post" onSubmit={handleSearchSubmit}>
      <div className="search__box">
        <img alt="Лупа" className="search__pic" src={search}></img>
        <div className="search__input-box">
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            value={inputValue}
            onChange={handleInputChange}
          ></input>
          <button
            className="search__button"
            type="submit"
          >
            Найти
          </button>
        </div>
      </div>
      {errorMessage && <p className="search__error">{errorMessage}</p>}
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
