import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.css";
import About from "./Components/About";
import SlideImage from "./Components/SlideImages";


function App() {
  return (
    <Router>
      <div className="mainContainer" >
        <Header />
        <SlideImage />
        <div>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
