import React, { useState } from "react";
import './Dslider.css';

const DoubleRangeSlider = () => {
  const [minValue, setMinValue] = useState(10); // Minimum slider value
  const [maxValue, setMaxValue] = useState(90); // Maximum slider value
  const min = 0; // Slider minimum range
  const max = 100; // Slider maximum range

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  return (
    <div className="slider-container">
      <h1 className="slider-title">Price</h1>
      <div className="slider-wrapper">
        {/* Slider track */}
        <div className="slider-track"></div>
        {/* Selected range */}
        <div
          className="slider-range"
          style={{
            left: `${((minValue - min) / (max - min)) * 100}%`,
            right: `${100 - ((maxValue - min) / (max - min)) * 100}%`,
          }}
        />
        {/* Min Slider */}
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={handleMinChange}
          className="slider-input slider-input-min"
        />
        {/* Max Slider */} <br/>
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={handleMaxChange}
          className="slider-input slider-input-max"
        />
      </div>
      <div className="slider-value">
        <span>From  <h2> ${minValue}</h2>To </span>
        <span> <h2>${maxValue} </h2></span>
      </div>
    </div>
  );
};

export default DoubleRangeSlider;
