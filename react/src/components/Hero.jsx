import React from 'react';

const Hero = () => {
  return (
    <section id="hero1">
      <div className="container1"> {/* class => className */}
        <div className="headline"> {/* class => className */}
          <h1>Manage All Your Money in One App</h1>
          <div className="content"> {/* class => className */}
            <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
            <div className="buttons"> {/* class => className */}
              <a className="btn-download-app" href="#"><img src="images/uppgift HTML & CSS/appstore (2).svg" alt="appstore" /></a>
              <a className="btn-download-app" href="#"><img src="images/uppgift HTML & CSS/googleplay.svg" alt="googleplay" /></a>
            </div>
            <a href="#" className="discover-more"> {/* class => className */}
              <span className="btn-circle">
                <i className="fa-solid fa-chevron-down"></i>
              </span>
              <span>Discover more</span>
            </a>
          </div>
        </div>
      </div>

      <div className="images"> {/* class => className */}
        <img className="img-back" src="images/uppgift HTML & CSS/iPhone 12 Probakom1.svg" alt="iphone my budget" />
        <img className="img-front" src="images/uppgift HTML & CSS/iPhone 12 Pro.svg" alt="iphone your cards" />
      </div>
    </section>
  );
}

export default Hero;
