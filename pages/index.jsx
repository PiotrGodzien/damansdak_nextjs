import Head from 'next/head';
import { Link, animateScroll as scroll } from "react-scroll";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from 'framer-motion';


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
        <div className="relative flex flex-col h-screen text-white bg-top bg-cover bg-herobanner">
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-black"></div>
          {/* <div className="absolute inset-0 z-0 bg-black opacity-30"></div> */}
          <div className={`fixed bg-black top-0 z-20 py-6 mx-auto text-2xl w-full text-white ${
          small ? "small" : ""
        }`}>
            <nav className="">
              <div className="flex items-center justify-between w-full px-20 mx-auto ">
                <div className="h-auto w-72">
                  <img src="http://verdepro.pl/logo_damsdak.png" />
                </div>
                <div className="hidden space-x-12 lg:flex">
                  <div className="">Oferta</div>
                  <div className="">O nas</div>
                  <div className="">Realizacje</div>
                  <div className="">Kariera</div>
                  <div className="">Kontakt</div>
                  <div className="flex space-x-4">
                    <img className="border border-white w-11 h-7" src="https://verdepro.pl/germany.png" alt="" />
                    <img className="border border-white w-11 h-7" src="https://verdepro.pl/nederland.png" alt="" />
                    <img className="border border-white w-11 h-7" src="https://verdepro.pl/united.png" alt="" />
                  </div>
                </div>
                {/* <div className="hidden lg:block">
                  <button className="flex items-center justify-center w-full px-10 py-4 text-center text-white bg-primary">
                    <p className="lg:text-2xl">kontakt</p>
                  </button>
                </div> */}
                
                <div className="ml-auto lg:hidden">
                  <svg className="p-3 border border-white" viewBox="0 0 100 80" fill="currentColor" width="40" height="40">
                    <rect width="100" height="6"></rect>
                    <rect y="30" width="100" height="6"></rect>
                    <rect y="60" width="100" height="6"></rect>
                  </svg>
                </div>
              </div>
            </nav>
          </div>
          <div className="relative z-30 my-auto">
            <div className="flex flex-col-reverse items-center justify-start w-3/5 mx-auto md:flex-row">
              <div className="items-center mt-6 p-l space-y-7 md:space-y-2 lg:space-y-16">
                <h1 className="text-3xl font-bold lg:text-8xl">Dachy płaskie w technologii membran PVC i TPO</h1>
                <p className="w-2/3 lg:text-3xl">Niezależnie od projektu, nasz zespół profesjonalistów jest gotowy, aby urzeczywistnić Twoje plany</p>
                <div className="flex w-2/3 space-x-8">
                  <button className="flex items-center justify-center px-16 py-4 text-center text-white bg-primary">
                    <p className="lg:text-2xl">kontakt</p>
                  </button>
                  <Link
                    to="target"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={900}
                  >
                  <button className="flex items-center justify-center px-16 py-4 text-center border-2 border-white">
                    <p className="lg:text-2xl"><a href="" className="">więcej</a></p>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-32" id="target">
          <div className="w-3/5 mx-auto">
            <h1 className="text-3xl font-bold lg:text-8xl">Damansdak Polska</h1>
            <p className="my-12 text-3xl text-gray-400">DamansDak B.V.
              Jesteśmy szybko rozwijającą się firmą działającą na rynku od 2013 roku.
              Wykonujemy dachy płaskie w technologii membran PVC i TPO.
              Specjalizujemy się w wykonywaniu dachów nowych,
              jak również renowacją dachów starych o powierzchni od-
              1.000m2 do 200.000m2</p>
            <div className="flex-col items-baseline text-center bg-opacity-30 justify-evenly">
              <div className="flex items-center">
                <div className="w-3/5">
                  <p className="font-bold lg:text-7xl">
                  <CountUp start={300} end={453} duration={2.75} delay={0}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                  </p>
                  <p className="text-4xl">projektów</p>
                </div>
                <div className="w-3/5">
                  <p className="font-bold lg:text-7xl">
                  <CountUp start={3500000} end={3553424} duration={2.75} delay={0}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                  </p>
                  <p className="text-4xl">m2</p>
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>

<section className="relative py-32 leading-7 text-gray-900 bg-white border-solid">
  <div className="box-border w-3/5 mx-auto border-solid">
    <div className="flex flex-col items-center leading-7 text-gray-900 border-0 border-gray-200 lg:flex-row">
      <div className="box-border flex flex-col justify-center w-full h-full p-8 text-gray-900 border-solid lg:w-1/2 md:p-16 lg:p-0 lg:pr-20">
        <h2 className="m-0 font-bold leading-tight tracking-tight text-left text-black uppercase text-7xl">Nasza oferta</h2>
        <p className="mt-2 text-xl text-left border-0 border-gray-200 sm:text-2xl">Dachy płaskie w technologii membran PVC i TPO.</p>
        <div className="z-40 grid items-center mt-8 leading-7 border-0 border-gray-200 sm:mt-10 lg:mt-12">
        <Link href="/link"><a href="" className="">
          <div className="box-border flex items-start pt-6 pb-6 text-gray-900 transition duration-300 ease-in-out border-solid hover:bg-gray-100">
            <div className="flex items-center justify-center w-20 h-20 p-6 leading-7 border-0 border-gray-200 bg-primary">
              <p className="box-border m-0 text-xl text-white border-solid">
                <img src="https://verdepro.pl/concrete1.png" alt="" />
              </p>
            </div>
            <div className="flex-1 ml-6 leading-7 border-0 border-gray-200">
              <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-black uppercase border-solid sm:text-xl md:text-2xl">dachy betonowe</h3>
              <p className="box-border mt-2 text-base leading-normal text-gray-900 border-solid">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          </a></Link>
          <a href="link" className="">
          <div onMouseEnter={toggleOfferOne} onMouseLeave={toggleOfferOne} className="box-border flex items-start pt-6 pb-6 text-gray-900 transition duration-300 ease-in-out border-solid hover:bg-gray-100">
            <div className="flex items-center justify-center w-20 h-20 p-6 leading-7 border-0 border-gray-200 bg-primary">
              <p className="box-border m-0 text-xl text-white border-solid">
                <img src="https://verdepro.pl/roof.png" alt="" />
              </p>
            </div>
            <div className="flex-1 ml-6 leading-7 border-0 border-gray-200">
              <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-black uppercase border-solid sm:text-xl md:text-2xl">dachy stalowe</h3>
              <p className="box-border mt-2 text-base leading-normal text-gray-900 border-solid">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          </a>
          <a href="link" className="">
          <div onMouseEnter={toggleOfferTwo} onMouseLeave={toggleOfferTwo} className="box-border flex items-start pt-6 pb-6 text-gray-900 transition duration-300 ease-in-out border-solid hover:bg-gray-100">
            <div className="flex items-center justify-center w-20 h-20 p-6 leading-7 border-0 border-gray-200 bg-primary">
              <p className="box-border m-0 text-xl text-white border-solid">
                <img src="https://verdepro.pl/hammer.png" alt="" />
              </p>
            </div>
            <div className="flex-1 ml-6 leading-7 border-0 border-gray-200">
              <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-black uppercase border-solid sm:text-xl md:text-2xl">renowacja dachów</h3>
              <p className="box-border mt-2 text-base leading-normal text-gray-900 border-solid">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          </a>
        </div>
      </div>
      <div className="absolute right-0 w-1/2 h-full overflow-hidden">
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

        <div className="py-32 bg-gray-50">
          <div className="flex items-center justify-center w-3/5 mx-auto">
            <div className="w-2/3 text-4xl font-bold">Masz pytania? Zapraszamy do kontaktu z nami.</div>
            <button className="flex items-center justify-center px-16 py-4 text-center text-white bg-primary">
              <p className="lg:text-2xl">skontaktuj się</p>
            </button>
          </div>
        </div>
        <div className="py-16 bg-white">
          <div className="w-3/5 mx-auto">
            <div className="w-1/3 pb-16 font-bold uppercase text-7xl">realizacje</div>
          </div>

          <div className="w-3/5 mx-auto">
            <div className="relative mx-auto mb-16">
              <img src="http://verdepro.pl/dach_wiatrak.jpg" alt="" className="" />
              <div className="absolute bottom-0 right-0 grid items-center w-2/3 grid-cols-2 p-8 mx-auto bg-black h-1/3">
                <p className="px-8 text-2xl text-center text-white">PROJEKT DSV THOLEN NIDERLADNY 94 209 m2</p>
                <div className="mx-auto text-white">
                  <button className="flex items-center justify-center text-xl">
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


            <div className="relative mx-auto mb-16">
              <img src="http://verdepro.pl/oferta3.jpg" alt="" className="" />
              <div className="absolute bottom-0 right-0 grid items-center w-2/3 grid-cols-2 p-8 mx-auto bg-black h-1/3">
                <p className="px-8 text-2xl text-center text-white">PROJEKT DSV THOLEN NIDERLADNY 94 209 m2</p>
                <div className="mx-auto text-white">
                  <button className="flex items-center justify-center text-xl">
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


            <div className="relative mx-auto mb-16">
              <img src="http://verdepro.pl/oferta2.jpg" alt="" className="" />
              <div className="absolute bottom-0 right-0 grid items-center w-2/3 grid-cols-2 p-8 mx-auto bg-black h-1/3">
                <p className="px-8 text-2xl text-center text-white">PROJEKT DSV THOLEN NIDERLADNY 94 209 m2</p>
                <div className="mx-auto text-white">
                  <button className="flex items-center justify-center text-xl">
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



          </div>
        </div>

        <div className="w-3/5 mx-auto my-16">
          <div className="w-1/3 font-bold uppercase text-7xl">kontakt</div>
            <p className="w-2/3 text-2xl">Jeżeli masz pytania dotyczące naszej oferty lub chcesz zapytać o wycenę zapraszamy do kontaktu z nami. Nasz zespół specjalistów czeka na Ciebie.</p>
        </div>
        <div className="flex items-center w-3/5 mx-auto mb-32 justify-evenly">
          <div className="">
            <div className="">
                <p className="text-3xl font-bold">Przemyśl</p>
                <p className="mt-4 text-xl">ul.  Mierosławskiego 14, 37-700 Przemyśl</p>
                <p className="text-xl">Polska, Podkarpackie</p>
                <button className="flex items-center justify-center mt-4 text-xl underline">
                  <Link href="/"><a>sprawdź dojazd</a></Link>
                </button>
              </div>
              <div className="mt-12">
                <p className="text-3xl font-bold">Warszawa</p>
                <p className="mt-4 text-xl">ul.  Karolkowa 30, 01-207 Warszawa</p>
                <p className="text-xl">Polska, Mazowieckie</p>
                <button className="flex items-center justify-center mt-4 text-xl underline">
                  <Link href="/"><a>sprawdź dojazd</a></Link>
                </button>
              </div>
          </div>
          <img className="w-5/12" src="https://verdepro.pl/poland_cropped_map.png" alt="" />
        </div>
        <div className="flex">
          <div className="flex items-start w-2/5 py-40 text-white bg-black justify-evenly">
            <div className="">
              <div className="">
                <p className="text-xl font-bold">Przemyśl</p>
                <p className="mt-2 text-xl">ul.  Sielska 2, 37-700 Przemyśl</p>
                <p className="text-xl">Polska, Podkarpackie</p>
              </div>
              <div className="">
                <p className="mt-12 text-xl font-bold">Warszawa</p>
                <p className="mt-2 text-xl">ul.  Karolkowa 30, 01-207 Warszawa</p>
                <p className="text-xl">Polska, Mozowieckie</p>
              </div>
            </div>
            <div className="">
              <div className="">
                <p className="text-xl font-bold">Firma</p>
                <p className="mt-2 text-xl">KRS 0000894896</p>
                <p className="text-xl">NIP PL7952563292</p>
              </div>
              <div className="">
                <p className="mt-12 text-xl font-bold">Holandia</p>
                <p className="mt-2 text-xl underline">damansdak.com</p>
              </div>
            </div>
          </div>
          <div className="w-3/5 py-40 mx-auto bg-black">
            <p className="w-10/12 mx-auto text-2xl text-white">Zapraszamy do kontaktu z nami. Nasi specjaliści zajmą się profesjonalnym doradztwem oraz wyceną projektów.</p>
            <div className="flex justify-start w-10/12 mx-auto mt-16">
            <div className="flex items-center space-x-6 text-4xl font-bold text-white">
                <svg width="75px" height="56px" viewBox="0 0 75 56" version="1.1">
                    <g id="Templates" stroke="none" fill="none">
                        <g id="Group" fill="currentColor">
                            <path d="M37.4427,56 C27.2102,56 16.9613,56 6.72887,56 C2.78323,56 0,53.2057 0,49.2839 C0,35.1001 0,20.9163 0,6.73242 C0,2.81062 2.78323,0.0163408 6.72887,0.0163408 C27.2429,0.0163408 47.7406,0.0326816 68.2547,0 C72.0693,0 75.0163,2.92501 74.9999681,6.73242 C74.9672,20.9163 74.9836,35.1001 74.9836,49.2839 C74.9836,53.2221 72.2003,56 68.2547,56 C57.9895,56 47.7079,56 37.4427,56 Z M5.50098,3.13744 C5.73018,3.38255 5.82842,3.52962 5.95939,3.644 C15.7498,12.5334 25.5403,21.4228 35.3307,30.2959 C36.8042,31.6358 38.1794,31.6195 39.6692,30.2632 C49.4269,21.4228 59.1846,12.5661 68.9259,3.70937 C69.0897,3.5623 69.2206,3.38255 69.4498,3.1211 C48.0681,3.13744 26.85,3.13744 5.50098,3.13744 Z M30.3863,29.9527 C21.8074,37.3224 13.6542,45.019 5.40275,52.8462 C26.8664,52.8462 48.1172,52.8462 69.5808,52.8462 C61.2475,44.9863 53.1106,37.2571 44.5645,29.9364 C43.7622,30.6554 43.0419,31.309 42.3215,31.979 C39.2763,34.7896 35.7236,34.806 32.6948,32.028 C31.9581,31.3417 31.2049,30.6881 30.3863,29.9527 Z M71.8238,50.6402 C71.8238,35.4923 71.8238,20.4587 71.8238,5.21272 C63.4086,12.8439 55.1571,20.3443 46.9711,27.7794 C55.2553,35.3942 63.4741,42.96 71.8238,50.6402 Z M3.14342,50.6402 C11.4767,42.9764 19.6955,35.4106 27.9797,27.7957 C19.7937,20.3443 11.5422,12.8439 3.14342,5.19638 C3.14342,20.475 3.14342,35.5086 3.14342,50.6402 Z" id="Shape"></path>
                        </g>
                    </g>
                </svg>
                <p className="">info@damansdak.pl</p>
              </div>
              <div className="flex items-center ml-20 space-x-6 text-4xl font-bold text-primary">
                <svg className="w-16 h-16" width="72px" height="72px" viewBox="0 0 72 72" version="1.1">
                    <g id="Templates" stroke="none" fill="none">
                        <g id="Group" fill="currentColor">
                            <path d="M27.7233997,18.5669992 C27.2864997,19.8321992 26.9951997,21.0243992 26.4611997,22.0705992 C25.5630997,23.8710992 24.5435997,25.6228992 23.5241997,27.3746992 C23.1357997,28.0558992 23.1114997,28.5424992 23.6454997,29.1993992 C29.4467997,36.2308992 35.8305997,42.6541992 42.8939997,48.4204992 C43.4765997,48.9070992 43.8891997,48.8583992 44.4717997,48.5177992 C46.3164997,47.4472992 48.1854997,46.4253992 50.0787997,45.4034992 C52.5303997,44.0896992 54.9090997,44.1869992 57.2635997,45.7927992 C61.1957997,48.4690992 65.1765997,51.0967992 69.1330997,53.7487992 C72.2157997,55.8168992 72.8711997,58.4688992 70.7350997,61.5101992 C68.8175997,64.2351992 66.6814997,66.8385992 64.4483997,69.3202992 C62.3851997,71.5829992 59.7636997,72.3858992 56.6567997,71.7776992 C50.2486997,70.5367992 44.5445997,67.7144992 39.1316997,64.2108992 C31.0972997,59.0284992 24.3736997,52.3376992 17.8199997,45.4521992 C12.5284997,39.8804992 7.9166297,33.8221992 4.3727697,26.9853992 C2.3581097,23.0924992 0.853183697,19.0292992 0.124994697,14.6984992 C-0.336192303,11.9734992 0.489089697,9.61344918 2.4309297,7.86165918 C5.1009597,5.42861918 7.9166297,3.11722918 10.8778997,1.04914918 C13.5236997,-0.799966818 16.1693997,-0.143045818 18.0141997,2.53329918 C20.8783997,6.71812918 23.7182997,10.9272992 26.4611997,15.2093992 C27.0922997,16.1826992 27.3106997,17.4234992 27.7233997,18.5669992 Z M2.8435697,13.0926992 C2.9163897,13.1413992 2.9892097,13.1899992 3.0620297,13.2386992 C3.1348497,13.6765992 3.1833897,14.1145992 3.2562097,14.5524992 C4.3727697,20.9270992 7.1884397,26.5960992 10.8536997,31.8270992 C18.9607997,43.4083992 28.8641997,53.2621992 40.4423997,61.3398992 C45.5639997,64.9164992 51.1467997,67.6171992 57.3849997,68.7606992 C59.1083997,69.0769992 60.6860997,68.8336992 61.8268997,67.5441992 C64.0357997,65.0867992 66.1960997,62.5807992 68.2106997,59.9530992 C69.4243997,58.3472992 69.1573997,57.4956992 67.4582997,56.3521992 C63.3318997,53.5784992 59.2054997,50.8291992 55.0789997,48.0797992 C54.0352997,47.3742992 52.9672997,47.3985992 51.8749997,48.0067992 C49.6175997,49.2476992 47.3601997,50.4885992 45.0785997,51.7293992 C43.2580997,52.7269992 43.2580997,52.7269992 41.5832997,51.3643992 C33.7430997,45.0141992 26.6795997,37.9096992 20.3200997,30.0509992 C19.5433997,29.0777992 19.4705997,28.2505992 20.0773997,27.2042992 C21.3880997,24.9415992 22.6260997,22.6058992 23.9124997,20.3187992 C24.5678997,19.1265992 24.6406997,17.9587992 23.8396997,16.7908992 C21.0968997,12.7033992 18.3782997,8.61590918 15.6111997,4.52839918 C14.5188997,2.89825918 13.6450997,2.60628918 12.1158997,3.77414918 C9.4700997,5.79357918 6.8971597,7.95897918 4.4455897,10.2216992 C3.6931197,10.9272992 3.3532997,12.1194992 2.8435697,13.0926992 Z" id="Shape"></path>
                            <path d="M40.0780997,6.59647918 C40.1266997,5.57459918 40.1751997,4.65003918 40.2237997,3.55517918 C47.1172997,3.87146918 53.0883997,6.23151918 58.1129997,10.8055992 C63.8170997,15.9879992 66.7783997,22.5085992 67.3366997,30.2455992 C66.8997997,30.2942992 66.5841997,30.3672992 66.2686997,30.3672992 C65.6375997,30.3915992 65.0064997,30.3672992 64.2782997,30.3672992 C63.8656997,23.8953992 61.4383997,18.3480992 56.8507997,13.8225992 C52.2631997,9.29714918 46.7046997,6.96142918 40.0780997,6.59647918 Z" id="Path"></path>
                            <path d="M57.7003997,30.8540992 C56.8022997,30.8540992 55.8798997,30.8540992 54.9331997,30.8540992 C53.6710997,22.1194992 48.7193997,17.1073992 39.8353997,15.9638992 C39.8353997,15.0636992 39.8353997,14.1390992 39.8353997,13.1901992 C47.7969997,11.7790992 58.8896997,22.7277992 57.7003997,30.8540992 Z" id="Path"></path>
                        </g>
                    </g>
                </svg>
                <p className="">+48 532 197 746</p>
              </div>
            </div>
          </div>
        </div>

        {/* LINES START */}
        <div className="absolute inset-0 z-20 flex justify-center mx-auto h-min-full">
          <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
          <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
          <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
          <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
          <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
        </div>
        {/* LINES END */}
      </main >


      {/* CERTIFICATE */}
      {/* <div className="sticky hidden h-20 mb-2 ml-auto bg-white border-l-2 shadow-2xl w-28 lg:block border-primary bottom-2">
        <a href="link"><img className="w-20 h-auto px-3 pt-2 mx-auto" src="http://verdepro.pl/vcs.png" /></a>
        <p className="px-3 mt-1 text-xs leading-3 text-center"><a href="link">Certyfikowana<br></br> firma</a></p>
      </div> */}
      <footer className="flex items-center justify-between w-4/5 py-10 mx-auto text-gray-500">
        <div className="flex items-center space-x-6">
          <img className="w-7 h-7" src="https://verdepro.pl/Facebook_black.png" alt="" />
          <img className="w-7 h-7" src="https://verdepro.pl/Linkedin_black.png" alt="" />
          <img className="w-7 h-7" src="https://verdepro.pl/Instagram_black.png" alt="" />
          <img className="w-7 h-7" src="https://verdepro.pl/TikTok_black.png" alt="" />
          <img className="w-7 h-7" src="https://verdepro.pl/YouTube_black.png" alt="" />
          <img className="w-7 h-7" src="https://verdepro.pl/Twitter_black.png" alt="" />
        </div>
        <p className="flex space-x-16">
          <p className="">OFERTA</p>
          <p className="">O NAS</p>
          <p className="">REALIZACJE</p>
          <p className="">KARIERA</p>
          <p className="">KONTAKT</p>
        </p>
        <p className="">©2021 All right reserved</p>
      </footer>
    </div >
  );
};

export default Home;
