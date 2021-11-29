import { setPriceRange } from "../redux/minAndMaxPriceSlice";

export default function handleRightInput(event, dispatchFn, minVal) {
  const value = Math.max(Number(event.target.value), minVal + 1);
  dispatchFn(
    setPriceRange({
      priceRange: [Number(document.querySelector(".thumb--left").value), value],
    })
  );
}
