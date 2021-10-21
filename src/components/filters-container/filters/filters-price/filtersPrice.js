import React, { useCallback, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterData } from "../../../../redux/cardDataSlice";
import { findMinMax } from "./findMinMax";
import { setPriceRange } from "../../../../redux/minAndMaxPriceSlice";

function MultiRangeSlider () {
  const dispatch = useDispatch();
  const cardsData = useSelector(state => state.cardsData);
  const priceRangeValCurrent = useSelector(state => state.priceRange)[useSelector(state => state.priceRange).length - 1];
  const [min, max] = findMinMax(cardsData[0]);
  const [minVal, maxVal] = priceRangeValCurrent;

  const range = useRef(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, maxVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, maxVal, getPercent]);

  return (
    <div className="filters__container">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          dispatch(
            setPriceRange({
              priceRange: [value, Number(document.querySelector('.thumb--right').value)],
            })
          )
          dispatch(
            filterData({
              thumb: event.target.className,
              thumbValue: event.target.value,
              rightThumbValue: document.querySelector('.thumb--right').value
            })
          )
        }}
        className="thumb thumb--left"
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          dispatch(
            setPriceRange({
              priceRange: [Number(document.querySelector('.thumb--left').value), value],
            })
          )
          dispatch(
            filterData({
              thumb: event.target.className,
              thumbValue: event.target.value,
              leftThumbValue: document.querySelector('.thumb--left').value
            })
          )
        }}
        className="thumb thumb--right"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div>
      </div>
    </div>
  );
};


export default MultiRangeSlider;
