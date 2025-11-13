import React from "react";
import "../styles/about.css";

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>About CarPool</h1>
          <p>Connecting drivers and passengers for a sustainable future</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            We believe transportation should be affordable, accessible, and eco-friendly. CarPool connects drivers
            and passengers on the same routes, making commuting cheaper, safer, and better for the environment.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="missionVision">
        <div className="container">
          <h2>Why CarPool?</h2>
          <div className="grid">
            <div className="card">
              <h3>💚 Environmental</h3>
              <p>Reduce your carbon footprint by sharing rides</p>
            </div>
            <div className="card">
              <h3>💰 Economical</h3>
              <p>Save money on gas and parking</p>
            </div>
            <div className="card">
              <h3>🤝 Social</h3>
              <p>Meet like-minded people in your community</p>
            </div>
            <div className="card">
              <h3>⏰ Convenient</h3>
              <p>Easy booking and flexible scheduling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2>Our Team</h2>
          <div className="teamGrid">
            <div className="teamMember">
              <div className="memberAvatar">JD</div>
              <h3>John Davis</h3>
              <p className="memberRole">CEO & Founder</p>
              <p className="memberBio">10+ years in transportation tech</p>
            </div>
            <div className="teamMember">
              <div className="memberAvatar">SM</div>
              <h3>Sarah Miller</h3>
              <p className="memberRole">CTO</p>
              <p className="memberBio">Full-stack developer and tech lead</p>
            </div>
            <div className="teamMember">
              <div className="memberAvatar">MJ</div>
              <h3>Mike Johnson</h3>
              <p className="memberRole">Operations</p>
              <p className="memberBio">Community manager and support lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision">
        <div className="container">
          <h2>Our Vision</h2>
          <p>
            A world where carpooling is the default choice for commuting, reducing traffic congestion, pollution, and
            the cost of transportation for everyone.
          </p>
        </div>
      </section>
    </main>
  );
}
