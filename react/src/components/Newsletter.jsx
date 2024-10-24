import React from 'react';
import Notification from '../images/notification.svg'

const Newsletter = () => {
  return (
    <section id="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          
          <img src={Notification} alt="Notification Bell" />
          <h3>
            Subscribe to our newsletter to stay<br />
            informed about latest updates
          </h3>
        </div>
        <div className="newsletter-input">
          <div className="input-icon">
            
            <i className="fa-regular fa-envelope"></i>
            <input type="email" placeholder="Your Email" />
          </div>
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
