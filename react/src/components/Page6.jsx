import React, { useState, useEffect } from 'react';
import Phone from '../images/phone.svg';
import Writing from '../images/writing.svg';
import Arrow from '../images/arrow.svg';
import ArrowDown from '../images/arrow down.svg';

// FAQItem-komponent för att hantera varje FAQ-fråga
const FAQItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-title" onClick={toggleOpen}>
        <h4>{title}</h4>
        <img src={isOpen ? ArrowDown : Arrow} alt="toggle icon" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  )
}

// Page6-komponent för att hantera API-anropet och rendera FAQ-sektionen
const Page6 = () => {
  const [faqs, setFaqs] = useState([])

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
        const data = await response.json();
        setFaqs(data);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <section id="page6">
      <div className="faq">
        <div className="faq-left">
          <h2>Any questions? <br /> Check out the FAQs</h2>
          <p>Still have unanswered questions and need to get<br />in touch?</p>
          <div className="contact-options">
            <div className="contact-option">
              <img src={Phone} alt="phone" />
              <p>Still have questions?</p>
              <a href="#">Contact us <i className="fa fa-arrow-right"></i></a>
            </div>
            <div className="contact-option">
              <img src={Writing} alt="writing" />
              <p>Don't like phone calls?</p>
              <a href="#" id="green">Contact us <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>

        <div className="faq-right">
          <div className="accordion">
            {faqs.map((faq) => (
              <FAQItem key={faq.id} title={faq.title} content={faq.content} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page6;



