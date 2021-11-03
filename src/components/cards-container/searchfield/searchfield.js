import { useDispatch } from "react-redux";
import { isSearchedStatus } from "../../../redux/isSearchedSlice";
import { filterSearchInput } from "../../../redux/cardDataSlice";
<<<<<<< HEAD
import { setElements } from "../../../redux/paginationSlice";
=======
>>>>>>> 6bcc3b061450ee7e9a881422c61ff193db7d48cf

function Searchfield() {
  const dispatch = useDispatch();

  function handleSearchInput(event) {
    dispatch(
      isSearchedStatus({
        isSearchedStatus: true,
<<<<<<< HEAD
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
=======
>>>>>>> 6bcc3b061450ee7e9a881422c61ff193db7d48cf
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
