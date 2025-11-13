import React, { useState } from "react";
import "../styles/booking.css";

export default function Booking() {
  const [search, setSearch] = useState("");
  const [rides, setRides] = useState([
    { id: 1, driver: "Alice", from: "City A", to: "City B", time: "09:00 AM", seats: 3, rating: 4.5 },
    { id: 2, driver: "Bob", from: "City C", to: "City D", time: "02:00 PM", seats: 2, rating: 4.0 },
    { id: 3, driver: "Charlie", from: "City A", to: "City D", time: "06:00 PM", seats: 4, rating: 4.8 },
  ]);

  // Filter rides based on search
  const filteredRides = rides.filter(
    (ride) =>
      ride.driver.toLowerCase().includes(search.toLowerCase()) ||
      ride.from.toLowerCase().includes(search.toLowerCase()) ||
      ride.to.toLowerCase().includes(search.toLowerCase())
  );

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

  return (
    <div className="booking-page">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by driver or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Form Container */}
      <div className="form-container">
        <h1>find a ride</h1>
        <form className="booking-form">
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
          <button type="submit">Find Rides</button>
        </form>
      </div>

      {/* Results Container */}
      <div className="results-container">
        <h2>Available Rides</h2>
        {filteredRides.length === 0 ? (
          <p>No rides found for your search.</p>
        ) : (
          <div className="rides-grid">
            {filteredRides.map((ride) => (
              <div key={ride.id} className="ride-card">
                <h3>{ride.driver}</h3>
                <p><strong>From:</strong> {ride.from}</p>
                <p><strong>To:</strong> {ride.to}</p>
                <p><strong>Time:</strong> {ride.time}</p>
                <p><strong>Seats Available:</strong> {ride.seats}</p>
                <p className="rating"><strong>Rating:</strong> {renderStars(ride.rating)} ({ride.rating})</p>
                <button>Book Now</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
