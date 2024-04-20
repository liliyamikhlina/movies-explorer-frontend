import { useState } from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ isShortFilmsChecked, handleShortFilmsCheckbox }) {

  return (
    <div className="search__checkbox-bg" onClick={handleShortFilmsCheckbox}>
      <input
        className="search__checkbox-input"
        type="checkbox"
        value="isShortMovies"
      />
      <div
        className={`search__checkbox ${
          isShortFilmsChecked ? "" : "search__checkbox_inactive"
        }`}
      ></div>
      <label className="search__checkbox-label">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
