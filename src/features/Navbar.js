import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav style={{display: 'flex', justifyContent: 'space-between', height: '10vh'}}>
        <div style={{marginLeft: '5px'}}>
          <img src="favicon.ico"></img>
        </div>
        <div style={{display: 'flex', justifyContent: 'right'}}>
        <Link style={{margin: '0 1vw', textDecoration: 'none', color: '#70a0af', fontWeight: 'bold'}} id='home' to='/'>Home</Link>
        <Link style={{margin: '0 1vw', textDecoration: 'none', color: '#70a0af', fontWeight: 'bold'}} id='about' to='/about'>About</Link>
        <Link style={{margin: '0 1vw', textDecoration: 'none', color: '#70a0af', fontWeight: 'bold'}} id='work' to='/work'>Work</Link>
        <Link style={{margin: '0 1vw', textDecoration: 'none', color: '#70a0af', fontWeight: 'bold'}} id='contact' to='/contact'>Contact</Link>
        </div>
      </nav>
    )
};

export default Navbar;