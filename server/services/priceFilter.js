module.exports = {
  filterUserInput: function (userInput, cardData) {
    return cardData.filter((cardData) =>
      cardData.title.toLowerCase().includes(userInput.toLowerCase())
    );
  },
  filterPrice: function (productsArr = [], priceRange = [0, 0]) {
    return productsArr.filter((product) => {
      return product.price >= priceRange[0] && product.price <= priceRange[1];
    });
  },
  filterData: function (
    productsArr = [],
    categoryFilters = [],
    brandFilters = []
  ) {
    if (categoryFilters.length === 0 && brandFilters.length === 0)
      return productsArr;

    function filter(productsArr = [], filters = [], propertyName) {
      if (filters.length === 0) {
        return productsArr;
      }

      const result = [];

      for (const filter of filters) {
        for (const product of productsArr) {
          if (
            product[propertyName]
              .split("-")
              .join("")
              .toLowerCase()
              .includes(filter.toLowerCase().split(" ").join("_"))
          ) {
            result.push(product);
          }
        }
      }

      return result;
    }

    return filter(
      filter(productsArr, categoryFilters, "category"),
      brandFilters,
      "brand"
    );
  },
};
