import axios from 'axios';
import { useState, useEffect } from 'react';

const useHourlyForecast = (lat, lon) => {
    const [hourlyForescat, setHourlyForescat] = useState(null);
    const [error, setError] = useState(null);
  
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const HourlyForescat =`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
  
    
     useEffect(() => {
      if (lat, lon) {
        axios
        .get(HourlyForescat)
        .then((res)=>{
         setHourlyForescat(res.data)
        })
        .catch((err)=>console.log(err))
        
      }
    
     }, [lat, lon])
     
 
    return { hourlyForescat};
}

export default useHourlyForecast

