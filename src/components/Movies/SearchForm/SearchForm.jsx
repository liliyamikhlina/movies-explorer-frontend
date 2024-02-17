import { useState } from "react";
import "./SearchForm.css";
import search from "../../../images/search.svg";

function SearchForm() {
  const [checkboxActive, setCheckboxActive] = useState(true);

  const handleToggleCheckbox = () => {
    setCheckboxActive(!checkboxActive);
  };

  return (
    <section className="search">
      <div className="search__box">
        <img alt="Лупа" className="search__pic" src={search}></img>
        <form className="search__form" type="submit">
          <input className="search__input" placeholder="Фильм"></input>
          <button className="search__button">Найти</button>
        </form>
        <button
          className={`search__checkbox ${
            checkboxActive ? "" : "search__checkbox_inactive"
          }`}
          onClick={handleToggleCheckbox}
        ></button>
        <p className="search__paraghraph">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;