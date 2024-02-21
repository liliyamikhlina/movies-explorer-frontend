import { useState } from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  const [checkboxActive, setCheckboxActive] = useState(true);

  const handleCheckboxToggle = () => {
    setCheckboxActive(!checkboxActive);
  };

  return (
    <div className="checkbox__box">
      <button
        className={`checkbox ${
          checkboxActive ? "" : "checkbox_inactive"
        }`}
        onClick={handleCheckboxToggle}
      ></button>
      <p className="checkbox__title">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
