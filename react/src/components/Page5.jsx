import React from 'react';

const Page5 = () => {
  return (
    <section id="page5">
      <div className="container6">
        <div className="clients">
          <h2>Clients are <br />Loving Our App</h2>
        </div>
        <div className="clients-grid">
          <div className="clients-card">
            <div className="quote-icon">
              <img src="images/uppgift HTML & CSS/quotes.svg" alt="quote-icon" />
            </div>
            <div className="stars">
              <img src="images/uppgift HTML & CSS/rating.svg" alt="stars" />
            </div>
            <p>
              Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.
            </p>
            <div className="client-info">
              <img src="images/uppgift HTML & CSS/Fannie.svg" alt="Fannie Summers" className="client-photo" />
              <div>
                <h4>Fannie Summers</h4>
                <p>Designer</p>
              </div>
            </div>
          </div>

          <div className="clients-card">
            <div className="quote-icon">
              <img src="images/uppgift HTML & CSS/quotes.svg" alt="quote-icon" />
            </div>
            <div className="stars">
              <img src="images/uppgift HTML & CSS/rating (1).svg" alt="stars" />
            </div>
            <p>
              Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.
            </p>
            <div className="client-info">
              <img src="images/uppgift HTML & CSS/Albert.svg" alt="Albert Flores" className="client-photo" />
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

export default Page5;
