import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import About from "./features/About";
import Contact from "./features/Contact";
import Work from "./features/Work";
// import styles from '../public/style.css'

const App = () => {
  return (
    <div className="App">
      <nav className="flex space-x-4 bg-blue">
        <Link id='home' to='/'>Home</Link>
        <Link id='about' to='/about'>About</Link>
        <Link id='work' to='/work'>Work</Link>
        <Link id='contact' to='/contact'>Contact</Link>
      </nav>
      <main>
        {/** MAY NEED TO ALSO MAKE A SEPARATE HOME COMPONENT IF DON'T WANT IT AS APP */}
        <Routes>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/work' element={<Work/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
