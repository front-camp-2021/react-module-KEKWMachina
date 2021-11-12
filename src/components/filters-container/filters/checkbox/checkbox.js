function Checkbox({ title, checkboxName, handleChange }) {
  return (
    <>
      <div className="filters__checkbox">
        <input
          type="checkbox"
          id={checkboxName}
          name={checkboxName}
          className="filters__checkbox-square"
          onClick={handleChange}
        ></input>
        <label htmlFor={checkboxName} className="filters__checkbox-label">
          {checkboxName}
        </label>
      </div>
    </>
  );
}

export default Checkbox;
