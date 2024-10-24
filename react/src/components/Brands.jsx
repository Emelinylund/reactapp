import React from 'react';
import Brand1 from '../images/brand-1.svg'
import Brand2 from '../images/Brand-2.svg'
import Brand3 from '../images/Brand-3.svg'
import Brand4 from '../images/Brand-4.svg'
import Brand5 from '../images/Brand-5.svg'
import Brand6 from '../images/Brand-6.svg'

const Brands = () => {
  return (
    <section id="brands">
      <div className="container2"> 
        <div id="brand-1" className="brand-box"> 
          <img src={Brand1} alt="Brand 1" /> 
        </div>
        <div id="brand-2" className="brand-box"> 
          <img src={Brand2} alt="Brand 2" />
        </div>
        <div id="brand-3" className="brand-box"> 
          <img src={Brand3}alt="Brand 3" />
        </div>
        <div id="brand-4" className="brand-box"> 
          <img src={Brand4} alt="Brand 4" />
        </div>
        <div id="brand-5" className="brand-box"> 
          <img src={Brand5} alt="Brand 5" />
        </div>
        <div id="brand-6" className="brand-box"> 
          <img src={Brand6} alt="Brand 6" />
        </div>
      </div>
    </section>
  );
}

export default Brands;
