import React from "react";
import "../LayersMaps/layers.css";
const GradientTemperature = () => {
  return (
    <div class="scale-gradient__temperature">
      <span>Temperatura, °C</span>
      <div class="scale-dividers__temperature">
        <div>-40</div>
        <div>-20</div>
        <div>0</div>
        <div>20</div>
        <div>40</div>
      </div>
      <div class="horizontal-gradient-line__temperature"></div>
    </div>
  );
};

export default GradientTemperature;
