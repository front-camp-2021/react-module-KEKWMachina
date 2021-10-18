import FiltersContainer from './components/filters-container/filtersConrainer';
import CardsContainer from './components/cards-container/searchfield/cardsContainer';
import Pagination from './components/pagination/pagination';
import Header from './components/header/header';
import Breadcrumbs from './components/breadcrumbs/breadcrumbs';
import MainContentNav from './components/main-content-nav/main-content-nav';
import Wishlist from './components/wishlist/wishlist';
import ItemPage from './components/itempage/itempage';
import axios from 'axios';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { filterData } from './components/filters-container/filters/filterLogic';
import { filterWishlistItems } from './components/wishlist/filtersWishlistItems';
import { setCardData } from './redux/cardDataSlice';
import { useEffect } from 'react';


function App() {
  const categoriesFilters = useSelector(state => state.categories);
  const brandsFilters = useSelector(state => state.brands);
  const wishlistIDs = useSelector(state => state.wishlist);
  const activeItem = useSelector(state => state.itempage);
  const cardsData = useSelector(state => state.cardsData);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/products')
    .then(res => {
      dispatch(
        setCardData({
          cardData: res.data
        })
      )
    })
  }, [dispatch]);

  let isFiltered = false;

  if (categoriesFilters.length > 0 || brandsFilters.length > 0) {
    isFiltered = true;
  }

  return (
    <div className="App">
      <Header />
      <Router>
        <Breadcrumbs />
        <Route exact path="/">
          <MainContentNav />
          <div className="main-content">
            <FiltersContainer />
            <CardsContainer cardsData={filterData(cardsData[cardsData.length - 1], categoriesFilters, brandsFilters, cardsData[cardsData.length - 1])} isFiltered={isFiltered} />
          </div>
          <Pagination />
        </Route>
        <Switch>
          <Route path="/wishlist">
            <Wishlist cards={filterWishlistItems(wishlistIDs, cardsData[cardsData.length - 1])} />
          </Route>
          <Route path="/:id">
            <ItemPage card={activeItem[activeItem.length - 1]} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
