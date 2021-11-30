import Searchfield from "./searchfield/searchfield";
import Card from "./card/card";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { useEffect } from "react";
import getFilteredItems from "../../helper-functions/getFilteredItems";
import setParams from "../../helper-functions/setParams";
import { setSelectedProducts } from "../../redux/productsDataSlice";
import { useDispatch } from "react-redux";
import { getInitialData } from "../../redux/productsDataSlice";
import { displayResultsBtn } from "../../helper-functions/displayResultsBtn";
import AwesomeDebouncePromise from "awesome-debounce-promise";

function CardsContainer() {
  const { categories, brands, searchInput, priceRange, selectedProducts } =
    useSelector((state) => state);
  const elementsIndexes = useSelector((state) => state.paginationElements)[
    useSelector((state) => state.paginationElements).length - 1
  ];
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const displayResults = AwesomeDebouncePromise(displayResultsBtn, 0);

  useEffect(() => {
    dispatch(getInitialData({}));
  }, [dispatch]);

  useEffect(() => {
    history.push({
      search: setParams(searchInput, categories, brands, priceRange).toString(),
    });
    document.addEventListener("filters-change", function () {
      displayResults();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brands, categories, priceRange, searchInput]);

  async function showResults() {
    const data = await getFilteredItems(location.search);
    dispatch(
      setSelectedProducts({
        selectedProducts: data,
      })
    );
    document.querySelector(".cards__show-resluts").style.visibility = "hidden";
  }

  return (
    <div className="cards">
      <button className="cards__show-resluts" onClick={showResults}>
        SHOW RESULTS
      </button>
      <Searchfield />
      <div className="merchandise-cards">
        {selectedProducts[selectedProducts.length - 1].length > 0 ? (
          selectedProducts[selectedProducts.length - 1]
            .slice(elementsIndexes[0], elementsIndexes[1])
            .map((filteredData) => (
              <Card
                key={filteredData.id}
                id={filteredData.id}
                img={filteredData.images[0]}
                rating={filteredData.rating}
                price={filteredData.price}
                title={filteredData.title}
                discount={filteredData.discount}
                isFavourite={filteredData.isFavourite}
              />
            ))
        ) : (
          <div className="merchandise-cards__filters-error-message">
            Nothing was found. Please, reset your filters or check your input
          </div>
        )}
      </div>
    </div>
  );
}

export default CardsContainer;
