import FiltersContainer from "./components/filters-container/filtersContainer";
import CardsContainer from "./components/cards-container/cardsContainer";
import Pagination from "./components/pagination/pagination";
import Header from "./components/header/header";
import Breadcrumbs from "./components/breadcrumbs/breadcrumbs";
import MainContentNav from "./components/main-content-nav/main-content-nav";
import Wishlist from "./components/wishlist/wishlist";
import Discounts from "./components/discounts/discounts";
import ItemPage from "./components/itempage/itempage";
import Login from "./components/login/login";
import EditPage from "./components/editingPage/editPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterData } from "./helper-functions/filterLogic";
import { filterWishlistItems } from "./helper-functions/filtersWishlistItems";
import { useEffect } from "react";
import { getCardData } from "./redux/cardDataSlice";
import { filterUserInput } from "./helper-functions/filterUserInput";
import { findDiscountedItems } from "./helper-functions/findDiscountedItems";

function App() {
  const { categories, brands, wishlist, searchInput, activeItem } = useSelector(
    (state) => state
  );
  const cardsData = useSelector((state) => state.cardsData)[
    useSelector((state) => state.cardsData).length - 1
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCardData());
  }, [dispatch]);

  const cardProps = cardsData
    ? filterData(filterUserInput(searchInput, cardsData), categories, brands)
    : [];

  return (
    <div className="App">
      <Router>
        <Header />
        <Breadcrumbs />
        <Switch>
          <Route exact path="/">
            {Boolean(cardsData) && (
              <>
                <MainContentNav itemsFound={cardProps.length} />
                <div className="main-content">
                  <FiltersContainer />
                  <CardsContainer cardsData={cardProps} />
                </div>
                <Pagination cardsData={cardProps} />
              </>
            )}
          </Route>
          <Route exact path="/wishlist">
            <Wishlist cards={filterWishlistItems(wishlist, cardsData)} />
          </Route>
          <Route exact path="/discounts">
            <Discounts cards={findDiscountedItems(cardProps)} />
          </Route>
          <Route exact path="/edit">
            <EditPage />
          </Route>
          <Route exact path="/product-:id">
            <ItemPage card={activeItem} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route>
            <h1 className="page-not-found">Oops, wrong page 404</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
