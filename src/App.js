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
      {location.pathname === "/" && <Home />}
      {location.pathname !== "/" && <Navbar />}
      <div id="page">
        <main id="main">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <div
            style={{
              backgroundColor: "#9f8082",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <p>moniqueehayes5@gmail.com</p>
            <p>
              <a
                href="https://www.linkedin.com/in/monique-hayes/"
                target="_blank"
              >
                LinkedIn Profile
              </a>
            </p>
            <p>
              <a href="https://github.com/moniquehayes" target="_blank">
                Github Profile
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
