import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.css";
import About from "./Components/About";
import SlideImage from "./Components/SlideImages";
import SermonVideos from "./Components/Sermon";
import Ministries from "./Components/MinistriesPage/MinistriesContainer";
import Event from "./Components/Event";
import "animate.css";

const style = {
  mainBgrdImage: {
    backgroundImage:
      'url("https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
    minHeight: "100%",
  },
  contentBgrd: {
    backgroundColor: "rgb(213, 238, 247)",
    marginBottom: "0%",
    minHeight: "45rem",
  },
};
function App() {
  return (
    <Router>
      <div className="mainContainer" style={style.mainBgrdImage}>
        <Header />
        {/* <SlideImage /> */}
        <div style={style.contentBgrd}>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<About />} />
            <Route path={"/sermon"} element={<SermonVideos />} />;
            <Route path="/ministries/:ministry" element={<Ministries />} />
            <Route path="/event" element={<Event />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
