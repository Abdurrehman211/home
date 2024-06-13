import React from 'react';
import  { useState, useEffect } from 'react';
import './Navbar.css'; 
function Navbar(){
  const [navbarDark, setNavbarDark] = useState(false); // State to track navbar darkness

  useEffect(() => {
      const handleScroll = () => {
          const top = window.scrollY;
          if (top >= 100) {
              setNavbarDark(true); // Update state to indicate navbar darkness
          } else {
              setNavbarDark(false); // Update state to indicate navbar lightness
          }
      };

      window.addEventListener('scroll', handleScroll); // Add scroll event listener

      // Cleanup function to remove event listener when component unmounts
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
    return (
        <>
             <nav className={`navbar ${navbarDark ? 'navbarDark' : ''}`}>
      <div className="navbar-brand">
        <span>Portfolio</span>
        </div>
      <ul className="navbar-nav">
        <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
        <li className="nav-item"><a href="#service" className="nav-link">Services</a></li>
        <li className="nav-item"><a href="#links" className="nav-link">Portfolio</a></li>
        <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
      </ul>
    </nav>     
        </>
    )
}
export default Navbar;