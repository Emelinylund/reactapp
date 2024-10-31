import React from 'react'
import Appstore from '../images/appstore (2).svg'
import Googleplay from '../images/googleplay (2).svg'
import Phoneback from '../images/iphone 12 Probakom1.svg'
import Phonefront from '../images/iphone 12 Pro.svg'

const Hero = () => {
  return (
    <section id="hero1">
      <div className="container1"> 
        <div className="headline"> 
          <h1>Manage All Your Money in One App</h1>
          <div className="content"> 
            <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
            <div className="buttons"> 
              <a className="btn-download-app" href="#"><img src={Appstore} alt="appstore" /></a>
              <a className="btn-download-app" href="#"><img src={Googleplay} alt="googleplay" /></a>
            </div>
            <a href="#" className="discover-more"> 
              <span className="btn-circle">
                <i className="fa-solid fa-chevron-down"></i>
              </span>
              <span>Discover more</span>
            </a>
          </div>
        </div>
      </div>

      <div className="images"> 
        <img className="img-back" src={Phoneback} alt="iphone my budget" />
        <img className="img-front" src={Phonefront} alt="iphone your cards" />
      </div>
    </section>
  );
}

export default Hero
