import axios from "axios";
import { useEffect, useState } from "react";
import useStoreNmaeCity from "../store/useStoreNmaeCity";

export const useCurrenPosition = () => {
  const [currentposition, setCurrentposition] = useState();
  const { text } = useStoreNmaeCity();
  useEffect(() => {
    function success(pos) {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      };
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${obj.lat}&lon=${obj.lon}&appid=61f7f94e8821c4e346c3d9ca5e7cde9e`
        )
        .then((response) => {
          if (response) {
          }
          setCurrentposition(response.data);
        })

        .then((error) => console.log(error));
    }
    navigator.geolocation.getCurrentPosition(success);

    
  }, []);
 
  return {
    currentposition,
  };
};
