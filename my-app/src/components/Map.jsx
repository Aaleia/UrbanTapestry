import React, {Component} from "react";
import districts from "./../data/NYC_Neighborhood.json";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./../components/Map.css";

class Map extends Component {

  state = { selectedDistrict: null, };

  OnEachDistrict = (district, layer) => {
    layer.on({
      click: this.districtInfo,
      mouseover: this.highlightDistrict,
      mouseout: this.resetHighlight,
    });
  };

  districtInfo = (event) => {
    const districtProperties = event.target.feature.properties;
    this.setState((prevState) => ({
      selectedDistrict:
        prevState.selectedDistrict === districtProperties ? null : districtProperties, // toggle selected
    }));
  };

  highlightDistrict = (event) => {
    const layer = event.target;
    layer.setStyle({
      fillColor: "blue", // highlight color
      weight: 2,
      color: "black",
    });
  };

  resetHighlight = (event) => { // checks if selected, reset after unselected
    const layer = event.target;
    layer.setStyle({
	fillColor:
	this.state.selectedDistrict === event.target.feature.properties ? "blue" : "green",
      weight: 1,
      color: "black",
    });
  };

  render() {
    const { selectedDistrict } = this.state;
      
    return (
      <div className="container">
        <div className="map">
          <MapContainer
            center={[40.703312, -73.97968]}
            style={{ height: "100vh" }}
            zoom={11}
            scrollWheelZoom={false}
          >
            <GeoJSON
              style={(feature) => ({
                weight: 1,
                fillOpacity: 0.5,
                fillColor:
                  selectedDistrict && selectedDistrict.ntaname === feature.properties.ntaname
                    ? "blue" // Highlight
                    : "green", // Default
                color: "black",
              })}
              data={districts.features}
              onEachFeature={this.OnEachDistrict}
            />

    
          </MapContainer>
        </div>
        <div class="info-container">
          <h2 style={{ color: "white", backgroundColor: "rgb(38, 144, 185)"}}><b> Interactive Neighborhood Map </b></h2>
          {selectedDistrict ? (
            <div class="info">
              <h3 style={{ color: "white", padding: "15px" }}>{selectedDistrict.ntaname}</h3>
              <p>{selectedDistrict.boro_name}</p>
              {selectedDistrict.ntaname === "Jackson Heights" && (
                <div>
                  <p>
                    Summary: Jackson Heights is one of the most diverse
                    neighborhoods in NYC. It is home to large numbers of South
                    Americans and South Asians.{" "}
                  </p>
                  <p>
                    Languages: Spanish, Bengali, Punjabi, Mixtec, Seke, Kuranko,
                    etc.
                  </p>
                  <p>Population: 153,743 People</p>
                  <p>
                    Food: From tacos to authentic Indian and Bengali cuisine,
                    the neighborhood offers many types of food. Some popular
                    places to go are Phayul, Delhi Heights, Juanita's Cafe, and
                    many more!
                  </p>
                  <a href="/JacksonHeights" className="button">Read More</a>
                </div>
              )}

              {selectedDistrict.ntaname === "Chinatown" && (
                <div>
                  <p>
                    Summary: In Chinatown, visitors can explore narrow streets
                    filled with traditional Chinese shops, enjoy authentic dim
                    sum, and experience the dynamic energy of this iconic
                    cultural enclave.{" "}
                  </p>
                  <p>Languages: Mandarin, Taishanese and Cantonese</p>
                  <p>Population: 158,554 People</p>
                  <p>
                    Food: Some popular dishes are Dim sum, hand-pulled noodles,
                    Peking duck, dumplings, bubble tea, and more. Visit Great NY
                    Noodletown, Joe's Shanghai and Wo Hop if you are in the
                    area!
                  </p>
                  <a href="/ChinaTown" className="button">Read More</a>
                </div>
              )}

			{selectedDistrict.ntaname === "Flatbush" && (
			<div>
				<p>
				Summary: In Flatbush, visitors can immerse themselves in a vibrant neighborhood with a rich cultural tapestry. From its diverse population to its historic landmarks, Flatbush offers a unique blend of history, culture, and community.
				</p>
				<p>Languages: English, Caribbean Creole, Spanish, and various other languages reflecting the diverse community.</p>
				<p>Population: 99,776 People </p>
				<p>
					Food: Flatbush is a culinary melting pot, offering a wide variety of cuisines from around the world. Visitors can enjoy Caribbean delicacies like jerk chicken and roti, explore African flavors at local restaurants, and indulge in Latin American dishes such as empanadas and pupusas. Don't miss the opportunity to try traditional Haitian cuisine, including griot and pikliz, at local eateries.
				</p>
				<a href="/Flatbush" className="button">Read More</a>
			</div>
			)}

			{selectedDistrict.ntaname === "Pelham Parkway" && (
			<div>
				<p>
				Summary: Pelham Parkway offers a serene and picturesque neighborhood nestled in the Bronx, New York City. With its tree-lined streets, green spaces, and proximity to Pelham Bay Park, it provides residents and visitors with a peaceful escape from the hustle and bustle of urban life.
				</p>
				<p>Languages: English, Spanish, Italian, Bengali, etc. </p>
				<p>Population: 30,073 People</p>
				<p>
				Food: Pelham Parkway boasts a diverse culinary scene, with a wide range of restaurants and eateries offering delicious dishes from around the world. Visitors can enjoy Italian cuisine at authentic trattorias, savor Spanish tapas at local bistros, and indulge in international flavors at multicultural cafes and bakeries.
				</p>
				<a href="/PelhamParkway" className="button">Read More</a>
			</div>
			)}


			{selectedDistrict.ntaname === "Flushing" && (
                <div>
                  <p>
                    Summary: In Flushing, visitors can explore a vibrant neighborhood filled with diverse cultures, including a large East Asian community. Enjoy authentic Chinese, Korean, and other Asian cuisines, browse through bustling markets, and experience the rich cultural heritage of this dynamic area.{" "}
                  </p>
                  <p>Languages: Mandarin, Korean, English, and others</p>
                  <p>Population: 72,008 People</p>
                  <p>
                    Food: Flushing is known for its diverse culinary scene, offering a wide range of Asian cuisines, including Chinese, Korean, Japanese, and more. Be sure to try authentic dishes such as Korean BBQ, hot pot, dumplings, bubble tea, and more.
                  </p>
                  <a href="/Flushing" className="button">Read More</a>
                </div>
              )}


            </div>
          ) : (
            <div class="info">
              <h3 style={{ color:"white", padding: "20px" }} > <b>Select a district on the map to view details.</b></h3>
            </div>
          )}
        </div>
      </div>
    );
	}
}

export default Map;
