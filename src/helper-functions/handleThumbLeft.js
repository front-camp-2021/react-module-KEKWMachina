import { setPriceRange } from "../redux/minAndMaxPriceSlice";
import { filterData } from "../redux/cardDataSlice";

export default function handleLeftInput (event, dispatchFn, maxVal) {
  const value = Math.min(Number(event.target.value), maxVal - 1);
  dispatchFn(
    setPriceRange({
      priceRange: [
        value,
        Number(document.querySelector(".thumb--right").value),
      ],
    })
  );
  dispatchFn(
    filterData({
      thumb: event.target.className,
      thumbValue: event.target.value,
      rightThumbValue: document.querySelector(".thumb--right").value,
    })
  );
};
