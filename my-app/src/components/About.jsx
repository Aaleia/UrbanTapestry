import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className="AboutContainer">
        <h2>About Us</h2>
        <p>This website is brought to you by 4 Computer Science students from CUNY!</p>
        <p> As part of the CUNY Hackathon, four aspiring developers came together to help others learn more about NYC's Culture. </p>
        <div className="card-container">

        <div className="card-row-1">
          <div className="card">
            <h3>Aaleia Fernando</h3>
            <p>Hunter College</p>
            <a href="https://www.linkedin.com/in/aaleia/">LinkedIn</a>
          </div>
          <div className="card">
            <h3>Stephanie Koester</h3>
            <p>Queensborough Community College</p>
            <a href="https://www.linkedin.com/in/stephkoester">LinkedIn</a>
          </div>
          </div>

          <div className="card-row-2">
          <div className="card">
            <h3>Anita Prova</h3>
            <p>Hunter College</p>
            <a href= "https://www.linkedin.com/in/anita-prova-950322245/">LinkedIn</a>
          </div>
          <div className="card">
            <h3>Iman Ikram</h3>
            <p>Hunter College</p>
            <a href="https://www.linkedin.com/in/iman-ikram-9868a1218/">LinkedIn</a>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
