import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import About from "./features/About";
import Contact from "./features/Contact";
import Work from "./features/Work";

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link id='home' to='/'>Home</Link>
        <Link id='about' to='/'>About</Link>
        <Link id='work' to='/'>Work</Link>
        <Link id='contact' to='/'>Contact</Link>
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
