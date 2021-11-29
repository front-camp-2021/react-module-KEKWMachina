import { useDispatch } from "react-redux";
import { clearBrands } from "../../../redux/brandsSlice";
import { clearCategories } from "../../../redux/categoriesSlice";
import { clearPriceRange } from "../../../redux/minAndMaxPriceSlice";
import { clearSearchValue } from "../../../redux/searchInputSlice";
import { setSelectedProducts } from "../../../redux/productsDataSlice";
import resetFilters from "../../../helper-functions/resetFilters";

function ResetButton() {
  const dispatch = useDispatch();

  async function reset() {
    resetFilters(
      dispatch,
      setSelectedProducts,
      clearBrands,
      clearCategories,
      clearPriceRange,
      clearSearchValue
    );
  }

  return (
    <button
      className="filters__filters-reset-button"
      onClick={reset}
    >
      Reset Filters
    </button>
  );
}

export default ResetButton;
