import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
      return (
	  
	  <div className="AboutContainer">


	      <h2 className="AboutHeading">About</h2>
	      
	      <div className="MissionContainer">
		  <h2>Our Mission</h2>
		  <p>New York City is one of the most ethnically and linguistically diverse cities in the world, representing over 150 countries and 200 languages. And yet, many visitors and even residents remain unaware of the unique cultural elements that make up the city's communities. This information was not readily accessible in one centralized location--until now. We want to eliminate the disconnect between residents and their communities and ensure that everyone experiences opportunties for cultural exchange and exploration within this one great city.</p>
	      </div>
		  

	      
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


	      <section id="contact" className="contact-section">
		  <div className="inner">
		      <h2 className="major">Contact Us</h2>
		      <p>We would love to hear your feedback! Let us know if you have any suggestions or if you want to get involved.</p>
		      <form method="post" action="#">
			  <div className="fields">
			      <div className="field">
				  <label htmlFor="name">Name</label>
				  <input type="text" name="name" id="name" />
			      </div>
			      <div className="field">
				  <label htmlFor="email">Email</label>
				  <input type="email" name="email" id="email" />
			      </div>
			      <div className="field">
				  <label htmlFor="message">Message</label>
				  <textarea name="message" id="message" rows="4"></textarea>
			      </div>
			  </div>
			  <ul className="actions">
			      <li><input type="submit" value="Send Message" /></li>
			  </ul>
		      </form>
		      <ul className="contact">
			  {/* Add contact information if needed */}
		      </ul>
		  </div>
	      </section>
	      

	      
      </div>
    );
  }
}

export default About;
