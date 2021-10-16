
import Filters from "./filters/filters-brands-categories/filters";
import ResetButton from "./reset-button/resetButton";

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

function FiltersContainer(props) {

  return (
    <div className="filters">
      <div className="filters__main">
        <Filters title="Categories" categoriesData={filtersData['categories']} hasLine={true}/>
        <Filters title="Brands" categoriesData={filtersData['brands']} hasLine={false}/>
      </div>
      <ResetButton />
    </div>
  )
}


export default FiltersContainer;