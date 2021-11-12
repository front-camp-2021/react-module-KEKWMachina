import Searchfield from "./searchfield/searchfield";
import Card from "./card/card";
import React from "react";
import { useSelector } from "react-redux";

function CardsContainer({cardsData}) {
  const elementsIndexes = useSelector((state) => state.paginationElements)[
    useSelector((state) => state.paginationElements).length - 1
  ];

  const dataForRender = cardsData;

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
                discount={filteredData.discount}
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
