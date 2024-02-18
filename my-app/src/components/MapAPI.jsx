/*
import React, { Component } from "react";
import districts from "./../data/NYC_Neighborhood.json";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./../components/Map.css";

class Map extends Component {
  state = {
    selectedDistrict: null,
    districtInfo: null,
  };

  onEachDistrict = (district, layer) => {
    layer.on({
      click: this.districtInfo,
      mouseover: this.highlightDistrict,
      mouseout: this.resetHighlight,
    });
  };

  districtInfo = async (event) => {
    const districtProperties = event.target.feature.properties;
    this.setState({ selectedDistrict: districtProperties });

    try {
      const response = await fetchAPI(districtProperties.ntaname);
      this.setState({ districtInfo: response });
    } catch (error) {
      console.error(error);
    }
  };

  highlightDistrict = (event) => {
    const layer = event.target;
    layer.setStyle({
      fillColor: "blue", // highlight color
      weight: 2,
      color: "black",
    });
  };

  resetHighlight = (event) => {
    const layer = event.target;
    layer.setStyle({
      fillColor:
        this.state.selectedDistrict === event.target.feature.properties
          ? "blue"
          : "green",
      weight: 1,
      color: "black",
    });
  };

  render() {
    const { selectedDistrict, districtInfo } = this.state;
    const { answer } = districtInfo || {};
  
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
                  selectedDistrict &&
                  selectedDistrict.ntaname === feature.properties.ntaname
                    ? "blue"
                    : "green",
                color: "black",
              })}
              data={districts.features}
              onEachFeature={this.onEachDistrict}
            />
          </MapContainer>
        </div>
        <div className="info-container">
          <h2 style={{ color: "white", backgroundColor: "rgb(38, 144, 185)" }}>
            <b> Interactive Neighborhood Map </b>
          </h2>
          {selectedDistrict ? (
            <div className="info">
              <h3 style={{ color: "white", padding: "15px" }}>
                {selectedDistrict.ntaname}
              </h3>
              <p>{selectedDistrict.boro_name}</p>
              {districtInfo ? (
                <div>
                  <p>{districtInfo.summary}</p>
                  <p>Answer: {this.state.answer}</p>

                  <a href={districtInfo.link} className="button">
                    Read More
                  </a>
                </div>
              ) : (
                <p>Loading information...</p>
              )}
            </div>
          ) : (
            <div className="info">
              <h3 style={{ color: "white", padding: "20px" }}>
                <b>Select a district on the map to view details.</b>
              </h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}


async function fetchAPI(ntaname) {
  const url = "'https://chatgpt-api8.p.rapidapi.com/'";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "b5474d804bmsh28a83c7a683663fp176f2djsnec77615ba5b3",
      "X-RapidAPI-Host": "chatgpt-api8.p.rapidapi.com",
    },
    body: JSON.stringify({
      question: `I'm giving you a neighborhood in NYC. You are someone knowledgable about NYC. The nieghborhood is ${ntaname}. I want to know more about the neighborhood. Tell me about it's most common languages spoken other than english, the population, and the most common food. Also, provide a link to read more about the neighborhood.`,
    }),
  };

  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);
  return result;
}


// Parse the response string to extract the information
function parseResponse(response) {
  const regex = /The most common languages spoken in the area, other than English, include (.*).\nThe population of .* is around (.*). The neighborhood is known for .*.\n\nOne of the most common types of food found in .* is (.*), due to .*.\n\nFor more information about .*, you can visit this link: (.*)/;
  const match = response.answer.match(regex);
  
  if (match) {
    return {
      languages: match[1],
      population: match[2],
      food: match[3],
      link: match[4]
    };
  } else {
    return null;
  }
}

export default Map;

*/
