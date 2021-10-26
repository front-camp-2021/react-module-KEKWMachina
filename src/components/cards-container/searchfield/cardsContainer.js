import Searchfield from "./searchfield";
import Card from "../card/card";
import React from "react";
import { useSelector } from "react-redux";

function CardsContainer({cardsData, isFiltered}) {
  const elementsIndexes = useSelector((state) => state.paginationElements)[
    useSelector((state) => state.paginationElements).length - 1
  ];
  const userInput = useSelector((state) => state.searchParameter);
  const searchStatus = useSelector((state) => state.searchStatus);
  const isSearched = searchStatus[searchStatus.length - 1];

  function filterInput(cardsArr) {
    return cardsArr.filter((cardData) =>
      cardData.title
        .toLowerCase()
        .includes(userInput[userInput.length - 1].toLowerCase())
    );
  }

  let dataForRender = [];

  if (isFiltered) {
    dataForRender = cardsData;
  } else if (isSearched) {
    dataForRender = filterInput(cardsData);
  } else if (isFiltered && isSearched) {
    dataForRender = filterInput(cardsData);
  } else {
    dataForRender = cardsData;
  }

  return (
    <div className="cards">
      <Searchfield />
      <div className="merchandise-cards">
        {dataForRender.length > 0 ? (
          dataForRender
            .slice(elementsIndexes[0], elementsIndexes[1])
            .map((filteredData) => (
              <Card
                key={filteredData.id}
                id={filteredData.id}
                img={filteredData.images[0]}
                rating={filteredData.rating}
                price={filteredData.price}
                title={filteredData.title}
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
