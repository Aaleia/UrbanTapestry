import React, { Component } from "react";
import "./../components/Neighborhood.css";
import img from "../assets/chinatown.webp";

class ChinaTown extends Component {
  render() {
    return (
      <div class="container">
        {/* Image with title */}
        <div className="image-container">
          <img
            src={img}
            alt="China Town"
            style={{ width: "100%", height: "90%", opacity: 0.5 }}
          />
          <h1
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "navy",
              fontSize: "5em",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              background: "white",
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            China Town
          </h1>
        </div>
        <br></br>
        <p>
          Chinatown, a historic enclave nestled within the heart of New York
          City, stands as a testament to the enduring spirit and vibrant culture
          of its inhabitants. Founded by Chinese immigrants in the late 19th
          century, Chinatown has evolved into a bustling neighborhood teeming
          with colorful markets, traditional shops, and eateries.
          Despite facing challenges such as discrimination and displacement,
          Chinatown remains a symbol of resilience and community, offering
          visitors a rich tapestry of cultural experiences. Explore Chinatown's
          captivating history and diverse offerings:
        </p>

        <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
          <li>
            Hosts a variety of cultural institutions and festivals celebrating
            Chinese heritage such as temples, theaters, and museums.{" "}
          </li>
          <li>
            Chinese immigrants played a crucial role in building the
            Transcontinental Railroad in the United States. Thousands of Chinese
            laborers worked under harsh conditions to construct the railroad,
            connecting the East and West coasts of the country.{" "}
          </li>
          <li>
            Captivates visitors with its rich tapestry of cultural experiences.
            For instance Chinatowns around the world come alive during Lunar New
            Year celebrations, also known as Chinese New Year. Festivities
            include dragon and lion dances, firecrackers, traditional
            performances, and vibrant parades to welcome the arrival of the new
            year according to the lunar calendar.
          </li>
        </ul>
      </div>
    );
  }
}

export default ChinaTown;
