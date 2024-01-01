import axios from "axios";
import { useEffect, useState } from "react";
import useStorecityLatLon from "../store/useStoreTimeZone";

export const useFetchCity = (cityname) => {
  const { setcityLatLon } = useStorecityLatLon();
  const [cityNameData, setCityNameData] = useState();
  const [cityAndTz, setCityAndTz] = useState();
  const cityNameUrl = `https://api.teleport.org/api/cities/?search=${cityname}&limit=1`;
  useEffect(() => {
    axios
      .get(cityNameUrl)
      .then((response) => {
        setCityNameData(response.data);

        const cityAndTZ =
          response.data?._embedded["city:search-results"][0]?.["_links"]?.[
            "city:item"
          ];

        if (cityAndTZ) {
          axios
            .get(cityAndTZ.href)
            .then((secondResponse) => {
              setCityAndTz(secondResponse.data);
            })
            .catch((secondError) => {
              console.error(
                "Error fetching city and timezone data:",
                secondError
              );
            });
        }
      })
      .catch((error) => {
        console.error("Error fetching city data:", error);
      });
  }, [cityname]);

  //              <==  Efecto que envia la latitud y longitud
  //      al componente CurrentWeather para obtener los datos del clima ==>
;
  useEffect(() => {
    setcityLatLon(cityAndTz);
  }, [cityAndTz]);

  return { cityNameData, cityAndTz };
};
