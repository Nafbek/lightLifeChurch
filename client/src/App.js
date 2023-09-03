import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.css";
import About from "./Components/About";
import SlideImage from "./Components/SlideImages";

const style = {
  mainBgrdImage: {
    backgroundImage:
      'url("https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
  },
};
function App() {
  return (
    <Router>
      <div className="mainContainer" style={style.mainBgrdImage}>
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
