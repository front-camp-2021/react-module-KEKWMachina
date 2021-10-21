export function filterData(productsArr = [], categoryFilters = [], brandFilters = [], originalArr = []) {
  if (categoryFilters.length === 0 && brandFilters.length === 0) return originalArr;

  function filter(productsArr = [], filters = [], propertyName) {
    if (productsArr.length === 0) {
      productsArr = originalArr;
    }

    const result = [];

    for (const filter of filters) {
      for (const product of productsArr) {
        if (product[propertyName].toLowerCase().includes(filter.toLowerCase().split(' ').join('_'))) {
          result.push(product);
        }
      }
    }

    return result;
  }

  if (filter(filter(productsArr, categoryFilters, 'category'), brandFilters, 'brand').length === 0) {

    return filter(productsArr, categoryFilters, 'category');

  } else if (filter(productsArr, categoryFilters, 'category').length === 0) {

    return filter(filter(productsArr, categoryFilters, 'category'), brandFilters, 'brand');

  } else {

    return filter(filter(productsArr, categoryFilters, 'category'), brandFilters, 'brand');

  }
}

