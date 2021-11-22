import { findMinMax } from "./findMinMax";

export default function resetFilters(
  dispatchFn,
  cardsData,
  clearBrandsFn,
  clearCategoriesFn,
  clearPriceRangeFn,
  clearSearchValueFn,
  filterData
) {
  const checkboxes = document.querySelectorAll(".filters__checkbox-square");
  const searchInput = document.querySelector(".searchfield__input");
  const [min, max] = findMinMax(cardsData[0]);

  checkboxes.forEach((checkbox) => (checkbox.checked = false));
  searchInput.value = "";

  dispatchFn(clearBrandsFn({}));
  dispatchFn(clearCategoriesFn({}));
  dispatchFn(clearSearchValueFn({}));
  dispatchFn(
    filterData({
      thumb: "thumb thumb--left",
      thumbValue: min,
      rightThumbValue: max,
    })
  );
  dispatchFn(clearPriceRangeFn({}));
}
