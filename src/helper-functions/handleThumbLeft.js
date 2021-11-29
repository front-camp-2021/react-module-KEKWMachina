import { setPriceRange } from "../redux/minAndMaxPriceSlice";

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
};
