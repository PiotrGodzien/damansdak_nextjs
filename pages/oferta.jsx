import Head from 'next/head';
import LazyShow from './LazyShow';
import { Link, animateScroll as scroll } from "react-scroll";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import Navigation from '../components/_nav';
import Footer from '../components/_footer';
import Cta from '../components/_cta';


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
<div classNameName="bg-gray-50">
  <div className="py-16 bg-white sm:py-24">
    <div className="relative flex flex-col bg-white lg:mx-auto lg:max-w-7xl">
      <div className="lg:absolute lg:w-1/2 lg:py-0">
        <div className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
          {/* <div className="absolute inset-y-0 w-full right-1/2 bg-gray-50 rounded-r-3xl lg:right-72"></div> */}
          {/* <svg className="absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
            <defs>
              <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
          </svg> */}
          {/* <img className="absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12" src="https://damansdak.s3.eu-central-1.amazonaws.com/pattern_square.jpg" alt="" /> */}
        </div>
        <div className="max-w-md mx-auto lg:pt-20 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none">
          <div className="relative overflow-hidden py-28 lg:py-44">
            <img className="absolute inset-0 object-cover w-full h-full" src="https://damansdak.s3.eu-central-1.amazonaws.com/lublin_realizacja.jpeg" alt="" />
            <div className="absolute inset-0 mix-blend-multiply bg-primary "></div>
            {/* <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90"></div> */}
            <div className="relative px-8">
                <div className="relative text-lg font-medium text-white md:flex-grow">
                  <h2 className="relative w-3/4 mx-auto text-4xl font-bold tracking-tight text-center text-white sm:text-5xl">
                    Bremer Sp. z o.o. dla 7R w Lublinie
                  </h2>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-2xl px-4 mx-auto lg:top-24 lg:block lg:sticky lg:left-1/2 sm:px-12">
        <div className="lg:pt-20">
          <div className="mt-6 leading-loose whitespace-pre-wrap lg:space-y-6">
          <p className="overflow-hidden text-xl font-bold text-gray-black 2xl:text-5xl lg:text-3xl overflow-ellipsis">
            Bremer Sp. z o.o. dla 7R w Lublinie.
            </p>
            <p className="text-gray-400 lg:pt-6 lg:text-xl">
            Dwie hale o łącznej powierzchni ok. 36 000 m2.
            </p>
            <p className="pt-4 mt-4 text-gray-400 border-t-2 border-gray-100 lg:pt-6 lg:text-xl">
            Zakres prac montażowych: ułożenie folii paroizolacyjnej gr. 0,2mm, montaż termoizolacji w postaci PIR gr. 8cm i 16cm oraz membrany PCV gr. 1,20mm (Fatrafol) wraz z kołkowaniem, obróbkami, montażem wpustów dachowych i przelewów awaryjnych.
            </p>
          </div>
        </div>
        <div className="">
            <div className="pt-4 mt-4 border-t-2 border-gray-100 lg:pt-6">
              <dt className="text-gray-400 lg:text-xl">Powierzchnia w m2</dt>
              <dd className="text-3xl font-bold sm:text-5xl 2xl:text-7xl">36 000</dd>
            </div>
        </div>
        <div className="hidden mt-8 lg:block">
          <a href="#" className="font-medium text-primary"> Zobacz nasze pozostałe realizacje <span className="ml-1">&rarr;</span> </a>
        </div>
      </div>
    <div className="grid-cols-2 mt-6 space-y-4 lg:space-y-0 lg:grid lg:flex-row lg:mx-auto lg:max-w-7xl">
      <LazyShow>
      <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:pt-4">
        <img src="https://damansdak.s3.eu-central-1.amazonaws.com/lublin_realizacja.jpeg" alt="" />
      </div>
      </LazyShow>
      <div className="sticky top-0 lg:w-1/2"></div>
      <LazyShow>
      <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:pt-4">
        <img src="https://damansdak.s3.eu-central-1.amazonaws.com/lublin_realizacja.jpeg" alt="" />
      </div>
      </LazyShow>
    </div>
    
  </div>
  <LazyShow>
  <Cta />
  </LazyShow>
  <div className="sticky hidden h-20 mb-2 ml-auto bg-white border-l-2 shadow-2xl w-28 lg:block border-primary bottom-2">
    <Link href="#link"><a><img alt="certyfikat VCS" className="w-20 h-auto px-3 pt-2 mx-auto" src="https://damansdak.s3.eu-central-1.amazonaws.com/vcs.png" layout="fill" /></a></Link>
    <p className="px-3 mt-1 text-xs leading-3 text-center"><a href="#link">Certyfikowana<br></br> firma</a></p>
  </div>
  <LazyShow>
    <Footer />
  </LazyShow>
</div>
</>
  );
};

export default Home;
