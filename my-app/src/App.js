import './App.css';
import Map from "./components/Map";
import HomePage from "./components/HomePage";
import "leaflet/dist/leaflet.css";

import {Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/map" element={<Map/>} />
      </Routes> 
    </main>
      
  );
}

export default App;
