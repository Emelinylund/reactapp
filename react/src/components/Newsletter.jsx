import React from 'react';

const Newsletter = () => {
  return (
    <section id="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          {/* Kontrollera att sökvägen till bilden är korrekt */}
          <img src="/images/notification.svg" alt="Notification Bell" />
          <h3>
            Subscribe to our newsletter to stay<br />
            informed about latest updates
          </h3>
        </div>
        <div className="newsletter-input">
          <div className="input-icon">
            {/* Se till att Font Awesome är korrekt importerad */}
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
