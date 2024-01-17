import axios from "axios";
import { useEffect, useState } from "react";
import useStorecityLatLon from "../store/useStoreTimeZone";

export const useFetchCity = (cityname) => {
  const { setcityLatLon } = useStorecityLatLon();
  const [cityNameData, setCityNameData] = useState();
  const [timezone, setTimezone] = useState()
  const [cityAndTz, setCityAndTz] = useState();
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const apiKey2 = import.meta.env.VITE_TIMEZONE_API_KEY
  const cityNameUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}`;
  const timezoneinfo =`https://timezone.abstractapi.com/v1/current_time/?api_key=${apiKey2}=${cityname}`
  useEffect(() => {
    axios
      .get(cityNameUrl)
      .then((res) => {
        setCityNameData(res.data);
        const cityAndTZ = res.data
        setCityAndTz(cityAndTZ);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [cityname])

  useEffect(() => {
    if (cityname) {
      
    axios
    .get(timezoneinfo)
    .then((res)=>{
      setTimezone(res.data)
    })
    .catch(err=>console.log(err))
  }else{
    ''
  }
  }, [cityname])
  
  useEffect(() => {
    setcityLatLon(cityAndTz);
  }, [cityAndTz]);

  return { cityNameData, cityAndTz, timezone };
};
