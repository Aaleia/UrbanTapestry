import React, {Component} from "react";
import districts from "./../data/NYC_Neighborhood.json";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./../components/Map.css";

class Map extends Component {
	state={};
	OnEachDistrict = (d, layer) =>{
		// layer.bindPopup(d.properties.ntaname);
		
		layer.on({
			click: this.districtInfo
		});
	}

	districtInfo= (event) => {
		const districtProperties = event.target.feature.properties;
    this.setState({ selectedDistrict: districtProperties });
	};

	render() {
		const { selectedDistrict } = this.state;
		return (
			<div class="container">
				<div class="map">
					<MapContainer center = {[40.703312, -73.97968]} style={{height:"90vh" }}
						zoom={11} scrollWheelZoom={false}>
						<GeoJSON 
							style={{weight: 1, fillOpacity: 0.5, fillColor: "green", color:"black"}} 
							data={districts.features}
							onEachFeature={this.OnEachDistrict}
							/>
					</MapContainer>
				</div>
				<div class="info-container">
					<h2 style={{color:"white"}}>Welcome to the NYC Culture Map!</h2>
					{selectedDistrict ? (
            <div class="info">
              <h3>{selectedDistrict.ntaname}</h3>
							<p>{selectedDistrict.boro_name}</p>
							{ selectedDistrict.ntaname === "Jackson Heights" &&
								<div>
									<p>Summary: Jackson Heights is one of the most diverse neighborhoods in NYC.
										It is home to large numbers of South Americans and South Asians. </p>
									<p>Languages: Spanish, Bengali, Punjabi, Mixtec, Seke, Kuranko, etc.</p>
									<p>Population: 153,743 People</p>
									<p>Food: From tacos to authentic Indian and Bengali cuisine, 
										the neighborhood offers many types of food. Some popular places to go are
										Phayul, Delhi Heights, Juanita's Cafe, and many more!</p>
										<br/>
								</div>
							}

							{ selectedDistrict.ntaname === "Chinatown" &&
								<div>
									<p>Summary: In Chinatown, visitors can explore narrow streets filled with traditional Chinese shops,
										 enjoy authentic dim sum, and experience the dynamic energy of this iconic cultural enclave. </p>
									<p>Languages: Mandarin, Taishanese and Cantonese</p>
									<p>Population: 158,554 People</p>
									<p>Food: Some popular dishes are Dim sum, hand-pulled noodles, Peking duck, dumplings, bubble tea, and more. 
										Visit Great NY Noodletown, Joe's Shanghai and Wo Hop if you are in the area!</p>
										<br/>
								</div>
							}

							<button>Read More</button>

            </div>
          ) : (
            <div class="info">
							<h3>Select a district on the map to view details.</h3>
						</div>
          )}
				</div>
			</div>
		);
	}
}

export default Map;