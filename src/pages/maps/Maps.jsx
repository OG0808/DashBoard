import "leaflet/dist/leaflet.css";
import "./maps.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import { useState } from "react";
import Layers from "../../components/LayersMaps/Layers";
import useLayers from "../../store/useLayers";
import useDarkmode from "../../store/useDarkmode";
import Icon from "../../../public/Marker.png"

const Maps = () => {

  const myIcon = L.icon({
    iconUrl: Icon,
    iconSize: [38, 60], // tamaño del icono
    iconAnchor: [20, 50], // punto del icono que corresponderá a la ubicación del marcador
    popupAnchor: [-10, -6] // punto relativo a iconAnchor donde se abrirá el popup
});
  const { darkMode } = useDarkmode();
  const { layer } = useLayers();
  const positionn = [0, 0];

  const LocationMarker = () => {
    const [position, setPosition] = useState(null);

    const map = useMapEvent({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}  icon={myIcon}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };

  return (
    <div
      data-theme={darkMode ? "dark" : "light"}
      className="main__container__map"
    >
      <Layers />
      <MapContainer center={positionn} zoom={2} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <TileLayer
          attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
          url={`https://tile.openweathermap.org/map/${
            layer || "temp_new"
          }/{z}/{x}/{y}.png?appid=61f7f94e8821c4e346c3d9ca5e7cde9e`}
        />

        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default Maps;
