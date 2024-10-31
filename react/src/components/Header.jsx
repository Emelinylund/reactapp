import React from 'react'
import Siliconlogo from '../images/logo.svg'
const Header = () => {


  return (
    <header>
      <div id="wrapper">
        <div className="navbar"> 
          <a id="logo" href="index.html">
            <img src={Siliconlogo} alt="Silicon Logotype" />
          </a>

          <nav id="main-menu" className="nav-bar"> 
            <a className="nav-link" href="#">Features</a> 
          </nav>


          <a id="auth-signin" href="#" className="btn-primary"> 
            <i className="fa-regular fa-user"></i>
            <span>Sign in / up</span>
          </a>

          <button
            className="btn-mobile"
            aria-controls="main-menu"
            aria-expanded="false"
            aria-label="toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        </div>
    </header>
  );
};

export default Header
