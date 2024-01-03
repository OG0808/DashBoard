import React from "react";
import "../LayersMaps/layers.css";
const GradientPrecipitation = () => {
  return (
    <div class="gradient-container__precipitation">
      <span>Precipitacion, mm/h</span>
      <div class="scale-dividers__precipitation">
        <div>0</div>
        <div>0.5</div>
        <div>1</div>
        <div>2</div>
        <div>4</div>
        <div>6</div>
        <div>7</div>
        <div>10</div>
        <div>12</div>
        <div>14</div>
        <div>16</div>
        <div>24</div>
        <div>32</div>
        <div>60</div>
      </div>
      <div class="horizontal-gradient-line__precipitation"></div>
    </div>
  );
};

export default GradientPrecipitation;
