import { useSelector } from "react-redux";
import PropTypes from "prop-types";

function Checkbox({ title, checkboxName, handleChange }) {
  const { categories, brands } = useSelector((state) => state);

  function checked() {
    if(title === "Categories") {
      return categories.includes(checkboxName);
    } else {
      return brands.includes(checkboxName);
    }
  };

  return (
    <>
      <div className="filters__checkbox">
        <input
          type="checkbox"
          id={checkboxName}
          name={checkboxName}
          className="filters__checkbox-square"
          onChange={handleChange}
          checked={checked()}
        ></input>
        <label htmlFor={checkboxName} className="filters__checkbox-label">
          {checkboxName}
        </label>
      </div>
    </>
  );
}

Checkbox.propTypes = {
  title: PropTypes.string,
  checkboxName: PropTypes.string,
  handleChange: PropTypes.func
}

export default Checkbox;
