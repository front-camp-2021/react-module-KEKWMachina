import Searchfield from "./searchfield";
import Card from "../card/card";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addSearchValue } from "../../../redux/cardsSlice";
import { isSearchedStatus } from "../../../redux/isSearchedSlice";

function CardsContainer(props) {
    const dispatch = useDispatch();
    const userInput = useSelector(state => state.searchParameter);
    const searchStatus = useSelector(state => state.searchStatus);
    const isSearched = searchStatus[searchStatus.length - 1];

    function handleSearchInput(event) {
        dispatch(
            addSearchValue({
                searchInput: event?.target?.value,
            }),
        )
        dispatch(
            isSearchedStatus({
                isSearchedStatus: true,
            })
        )
    }

    function filterInput(cardsArr) {
        return cardsArr.filter(cardData => cardData.title.includes(userInput[userInput.length - 1]));
    }

    let dataForRender = [];

    if (props.isFiltered) {
        
        dataForRender = props.cardsData;

    } else if (isSearched) {

        dataForRender = filterInput(props.cardsData);

    } else if (props.isFiltered && isSearched) {

        dataForRender = filterInput(props.cardsData);

    } else {

        dataForRender = props.cardsData.slice(0, 9);
        
    }

    return (
        <div className="cards">
            <Searchfield onInputChange={handleSearchInput} />
            <div className="merchandise-cards">
                {
                    dataForRender.map(filteredData => {
                        return <Card
                            key={filteredData.id}
                            id={filteredData.id}
                            img={filteredData.images[0]}
                            rating={filteredData.rating}
                            price={filteredData.price}
                            title={filteredData.title}
                            addToWishlist={props.wishlistItems}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default CardsContainer;