import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/homepage.css"; // Optional: your CSS file

export default function Homepage() {
  return (
    <>
      
      <main>
        <section className="hero">
          <div className="heroContent">
            <h1>Welcome to CarPool</h1>
            <p>Share the ride, save the planet, save your money</p><br></br><br></br><br></br>
            <div className="heroBtns">
              <a href="/booking" className="btnPrimary">Find a Ride</a>
              <a href="/offer-ride" className="btnSecondary">Offer a Ride</a>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h2>Why Choose CarPool?</h2>
            <div className="featuresGrid">
              <div className="featureCard">
                <div className="featureIcon">💰</div>
                <h3>Save Money</h3>
                <p>Split costs with other passengers and reduce your transportation expenses.</p>
              </div>
              <div className="featureCard">
                <div className="featureIcon">🌍</div>
                <h3>Eco-Friendly</h3>
                <p>Reduce your carbon footprint by sharing rides with others.</p>
              </div>
              <div className="featureCard">
                <div className="featureIcon">⏰</div>
                <h3>Convenient</h3>
                <p>Book rides easily and save time during your commute.</p>
              </div>
              <div className="featureCard">
                <div className="featureIcon">👥</div>
                <h3>Community</h3>
                <p>Connect with like-minded people in your area.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container">
            <div className="statsGrid">
              <div className="statCard">
                <div className="statNumber">2,500+</div>
                <div className="statLabel">Active Users</div>
              </div>
              <div className="statCard">
                <div className="statNumber">15,000+</div>
                <div className="statLabel">Completed Rides</div>
              </div>
              <div className="statCard">
                <div className="statNumber">$500K+</div>
                <div className="statLabel">Money Saved</div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <h2>Ready to Carpool?</h2>
            <p>Join thousands of users saving money and the environment today.</p>
            <a href="/booking" className="btnPrimary">Get Started</a>
          </div>
        </section>
      </main>
    
    </>
  );
}
