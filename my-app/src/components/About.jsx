import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className="AboutContainer">
        <h2>About Us</h2>
        <p>This website is brought to you by 4 Computer Science students from CUNY!</p>
        <p> We made this website as part of CUNY Hacks. For three of us, it was our first hackathon! </p>
        <div className="card-container">

        <div className="card-row-1">
          <div className="card">
            <h3>Aaleia Fernando</h3>
            <p>Hunter College</p>
            <a href="https://www.linkedin.com/in/aaleia/" target="_blank">LinkedIn</a>
          </div>
          <div className="card">
            <h3>Stephanie Koester</h3>
            <p>Queensborough Community College</p>
            <a href="https://www.linkedin.com/in/stephkoester" target="_blank">LinkedIn</a>
          </div>
          </div>

          <div className="card-row-2">
          <div className="card">
            <h3>Anita Prova</h3>
            <p>Hunter College</p>
            <a href= "https://www.linkedin.com/in/anita-prova-950322245/" target="_blank">LinkedIn</a>
          </div>
          <div className="card">
            <h3>Iman Ikram</h3>
            <p>Hunter College</p>
            <a href="https://www.linkedin.com/in/iman-ikram-9868a1218/" target="_blank">LinkedIn</a>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
