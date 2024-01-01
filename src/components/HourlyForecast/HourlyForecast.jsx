
import useHourlyForecast from "../../hooks/useHourlyForecast";
import useDarkmode from "../../store/useDarkmode";
import useStorecityLatLon from "../../store/useStoreTimeZone";
import "./HourlyForecast.css";



const HourlyForecast = () => {


  const { cityLatLon } = useStorecityLatLon();
  const lat = cityLatLon?.location?.latlon.latitude;
  const lon = cityLatLon?.location?.latlon.longitude;
  const { hourlyForescat } = useHourlyForecast(lat, lon);
  const hourlyWeather = hourlyForescat?.list.slice(0, 5)
  const{darkMode}=useDarkmode()

 
  return (
<div data-theme={darkMode?"dark":"light"} className="hourly-forecast">
      {hourlyWeather?.map((data, index) => {
        const dt = new Date(data.dt_txt + "Z");
        const hour = `${dt.toString(Date()).split(" ")[4].split(":")[0]}hs`;

        return (
          <div key={index} className="hourly-forecast__item">
            <span className="hourly-forecast__time">{hour}</span>
            <img
              src={`/${data.weather[0].icon}.${'svg'}`}
              alt=""
              className="hourly-forecast__icon"
            />
            <span className="hourly-forecast__temperature">
              {(data.main.temp - 273.15).toFixed()}°C
            </span>
            <img src="./viento.svg" alt="" className="hourly-forecast__wind-icon" />
            <span className="hourly-forecast__wind-speed">{data.wind.speed}km/h</span>
          </div>
        );
      })}
    </div>
  );
};

export default HourlyForecast;
