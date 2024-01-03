import React from "react";
import "../LayersMaps/layers.css";
const GrandientesLayers = () => {
  return (
    <div className="scale-gradient__nubes">
      <span>Nubes, %</span>
      <div className="scale-dividers__nubes">
        <div>0</div>
        <div>25</div>
        <div>50</div>
        <div>75</div>
        <div>100</div>
      </div>
      <div className="horizontal-gradient-line__nubes"></div>
    </div>
  );
};

export default GrandientesLayers;
