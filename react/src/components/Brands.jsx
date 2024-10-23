import React from 'react';

const Brands = () => {
  return (
    <section id="brands">
      <div className="container2"> {/* class => className */}
        <div id="brand-1" className="brand-box"> {/* class => className */}
          <img src="images/uppgift HTML & CSS/brand-1.svg" alt="Brand 1" /> {/* alt attribut fixat */}
        </div>
        <div id="brand-2" className="brand-box"> {/* class => className */}
          <img src="images/uppgift HTML & CSS/brand-2.svg" alt="Brand 2" />
        </div>
        <div id="brand-3" className="brand-box"> {/* class => className */}
          <img src="images/uppgift HTML & CSS/brand-3.svg" alt="Brand 3" />
        </div>
        <div id="brand-4" className="brand-box"> {/* class => className */}
          <img src="images/uppgift HTML & CSS/brand-4.svg" alt="Brand 4" />
        </div>
        <div id="brand-5" className="brand-box"> {/* class => className */}
          <img src="images/uppgift HTML & CSS/brand-5.svg" alt="Brand 5" />
        </div>
        <div id="brand-6" className="brand-box"> {/* class => className */}
          <img src="images/uppgift HTML & CSS/brand-6.svg" alt="Brand 6" />
        </div>
      </div>
    </section>
  );
}

export default Brands;
