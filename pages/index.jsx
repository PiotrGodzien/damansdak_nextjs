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
    <div className="">

      <Head>
        <title>Damansdak – dachy płaskie w technologii membran PVC i TPO</title>
      </Head>
      <main className="relative bg-gray-50">
        <div className="relative flex flex-col h-screen text-white bg-center bg-cover bg-herobanner">
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-black"></div>
          {/* <div className="absolute inset-0 z-0 bg-black opacity-30"></div> */}
          < Navigation />
          <div className="relative z-30 my-auto">
            <div className="flex flex-col-reverse items-center justify-start px-8 mx-auto sm:w-4/5 lg:w-3/5 md:flex-row">
              <LazyShow>
                <div className="items-center mt-16 2xl:mt-24 space-y-7 sm:space-y-8 lg:space-y-16">
                  <h1 className="text-4xl font-bold sm:text-5xl 2xl:text-8xl">Dachy płaskie w technologii membran PVC i TPO</h1>
                  <p className="text-xl sm:text-3xl">Niezależnie od projektu, nasz zespół profesjonalistów jest gotowy, aby urzeczywistnić Twoje plany</p>
                  <div className="lg:flex lg:space-x-8">
                    <button className="flex items-center justify-center px-16 py-4 text-white transition duration-150 ease-in-out bg-primary hover:bg-black">
                      <p className="sm:text-2xl">kontakt</p>
                    </button>
                    <Link
                      to="target"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={900}
                    >
                      <button className="items-center justify-center hidden px-16 py-4 text-center transition duration-150 ease-in-out border-2 border-white lg:flex hover:bg-white hover:text-primary">
                        <p className="lg:text-2xl"><a>więcej</a></p>
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
          <div className="flex pt-16 pb-8 2xl:py-32" id="target">
            <div className="px-8 mx-auto lg:px-0 sm:w-4/5 lg:w-3/5">
              <h1 className="text-3xl font-bold sm:text-5xl 2xl:text-7xl">Damansdak Polska</h1>
              <p className="my-4 text-gray-400 lg:my-12 sm:text-xl lg:text-3xl">DamansDak B.V.
                Jesteśmy szybko rozwijającą się firmą działającą na rynku od 2013 roku.
                Wykonujemy dachy płaskie w technologii membran PVC i TPO.
                Specjalizujemy się w wykonywaniu dachów nowych,
                jak również renowacją dachów starych o powierzchni od-
                1.000m2 do 200.000m2</p>
              <div className="flex-col items-baseline text-center bg-opacity-30 justify-evenly">
                {/* <LazyShow>
                  <div className="flex items-center">

                    <div className="w-3/5">
                      <p className="text-3xl font-bold sm:text-5xl 2xl:text-7xl">
                        <CountUp start={300} end={453} duration={1.75} delay={0}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </p>
                      <div className="text-gray-400 sm:text-xl lg:text-3xl">projektów</div>
                    </div>


                    <div className="w-3/5">
                      <p className="text-3xl font-bold sm:text-5xl 2xl:text-7xl">
                        <CountUp start={3500000} end={3553424} duration={1.75} delay={0}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </p>
                      <div className="text-gray-400 sm:text-xl lg:text-3xl">m2</div>
                    </div>

                  </div>
                </LazyShow> */}
                <div className=""></div>
              </div>
            </div>
          </div>
        </LazyShow>
        {/* O NAS END */}
        {/* OFERTA */}
        {/* <LazyShow>
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
                      <img src="https://verdepro.pl/betonowe.png" alt="" />
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
                      <img src="https://verdepro.pl/images/stalowe.png" alt="" />
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
                      <img src="https://verdepro.pl/img/renowacja.png" alt="" />
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
            <img src="http://verdepro.pl/lublin_realizacja.jpeg" alt="" className="object-cover w-full h-full" />
            <img className={offerOne ? 'absolute inset-0 w-full h-full object-cover' : 'hidden'} src="http://verdepro.pl/ruda_slaska_realizacja.jpeg" alt="" />
            <img className={offerTwo ? 'absolute inset-0 w-full h-full object-cover' : 'hidden'} src="http://verdepro.pl/blonie_realizacja.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
    </LazyShow> */}
        <section className="box-border relative mx-auto leading-7 text-gray-900 bg-white lg:py-16">
          <LazyShow>
            <div className="w-4/5 px-8 py-8 mx-auto lg:mb-16 lg:w-3/5 sm:px-0">
              <div className="text-3xl font-bold lg:w-1/3 sm:text-5xl 2xl:text-7xl">Oferta</div>
              <p className="text-gray-400 lg:w-10/12 sm:text-xl lg:text-3xl">Dachy płaskie w technologii membran PVC i TPO.</p>
            </div>
          </LazyShow>
          <div className="relative z-40 grid px-8 mx-auto xl:flex sm:w-11/12 2xl:w-3/5 sm:px-0 lg:grid-cols-3 gap-x-8 items-strech">
            <LazyShow>
              <div className="px-8 py-12 transition duration-300 ease-out bg-white border-t-4 2xl:py-20 border-primary hover:bg-black hover:text-white">
                <h3 className="text-3xl font-bold sm:text-4xl">Dachy betonowe</h3>
                <p className="pr-6 mt-4 text-gray-400 lg:text-xl">Wykonywanie dachów betonowych.</p>
                <div className="">
                  <button className="flex items-center justify-center mt-12 mr-auto lg:text-xl">
                    zobacz więcej
                    <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                      <svg className="absolute w-12 h-12" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z" fill="currentColor" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </LazyShow>
            <LazyShow>
              <div className="flex-col items-end px-8 py-12 transition duration-300 ease-out bg-white border-t-4 2xl:py-20 border-primary hover:bg-black hover:text-white">
                <h3 className="text-3xl font-bold sm:text-4xl">Dachy stalowe</h3>
                <p className="pr-6 mt-4 text-gray-400 lg:text-xl">Wykonywanie dachów stalowych.</p>
                <div className="">
                  <button className="flex items-center justify-center mt-12 mr-auto lg:text-xl">
                    zobacz więcej
                    <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                      <svg className="absolute w-12 h-12" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z" fill="currentColor" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </LazyShow>
            <LazyShow>
              <div className="flex-col items-end px-8 py-12 transition duration-300 ease-out bg-white border-t-4 2xl:py-20 border-t-primary hover:bg-black hover:text-white">
                <h3 className="text-3xl font-bold sm:text-4xl">Renowacja dachów</h3>
                <p className="pr-6 mt-4 text-gray-400 lg:text-xl">Renopwacja dachów przemysłowych.</p>
                <div className="">
                  <button className="flex items-center justify-center mt-12 mr-auto lg:text-xl">
                    zobacz więcej
                    <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                      <svg className="absolute w-12 h-12" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z" fill="currentColor" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </LazyShow>
          </div>
        </section>
        {/* OFERTA END */}
        {/* CTA */}
        <LazyShow>
          <div className="py-8 lg:py-32 bg-gray-50">
            <div className="relative z-40 items-center px-8 mx-auto sm:px-0 lg:justify-center sm:flex sm:w-4/5 lg:w-3/5">
              <div className="text-2xl font-bold sm:text-3xl lg:text-5xl sm:w-2/3">Masz pytania? Zapraszamy do kontaktu z nami.</div>
              <button className="flex items-center justify-center px-16 py-4 mt-4 text-white transition duration-150 ease-in-out sm:mt-0 bg-primary hover:bg-black">
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
                <img src="http://verdepro.pl/lublin_realizacja.jpeg" alt="" className="" />
                <div className="absolute bottom-0 right-0 grid items-center p-2 mx-auto bg-black sm:w-2/3 lg:grid-cols-2 lg:p-8 sm:px-8 text-md">
                  <p className="text-xs text-center text-white sm:text-base lg:px-8 2xl:text-2xl">Bremer Sp. z o.o. dla 7R w Lublinie: dwie hale o łącznej powierzchni ok. 36 000 m2</p>
                  <div className="z-40 hidden mx-auto text-white transition duration-150 ease-in-out hover:text-primary lg:block">
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
                <img src="http://verdepro.pl/ruda_slaska_realizacja.jpeg" alt="" className="" />
                <div className="absolute bottom-0 right-0 grid items-center p-2 mx-auto bg-black sm:w-2/3 lg:grid-cols-2 lg:p-8 sm:px-8 text-md">
                  <p className="text-xs text-center text-white sm:text-base lg:px-8 2xl:text-2xl">Kajima Poland Sp. z o.o. dla Panattoni w Rudzie Śląskiej: dwie hale o łącznej powierzchni ok. 60 000 m2</p>
                  <div className="z-40 hidden mx-auto text-white transition duration-150 ease-in-out hover:text-primary lg:block">
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
                <img src="http://verdepro.pl/blonie_realizacja.jpeg" alt="" className="" />
                <div className="absolute bottom-0 right-0 grid items-center p-2 mx-auto bg-black sm:w-2/3 lg:grid-cols-2 lg:p-8 sm:px-8 text-md">
                  <p className="text-xs text-center text-white sm:text-base lg:px-8 2xl:text-2xl">Kajima Poland Sp. z o.o. dla P3 Logistigs w Błoniu k. W-wy: dwie hale o łącznej powierzchni ok. 34 000 m2</p>
                  <div className="z-40 hidden mx-auto text-white transition duration-150 ease-in-out hover:text-primary lg:block">
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
        <div className="sticky hidden h-20 mb-2 ml-auto bg-white border-l-2 shadow-2xl w-28 lg:block border-primary bottom-2">
          <Link href="#link"><a><img className="w-20 h-auto px-3 pt-2 mx-auto" src="http://verdepro.pl/vcs.png" /></a></Link>
          <p className="px-3 mt-1 text-xs leading-3 text-center"><a href="#link">Certyfikowana<br></br> firma</a></p>
        </div>
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
