import React from "react";
import useDaysForescat from "../../hooks/useDaysForescat";
import useStorecityLatLon from "../../store/useStoreTimeZone";
import "./daysForescat.css"


const DaysForescat = () => {
  const { cityLatLon } = useStorecityLatLon();
  const lat = cityLatLon?.location?.latlon.latitude;
  const lon = cityLatLon?.location?.latlon.longitude;
  const { weatherData } = useDaysForescat(lat, lon);
  
  
  return (
    <div className="daysforescat">
    {weatherData?.map((data) => (
      <div key={data.date} className="daysforescat__card">
        <img src={`/${data.topIcon}.${'svg'}`} alt="" className="daysforescat__icon" />
        <span className="daysforescat__temperature">{data.avgTemp.slice(0, 2)}°C</span>
        <span className="daysforescat__date">{data.date}</span>
        <span className="daysforescat__day">{data.day}</span>
        <span className="daysforescat__description">{data.topDescription}</span>
      </div>
    ))}
  </div>
  );
};

export default DaysForescat;
