import React from "react";
import "./HomePage.css";
import img from "../assets/JH.webp";
import img2 from "../assets/chinatown.webp";
import img3 from "../assets/map-shot.png";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        {/* Homepage file */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title />

          <div id="page-wrapper">
	      
          {/* Title banner */}
          <section id="banner">
              <h2>NYC Culture Explorer</h2>
	      <div class="arrow-down"></div>
          </section>
              {/* Main Section*/}
	      
          <section id="main" className="container">
            <section className="box">
              <header>
                <h2>Your Gateway to the Cultural Tapestry of NYC</h2>
                  <p>Welcome! Our site is your passport to explore what defines the heart and soul of the city that never sleeps. Use our interactive map to embark on a journey through the vibrant neighborhoods of New York City and discover their unique histories, landmarks, events, and untold stories. Let's work to preserve the nuances of this city's culture and uncover the wonders that make it truly exceptional.</p>
              </header>
		<div className="map-container">
		    <img src={img3} alt="Interactive Map" />
		    <button className="map-button">Go to Map</button>
		</div>
            </section>

	      <section className="feature-heading">
		  <header>
                      <h4>Featured Neighborhoods</h4>
		  </header>
	      </section>
	      
              <div className="row">
		  
              <div className="col-6 col-12-narrower">
                  <section className="box">
		      <img src={img} alt="Jackson Heights" />
                  <h3>Jackson Heights</h3>
                  <p>One of the most ethnically diverse neighborhoods in the city, known for its harmonious blend of cultures, languages, and traditions.</p>
                  <ul className="actions">
                    <li>
                      <button onClick={() => window.location.href='/JacksonHeights'}>Learn More</button>
                    </li>
                  </ul>
                </section>
              </div>
		
              <div className="col-6 col-12-narrower">
                  <section className="box">
		      <img src={img2} alt="Chinatown" />
                  <h3>Chinatown</h3>
                    <p>An historic enclave nestled within the heart of the city, teeming with colorful markets, traditional shops, and bustling eateries.</p>
                  <ul className="actions">
                    <li>
                      <button onClick={() => window.location.href='/ChinaTown'}>Learn More</button>
                    </li>
                  </ul>
                </section>
              </div>
		
            </div>
          </section>
	      
          {/* Footer */}
          <footer id="footer"></footer>
        </div>
      </div>
    );
  }
}

export default HomePage;
