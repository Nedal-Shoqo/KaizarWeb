import React, { useState } from "react";

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
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-lg font-semibold text-gray-800 mb-4">
        Price Range Slider
      </h1>
      <div className="relative">
        {/* Slider track */}
        <div className="h-1 bg-gray-300 rounded absolute inset-0" />
        {/* Selected range */}
        <div
          className="h-1 bg-blue-500 rounded absolute"
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
          className="absolute w-full appearance-none pointer-events-auto z-10 accent-blue-500"
          style={{ left: 0 }}
        />
        {/* Max Slider */}
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full appearance-none pointer-events-auto z-10 accent-blue-500"
          style={{ right: 0 }}
        />
      </div>
      <div className="flex justify-between mt-6">
        <span className="text-gray-600">Min: ${minValue}</span>
        <span className="text-gray-600">Max: ${maxValue}</span>
      </div>
    </div>
  );
};

export default DoubleRangeSlider;