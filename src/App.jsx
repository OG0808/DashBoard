import { Route, Routes } from "react-router-dom";
import "./App.css";
import Weather from "./pages/weather/Weather";
import Maps from "./pages/maps/Maps";
import RutasToggle from "./components/RutasToggle/RutasToggle";
import useDarkmode from "./store/useDarkmode";
import Toggle from "./components/Toggle/Toggle";

function App() {
  const { openMenu } = useDarkmode();


  const { darkMode } = useDarkmode();
  return (
    <div data-theme={darkMode ? "dark" : "light"} className="main__container">
      <div className={openMenu ?"main__container-togglesBlok" : "main__container-toggles"}>
        <Toggle />
        <RutasToggle />
      </div>
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
    </div>
  );
}

export default App;
