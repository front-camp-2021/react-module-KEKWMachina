
export default async function resetFilters(
  dispatchFn,
  setSelectedProductsFn,
  clearBrandsFn,
  clearCategoriesFn,
  clearPriceRangeFn,
  clearSearchValueFn
) {
  const checkboxes = document.querySelectorAll(".filters__checkbox-square");
  const searchInput = document.querySelector(".searchfield__input");
  checkboxes.forEach((checkbox) => (checkbox.checked = false));
  searchInput.value = "";
  const data = await fetch("http://localhost:3001/products").then((data) =>
    data.json()
  );
  dispatchFn(setSelectedProductsFn({
    selectedProducts: data,
  }))
  dispatchFn(clearBrandsFn({}));
  dispatchFn(clearCategoriesFn({}));
  dispatchFn(clearSearchValueFn({}));
  dispatchFn(clearPriceRangeFn({}));
}
