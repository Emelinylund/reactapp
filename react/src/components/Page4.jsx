import React from 'react';

const Page4 = () => {
  return (
    <section id="page4">
      <div className="container5" id="p4">
        <div className="p4-flex">
          <div className="item-left">
            <h2>Make your money <br /> transfer simple and clear</h2>
            <ul className="p4-ul-1">
              <li className="p4-li-1">
                <i className="fa-regular fa-circle-check"></i>
                <p>Banking transactions are free for you</p>
              </li>
              <li className="p4-li-1">
                <i className="fa-regular fa-circle-check"></i>
                <p>No monthly cash commission</p>
              </li>
              <li className="p4-li-1">
                <i className="fa-regular fa-circle-check"></i>
                <p>Manage payments and transactions online</p>
              </li>
            </ul>
            <button>Learn more <i className="fa-solid fa-arrow-right"></i></button>
          </div>

          <div className="image-container">
            <img src="images/uppgift HTML & CSS/image send money to.svg" alt="send-diagram" />
          </div>

          <div className="p4-flex">
            <div className="image-container">
              <img src="images/uppgift HTML & CSS/kontaktokort.svg" alt="send-contacts" />
            </div>
            <div className="p4-text">
              <h2>Receive payment from<br /> international bank details</h2>
              <ul className="p4-ul-2">
                <li className="p4-li-2">
                  <div className="icon-holder">
                    <img src="images/uppgift HTML & CSS/credit-card.svg" alt="card-icon" />
                  </div>
                  <p>Manage your payments online.<br /> Mollis congue egestas egestas<br /> fermentum fames.</p>
                </li>
                <li className="p4-li-2">
                  <div className="icon-holder">
                    <img src="images/uppgift HTML & CSS/wallet.svg" alt="wallet-icon" />
                  </div>
                  <p>A elementur and imperdiet enim,<br /> pretium etiam facilisi aenean<br /> quam mauris.</p>
                </li>
              </ul>
              <button>Learn more <i className="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page4;
