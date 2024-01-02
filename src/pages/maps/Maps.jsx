
import 'leaflet/dist/leaflet.css'
import "./maps.css"
import { MapContainer, TileLayer, Marker, Popup, useMapEvent} from 'react-leaflet'
import { useState } from "react"

const Maps = () => {
  const positionn = [53.037321, 18.61711];
  const [position, setPosition] = useState(positionn)
  console.log(position);
  function LocationMarker() {
  
    const map = useMapEvent({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }
  return (
    <MapContainer className='mainleatlej' center={positionn} zoom={5} scrollWheelZoom={true}>
    <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <TileLayer
        attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
        url="https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=61f7f94e8821c4e346c3d9ca5e7cde9e"
      />
  <LocationMarker/>
    </MapContainer>
  );
}


export default Maps