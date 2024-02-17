import React from 'react';
import './HomePage.css';

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
				    <p>Explanation</p>
				</header>
			    </section>
			    <div className="row">
				<div className="col-6 col-12-narrower">
				    <section className="box">
					<h3>This is a featured feature</h3>
					<p>Text</p>
					<ul className="actions">
					    <li><a href="#" className="button">Learn More</a></li>
					</ul>
				    </section>
				</div>
				<div className="col-6 col-12-narrower">
				    <section className="box">
					<h3>Another featured feature</h3>
					<p>More text</p>
					<ul className="actions">
					    <li><a href="#" className="button">Learn More</a></li>
					</ul>
				    </section>
				</div>
			    </div>
			</section>
			{/* Footer */}
			<footer id="footer">
			</footer>
		    </div>
		</div>
		);
    }
}

export default HomePage;
