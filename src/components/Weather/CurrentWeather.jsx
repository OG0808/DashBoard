import React, { useEffect, useState } from "react";
import useStorecityLatLon from "../../store/useStoreTimeZone";
import { useFetchWeather } from "../../hooks/useFetchWeather";
import { formatSunriseTime } from "../../utils/formatSunriseTime";
import "./CurrentWeather.css";
const CurrentWeather = () => {



  const { cityLatLon } = useStorecityLatLon();
  const lat = cityLatLon?.location?.latlon.latitude;
  const lon = cityLatLon?.location?.latlon.longitude;
  const { weatherData } = useFetchWeather(lat, lon);

  const grade = weatherData?.main?.temp - 273.15;
  const feels_like = weatherData?.main.feels_like - 273.15;
  const sunrise = weatherData?.sys?.sunrise;
  const sunset = weatherData?.sys?.sunset;
  const amanecer = formatSunriseTime(sunrise);
  const atardecer = formatSunriseTime(sunset);
  const icono = weatherData?.weather[0].icon;
  const descripcion = weatherData?.weather[0].main;
  const humedad = weatherData?.main.humidity;
  const presion = weatherData?.main.pressure;
  const viento = weatherData?.wind.speed;
  const nubes = weatherData?.clouds.all;

  return (
    <div className="current-weather">
      <section className="current-weather__temperature">
        <div>
          <h1 className="current-weather__temperature-value">
            {grade.toFixed()}°C
          </h1>
          <p className="current-weather__temperature-feels-like">
            Sensacion T. {feels_like.toFixed()}°C
          </p>
        </div>
        <div className="current-weather__details">
          <div className="current-weather__details-icons">
            <img src="./amanecer.svg" alt="" />
            <img src="./atardecer.svg" alt="" />
          </div>
          <div className="current-weather__details-sunrise-sunset">
            <span>
              Amanecer <br /> {amanecer}{" "}
            </span>
            <span>
              Atardecer <br />
              {atardecer}
            </span>
          </div>
        </div>
      </section>

      <section className="current-weather__description">
        <img
          className="current-weather__description-icon"
          src={`/${icono}.${'svg'}`}
          alt=""
        />
        <span className="current-weather__description-text">{descripcion}</span>
      </section>

      <div className="current-weather__additional-info">
        <div className="current-weather__info-item">
          <img src="./humedad.svg" alt="" />
          <span>
            <strong>{humedad} %</strong>
          </span>
          <span>Humedad</span>
        </div>

        <div className="current-weather__info-item">
          <img src="./presion.svg" alt="" />
          <span>
            <strong>{presion}hPa</strong>
          </span>
          <span>Presion</span>
        </div>

        <div className="current-weather__info-item">
          <img src="./viento.svg" alt="" />
          <span>
            <strong>{viento}km/h</strong>
          </span>
          <span>Viento</span>
        </div>

        <div className="current-weather__info-item">
          <img src="./nubes.svg" alt="" />
          <span>
            <strong>{nubes}%</strong>
          </span>
          <span>Nubes</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
