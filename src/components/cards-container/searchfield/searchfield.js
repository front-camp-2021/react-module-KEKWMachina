import { useDispatch } from "react-redux";
import { setElements } from "../../../redux/paginationSlice";
import { setUserInput } from "../../../redux/searchInputSlice";
import { dispatchChangeEvent } from "../../../helper-functions/dispatchFiltersChange";
function Searchfield() {
  const dispatch = useDispatch();

  function handleSearchInput(event) {
    dispatchChangeEvent();
    dispatch(
      setUserInput({
        userInput: event.target.value,
      })
    );
    dispatch(
      setElements({
        indexesAndActivePage: [0, 9, 1],
      })
    );
  }

  return (
    <div className="searchfield">
      <input
        className="searchfield__input"
        placeholder="Search"
        onChange={handleSearchInput}
      ></input>
    </div>
  );
}

export default Searchfield;
