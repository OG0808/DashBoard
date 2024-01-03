import React from "react";
import "../LayersMaps/layers.css";
const GradientWindSpeed = () => {
  return (
    <div class="gradient-container__wind">
      <span>Velocidad del viento, m/s</span>
      <div class="scale-dividers__wind">
        <div>0</div>
        <div>2</div>
        <div>3</div>
        <div>6</div>
        <div>12</div>
        <div>25</div>
        <div>50</div>
        <div>100</div>
      </div>
      <div class="horizontal-gradient-line__wind"></div>
    </div>
  );
};

export default GradientWindSpeed;
