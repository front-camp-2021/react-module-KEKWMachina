import { useDispatch } from "react-redux";
import { isSearchedStatus } from "../../../redux/isSearchedSlice";
import { filterSearchInput } from "../../../redux/cardDataSlice";

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
    )
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
