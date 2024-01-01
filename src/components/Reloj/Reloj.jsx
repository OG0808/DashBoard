import { useCurrenPosition } from "../../hooks/useCurrentposition";
import { useFetchCity } from "../../hooks/useFetchCity";

import useStoreNmaeCity from "../../store/useStoreNmaeCity";
import { useHora } from "../../utils/Hora";
import "../Reloj/Reloj.css";

const Reloj = () => {
  const { currentposition } = useCurrenPosition();

  const currentCity = currentposition?.name;
  const { text } = useStoreNmaeCity();
  const cityname = text || currentCity;
  const { cityAndTz } = useFetchCity(cityname);
  let ciudad = cityAndTz?._links["city:timezone"].name;
  let countrie = cityAndTz?._links["city:country"].name;
  const { hora } = useHora(ciudad);

  if (hora === undefined) {
    return <p>cargando...</p>;
  }

  return (
    <div className="reloj__container">
      <p>
        {cityAndTz.name}, {countrie}
      </p>
      <h2>{hora?.format("LT")}</h2>
    </div>
  );
};

export default Reloj;
