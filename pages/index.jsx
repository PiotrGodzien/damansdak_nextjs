import Head from 'next/head';
import LazyShow from './LazyShow';
import { Link, animateScroll as scroll } from "react-scroll";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from 'framer-motion';
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
<div className="">

  <Head>
    <title>Damansdak – dachy płaskie w technologii membran PVC i TPO</title>
  </Head>
  <main className="relative bg-gray-50">
    <div className="relative flex flex-col h-screen text-white bg-center bg-cover bg-herobanner">
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-black"></div>
      {/* <div className="absolute inset-0 z-0 bg-black opacity-30"></div> */}
      < Navigation/>
      <div className="relative z-30 my-auto">
        <div className="flex flex-col-reverse items-center justify-start px-8 mx-auto sm:w-4/5 lg:w-3/5 md:flex-row">
          <LazyShow>
          <div className="items-center mt-24 space-y-7 sm:space-y-8 lg:space-y-16">
            <h1 className="text-4xl font-bold sm:text-5xl 2xl:text-8xl">Dachy płaskie w technologii membran PVC i TPO</h1>
            <p className="text-xl sm:text-3xl">Niezależnie od projektu, nasz zespół profesjonalistów jest gotowy, aby urzeczywistnić Twoje plany</p>
            <div className="lg:flex lg:space-x-8">
              <button className="flex items-center justify-center px-16 py-4 text-white bg-primary">
                <p className="sm:text-2xl">kontakt</p>
              </button>
              <Link
                to="target"
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}
              >
                <button className="items-center justify-center hidden px-16 py-4 text-center border-2 border-white lg:flex">
                  <p className="lg:text-2xl"><a href="" className="">więcej</a></p>
                </button>
              </Link>
            </div>
          </div>
          </LazyShow>
        </div>
      </div>
    </div>
    <LazyShow>
    {/* O NAS */}
    <div className="flex py-8 lg:py-32" id="target">
      <div className="px-8 mx-auto lg:px-0 sm:w-4/5 lg:w-3/5">
        <h1 className="text-3xl font-bold sm:text-5xl 2xl:text-7xl">Damansdak Polska</h1>
        <p className="my-4 text-gray-400 lg:my-12 sm:text-xl lg:text-3xl">DamansDak B.V.
          Jesteśmy szybko rozwijającą się firmą działającą na rynku od 2013 roku.
          Wykonujemy dachy płaskie w technologii membran PVC i TPO.
          Specjalizujemy się w wykonywaniu dachów nowych,
          jak również renowacją dachów starych o powierzchni od-
          1.000m2 do 200.000m2</p>
        <div className="flex-col items-baseline text-center bg-opacity-30 justify-evenly">
        <LazyShow>
          <div className="flex items-center">
          
            <div className="w-3/5">
              <p className="text-3xl font-bold sm:text-5xl 2xl:text-7xl">
                <CountUp start={300} end={453} duration={2.75} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </p>
              <div className="text-gray-400 sm:text-xl lg:text-3xl">projektów</div>
            </div>
           
            
            <div className="w-3/5">
              <p className="text-3xl font-bold sm:text-5xl 2xl:text-7xl">
                <CountUp start={3500000} end={3553424} duration={2.75} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </p>
              <div className="text-gray-400 sm:text-xl lg:text-3xl">m2</div>
            </div>
           
          </div>
          </LazyShow>
          <div className=""></div>
        </div>
      </div>
    </div>
    </LazyShow>
    {/* O NAS END */}
    {/* OFERTA */}
    <LazyShow>
    <section className="relative leading-7 text-gray-900 bg-white border-solid lg:py-32">
      <div className="box-border mx-auto border-solid sm:w-4/5 lg:w-3/5">
        <div className="flex flex-col items-center leading-7 text-gray-900 border-0 border-gray-200 lg:flex-row">
          <div className="box-border flex flex-col justify-center w-full h-full p-8 text-gray-900 border-solid lg:w-1/2 md:p-16 lg:p-0 lg:pr-20">
            <h2 className="m-0 text-3xl font-bold leading-tight tracking-tight text-left text-black sm:text-5xl 2xl:text-7xl">Oferta</h2>
            <p className="mt-2 text-left text-gray-400 border-0 border-gray-200 sm:text-xl lg:text-3xl">Dachy płaskie w technologii membran PVC i TPO.</p>
            <div className="z-30 grid items-center mt-8 leading-7 border-0 border-gray-200 sm:mt-10 lg:mt-12">
              <Link href="/link"><a href="" className="">
                <div className="box-border flex items-center pt-6 pb-6 text-gray-900 transition duration-300 ease-in-out border-solid hover:bg-gray-100">
                  <div className="flex items-center justify-center w-20 h-20 p-6 leading-7 border-0 border-gray-200 sm:w-28 sm:h-28 bg-primary">
                    <p className="box-border m-0 text-xl text-white border-solid">
                      <img src="https://verdepro.pl/concrete1.png" alt="" />
                    </p>
                  </div>
                  <div className="flex-1 ml-6 leading-7 border-0 border-gray-200">
                    <h3 className="box-border m-0 font-semibold leading-tight tracking-tight text-black uppercase border-solid sm:text-xl lg:text-3xl">Dachy betonowe</h3>
                    <p className="box-border hidden mt-2 text-2xl leading-normal text-gray-400 border-solid sm:block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
              </a></Link>
              <a href="link" className="">
                <div onMouseEnter={toggleOfferOne} onMouseLeave={toggleOfferOne} className="box-border flex items-center pt-6 pb-6 text-gray-900 transition duration-300 ease-in-out border-solid hover:bg-gray-100">
                  <div className="flex items-center justify-center w-20 h-20 p-6 leading-7 border-0 border-gray-200 lg:w-28 lg:h-28 bg-primary">
                    <p className="box-border m-0 text-xl text-white border-solid">
                      <img src="https://verdepro.pl/roof.png" alt="" />
                    </p>
                  </div>
                  <div className="flex-1 ml-6 leading-7 border-0 border-gray-200">
                    <h3 className="box-border m-0 font-semibold leading-tight tracking-tight text-black uppercase border-solid sm:text-xl lg:text-3xl">dachy stalowe</h3>
                    <p className="box-border hidden mt-2 text-2xl leading-normal text-gray-400 border-solid sm:block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
              </a>
              <a href="link" className="">
                <div onMouseEnter={toggleOfferTwo} onMouseLeave={toggleOfferTwo} className="box-border flex items-center pt-6 pb-6 text-gray-900 transition duration-300 ease-in-out border-solid hover:bg-gray-100">
                  <div className="flex items-center justify-center w-20 h-20 p-6 leading-7 border-0 border-gray-200 lg:w-28 lg:h-28 bg-primary">
                    <p className="box-border m-0 text-xl text-white border-solid">
                      <img src="https://verdepro.pl/hammer.png" alt="" />
                    </p>
                  </div>
                  <div className="flex-1 ml-6 leading-7 border-0 border-gray-200">
                    <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-black uppercase border-solid sm:text-xl lg:text-3xl">renowacja dachów</h3>
                    <p className="box-border hidden mt-2 text-2xl leading-normal text-gray-400 border-solid sm:block">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="absolute right-0 hidden w-1/2 h-full overflow-hidden lg:block">
            <img src="http://verdepro.pl/dach_wiatrak.jpg" alt="" className="object-cover w-full h-full" />
            <img className={offerOne ? 'absolute inset-0 w-full h-full object-cover' : 'hidden'} src="http://verdepro.pl/oferta3.jpg" alt="" />
            <img className={offerTwo ? 'absolute inset-0 w-full h-full object-cover' : 'hidden'} src="http://verdepro.pl/oferta2.jpg" alt="" />
          </div>
          {/* <div className="relative w-full h-full overflow-hidden leading-7 text-gray-900 border-0 border-gray-200 lg:w-1/2">
    <img src="https://verdepro.pl/dach_oferta.jpg" className="object-cover w-full h-full" />
    <img className={offerOne ? 'absolute inset-0' : 'hidden'} src="http://verdepro.pl/dach_oferta_blacha1.jpg" alt="" />
    <img className={offerTwo ? 'absolute inset-0' : 'hidden'} src="http://verdepro.pl/dach_oferta3.jpg" alt="" />
  </div> */}
        </div>
      </div>
    </section>
    </LazyShow>
    {/* OFERTA END */}
    {/* CTA */}
    <LazyShow>
    <div className="py-8 lg:py-32 bg-gray-50">
      <div className="items-center px-8 mx-auto sm:px-0 lg:justify-center sm:flex sm:w-4/5 lg:w-3/5">
        <div className="text-2xl font-bold sm:text-3xl lg:text-5xl sm:w-2/3">Masz pytania? Zapraszamy do kontaktu z nami.</div>
        <button className="flex items-center justify-center px-16 py-4 mt-4 text-white sm:mt-0 bg-primary">
          <p className="sm:text-2xl">kontakt</p>
        </button>
      </div>
    </div>
    </LazyShow>
    {/* CTA END */}
    {/* REALIZACJE */}
    <div className="py-4 bg-white lg:py-16">
      <div className="px-8 mx-auto sm:w-4/5 sm:px-0 lg:w-3/5">
        <div className="w-1/3 pb-8 text-3xl font-bold sm:pb-16 sm:text-5xl 2xl:text-7xl">Realizacje</div>
      </div>
      
      
      <div className="px-8 mx-auto sm:w-4/5 sm:px-0 lg:w-3/5">
      {/* REALIZACJA 1 */}
      <LazyShow>
        <div className="relative mx-auto mb-8 sm:mb-16">
          <img src="http://verdepro.pl/dach_wiatrak.jpg" alt="" className="" />
          <div className="absolute bottom-0 right-0 grid items-center px-2 mx-auto bg-black lg:w-2/3 lg:grid-cols-2 lg:p-8 sm:px-8 text-md h-1/3">
            <p className="text-center text-white lg:px-8 lg:text-2xl">PROJEKT DSV THOLEN NIDERLADNY 94 209 m2</p>
            <div className="hidden mx-auto text-white lg:block">
              <button className="flex items-center justify-center lg:text-xl">
                zobacz więcej
                <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                  <svg className="absolute w-12 h-12" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z" fill="currentColor" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        </LazyShow>
        {/* REALIZACJA 2 */}
        <LazyShow>
        <div className="relative mx-auto mb-8 sm:mb-16">
          <img src="http://verdepro.pl/oferta3.jpg" alt="" className="" />
          <div className="absolute bottom-0 right-0 grid items-center px-2 mx-auto bg-black lg:w-2/3 lg:grid-cols-2 lg:p-8 sm:px-8 text-md h-1/3">
            <p className="text-center text-white lg:px-8 lg:text-2xl">PROJEKT DSV THOLEN NIDERLADNY 94 209 m2</p>
            <div className="hidden mx-auto text-white lg:block">
              <button className="flex items-center justify-center lg:text-xl">
                zobacz więcej
                <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                  <svg className="absolute w-12 h-12" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z" fill="currentColor" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        </LazyShow>
        {/* REALIZACJA 3 */}
        <LazyShow>
        <div className="relative mx-auto mb-8 sm:mb-16">
          <img src="http://verdepro.pl/oferta2.jpg" alt="" className="" />
          <div className="absolute bottom-0 right-0 grid items-center px-2 mx-auto bg-black lg:w-2/3 lg:grid-cols-2 lg:p-8 sm:px-8 text-md h-1/3">
            <p className="text-center text-white lg:px-8 lg:text-2xl">PROJEKT DSV THOLEN NIDERLADNY 94 209 m2</p>
            <div className="hidden mx-auto text-white lg:block">
              <button className="flex items-center justify-center lg:text-xl">
                zobacz więcej
                <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                  <svg className="absolute w-12 h-12" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z" fill="currentColor" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        </LazyShow>
      </div>
    </div>
    {/* REALIZACJE END */}
    <LazyShow>
    <Cta />
    </LazyShow>
    <LazyShow>
    <Footer />
    </LazyShow>
    {/* LINES START */}
    <div className="absolute inset-0 z-20 justify-center hidden mx-auto sm:flex h-min-full">
      <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
      <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
      <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
      <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
      <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
    </div>
    {/* LINES END */}
  </main >

</div >
  );
};

export default Home;
