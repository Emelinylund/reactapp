import React from 'react'
import { Link } from 'react-router-dom'
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
import './styles.css'

// Importera bilderna
import ContactLetter from '../images/uppgift HTML & CSS/contact letter.svg'
import ContactAdd from '../images/uppgift HTML & CSS/contact add.svg'
import MapImage from '../images/uppgift HTML & CSS/map.svg'
import Socials from '../images/uppgift HTML & CSS/socials.svg'

const ContactPage = () => {
  return (
    <div>
      <section id="contact-us">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <ul>
              <li className="contact-holder-li">
                <div className="contact-holder">
                  <img src={ContactLetter} alt="Email Icon" />
                </div>
                <div className="contact-details">
                  <h4>Email us</h4>
                  <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                  <Link to="/contact">Leave a message <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
              </li>
              <li className="contact-holder-li">
                <div className="contact-holder">
                  <img src={ContactAdd} alt="Career Icon" />
                </div>
                <div className="contact-details">
                  <h4>Careers</h4>
                  <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                  <Link to="/contact">Send an application <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
              </li>
            </ul>
          </div>

          <div className="contact-form">
            <h2>Get Online Consultation</h2>
            <form action="#" method="post">
              <div className="input-group">
                <label htmlFor="fullname">Full name</label>
                <input type="text" id="fullname" name="fullname" className="form-input" />
              </div>
              <div className="input-group">
                <label htmlFor="emailaddress">Email address</label>
                <input type="email" id="emailaddress" name="emailaddress" className="form-input" />
              </div>
              <div className="input-group">
                <label htmlFor="specialist">Specialist</label>
                <select id="specialist" name="specialist" className="form-input">
                  <option value="">Select Specialist</option>
                  <option value="specialist1">Specialist 1</option>
                  <option value="specialist2">Specialist 2</option>
                </select>
              </div>
              <button type="submit">Make an appointment</button>
            </form>
          </div>
        </div>
      </section>

      <section id="map-address">
        <div className="map-address-container">
          <div className="map">
            <img src={MapImage} alt="Map Image" />
          </div>

          <div className="address-list">
            <div className="address">
              <h4>Medical Center 1</h4>
              <p><i className="fa-solid fa-location-dot"></i> 4517 Washington Ave. Manchester, Kentucky 39495</p>
              <p><i className="fa-solid fa-phone-volume"></i> (406) 555-0120</p>
              <p><i className="fa-regular fa-clock"></i> <strong className="bold-text">Mon – Fri:</strong> 9:00 am – 22:00 am<br /><strong className="bold-text">Sat – Sun:</strong> 9:00 am – 20:00 am</p>
            </div>
            <div className="address">
              <h4>Medical Center 2</h4>
              <p><i className="fa-solid fa-location-dot"></i> 2464 Royal Ln. Mesa, New Jersey 45463</p>
              <p><i className="fa-solid fa-phone-volume"></i> (406) 544-0123</p>
              <p><i className="fa-regular fa-clock"></i> <strong className="bold-text">Mon – Fri:</strong> 9:00 am – 22:00 am<br /><strong className="bold-text">Sat – Sun:</strong> 9:00 am – 20:00 am</p>
              <div className="socials">
                <img src={Socials} alt="Social Media Icons" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage
