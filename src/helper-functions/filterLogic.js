export function filterData(productsArr = [], categoryFilters = [], brandFilters = []) {
  if (categoryFilters.length === 0 && brandFilters.length === 0) return productsArr;

  function filter(productsArr = [], filters = [], propertyName) {
    if (filters.length === 0) {
      return productsArr;
    }

    const result = [];

    for (const filter of filters) {
      for (const product of productsArr) {
        if (product[propertyName].split('-').join('').toLowerCase().includes(filter.toLowerCase().split(' ').join('_'))) {
          result.push(product);
        }
      }
    }

    return result;
  }

  return filter(filter(productsArr, categoryFilters, 'category'), brandFilters, 'brand')
}

