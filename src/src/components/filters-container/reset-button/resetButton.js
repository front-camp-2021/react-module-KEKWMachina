import { useDispatch } from "react-redux";
import { clearBrands } from "../../../redux/brandsSlice";
import { clearCategories } from "../../../redux/categoriesSlice";

function ResetButton() {
    const dispatch = useDispatch();
    const checkboxes = document.querySelectorAll('.filters__checkbox-square');
              
    function resetFilters() {
        checkboxes.forEach(checkbox => checkbox.checked = false);
        
        dispatch(
            clearBrands({})
        )
        dispatch(
            clearCategories({})
        )
    }

    return (
        <button className="filters__filters-reset-button" onPointerDown={resetFilters}>Reset Filters</button>
    )
}

export default ResetButton;