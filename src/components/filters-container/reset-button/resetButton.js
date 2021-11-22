import { useDispatch, useSelector } from "react-redux";
import { clearBrands } from "../../../redux/brandsSlice";
import { clearCategories } from "../../../redux/categoriesSlice";
import { clearPriceRange } from "../../../redux/minAndMaxPriceSlice";
import { filterData } from "../../../redux/cardDataSlice";
import { clearSearchValue } from "../../../redux/searchInputSlice";
import resetFilters from "../../../helper-functions/resetFilters";

function ResetButton() {
  const dispatch = useDispatch();
  const cardsData = useSelector((state) => state.cardsData);

  function reset() {
    resetFilters(
      dispatch,
      cardsData,
      clearBrands,
      clearCategories,
      clearPriceRange,
      clearSearchValue,
      filterData
    );
  }

  return (
    <button className="filters__filters-reset-button" onPointerDown={reset}>
      Reset Filters
    </button>
  );
}

export default ResetButton;
