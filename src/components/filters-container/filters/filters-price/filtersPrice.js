import React, { useCallback, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findMinMax } from "./findMinMax";
import handleLeftInput from "./changeHanlers/handleThumbLeft";
import handleRightInput from "./changeHanlers/handleThumbRight";

function MultiRangeSlider() {
  const dispatch = useDispatch();
  const cardsData = useSelector((state) => state.cardsData);
  const priceRangeValCurrent = useSelector((state) => state.priceRange)[
    useSelector((state) => state.priceRange).length - 1
  ];
  const [min, max] = findMinMax(cardsData[0]);
  const [minVal, maxVal] = priceRangeValCurrent;

  const range = useRef(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    if (range.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxVal);

      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, maxVal, getPercent]);

  useEffect(() => {
    if (range.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxVal);
      
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
          return handleLeftInput(event, dispatch, maxVal);
        }}
        className="thumb thumb--left"
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          handleRightInput(event, dispatch, minVal);
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
}

export default MultiRangeSlider;
