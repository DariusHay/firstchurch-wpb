import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import WhatWeBelieve from "./pages/WhatWeBelieve";
import Ministries from "./pages/Ministries";
import Events from "./pages/Events";
import Giving from "./pages/Giving";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/beliefs" element={<WhatWeBelieve />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/events" element={<Events />} />
        <Route path="/giving" element={<Giving />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
