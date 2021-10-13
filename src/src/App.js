import FiltersContainer from './components/filters-container/filtersConrainer';
import CardsContainer from './components/cards-container/searchfield/cardsContainer';
import Pagination from './components/pagination/pagination';

function App() {

  return (
    <div className="App">
      <header className="header">
        <div className="header__logo"></div>
        <div className="header__text">Online Store</div>
      </header>

      <div className="breadcrumbs">
        <div className="breadcrumbs__home-button"></div>
        <div className="breadcrumbs__arrows"></div>
        <div className="breadcrumbs__active-page">eCommerce</div>
        <div className="breadcrumbs__arrows"></div>
        <div className="breadcrumbs__page">Electronics</div>
      </div>

      <div className="main-content-nav">
        <div className="filters-header">
          <div className="filters-header__nav">
            <div className="filters-header__marker">Filters</div>
            <button className="filters-header__filters-hide-button"></button>
          </div>
        </div>
        <div className="search-resluts">
          <div className="search-resluts__number">7588 Results Found</div>
          <button className="search-resluts__wishlist-button"></button>
        </div>
      </div>
      <div className="main-content">
        <FiltersContainer />
        <CardsContainer />
      </div>
      <Pagination />
    </div>
  );
}

export default App;
