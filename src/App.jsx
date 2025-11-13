import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from './pages/Homepage';
import Booking from "./pages/Booking";
import OfferRide from "./pages/OfferRide";
import Users from "./pages/Users";
import Feedback from "./pages/Feedback";
import About from "./pages/About";

import "./styles/globals.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/offer-ride" element={<OfferRide />} />
        <Route path="/users" element={<Users />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
