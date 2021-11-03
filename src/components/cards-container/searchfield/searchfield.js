import { useDispatch } from "react-redux";
import { isSearchedStatus } from "../../../redux/isSearchedSlice";
import { filterSearchInput } from "../../../redux/cardDataSlice";
import { setElements } from "../../../redux/paginationSlice";

function Searchfield() {
  const dispatch = useDispatch();

  function handleSearchInput(event) {
    dispatch(
      isSearchedStatus({
        isSearchedStatus: true,
      })
    );
    dispatch(
      filterSearchInput({
        userInput: event.target.value
      })
    );
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
        onInput={handleSearchInput}
      ></input>
    </div>
  );
}

export default Searchfield;
