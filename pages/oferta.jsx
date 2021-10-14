import Head from 'next/head';
import LazyShow from './LazyShow';
import { Link, animateScroll as scroll } from "react-scroll";
import React, { useEffect, useState } from "react";
import Navigation from '../components/_nav';
import Footer from '../components/_footer';
import Cta from '../components/_cta';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';


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
      <section className="py-20">
  <div className="h-64 mb-12 lg:h-144">
  
    <img className="object-cover w-full h-full bg-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/lublin_realizacja.jpeg" alt="" />
  
  </div>
  <div className="container px-4 mx-auto">
    <div className="max-w-2xl mx-auto mb-6 text-center">
      <h2 className="text-3xl font-bold lg:text-5xl text-primary font-heading">Bremer Sp. z o.o. dla 7R w Lublinie.</h2>
    </div>
  </div>
  <div className="container px-4 mx-auto">
    <div className="max-w-2xl mx-auto">
      <p className="mb-6 text-3xl font-bold text-center lg:text-left lg:text-5xl font-heading">
      <CountUp start={35550} end={36000} duration={1.75} delay={0}>
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
            <span ref={countUpRef} />
          </VisibilitySensor>
        )}
      </CountUp><span className="ml-2 text-lg text-gray-400">m2</span>
      </p>
      <p className="mb-6 font-serif text-lg font-light text-gray-500">Dwie hale o łącznej powierzchni ok. 36 000 m2.</p>
      <p className="mb-6 font-serif text-lg font-light text-gray-500">Zakres prac montażowych: ułożenie folii paroizolacyjnej gr. 0,2mm, montaż termoizolacji w postaci PIR gr. 8cm i 16cm oraz membrany PCV gr. 1,20mm (Fatrafol) wraz z kołkowaniem, obróbkami, montażem wpustów dachowych i przelewów awaryjnych.</p>
      
    </div>
  </div>
</section>
      {/* <section className="overflow-hidden">
  <nav className="relative flex items-center justify-between px-6 py-6 bg-white">
    <a className="text-3xl font-bold leading-none" href="#">
      <img className="h-12" src="atis-assets/logo/atis/atis-color-black.svg" alt="" width="auto" />
    </a>
    <div className="lg:hidden">
      <button className="flex items-center p-3 text-gray-400 navbar-burger">
        <svg className="block w-4 h-4 fill-current" viewbox="0 0 20 20">
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>
    <ul className="absolute hidden transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
      <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Start</a></li>
      <li className="text-gray-300">
        <svg className="w-4 h-4 current-fill" fill="none" viewbox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
        </svg>
      </li>
      <li><a className="text-sm font-bold text-green-600" href="#">About Us</a></li>
      <li className="text-gray-300">
        <svg className="w-4 h-4 current-fill" fill="none" viewbox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
        </svg>
      </li>
      <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Services</a></li>
      <li className="text-gray-300">
        <svg className="w-4 h-4 current-fill" fill="none" viewbox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
        </svg>
      </li>
      <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Platform</a></li>
      <li className="text-gray-300">
        <svg className="w-4 h-4 current-fill" fill="none" viewbox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
        </svg>
      </li>
      <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Testimonials</a></li>
    </ul>
    <a className="hidden px-6 py-2 text-sm font-bold text-white transition duration-200 bg-pink-600 lg:block hover:bg-pink-700 rounded-l-xl rounded-t-xl" href="#">Contact Us</a>
  </nav>
  <div className="relative pt-20 pb-24 overflow-hidden bg-gray-50 lg:py-40">
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap -mx-4">
        <div className="flex items-center w-full px-4 lg:w-1/2">
          <div className="w-full text-center lg:text-left">
            <img className="absolute inset-0 hidden w-full lg:block" src="atis-assets/background/lines.svg" alt="" />
            <div className="relative max-w-md mx-auto lg:mx-0">
              <h2 className="mb-3 text-4xl font-bold lg:text-5xl font-heading">
                <span>Build &amp; Launch without</span>
                <span className="text-purple-600">problems</span>
              </h2>
            </div>
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <p className="mb-6 leading-loose text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
              <div><a className="inline-block w-full px-6 py-2 mb-3 font-semibold leading-loose text-white transition duration-200 bg-purple-600 lg:mb-0 lg:mr-3 lg:w-auto hover:bg-purple-700 rounded-l-xl rounded-t-xl" href="#">Get Started</a><a className="inline-block w-full px-6 py-2 font-semibold leading-loose transition duration-200 bg-white lg:w-auto hover:bg-gray-50 rounded-l-xl rounded-t-xl" href="#">How it works</a></div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 lg:w-1/2">
          <img className="top-0 object-cover w-full h-full my-12 lg:absolute lg:my-0 lg:w-1/2 rounded-3xl lg:rounded-none" src="https://images.unsplash.com/photo-1572521165329-b197f9ea3da6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div className="relative z-50 hidden navbar-menu">
    <div className="fixed inset-0 bg-gray-800 opacity-25 navbar-backdrop"></div>
    <nav className="fixed top-0 bottom-0 left-0 flex flex-col w-5/6 max-w-sm px-6 py-6 overflow-y-auto bg-white border-r">
      <div className="flex items-center mb-8">
        <a className="mr-auto text-3xl font-bold leading-none" href="#">
          <img className="h-10" src="atis-assets/logo/atis/atis-color-black.svg" alt="" width="auto" />
        </a>
        <button className="navbar-close">
          <svg className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-500" fill="none" viewbox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div>
        <ul>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 rounded hover:bg-purple-50 hover:text-purple-600" href="#">Start</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 rounded hover:bg-purple-50 hover:text-purple-600" href="#">About Us</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 rounded hover:bg-purple-50 hover:text-purple-600" href="#">Services</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 rounded hover:bg-purple-50 hover:text-purple-600" href="#">Platform</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 rounded hover:bg-purple-50 hover:text-purple-600" href="#">Testimonials</a></li>
        </ul>
      </div>
      <div className="mt-auto">
        <div className="pt-6"><a className="block px-4 py-3 mb-3 text-xs font-semibold leading-none leading-loose text-center bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl" href="#">Sign Up</a><a className="block px-4 py-3 mb-2 text-xs font-semibold leading-loose text-center text-white bg-pink-600 hover:bg-pink-700 rounded-l-xl rounded-t-xl" href="#">Log In</a></div>
        <p className="my-4 text-xs text-center text-gray-400">
          <span>&copy; 2020 All rights reserved.</span>
        </p>
        <div className="text-center">
          <a className="inline-block px-1" href="#">
            <img src="atis-assets/social/facebook-purple.svg" alt="" />
          </a>
          <a className="inline-block px-1" href="#">
            <img src="atis-assets/social/twitter-purple.svg" alt="" />
          </a>
          <a className="inline-block px-1" href="#">
            <img src="atis-assets/social/instagram-purple.svg" alt="" />
          </a>
        </div>
      </div>
    </nav>
  </div>
</section> */}
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
                <dd className="text-3xl font-bold sm:text-5xl 2xl:text-7xl">
                  <CountUp start={35550} end={36000} duration={1.75} delay={0}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </dd>
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
        {/* <div className="sticky hidden h-20 mb-2 ml-auto bg-white border-l-2 shadow-2xl w-28 lg:block border-primary bottom-2">
          <Link href="#link"><a><img alt="certyfikat VCS" className="w-20 h-auto px-3 pt-2 mx-auto" src="https://damansdak.s3.eu-central-1.amazonaws.com/vcs.png" layout="fill" /></a></Link>
          <p className="px-3 mt-1 text-xs leading-3 text-center"><a href="#link">Certyfikowana<br></br> firma</a></p>
        </div> */}
        <LazyShow>
          <Footer />
        </LazyShow>
      </div>
    </>
  );
};

export default Home;
