import React from "react";
import "../LayersMaps/layers.css";
const GradientPressure = () => {
  return (
    <div class="scale-gradient__pressure">
      <span>Presion, hPa</span>
      <div class="scale-dividers__pressure">
        <div>950</div>
        <div>980</div>
        <div>1010</div>
        <div>1040</div>
        <div>1070</div>
      </div>
      <div class="horizontal-gradient-line__pressure"></div>
    </div>
  );
};

export default GradientPressure;
