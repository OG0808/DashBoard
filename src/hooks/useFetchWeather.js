import axios from "axios";
import { useEffect, useState } from "react";


export const useFetchWeather = (lat, lon) => {
  const [weatherData, setWeatherData] = useState();
  const [weatherLoading, setWeatherLoading] = useState(false);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  // const weatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}`;
  const weatherUrl2 =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  useEffect(() => {
    setWeatherLoading(true);
    axios
      .get(weatherUrl2)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setWeatherLoading(false);
      });
  }, [weatherUrl2, apiKey]);

  return { weatherData, weatherLoading };
};

//<-- Efecto para llamar los datos del clima de la ciudad en e specifico buscada en el componente Search.jsx -->

