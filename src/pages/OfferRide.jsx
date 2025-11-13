import React from "react";
import "../styles/offer-ride.css";

export default function OfferRide() {
  return (
    <div className="offer-ride-page">
      <div className="form-container">
        <h1>Offer a Ride</h1>
        <form className="offer-ride-form">
          <div className="form-group">
            <label htmlFor="pickup">Pickup Location</label>
            <input type="text" id="pickup" placeholder="Enter pickup location" />
          </div>
          <div className="form-group">
            <label htmlFor="drop">Drop Location</label>
            <input type="text" id="drop" placeholder="Enter drop location" />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input type="time" id="time" />
          </div>
          <div className="form-group">
            <label htmlFor="seats">Seats Available</label>
            <input type="number" id="seats" placeholder="Number of seats" min="1" />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price per Seat ($)</label>
            <input type="number" id="price" placeholder="Enter price per seat" min="0" />
          </div>
          <button type="submit">Offer Ride</button>
        </form>
      </div>
    </div>
  );
}
