import Searchfield from "./searchfield";
import Card from "../card/card";
import React, { useState } from 'react';
import { cardsData } from "../../../data";

function CardsContainer(props) {
    const [searchValue, setSearchValue] = useState('');
    const [isSearched, setIsSearched] = useState(false);

    function handleSearchInput(event) {
        setSearchValue(event?.target?.value);
        setIsSearched(true);
    }

    const filteredData = cardsData.filter(cardData => {
        return cardData.title.includes(searchValue);
    })

    let id = 0;
    return (
        <div className="cards">
            <Searchfield onInputChange={handleSearchInput} />
            <div className="merchandise-cards">
                {
                    isSearched ? 
                    filteredData.map(filteredData => {
                        id++
                        return <Card
                            key = {id}
                            img={filteredData.images[0]}
                            rating={filteredData.rating}
                            price={filteredData.price}
                            title={filteredData.title}
                        />
                    }) :
                    props.cardsData.map(filteredData => {
                        id++
                        return <Card
                            key = {id}
                            img={filteredData.images[0]}
                            rating={filteredData.rating}
                            price={filteredData.price}
                            title={filteredData.title}
                        />
                    }) 
                }
            </div>
        </div>
    )
}

export default CardsContainer;