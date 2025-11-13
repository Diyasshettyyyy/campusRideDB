"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function PaymentsPage() {
  const [payments, setPayments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const mockPayments = [
      {
        payment_id: 1,
        booking_info: "Booking #B001 - Downtown → Tech Park",
        amount: 15,
        payment_date: "2025-01-10",
        payment_mode: "Credit Card",
        status: "Completed",
      },
      {
        payment_id: 2,
        booking_info: "Booking #B002 - Central Mall → Business District",
        amount: 12,
        payment_date: "2025-01-09",
        payment_mode: "Debit Card",
        status: "Completed",
      },
      {
        payment_id: 3,
        booking_info: "Booking #B003 - North Station → Downtown",
        amount: 8,
        payment_date: "2025-01-08",
        payment_mode: "Digital Wallet",
        status: "Completed",
      },
      {
        payment_id: 4,
        booking_info: "Booking #B004 - Airport → Downtown",
        amount: 45,
        payment_date: "2025-01-07",
        payment_mode: "Credit Card",
        status: "Completed",
      },
      {
        payment_id: 5,
        booking_info: "Booking #B005 - City Center → Airport",
        amount: 20,
        payment_date: "2025-01-06",
        payment_mode: "Bank Transfer",
        status: "Pending",
      },
    ]
    setPayments(mockPayments)
    setLoading(false)
  }, [])

  const getStatusColor = (status) => {
    return status === "Completed" ? "#10b981" : "#f59e0b"
  }

  const getStatusBgColor = (status) => {
    return status === "Completed" ? "#d1fae5" : "#fef3c7"
  }

  const total = payments.filter((p) => p.status === "Completed").reduce((sum, p) => sum + p.amount, 0)

  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "90rem", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.25rem", fontWeight: "bold", color: "#1a1a1a", marginBottom: "0.5rem" }}>
            Payment History
          </h1>
          <p style={{ color: "#666", marginBottom: "2rem" }}>Track all your transactions</p>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginBottom: "2rem",
              border: "1px solid #e0e0e0",
            }}
          >
            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}
            >
              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "#0070f3",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ color: "white", fontSize: "1.5rem" }}>$</span>
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", color: "#666" }}>Total Spent</p>
                  <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1a1a1a" }}>${total}</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "#06b6d4",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ color: "white", fontSize: "1.5rem" }}>💳</span>
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", color: "#666" }}>Total Transactions</p>
                  <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1a1a1a" }}>{payments.length}</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "#f97316",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ color: "white", fontSize: "1.5rem" }}>📅</span>
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", color: "#666" }}>Pending</p>
                  <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1a1a1a" }}>
                    {payments.filter((p) => p.status === "Pending").length}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {loading ? (
            <div style={{ textAlign: "center", paddingTop: "3rem" }}>
              <p style={{ color: "#666" }}>Loading payments...</p>
            </div>
          ) : (
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "0.75rem",
                border: "1px solid #e0e0e0",
                overflow: "hidden",
              }}
            >
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid #e0e0e0", backgroundColor: "#f9fafb" }}>
                      <th
                        style={{
                          padding: "1.5rem",
                          textAlign: "left",
                          fontWeight: "600",
                          color: "#1a1a1a",
                          fontSize: "0.9rem",
                        }}
                      >
                        Booking Info
                      </th>
                      <th
                        style={{
                          padding: "1.5rem",
                          textAlign: "left",
                          fontWeight: "600",
                          color: "#1a1a1a",
                          fontSize: "0.9rem",
                        }}
                      >
                        Amount
                      </th>
                      <th
                        style={{
                          padding: "1.5rem",
                          textAlign: "left",
                          fontWeight: "600",
                          color: "#1a1a1a",
                          fontSize: "0.9rem",
                        }}
                      >
                        Date
                      </th>
                      <th
                        style={{
                          padding: "1.5rem",
                          textAlign: "left",
                          fontWeight: "600",
                          color: "#1a1a1a",
                          fontSize: "0.9rem",
                        }}
                      >
                        Method
                      </th>
                      <th
                        style={{
                          padding: "1.5rem",
                          textAlign: "left",
                          fontWeight: "600",
                          color: "#1a1a1a",
                          fontSize: "0.9rem",
                        }}
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((payment) => (
                      <tr key={payment.payment_id} style={{ borderBottom: "1px solid #e0e0e0" }}>
                        <td style={{ padding: "1.5rem", color: "#1a1a1a" }}>{payment.booking_info}</td>
                        <td style={{ padding: "1.5rem", fontWeight: "600", color: "#1a1a1a" }}>${payment.amount}</td>
                        <td style={{ padding: "1.5rem", color: "#666" }}>{payment.payment_date}</td>
                        <td style={{ padding: "1.5rem", color: "#666" }}>{payment.payment_mode}</td>
                        <td style={{ padding: "1.5rem" }}>
                          <span
                            style={{
                              padding: "0.25rem 0.75rem",
                              borderRadius: "9999px",
                              fontSize: "0.875rem",
                              fontWeight: "500",
                              backgroundColor: getStatusBgColor(payment.status),
                              color: getStatusColor(payment.status),
                            }}
                          >
                            {payment.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
