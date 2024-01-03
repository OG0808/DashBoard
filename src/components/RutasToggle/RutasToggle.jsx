import { useNavigate } from "react-router-dom";
import "./rutasToggle.css";

const RutasToggle = () => {
  const navigate = useNavigate();

  return (
    <div  className="rutas-toggle">
      <span onClick={()=>navigate("/")} className="rutas-toggle__item">
        Clima <i className="bx bxs-cloud bx-md"></i>
      </span>
      <span onClick={()=>navigate("/maps")} className="rutas-toggle__item">
        Mapas <i className="bx bx-map-alt bx-md"></i>
      </span>
    </div>
  );
};

export default RutasToggle;
