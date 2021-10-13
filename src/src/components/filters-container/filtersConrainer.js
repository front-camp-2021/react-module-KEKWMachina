
import Filters from "./filters/filters-brands-categories/filters";
import ResetButton from "./reset-button/resetButton";
import React, { useState } from 'react';
import { cardsData } from "../../data";
import { filterData } from "./filters/filterLogic";

const filtersData = {
  "categories": [
    "Monitors",
    "Laptops",
    "Video cards",
    "Gaming keyboards",
    "Computer mouse",
    "SSD",
    "Sound cards",
    "RAM"
  ],
  "brands": [
    "Asus",
    "Acer",
    "Apple",
    "Dell",
    "Dynamode",
    "Gigabyte",
    "Kingston",
    "Lenovo",
    "Logitech",
    "MSI",
    "BenQ",
    "A4Tech"
  ]
}


function FiltersContainer() {
  const [categoriesFilters, setCategoriesFilters] = useState(new Set());
  const [brandsFilters, setBrandsFilters] = useState(new Set());

  function handleCategoriesChange(event) {
    if (event.target.checked) {
      setCategoriesFilters(prev => new Set(prev).add(event.target.name));
    } else {
      const temp = categoriesFilters;
      temp.delete(event.target.name);
      setCategoriesFilters(prev => new Set(temp));
    }
  }

  function handleBrandsChange(event) {
    if (event.target.checked) {
      setBrandsFilters(prev => new Set(prev).add(event.target.name));
    } else {
      const temp = brandsFilters;
      temp.delete(event.target.name);
      setBrandsFilters(prev => new Set(temp));
    }
  }

  const cards = [...cardsData];

  console.log(filterData(cards, categoriesFilters, brandsFilters));

  return (
    <div className="filters">
      <div className="filters__main">
        <Filters title="Categories" categoriesData={filtersData['categories']} hasLine={true} handleFiltersChange={handleCategoriesChange} />
        <Filters title="Brands" categoriesData={filtersData['brands']} hasLine={false} handleFiltersChange={handleBrandsChange} />
      </div>
      <ResetButton />
    </div>
  )
}


export default FiltersContainer;