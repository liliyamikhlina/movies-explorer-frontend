import { useState } from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  const [checkboxActive, setCheckboxActive] = useState(true);

  const handleCheckboxToggle = () => {
    setCheckboxActive(!checkboxActive);
  };

  return (
    <div className="search__checkbox-bg" onClick={handleCheckboxToggle}>
      <input
        className="search__checkbox-input"
        type="checkbox"
        value="isShortMovies"
      />
      <div
        className={`search__checkbox ${
          checkboxActive ? "" : "search__checkbox_inactive"
        }`}
      ></div>
      <label className="search__checkbox-label">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
