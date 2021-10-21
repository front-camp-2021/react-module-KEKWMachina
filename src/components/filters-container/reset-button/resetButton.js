import { useDispatch, useSelector } from "react-redux";
import { clearBrands } from "../../../redux/brandsSlice";
import { clearCategories } from "../../../redux/categoriesSlice";
import { clearPriceRange } from "../../../redux/minAndMaxPriceSlice";
import { findMinMax } from "../filters/filters-price/findMinMax";
import { filterData } from "../../../redux/cardDataSlice";
import { clearSearchValue } from "../../../redux/cardsSlice";

function ResetButton() {
    const dispatch = useDispatch();
    const checkboxes = document.querySelectorAll('.filters__checkbox-square');
    const searchInput = document.querySelector('.searchfield__input');
    const cardsData = useSelector(state => state.cardsData);
    const [min, max] = findMinMax(cardsData[0]);

    function resetFilters() {
        checkboxes.forEach(checkbox => checkbox.checked = false);
        searchInput.value = '';

        dispatch(
            clearBrands({})
        )
        dispatch(
            clearCategories({})
        )
        dispatch(
            clearPriceRange({})
        )
        dispatch(
            filterData({
                thumb: 'thumb thumb--left',
                thumbValue: min,
                rightThumbValue: max
            })
        )
        dispatch(
            clearSearchValue({})
        )
    }

    return (
        <button className="filters__filters-reset-button" onPointerDown={resetFilters}>Reset Filters</button>
    )
}

export default ResetButton;