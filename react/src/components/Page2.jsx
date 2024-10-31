import React from 'react'
import Apppreview from '../images/image.svg'
import Creditcard from '../images/credit-card.svg'
import Shield from '../images/shield.svg'
import Barsgraphic from '../images/bars-graphic.svg'
import Communication from '../images/communication.svg'
import Wallet from '../images/wallet.svg'
import Happy from '../images/happy.svg'

const Page2 = () => {
  return (
    <section id="page2">
      <div className="container3" id="p2">
        <div className="app-features-content">
          <img src={Apppreview} id="app-preview" alt="app-preview" />
        </div>

        <div id="features-list">
          <div className="features1">
            <h2 id="app-features">App Features</h2>
            <p className="p1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis
              ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
            </p>
          </div>

          <ul className="feature-items">
            <li className="feature-item-li">
              <div className="icon-holder">
                <img src={Creditcard} alt="Easy Payments Icon" />
              </div>
              <div className="text-item">
                <h4>Easy Payments</h4>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </li>

            <li className="feature-item-li">
              <div className="icon-holder">
                <img src={Shield} alt="Data Security Icon" />
              </div>
              <div className="text-item">
                <h4>Data Security</h4>
                <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
              </div>
            </li>

            <li className="feature-item-li">
              <div className="icon-holder">
                <img src={Barsgraphic} alt="Cost Statistics Icon" />
              </div>
              <div className="text-item">
                <h4>Cost Statistics</h4>
                <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
              </div>
            </li>

            <li className="feature-item-li">
              <div className="icon-holder">
                <img src={Communication} alt="Support 24/7 Icon" />
              </div>
              <div className="text-item">
                <h4>Support 24/7</h4>
                <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
              </div>
            </li>

            <li className="feature-item-li">
              <div className="icon-holder">
                <img src={Wallet} alt="Regular Cashback Icon" />
              </div>
              <div className="text-item">
                <h4>Regular Cashback</h4>
                <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
              </div>
            </li>

            <li className="feature-item-li">
              <div className="icon-holder">
                <img src={Happy} alt="Top Standards Icon" />
              </div>
              <div className="text-item">
                <h4>Top Standards</h4>
                <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Page2
