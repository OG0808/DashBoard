import React from "react";
import CurrentWeather from "../../components/Weather/CurrentWeather";
import Search from "../../components/Search/Search";
import Reloj from "../../components/Reloj/Reloj";
import "./weather.css";
import DaysForescat from "../../components/DaysForescat/DaysForescat";
import HourlyForecast from "../../components/HourlyForecast/HourlyForecast";
import useDarkmode from "../../store/useDarkmode";

const Weather = () => {

 const{darkMode}= useDarkmode()
  return (
    <div  data-theme={darkMode?"dark":"light"}  className="weather">
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
