import { setPriceRange } from "../redux/minAndMaxPriceSlice";
import { filterData } from "../redux/cardDataSlice";

export default function handleRightInput(event, dispatchFn, minVal) {
  const value = Math.max(Number(event.target.value), minVal + 1);
  dispatchFn(
    setPriceRange({
      priceRange: [Number(document.querySelector(".thumb--left").value), value],
    })
  );
  dispatchFn(
    filterData({
      thumb: event.target.className,
      thumbValue: event.target.value,
      leftThumbValue: document.querySelector(".thumb--left").value,
    })
  );
}
