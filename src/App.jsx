import { Route, Routes } from "react-router-dom";
import "./App.css";
import Weather from "./pages/weather/Weather";
import Maps from "./pages/maps/Maps";

function App() {
  return (
    <div className="main__container">
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/maps" element={<Maps/>}/>
      </Routes>
    </div>
  );
}

export default App;
