import React from "react";
import "../styles/users.css";

export default function Users() {
  const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", ridesOffered: 5, ridesTaken: 12, rating: 4.5, role: "Driver" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", ridesOffered: 3, ridesTaken: 8, rating: 4.0, role: "Passenger" },
    { id: 3, name: "Charlie Lee", email: "charlie@example.com", ridesOffered: 7, ridesTaken: 15, rating: 4.8, role: "Driver" },
    { id: 4, name: "Diana Rose", email: "diana@example.com", ridesOffered: 2, ridesTaken: 5, rating: 3.9, role: "Passenger" },
  ];

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
    <div className="users-page">
      <h1>Our Users</h1>
      <div className="users-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-avatar">{user.name[0]}</div>
            <h3>{user.name}</h3>
            <span className={`role-badge ${user.role.toLowerCase()}`}>{user.role}</span>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Rides Offered:</strong> {user.ridesOffered}</p>
            <p><strong>Rides Taken:</strong> {user.ridesTaken}</p>
            <p className="rating"><strong>Rating:</strong> {renderStars(user.rating)} ({user.rating})</p>
            <button>View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
}
