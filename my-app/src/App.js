import "./App.css";
import Map from "./components/Map";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import JacksonHeights from "./components/JacksonHeights";
import ChinaTown from "./components/ChinaTown";
import About from "./components/About";
import SignIn from "./components/SignIn";
import "leaflet/dist/leaflet.css";

import { Routes, Route } from "react-router-dom";
import Flushing from "./components/Flushing";

function App() {
  return (
    <main>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/JacksonHeights" element={<JacksonHeights />} />
        <Route path="/ChinaTown" element={<ChinaTown />} />
        <Route path="/Flushing" element={<Flushing />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </main>
  );
}

export default App;
