"use client"

import { useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function AddRidePage() {
  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    date: "",
    time: "",
    seats: "",
    cost: "",
    vehicleType: "sedan",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Ride created successfully!")
    setFormData({
      source: "",
      destination: "",
      date: "",
      time: "",
      seats: "",
      cost: "",
      vehicleType: "sedan",
    })
  }

  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "42rem", margin: "0 auto" }}>
          <div style={{ marginBottom: "2rem" }}>
            <h1 style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#1a1a1a" }}>
              Offer a Ride
            </h1>
            <p style={{ color: "#666" }}>Share your journey and earn money</p>
          </div>

          <div
            style={{ backgroundColor: "white", borderRadius: "0.75rem", padding: "2rem", border: "1px solid #e0e0e0" }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      marginBottom: "0.5rem",
                      color: "#1a1a1a",
                    }}
                  >
                    Starting Location
                  </label>
                  <input
                    type="text"
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    placeholder="e.g., Downtown Central"
                    required
                    style={{
                      width: "100%",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.5rem",
                      border: "1px solid #e0e0e0",
                      backgroundColor: "#fff",
                      color: "#1a1a1a",
                      fontSize: "1rem",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      marginBottom: "0.5rem",
                      color: "#1a1a1a",
                    }}
                  >
                    Destination
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="e.g., Tech Park"
                    required
                    style={{
                      width: "100%",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.5rem",
                      border: "1px solid #e0e0e0",
                      backgroundColor: "#fff",
                      color: "#1a1a1a",
                      fontSize: "1rem",
                    }}
                  />
                </div>
              </div>

              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      marginBottom: "0.5rem",
                      color: "#1a1a1a",
                    }}
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.5rem",
                      border: "1px solid #e0e0e0",
                      backgroundColor: "#fff",
                      color: "#1a1a1a",
                      fontSize: "1rem",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      marginBottom: "0.5rem",
                      color: "#1a1a1a",
                    }}
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.5rem",
                      border: "1px solid #e0e0e0",
                      backgroundColor: "#fff",
                      color: "#1a1a1a",
                      fontSize: "1rem",
                    }}
                  />
                </div>
              </div>

              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      marginBottom: "0.5rem",
                      color: "#1a1a1a",
                    }}
                  >
                    Available Seats
                  </label>
                  <input
                    type="number"
                    name="seats"
                    value={formData.seats}
                    onChange={handleChange}
                    placeholder="1-5"
                    min="1"
                    max="5"
                    required
                    style={{
                      width: "100%",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.5rem",
                      border: "1px solid #e0e0e0",
                      backgroundColor: "#fff",
                      color: "#1a1a1a",
                      fontSize: "1rem",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      marginBottom: "0.5rem",
                      color: "#1a1a1a",
                    }}
                  >
                    Cost Per Seat ($)
                  </label>
                  <input
                    type="number"
                    name="cost"
                    value={formData.cost}
                    onChange={handleChange}
                    placeholder="5"
                    step="0.50"
                    min="0"
                    required
                    style={{
                      width: "100%",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.5rem",
                      border: "1px solid #e0e0e0",
                      backgroundColor: "#fff",
                      color: "#1a1a1a",
                      fontSize: "1rem",
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    marginBottom: "0.5rem",
                    color: "#1a1a1a",
                  }}
                >
                  Vehicle Type
                </label>
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e0e0e0",
                    backgroundColor: "#fff",
                    color: "#1a1a1a",
                    fontSize: "1rem",
                  }}
                >
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="van">Van</option>
                  <option value="hatchback">Hatchback</option>
                </select>
              </div>

              <div style={{ paddingTop: "1rem" }}>
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    backgroundColor: "#0070f3",
                    color: "white",
                    padding: "0.75rem",
                    borderRadius: "0.5rem",
                    fontWeight: "600",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "1rem",
                  }}
                >
                  Create Ride
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
