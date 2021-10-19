import Head from 'next/head';
import LazyShow from '../LazyShow';
import { Link, animateScroll as scroll } from "react-scroll";
import React, { useEffect, useState } from "react";
import Navigation from '/components/_nav';
import Footer from '/components/_footer';
import Cta from '/components/_cta';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import Gallery from '/components/gallery/_gallery_litwa';


const Home = () => {
  const [small, setSmall] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 20)
      );
    }
  }, []);
  const [offerOne, setOfferOne] = useState(false);
  const toggleOfferOne = () => setOfferOne(!offerOne);

  const [offerTwo, setOfferTwo] = useState(false);
  const toggleOfferTwo = () => setOfferTwo(!offerTwo);

  return (
    <>
      <Navigation />
      <section className="lg:pt-20">
        <div className="relative flex items-center py-36 text-center bg-cover overflow-hidden">
          <img className="absolute bg-center object-cover w-full h-full" src="https://damansdak.s3.eu-central-1.amazonaws.com/litwa/litwa4.jpg" alt="" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative max-w-4xl mx-auto px-4">
            <p className="text-md text-white text-center lg:text-left font-light font-serif">REALIZACJA:</p>
            <h2 className="text-3xl  lg:text-5xl text-center lg:text-left text-white font-heading">Wystartowaliśmy z nową realizacją na terenie Litwy</h2>
          </div>
        </div>
        {/* <div className="relative h-64 lg:h-144">
          <img className="object-cover w-full h-full bg-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/lublin_realizacja.jpeg" alt="" />
          <div className="absolute inset-0 top-1/2 container px-4 mx-auto">
            <div className="max-w-2xl mx-auto mb-6 text-center">
              <h2 className="text-3xl  lg:text-5xl text-primary font-heading">Bremer Sp. z o.o. dla 7R w Lublinie</h2>
            </div>
          </div>
        </div> */}
        <div className="py-4 bg-pattern mb-6"></div>
        <LazyShow>
          <div className="mx-auto">
            <div className="lg:w-3/5 sm:px-0 sm:w-4/5 px-8 mx-auto">
              {/* <p className="mb-6 text-3xl  lg:text-left lg:text-5xl font-heading">
                <CountUp start={33550} end={34000} duration={1.75} delay={0}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp><span className="ml-2 text-lg text-gray-400">m²</span>
              </p> */}
              <p className="mb-6 font-serif text-lg font-light text-gray-500">Więcej szczegółów na temat projektu wkrótce.</p>
              {/* <p className="mb-6 font-serif text-lg font-light text-gray-500">Kajima Poland Sp. z o.o. dla P3 Logistigs w Błoniu k. W-wy: dwie hale o łącznej powierzchni ok. 34 000 m². Zakres prac: ułożenie folii paroizolacyjnej gr. 0,2mm, montaż termoizolacji w postaci wełny mineralnej w dwóch warstwach 8cm i 5cm, oraz membrany TPO Texsalan gr. 1,20mm wraz z kołkowaniem, obróbkami, montażem wpustów dachowych i przelewów awaryjnych;</p> */}

            </div>
          </div>
        </LazyShow>
      </section>
      <Gallery />
      <LazyShow>
        <Cta />
      </LazyShow>
      {/* <div className="sticky hidden h-20 mb-2 ml-auto bg-white border-l-2 shadow-2xl w-28 lg:block border-primary bottom-2">
          <Link href="#link"><a><img alt="certyfikat VCS" className="w-20 h-auto px-3 pt-2 mx-auto" src="https://damansdak.s3.eu-central-1.amazonaws.com/vcs.png" layout="fill" /></a></Link>
          <p className="px-3 mt-1 text-xs leading-3 text-center"><a href="#link">Certyfikowana<br></br> firma</a></p>
        </div> */}
      <LazyShow>
        <Footer />
      </LazyShow>

    </>
  );
};

export default Home;
