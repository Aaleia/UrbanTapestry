import React from "react";
import "./HomePage.css";

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
          </section>
          {/* Main Section*/}
          <section id="main" className="container">
            <section className="box">
              <header>
                <h2>What is this?</h2>
                <p>
                  We developed a vibrant cultural map tailored specifically for
                  New York City, divided by its diverse neighborhoods. This
                  resource is designed with young kids in mind, providing a
                  platform for children to delve deeper into the rich tapestry
                  of their city.
                </p>
              </header>
            </section>
            <div className="row">
              <div className="col-6 col-12-narrower">
                <section className="box">
                  <h3>Map</h3>
                  <p>
                    We utilized Leaflet for React to craft an interactive map
                    showcasing the various neighborhoods of New York City.{" "}
                  </p>
                  <ul className="actions">
                    <li>
                      <a href="/map" className="button">
                        Learn More
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="col-6 col-12-narrower">
                <section className="box">
                  <h3>Sign In</h3>
                  <p>Users are able to login to the site using their Google accounts. </p>
                  <ul className="actions">
                    <li>
                      <a href="#" className="button">
                        Learn More
                      </a>
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
