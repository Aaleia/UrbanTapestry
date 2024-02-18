import React, { Component } from "react";
import "./../components/Neighborhood.css";
import img from "../assets/JH.webp"

class JacksonHeights extends Component {
  render() {
    return (
      <div class="container">
       
      <div className="image-container">
          <img src={img} alt="China Town" style={{ width: "100%", height: "90%", opacity: 0.5}} />
          <h1 style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "navy", fontSize: "5em", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Jackson Heights</h1>
        </div>
        <p>Jackson Heights, a vibrant neighborhood nestled in the borough of Queens, New York City, boasts a rich tapestry of history and culture. Originally developed in the early 20th century as a planned community, Jackson Heights became a haven for diverse immigrant populations seeking refuge and opportunity in the United States. Over the years, it has evolved into one of the most ethnically diverse neighborhoods in the city, known for its harmonious blend of cultures, languages, and traditions. Explore Jackson Heights, and you'll encounter:</p>
      <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
        <li>Tree-lined streets and historic pre-war architecture</li>
        <li>Bustling commercial corridors offering diverse shopping experiences</li>
        <li>Eclectic dining scene featuring authentic ethnic cuisine from around the world</li>
        <li>Vibrant community events celebrating the neighborhood's multicultural heritage</li>
        <li>Diversity Plaza, a central hub showcasing the neighborhood's cultural richness</li>
        <li>A melting pot of cultures, languages, and traditions, reflecting the resilience and spirit of its residents</li>
      </ul>

      </div>
    );
  }
}

export default JacksonHeights; 
