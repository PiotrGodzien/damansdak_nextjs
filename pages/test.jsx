import React, { useEffect, useState } from "react";

const Test = () => {

    const [offerOne, setOfferOne] = useState(false);
    const toggleOfferOne = () => setOfferOne(!offerOne);

    const [offerTwo, setOfferTwo] = useState(false);
    const toggleOfferTwo = () => setOfferTwo(!offerTwo);


  return (
    <>
    <div className="">
    <div className="flex flex-col space-y-40 text-4xl font-bold">
    <div>Beton</div>
    <div onMouseEnter={toggleOfferOne} onMouseLeave={toggleOfferOne}>
    Blacha
    </div>
    <div onMouseEnter={toggleOfferTwo} onMouseLeave={toggleOfferTwo}>
    Renowacja
    </div>
</div>
    <div className="relative z-10">
      <img className="" src="http://verdepro.pl/dach_oferta.jpg" alt="" />
      <img className={offerOne ? 'absolute inset-0' : 'hidden'} src="http://verdepro.pl/dach_oferta2.jpg" alt="" />
      <img className={offerTwo ? 'absolute inset-0' : 'hidden'} src="http://verdepro.pl/dach_oferta.jpg" alt="" />
    </div>
      
    </div>
    </>
  );
};

export default Test;
