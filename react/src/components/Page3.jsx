import React from 'react'
import Iphone1 from '../images/iPhone 12 Pro rad1.svg'
import Iphonemitt from '../images/iPhone 12 Pro mitt.svg'
import Iphone2 from '../images/iPhone 12 Pro rad2.svg'

const Page3 = () => {
  return (
    <section id="page3">
      <div className="container4" id="p3">
        <div className="text-item">
          <h2>How Does It Work?</h2>
        </div>

        <div id="three-iphones">
          <div className="image-container" id="phone1">
            <img src={Iphone1} alt="phone1" />
          </div>

          <div className="image-container" id="iphone2">
            <img src={Iphonemitt} alt="phone2" />
          </div>

          <div className="image-container" id="phone3">
            <img src={Iphone2} alt="phone3" />
          </div>
        </div>

        <div className="text-item" id="transactions">
          <h3 id="transfer">Latest transaction history</h3>
          <p>
            Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page3
