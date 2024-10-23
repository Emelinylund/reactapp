import React from 'react';

const Header = () => {
  return (
    <header>
      <div id="wrapper">
        <div className="navbar"> 
          <a id="logo" href="index.html">
            <img src="images/logo.svg" alt="Silicon Logotype" />
          </a>

          <nav id="main-menu" className="nav-bar"> 
            <a className="nav-link" href="#">Features</a> 
          </nav>

          <div id="darkmode-toggle-switch" className="btn-toggle-switch"> 
            <span className="label">Dark mode</span> 
            <label htmlFor="darkmode-switch" className="toggle-switch">
              <input id="darkmode-switch" type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>

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

export default Header;