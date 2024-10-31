import React, { useState, useEffect } from 'react'
import Quoteicon from '../images/quotes.svg'
import Stars from '../images/rating.svg'
import Fannie from '../images/Fannie.svg'
import Stars2 from '../images/rating (1).svg'
import Albert from '../images/albert.svg'

const Page5 = () => {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {

    const fetchTestimonials = async () => {
      try {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        setTestimonials(data)
      } catch (error) {
        console.error('Error fetching testimonials:', error)
      }
    };

    fetchTestimonials()
  }, []);
  return (
    <section id="page5">
      <div className="container6">
        <div className="clients">
          <h2>Clients are <br />Loving Our App</h2>
        </div>
        <div className="clients-grid">
          <div className="clients-card">
            <div className="quote-icon">
              <img src={Quoteicon} alt="quote-icon" />
            </div>
            <div className="stars">
              <img src={Stars} alt="stars" />
            </div>
            <p>
              Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.
            </p>
            <div className="client-info">
              <img src={Fannie} alt="Fannie Summers" className="client-photo" />
              <div>
                <h4>Fannie Summers</h4>
                <p>Designer</p>
              </div>
            </div>
          </div>

          <div className="clients-card">
            <div className="quote-icon">
              <img src={Quoteicon} alt="quote-icon" />
            </div>
            <div className="stars">
              <img src={Stars2} alt="stars" />
            </div>
            <p>
              Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.
            </p>
            <div className="client-info">
              <img src={Albert} alt="Albert Flores" className="client-photo" />
              <div>
                <h4>Albert Flores</h4>
                <p>Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page5
