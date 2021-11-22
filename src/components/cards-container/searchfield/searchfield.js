import { useDispatch } from "react-redux";
import { setElements } from "../../../redux/paginationSlice";
import { setUserInput } from "../../../redux/searchInputSlice";
import { debounce } from "../../../helper-functions/debounce";

function Searchfield() {
  const dispatch = useDispatch();

  function handleSearchInput(event) {
    dispatch(
      setUserInput({
        userInput: event.target.value
      })
    )
    dispatch(
      setElements({
        indexesAndActivePage: [0, 9, 1]
      })
    );

  }

  return (
    <div className="searchfield">
      <input
        className="searchfield__input"
        placeholder="Search"
        onChange={debounce(handleSearchInput, 200)}
      ></input>
    </div>
  );
}

export default Searchfield;
