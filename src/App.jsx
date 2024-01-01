import { Route, Routes } from "react-router-dom";
import "./App.css";
import Weather from "./pages/Weather";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
