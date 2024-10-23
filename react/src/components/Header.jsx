import React from 'react';

const Header = () => {
  return (
    <header>
      <div id="wrapper">
        <div className="navbar"> {/* class => className */}
          <a id="logo" href="index.html">
            <img src="images/logo.svg" alt="Silicon Logotype" />
          </a>

          <nav id="main-menu" className="nav-bar"> {/* class => className */}
            <a className="nav-link" href="#">Features</a> {/* class => className */}
          </nav>

          <div id="darkmode-toggle-switch" className="btn-toggle-switch"> {/* class => className */}
            <span className="label">Dark mode</span> {/* class => className */}
            <label htmlFor="darkmode-switch" className="toggle-switch"> {/* for => htmlFor */}
              <input id="darkmode-switch" type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>

          <a id="auth-signin" href="#" className="btn-primary"> {/* class => className */}
            <i className="fa-regular fa-user"></i>
            <span>Sign in / up</span>
          </a>

          <button
            className="btn-mobile" {/* class => className */}
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
