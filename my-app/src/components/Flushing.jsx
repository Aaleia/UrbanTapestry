import React, { Component } from "react";
import "./../components/Neighborhood.css";
import img from "../assets/flushing.jpg";

class Flushing extends Component {
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
            Flushing 
          </h1>
        </div>
        <br></br>
        <p>
        Flushing, a vibrant neighborhood nestled in the borough of Queens, New York City, boasts a rich tapestry of history and culture. Originally developed in the early 20th century, Flushing became a hub for diverse immigrant populations seeking refuge and opportunity in the United States. Over the years, it has evolved into one of the most ethnically diverse neighborhoods in the city, known for its harmonious blend of cultures, languages, and traditions. Explore Flushing, and you'll learn that:
        </p>
        <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>

        <li>
            Flushing is home to one of NYC's largest East Asian communities, including Chinese, Korean, and other Asian ethnicities.
          </li>
          <li>
            Flushing is renowned for its authentic Asian cuisine, bustling markets, and cultural festivals. For instance, the Flushing Night Market, a vibrant night market featuring a diverse array of food vendors offering Asian delicacies, crafts, and entertainment.
            Or Celebrate the Korean Harvest Festival, a traditional Korean festival in Flushing commemorating the autumn harvest season with cultural displays, traditional music and dance performances, food tastings, and arts and crafts demonstrations.
          </li>
         
          <li>
            Flushing is a hotspot for sports enthusiasts with facilities like the USTA Billie Jean King National Tennis Center, where the US Open Tennis Championships are held annually. Several famous athletes, including tennis stars John McEnroe and Martina Navratilova, grew up in Flushing.
          </li>
          <li>Flushing was named after the city of Vlissingen in the Netherlands, which was anglicized to "Flushing" by early Dutch settlers.</li>
        </ul>
      </div>
    );
  }
}

export default Flushing;
