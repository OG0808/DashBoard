import moment from "moment-timezone";
import { useEffect, useState } from "react";
import 'moment-timezone/data/packed/latest.json'; 
export const useHora = (ciudad) => {
  const [hora, setHora] = useState(moment().tz(ciudad));

  useEffect(() => {
    const actualizarHora = () => {
      setHora(moment().tz(ciudad));
    };
    const intervalo = setInterval(actualizarHora, 1000);

    return () => {
      clearInterval(intervalo);
    };
  }, [ciudad]);
 

  return {
    hora
  }
};
