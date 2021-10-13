import Searchfield from "./searchfield";
import Card from "../card/card";
import React, { useState } from 'react';
import { cardsData } from "../../../data";


function CardsContainer() {
    const [searchValue, setSearchValue] = useState('');

    function handleSearchInput(event) {
        setSearchValue(event?.target?.value);
    }

    const filteredData = cardsData.filter(cardData => {
        return cardData.title.includes(searchValue);
    })

    return (
        <div className="cards">
            <Searchfield onInputChange={handleSearchInput} />
            <div className="merchandise-cards">
                {
                    filteredData.map(filteredData => {
                        return <Card
                            //key = {Math.floor(Math.random() * 1000)}
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