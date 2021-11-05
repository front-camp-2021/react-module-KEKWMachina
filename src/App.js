import FiltersContainer from "./components/filters-container/filtersContainer";
import CardsContainer from "./components/cards-container/cardsContainer";
import Pagination from "./components/pagination/pagination";
import Header from "./components/header/header";
import Breadcrumbs from "./components/breadcrumbs/breadcrumbs";
import MainContentNav from "./components/main-content-nav/main-content-nav";
import Wishlist from "./components/wishlist/wishlist";
import ItemPage from "./components/itempage/itempage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterData } from "./helper-functions/filterLogic";
import { filterWishlistItems } from "./helper-functions/filtersWishlistItems";
import { useEffect } from "react";
import { getCardData } from "./redux/cardDataSlice";
import { filterUserInput } from "./helper-functions/filterUserInput";

function App() {
  const { categories, brands, wishlist } = useSelector((state) => state);

  const activeItem = useSelector((state) => state.itempage)[
    useSelector((state) => state.itempage).length - 1
  ];
  const cardsData = useSelector((state) => state.cardsData)[
    useSelector((state) => state.cardsData).length - 1
  ];
  const searchInput = useSelector((state) => state.searchInput)[
    useSelector((state) => state.searchInput).length - 1
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardData());
  }, [dispatch]);

  let isFiltered = categories.length > 0 || brands.length > 0;

  return (
    <div className="App">
      <Header />
      <Router>
        <Breadcrumbs />
        <Switch>
          <Route exact path="/">
            {Boolean(cardsData) && (
              <>
                <MainContentNav
                  cardsData={filterData(
                    filterUserInput(searchInput, cardsData),
                    categories,
                    brands,
                    filterUserInput(searchInput, cardsData)
                  )}
                  isFiltered={isFiltered}
                />
                <div className="main-content">
                  <FiltersContainer />
                  <CardsContainer
                    cardsData={filterData(
                      filterUserInput(searchInput, cardsData),
                      categories,
                      brands,
                      filterUserInput(searchInput, cardsData)
                    )}
                    isFiltered={isFiltered}
                  />
                </div>
                <Pagination
                  cardsData={filterData(
                    filterUserInput(searchInput, cardsData),
                    categories,
                    brands,
                    filterUserInput(searchInput, cardsData)
                  )}
                  isFiltered={isFiltered}
                />
              </>
            )}
          </Route>
          <Route exact path="/wishlist">
            <Wishlist cards={filterWishlistItems(wishlist, cardsData)} />
          </Route>
          <Route exact path="/:id">
            <ItemPage card={activeItem} />
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
