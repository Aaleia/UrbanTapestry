import './App.css';
import Map from "./components/Map";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import JacksonHeights from "./components/JacksonHeights";
import ChinaTown from "./components/ChinaTown";
import About from "./components/About";
import "leaflet/dist/leaflet.css";

import {Routes, Route } from 'react-router-dom';

function App() {
  return (
   <main>
      <Navbar></Navbar> 
      <Routes>
          <Route path="/" element={<HomePage/>} />
	  <Route path="/About" element={<About/>} />
        <Route path="/Map" element={<Map/>} />
        <Route path="/JacksonHeights" element={<JacksonHeights/>} />
        <Route path="/ChinaTown" element={<ChinaTown/>} />
      </Routes>
    </main>
  );
}

export default App;
