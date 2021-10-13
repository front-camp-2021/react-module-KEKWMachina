export function filterData(productsArr = [], categoryFilters = [], brandFilters = [], originalArr = []) {

    function filter(productsArr = [], filters = [], propertyName) {
      if (productsArr.length === 0) {
        productsArr = originalArr;
      }

      const result = [];

      for (const filter of Array.from(filters)) {
        for (const product of productsArr) {
          if (product[propertyName].includes(filter.toLowerCase())) {
            result.push(product);
          }
        }
      }

      return result;
    }

    filter(filter(productsArr, categoryFilters, 'category'), brandFilters, 'brand');
    filter(productsArr, categoryFilters, 'category');

    if(filter(filter(productsArr, categoryFilters, 'category'), brandFilters, 'brand').length === 0) {

      return filter(productsArr, categoryFilters, 'category');

    } else if (filter(productsArr, categoryFilters, 'category').length === 0) {

      return filter(filter(productsArr, categoryFilters, 'category'), brandFilters, 'brand');

    } else {

      return filter(filter(productsArr, categoryFilters, 'category'), brandFilters, 'brand');

    }
  }

