import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import About from "./features/About";
import Contact from "./features/Contact";
import Work from "./features/Work";
import Home from "./features/Home";
// import styles from '../public/style.css'

const App = () => {
  return (
    <div className="App">
      <nav className="flex space-x-4 bg-blue" style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          Monique Hayes
        </div>
        <div style={{display: 'flex', justifyContent: 'right'}}>
        <Link style={{margin: '0 1vw', textDecoration: 'none'}} id='home' to='/'>Home</Link>
        <Link style={{margin: '0 1vw', textDecoration: 'none'}} id='about' to='/about'>About</Link>
        <Link style={{margin: '0 1vw', textDecoration: 'none'}} id='work' to='/work'>Work</Link>
        <Link style={{margin: '0 1vw', textDecoration: 'none'}} id='contact' to='/contact'>Contact</Link>
        </div>
      </nav>
      <main>
        {/** MAY NEED TO ALSO MAKE A SEPARATE HOME COMPONENT IF DON'T WANT IT AS APP */}
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
      <footer>
        <div style={{backgroundColor: '#9f8082', display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
          <p>moniqueehayes5@gmail.com</p>
          <p>https://www.linkedin.com/in/monique-hayes/</p>
          <p>https://github.com/moniquehayes</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
