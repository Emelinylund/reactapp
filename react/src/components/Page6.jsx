import React from 'react';

const Page6 = () => {
  return (
    <section id="page6">
      <div className="faq">
        <div className="faq-left">
          <h2>Any questions? <br /> Check out the FAQs</h2>
          <p>Still have unanswered questions and need to get<br />in touch?</p>
          <div className="contact-options">
            <div className="contact-option">
              <img src="images/uppgift HTML & CSS/phone.svg" alt="phone" />
              <p>Still have questions?</p>
              <a href="#">Contact us <i className="fa fa-arrow-right"></i></a>
            </div>
            <div className="contact-option">
              <img src="images/uppgift HTML & CSS/writing.svg" alt="writing" />
              <p>Don't like phone calls?</p>
              <a href="#" id="green">Contact us <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="faq-right">
          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-title">
                <h4>Is any of my personal information stored in the App?</h4>
                <img src="images/uppgift HTML & CSS/arrow.svg" alt="arrow" />
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-title">
                <h4>What formats can I download my transaction history in?</h4>
                <img src="images/uppgift HTML & CSS/arrow.svg" alt="arrow" />
              </div>
            </div>
            <div className="accordion-item open">
              <div className="accordion-title">
                <h4>Can I schedule future transfers?</h4>
                <img src="images/uppgift HTML & CSS/arrow down.svg" alt="arrow" />
              </div>
              <div className="accordion-content">
                <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-title">
                <h4>When can I use Banking App services?</h4>
                <img src="images/uppgift HTML & CSS/arrow.svg" alt="arrow" />
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-title">
                <h4>Can I create my own password that is easy for me to remember?</h4>
                <img src="images/uppgift HTML & CSS/arrow.svg" alt="arrow" />
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-title">
                <h4>What happens if I forget or lose my password?</h4>
                <img src="images/uppgift HTML & CSS/arrow.svg" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page6;
