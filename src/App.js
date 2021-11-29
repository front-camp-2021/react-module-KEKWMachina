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
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getInitialData } from "./redux/productsDataSlice";
import { findDiscountedItems } from "./helper-functions/findDiscountedItems";

function App() {
  const { activeItem, selectedProducts } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialData());
  }, [dispatch]);

  return (
    <div className="App">
      <Router basename="/products">
        <Header />
        <Breadcrumbs />
        <Switch>
          <Route exact path="/">
            <Redirect to="/search/" />
          </Route>
          <Route exact path="/search/">
            {selectedProducts.length > 0 && (
              <>
                <MainContentNav
                  itemsFound={
                    selectedProducts[selectedProducts.length - 1].length
                  }
                />
                <div className="main-content">
                  <FiltersContainer />
                  <CardsContainer />
                </div>
                <Pagination
                  cardsData={selectedProducts[selectedProducts.length - 1]}
                />
              </>
            )}
          </Route>
          {selectedProducts.length > 0 && (
            <Route exact path="/wishlist">
              <Wishlist />
            </Route>
          )}
          {selectedProducts.length > 0 && (
            <Route exact path="/discounts">
              <Discounts cards={findDiscountedItems(selectedProducts[0])} />
            </Route>
          )}
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
