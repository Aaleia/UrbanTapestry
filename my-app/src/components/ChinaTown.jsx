import React, { Component } from "react";
import "./../components/Neighborhood.css";
import img from "../assets/chinatown.webp";

class ChinaTown extends Component {
  render() {
    return (
      <div class="container">

      {/* Image with title */}
      <div className="image-container">
          <img src={img} alt="China Town" style={{ width: "100%", height: "90%", opacity: 0.5}} />
          <h1 style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "navy", fontSize: "5em", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>China Town</h1>
        </div>

        <p>
        Chinatown, a historic enclave nestled within the heart of New York City, stands as a testament to the enduring spirit and vibrant culture of its inhabitants. Founded by Chinese immigrants in the late 19th century, Chinatown has evolved into a bustling neighborhood teeming with colorful markets, traditional shops, and aromatic eateries. Despite facing challenges such as discrimination and displacement, Chinatown remains a symbol of resilience and community, offering visitors a rich tapestry of cultural experiences. Explore Chinatown's captivating history and diverse offerings:
        </p>
        
        <ul>
          <li>Founded by Chinese immigrants in the late 19th century. </li>
          <li>Evolved into a bustling neighborhood with colorful markets and traditional shops. </li>
          <li>Home to renowned culinary scene featuring savory dim sum and aromatic noodle dishes. </li>
          <li>Hosts a variety of cultural institutions and festivals celebrating Chinese heritage. </li>
          <li>Symbol of resilience and community despite facing challenges. </li>
          <li>Captivates visitors with its rich tapestry of cultural experiences.</li>
          <li>Embodies the enduring legacy of one of America's most iconic neighborhoods.</li>
        </ul>
      </div>
    );
  }
}

export default ChinaTown;
