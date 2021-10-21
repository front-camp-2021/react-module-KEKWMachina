import { useDispatch } from "react-redux";
import { addSearchValue } from "../../../redux/cardsSlice";
import { isSearchedStatus } from "../../../redux/isSearchedSlice";

function Searchfield() {
    const dispatch = useDispatch();

    function handleSearchInput(event) {
        dispatch(
            addSearchValue({
                searchInput: event?.target?.value,
            }),
        )
        dispatch(
            isSearchedStatus({
                isSearchedStatus: true,
            })
        )
    }

    return (
        <div className="searchfield">
            <input className="searchfield__input" placeholder="Search" onInput={handleSearchInput}></input>
        </div>
    )
}

export default Searchfield;