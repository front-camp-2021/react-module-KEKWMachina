import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearBrands } from "../../redux/brandsSlice";
import { clearCategories } from "../../redux/categoriesSlice";
import { clearPriceRange } from "../../redux/minAndMaxPriceSlice";
import { filterData } from "../../redux/cardDataSlice";
import { clearSearchValue } from "../../redux/searchInputSlice";
import resetFilters from "../../helper-functions/resetFilters";

function MainContentNav(props) {
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
    <div className="main-content-nav">
      <div className="filters-header">
        <div className="filters-header__nav">
          <div className="filters-header__marker">Filters</div>
          <button className="filters-header__filters-hide-button"></button>
        </div>
      </div>
      <div className="search-results">
        <div className="search-results__number">
          {props.cardsData.length} Results Found
        </div>
        <div>
        <Link to="/discounts">
          <button onPointerDown={reset} className="search-results__discounted-button"></button>
        </Link>
        <Link to="/wishlist">
          <button onPointerDown={reset} className="search-results__wishlist-button"></button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default MainContentNav;
