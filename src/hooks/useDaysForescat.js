import { useState, useEffect } from 'react';
import axios from 'axios';

const useDaysForecast = (lat, lon) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(apiUrl, {
          params: {
            lat: lat,
            lon: lon,
            appid: apiKey,
          },
        })
        .then(response => {
          const data = response.data;

          const forecastList = data.list;

          const formattedData = forecastList?.reduce((acc, day) => {
            const dateObj = new Date(day.dt_txt);
            const dayOfWeek = dateObj.toLocaleDateString("es-ES", { weekday: "long" });
            const dayOfMonth = dateObj.toLocaleDateString("es-ES", { day: "2-digit" });
            const month = dateObj.toLocaleDateString("es-ES", { month: "short" });

            const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;

            let existingDay = acc.find((d) => d.day === formattedDate);

            if (existingDay) {
              existingDay.temps.push(day.main.temp - 273.15);
              existingDay.maxTemp = Math.max(existingDay.maxTemp, day.main.temp_max - 273.15);
              existingDay.minTemp = Math.min(existingDay.minTemp, day.main.temp_min - 273.15);
              existingDay.icons.push(day.weather[0].icon);
              existingDay.descriptions.push(day.weather[0].description);
            } else {
              existingDay = {
                day: formattedDate,
                temps: [day.main.temp - 273.15],
                maxTemp: day.main.temp_max - 273.15,
                minTemp: day.main.temp_min - 273.15,
                icons: [day.weather[0].icon],
                descriptions: [day.weather[0].description]
              };

              acc.push(existingDay);
            }

            return acc;
          }, []);

          formattedData?.forEach((day) => {
            day.avgTemp = (day.temps.reduce((a, b) => a + b) / day.temps.length).toFixed(2);
          });

          formattedData?.forEach((day) => {
            const iconsMap = day.icons.reduce((acc, icon) => {
              acc[icon] = (acc[icon] || 0) + 1;
              return acc;
            }, {});

            day.topIcon = Object.keys(iconsMap).reduce((a, b) => iconsMap[a] > iconsMap[b] ? a : b);

            const descMap = day.descriptions.reduce((acc, desc) => {
              acc[desc] = (acc[desc] || 0) + 1;
              return acc;
            }, {});

            day.topDescription = Object.keys(descMap).reduce((a, b) => descMap[a] > descMap[b] ? a : b);

            if (day.topIcon.endsWith("n")) {
              day.topIcon = day.topIcon.slice(0, -1) + "d";
            }
          });

          const result = formattedData
            ?.map((day) => ({
              date: day.day,
              maxTemp: day.maxTemp.toFixed(2),
              minTemp: day.minTemp.toFixed(2),
              topIcon: day.topIcon,
              topDescription: day.topDescription,
              avgTemp: day.avgTemp
            }))
            .slice(1, 5);

          setWeatherData(result);
        })
        .catch((error) => {
          setError(error);
        });
    };

    fetchData();
  }, [lat, lon]);
  

  return { weatherData, error };
};

export default useDaysForecast;
