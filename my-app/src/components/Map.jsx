import React, {Component} from "react";
import districts from "./../data/NYC_Neighborhood.json";
import { MapContainer, GeoJSON, TileLayer, LayerGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./../components/Map.css";

class Map extends Component {
	state={};
	OnEachDistrict = (d, layer) =>{
		console.log(d.properties.ntaname);
		layer.bindPopup(d.properties.ntaname);
	}

	render() {
		return (
			<div>
				<MapContainer center = {[40.703312, -73.97968]} style={{height:"100vh" }}
      zoom={11} >
					{/* <TileLayer
						attribution='&copy; <a href ="https://www.openstreetmap.org/copyright>OpenStreetMap</a> contributors"'
						url='https://maps.nyc.gov/xyz/1.0.0/carto/basemap/{z}/{x}/{y}.jpg'
						minNativeZoom={8} 
						maxNativeZoom={19}
						subDomains={'1234'}
						bounds={[[39.3682, -75.9374], [42.0329, -71.7187]]}
        >
        </TileLayer> */}
					<GeoJSON 
						style={{weight: 2, color: "black"}} 
						data={districts.features}
						onEachFeature={this.OnEachDistrict}
						/>
				</MapContainer>
			</div>
		);
	}
}

export default Map;