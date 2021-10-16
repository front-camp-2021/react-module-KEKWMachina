import FiltersContainer from './components/filters-container/filtersConrainer';
import CardsContainer from './components/cards-container/searchfield/cardsContainer';
import Pagination from './components/pagination/pagination';
import Header from './components/header/header';
import Breadcrumbs from './components/breadcrumbs/breadcrumbs';
import MainContentNav from './components/main-content-nav/main-content-nav';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { cardsData } from './data';
import { filterData } from './components/filters-container/filters/filterLogic';
import Wishlist from './components/wishlist/wishlist';
import { filterWishlistItems } from './components/wishlist/filtersWishlistItems';

function App() {
  const categoriesFilters = useSelector(state => state.categories);
  const brandsFilters = useSelector(state => state.brands);
  const wishlistIDs = useSelector(state => state.wishlist);

  const cards = [...cardsData];

  let isFiltered = false;

  if (categoriesFilters.length > 0 || brandsFilters.length > 0) {
    isFiltered = true;
  }

  return (
    <div className="App">
      <Header />
      <Breadcrumbs />
      <Router>
        <Route exact path="/">
          <MainContentNav />
          <div className="main-content">
            <FiltersContainer/>
            <CardsContainer 
            cardsData={filterData(cards, categoriesFilters, brandsFilters, cards)} 
            isFiltered={isFiltered}
            />
          </div>
          <Pagination />
        </Route>
        <Route path="/wishlist">
          <Wishlist cards={filterWishlistItems(wishlistIDs, cardsData)}/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
