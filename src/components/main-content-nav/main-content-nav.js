import { Link } from "react-router-dom";

function MainContentNav(props) {
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
          <button className="search-results__discounted-button"></button>
        </Link>
        <Link to="/wishlist">
          <button className="search-results__wishlist-button"></button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default MainContentNav;
