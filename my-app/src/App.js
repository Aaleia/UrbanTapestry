import './App.css';
import Map from "./components/Map";

import { MapContainer, TileLayer, LayerGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div id="mapid">
      <Map></Map>
    </div>
  );
}

export default App;
