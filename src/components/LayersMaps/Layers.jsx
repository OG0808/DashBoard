import React from "react";
import useLayers from "../../store/useLayers";
import "./layers.css";
import GradientesNubes from "../GradientesLayers/GrandientesNubes"
import GradientPrecipitation from "../GradientesLayers/GradientPrecipitation"
import  GradientTemperature  from "../GradientesLayers/GradientTemperature";
import GradientWindSpeed from "../GradientesLayers/GradientWindSpeed";
import  GradientPressure  from "../GradientesLayers/GradientPressure";
import useDarkmode from "../../store/useDarkmode";
const Layers = () => {
  const { layer, setLayer } = useLayers();
  const {darkMode}=useDarkmode()
  let gradient = <GradientTemperature/>;
  if (layer === "clouds_new") gradient = <GradientesNubes/>;
  if (layer === "precipitation_new") gradient = <GradientPrecipitation/>;
  if (layer === "pressure_new") gradient = <GradientPressure/>;
  if (layer === "wind_new") gradient = <GradientWindSpeed/>;
  if (layer === "temp_new") gradient = <GradientTemperature/>;

  return (
    <div data-theme={darkMode ? "dark" : "light"} className="layers">
      <div className="layers__contain">
      <button
        onClick={() => setLayer("clouds_new")}
        className="layers__button layers__button--clouds"
      >
        Nubes <i class="bx bxs-right-arrow-circle bx-md"></i>
      </button>
      <button
        onClick={() => setLayer("precipitation_new")}
        className="layers__button layers__button--precipitation"
      >
        Precipitacion <i class="bx bxs-right-arrow-circle bx-md"></i>
      </button>
      <button
        onClick={() => setLayer("pressure_new")}
        className="layers__button layers__button--pressure"
      >
        Presión a nivel del mar <i class="bx bxs-right-arrow-circle bx-md"></i>
      </button>
      <button
        onClick={() => setLayer("wind_new")}
        className="layers__button layers__button--wind-speed"
      >
        Velocidad del viento <i class="bx bxs-right-arrow-circle bx-md"></i>
      </button>
      <button
        onClick={() => setLayer("temp_new")}
        className="layers__button layers__button--temperature"
      >
        Temperatura <i class="bx bxs-right-arrow-circle bx-md "></i>
      </button>
      <span className="layers__infoCurrentPosition">Para saber tu ubicacion solo haz click en el mapa</span>
      </div>
      
      <div className="gradients__contain">
      
     {gradient}

      </div>
    </div>
  );
};

export default Layers;
