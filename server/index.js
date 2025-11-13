// server/index.js
import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config(); // Load environment variables from .env

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ MySQL Connection using .env values
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
    return;
  }
  console.log("✅ Connected to MySQL Database:", process.env.DB_NAME);
});

// ✅ Test route
app.get("/", (req, res) => {
  res.send("🚗 CampusRide backend running successfully!");
});

// ✅ Example API - Get all users
app.get("/users", (req, res) => {
  const sql = "SELECT * FROM User";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results);
  });
});

// ✅ Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
