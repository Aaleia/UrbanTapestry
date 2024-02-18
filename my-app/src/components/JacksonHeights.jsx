import React, { Component } from "react";
import "./../components/Neighborhood.css";
import img from "../assets/JH.webp";

class JacksonHeights extends Component {
  render() {
    return (
      <div class="container">
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
            Jackson Heights
          </h1>
        </div>
        <br></br>
        <p>
          Jackson Heights, a vibrant neighborhood nestled in the borough of
          Queens, New York City, boasts a rich tapestry of history and culture.
          Originally developed in the early 20th century as a planned community,
          Jackson Heights became a haven for diverse immigrant populations
          seeking refuge and opportunity in the United States. Over the years,
          it has evolved into one of the most ethnically diverse neighborhoods
          in the city, known for its harmonious blend of cultures, languages,
          and traditions. Explore Jackson Heights, and you'll learn that:
        </p>
        <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
          <li>
            Jackson Heights was originally envisioned as a "garden city," a
            planned community designed to incorporate green spaces and apartment
            buildings with modern amenities. You can see that the neighborhood's
            layout includes many tree-lined streets and garden apartments.
          </li>
          <li>
            Home to one of NYC's largest LGBTQ+ communities and an active
            nightlife scene. Jackson Heights also has a long history of
            community activism and organizing.
          </li>
          <li>
            Jackson Heights has served as a filming location for various movies
            and television shows, including "Men in Black 3" and "Spider-Man:
            Homecoming." One reason is because Jackson
            Heights is a historic district, known for its
            distinctive architectural styles. 
          </li>
        </ul>
      </div>
    );
  }
}

export default JacksonHeights;
