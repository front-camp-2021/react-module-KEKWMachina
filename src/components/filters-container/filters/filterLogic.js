export function filterData(productsArr = [], categoryFilters = [], brandFilters = [], originalArr = []) {
  if (categoryFilters.length === 0 && brandFilters.length === 0) return originalArr;

  const activeData =
  productsArr.length === originalArr.length ? originalArr : productsArr;

  function filter(productsArr = [], filters = [], propertyName) {
    if (filters.length === 0) {
      return productsArr;
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

  return filter(filter(activeData, categoryFilters, 'category'), brandFilters, 'brand')
}

