import React from "react";
import CurrentWeather from "../components/Weather/CurrentWeather";
import Search from "../components/Search/Search";
import Reloj from "../components/Reloj/Reloj";
import "./weather.css";
import DaysForescat from "../components/DaysForescat/daysForescat";
import HourlyForecast from "../components/HourlyForecast/HourlyForecast";

const Weather = () => {
  return (
    <div className="weather">
      <Search />
      <div className="weather__content">
        <div className="weather__current-info">
          <Reloj />
          <CurrentWeather />
        </div>
        <div className="wetaher__forescat-info">
          <DaysForescat />
          <HourlyForecast />
        </div>
      </div>
    </div>
  );
};

export default Weather;
