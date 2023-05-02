import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./features/Home";
import Navbar from "./features/Navbar";
import About from "./features/About";
import Work from "./features/Work";
import Contact from "./features/Contact";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar />}
      <div id="page">
        <main id="main">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
