import Head from "next/head";
import LazyShow from "./LazyShow";
import { animateScroll as scroll } from "react-scroll";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Navigation from "../components/_nav";
import Footer from "../components/_footer";
import Cta from "../components/_cta";
import SwiperCarousel from "../components/_carousel";
import Link from "next/link";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";

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

  const { t, lang } = useTranslation("common");

  return (
    <div className="">
      <Navigation />
      <NextSeo title={t("slider")} description={t("sliderDescription")} />
      <main className="relative bg-gray-50">
        <div className="relative z-0">
          <SwiperCarousel />
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-black"></div>
          <div className="absolute z-30 w-full text-white transform -translate-x-1/2 -translate-y-1/2 sm:w-4/5 lg:w-3/5 top-1/2 left-1/2">
            <div className="flex flex-col-reverse items-center justify-start px-6 mx-auto lg:px-0 md:flex-row">
              <div className="">
                <LazyShow>
                  <div className="items-center mt-16 2xl:mt-24 space-y-7 sm:space-y-8 lg:space-y-16">
                    <h1 className="text-4xl sm:text-5xl 2xl:text-8xl">
                      {t("slider")}
                    </h1>
                    <p className="text-xl sm:text-3xl">
                      {t("sliderDescription")}
                    </p>
                    <div className="lg:flex lg:space-x-8">
                      <Link href="/kontakt">
                        <button className="flex items-center justify-center px-16 py-4 text-white transition duration-150 ease-in-out border-2 border-primary bg-primary hover:border-black hover:bg-black">
                          <p className="sm:text-2xl">{t("kontakt")}</p>
                        </button>
                      </Link>
                      {/* <Link
                          to="target"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={900}
                        >
                          <a><button className="items-center justify-center hidden px-16 py-4 text-center transition duration-150 ease-in-out border-2 border-white lg:flex hover:bg-white hover:text-primary">
                            <p className="lg:text-2xl">więcej</p>
                          </button></a>
                        </Link> */}
                    </div>
                  </div>
                </LazyShow>
              </div>
              {/* <div className="lg:hidden">
                  <div className="items-center mt-16 2xl:mt-24 space-y-7 sm:space-y-8 lg:space-y-16">
                    <h1 className="text-4xl sm:text-5xl 2xl:text-8xl">Dachy płaskie w technologii membran PVC i TPO</h1>
                    <p className="text-xl sm:text-3xl">Niezależnie od projektu, nasz zespół profesjonalistów jest gotowy, aby urzeczywistnić Twoje plany</p>
                    <div className="lg:flex lg:space-x-8">
                      <a href="/kontakt" className=""><button className="flex items-center justify-center px-16 py-4 text-white transition duration-150 ease-in-out border-2 border-primary bg-primary hover:border-black hover:bg-black">
                        <p className="sm:text-2xl">kontakt</p>
                      </button></a>
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
                </div> */}
            </div>
          </div>
        </div>

        <LazyShow>
          {/* O NAS */}
          <div className="-mt-14" id="target"></div>
          <div className="flex pt-32 pb-16 2xl:py-32">
            <div className="px-8 mx-auto lg:px-0 sm:w-4/5">
              <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="lg:w-1/2 lg:pr-10">
                  <h1 className="text-3xl sm:text-5xl 2xl:text-7xl">
                    Damansdak {t("Polska")}
                  </h1>
                  <p className="my-4 font-serif text-lg font-light text-gray-500">
                    {t("homeAbout")}
                  </p>
                  {/* <div className="flex-col items-center justify-center">
                    <div className="">
                      <p className="text-3xl sm:text-5xl 2xl:text-7xl">
                        Damans Dak Polska do końca roku zrealizuję 239 000 m² dachów
                      </p>
                      <div className="font-serif text-xl text-gray-500">Jako Damans Dak Polska do końca 2021 roku zrealizujemy dachy płaskie o łącznej powierzchni:</div>
                    </div>
                    <div className="">
                      <p className="text-3xl text-primary sm:text-7xl 2xl:text-7xl">
                        <CountUp start={478500} end={479000} separator=" " duration={1.75} delay={0}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </p>
                      <div className="font-serif text-lg font-light text-gray-500">m² dachów</div>
                    </div>
                  </div> */}
                </div>
                <div className="relative lg:p-8 lg:w-2/3">
                  {/* <div className="absolute bottom-0 right-0 w-2/3 bg-white h-2/3"></div> */}
                  <div className="relative bg-bottom bg-herobanner md:max-w-xl lg:max-w-2xl lg:ml-auto">
                  
                  <div className="absolute inset-0 w-full h-full m-6 bg-primary mix-blend-multiply"></div>
                  {/* <div className="absolute inset-0 m-3 border-2 border-black"></div> */}
                  <div className="absolute bg-pattern -top-10 -right-10"></div>
                    <div className="relative z-10 p-8 md:p-24">
                      <span className="mb-4 text-2xl text-white">
                        {t("textCount")}
                      </span>
                      <div className="flex items-end mt-6 mb-6">
                      <h2 className="text-4xl font-bold text-white lg:text-8xl font-heading">
                        <CountUp
                          start={478500}
                          end={479000}
                          separator=" "
                          duration={1.75}
                          delay={0}
                        >
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h2>
                      <span className="ml-3 text-white lg:text-3xl">{t('mCount')}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="relative flex mx-auto">
                  <div className="relative hidden border-r-8 lg:block border-gray-50 ">
                    <img
                      className="w-72 "
                      src="https://damansdak.s3.eu-central-1.amazonaws.com/czI.jpg"
                      alt=""
                    />
                    <div className="absolute bottom-0 w-full h-6 bg-gray-50"></div>
                  </div>
                  <div className="relative hidden border-r-4 lg:block border-gray-50 ">
                    <img
                      className="w-72 "
                      src="https://damansdak.s3.eu-central-1.amazonaws.com/czII.jpg"
                      alt=""
                    />
                    <div className="absolute inset-0 w-full h-6 bg-gray-50"></div>
                  </div>
                  <div className="absolute hidden w-full p-5 transform -translate-x-1/2 -translate-y-1/2 bg-black lg:block lg:w-auto top-1/2 left-1/2">
                    <p className="text-center text-white">{t("textCount")}</p>
                    <div className="justify-center">
                      <p className="text-5xl font-black text-center text-white">
                        <CountUp
                          start={478500}
                          end={479000}
                          separator=" "
                          duration={1.75}
                          delay={0}
                        >
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </p>
                      <p className="ml-2 text-center text-white">
                        {t("mCount")}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 lg:hidden">
                    <p className="text-lg text-center">{t("textCount")}</p>
                    <div className="items-end justify-center">
                      <p className="text-5xl font-black text-center">
                        <CountUp
                          start={478500}
                          end={479000}
                          separator=" "
                          duration={1.75}
                          delay={0}
                        >
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </p>
                      <p className="ml-2 text-center">{t("mCount")}</p>
                    </div>
                  </div>
                </div> */}

                {/* <img src="https://damansdak.s3.eu-central-1.amazonaws.com/d.png" className="hidden h-80 lg:block" alt="" /> */}
              </div>
            </div>
          </div>
        </LazyShow>
        {/* <section className="bg-no-repeat bg-cover bg-herobanner">
          <div className="relative p-8 ml-auto lg:w-2/3">
            <div className="absolute bottom-0 right-0 w-2/3 bg-white h-2/3"></div>
            <div className="relative bg-black bg-opacity-50 md:max-w-xl lg:max-w-2xl lg:ml-auto">
              <div className="relative z-10 p-8 md:p-24">
                <span className="mb-4 text-2xl text-white">
                  {t("textCount")}
                </span>
                <h2 className="mt-6 mb-6 font-bold text-center text-white text-8xl font-heading">
                  <CountUp
                    start={478500}
                    end={479000}
                    separator=" "
                    duration={1.75}
                    delay={0}
                  >
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
              </div>
            </div>
          </div>
        </section> */}
        {/* O NAS END */}
        {/* OFERTA */}
        {/* <LazyShow>
    <section className="relative leading-7 text-gray-900 bg-white border-solid lg:py-32">
      <div className="box-border mx-auto border-solid sm:w-4/5 lg:w-3/5">
        <div className="flex flex-col items-center leading-7 text-gray-900 border-0 border-gray-200 lg:flex-row">
          <div className="box-border flex flex-col justify-center w-full h-full p-8 text-gray-900 border-solid lg:w-1/2 md:p-16 lg:p-0 lg:pr-20">
            <h2 className="m-0 text-3xl leading-tight tracking-tight text-left text-black sm:text-5xl 2xl:text-7xl">Oferta</h2>
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
        <section className="box-border relative pt-8 mx-auto leading-7 text-gray-900 bg-white lg:pb-16">
          <LazyShow>
            <div className="w-4/5 px-8 py-8 mx-auto lg:mb-16 lg:w-3/5 sm:px-0">
              <div className="text-3xl lg:w-1/3 sm:text-5xl 2xl:text-7xl">
                {t("Oferta")}
              </div>
              <p className="mt-6 font-serif text-lg font-light text-gray-500 lg:w-10/12">
                {t("homeOffer")}
              </p>
            </div>
          </LazyShow>
          <div className="relative z-40 grid px-8 mx-auto xl:justify-center xl:flex sm:w-11/12 2xl:w-3/5 sm:px-0 lg:grid-cols-3 gap-x-8 items-strech">
            <LazyShow>
              <div className="px-8 py-12 transition duration-300 ease-out bg-white border-t-4 2xl:py-20 border-primary hover:bg-black hover:text-white">
                <h3 className="text-3xl uppercase sm:text-4xl">{t("Dachybetonowe")}</h3>
                <p className="pr-6 mt-4 font-serif text-lg font-light text-gray-500">
                {t('homeBeton')}
                </p>
                <div className="">
                  <a href="/oferta/#beton">
                    <button className="flex items-center justify-center mt-12 mr-auto lg:text-xl">
                      {t("zobaczwiecej")}
                      <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                        <svg
                          className="absolute w-12 h-12"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </LazyShow>
            <LazyShow>
              <div className="flex-col items-end px-8 py-12 transition duration-300 ease-out bg-white border-t-4 2xl:py-20 border-primary hover:bg-black hover:text-white">
                <h3 className="text-3xl uppercase sm:text-4xl">{t("Dachystalowe")}</h3>
                <p className="pr-6 mt-4 font-serif text-lg font-light text-gray-500">
                {t('homeStal')}
                </p>
                <div className="">
                  <Link href="/oferta/">
                    <button className="flex items-center justify-center mt-12 mr-auto lg:text-xl">
                      {t("zobaczwiecej")}
                      <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                        <svg
                          className="absolute w-12 h-12"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </LazyShow>
            <LazyShow>
              <div className="flex-col items-end px-8 py-12 transition duration-300 ease-out bg-white border-t-4 2xl:py-20 border-t-primary hover:bg-black hover:text-white">
                <h3 className="text-3xl uppercase sm:text-4xl">
                  {t("Serwis/renowacje")}
                </h3>
                <p className="pr-6 mt-4 font-serif text-lg font-light text-gray-500">
                  {t('homeSerwis')}
                </p>
                <div className="relative z-40">
                  <Link href="/oferta/#renowacja">
                    <button className="flex items-center justify-center mt-12 mr-auto lg:text-xl">
                      {t("zobaczwiecej")}
                      <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                        <svg
                          className="absolute w-12 h-12"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </LazyShow>
          </div>
        </section>
        {/* OFERTA END */}
        {/* CTA */}
        <LazyShow>
          <div className="py-8 bg-opacity-50 lg:py-32 bg-pattern">
            <div className="relative z-40 items-center px-8 mx-auto sm:px-0 lg:justify-center sm:flex sm:w-4/5 lg:w-3/5">
              <div className="mr-4 text-3xl sm:text-4xl 2xl:text-5xl sm:w-2/3">
                {t('homeCta')}
              </div>
              <Link href="/kontakt" className="">
                <button className="flex items-center justify-center px-16 py-4 mt-4 text-white transition duration-150 ease-in-out sm:mt-0 bg-primary hover:bg-black">
                  <p className="sm:text-2xl">{t("kontakt")}</p>
                </button>
              </Link>
            </div>
          </div>
        </LazyShow>
        {/* CTA END */}

        {/* REALIZACJE */}
        <div className="py-4 bg-white lg:py-16">
          <div className="px-8 mx-auto sm:w-4/5 sm:px-0 lg:w-3/5">
            <div className="w-1/3 pb-8 text-3xl sm:pb-16 sm:text-5xl 2xl:text-7xl">
              {t("Realizacje")}
            </div>
          </div>

          <div className="px-8 mx-auto sm:w-4/5 sm:px-0 lg:w-3/5">
            {/* REALIZACJA 1 */}
            <LazyShow>
              <Link href="/realizacje/lublin">
                <div className="relative mx-auto mb-8 sm:mb-16">
                  <img
                    src="https://damansdak.s3.eu-central-1.amazonaws.com/lublin_realizacja.jpeg"
                    layout="fill"
                    alt=""
                    className=""
                  />
                  <div className="absolute bottom-0 right-0 grid items-center p-2 mx-auto transition duration-300 ease-in-out bg-black bg-opacity-50 hover:bg-opacity-100 hover:bg-black lg:bg-opacity-80 sm:w-2/3 lg:grid-cols-2 lg:p-8 sm:px-8 text-md">
                    <p className="text-xs text-white sm:text-base lg:px-8 2xl:text-2xl">
                      {t("Miejsce")}
                      <b>Lublin</b>
                      <br></br>
                      {t("Powierzchnia")}
                      <b>36 000 m²</b>
                      <br></br>
                      {t("Generalnywykonawca")}
                      <b>Bremer Sp. z o.o.</b>
                      <br></br>
                      {t("Inwestor")}
                      <b>7R</b>
                    </p>
                    <div className="z-40 hidden mx-auto text-white transition duration-150 ease-in-out hover:text-primary lg:block">
                      <a href="/realizacje/lublin">
                        <button className="flex items-center justify-center">
                          {t("zobaczwiecej")}
                          <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                            <svg
                              className="absolute w-8 h-8"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </LazyShow>
            {/* REALIZACJA 2 */}
            <LazyShow>
              <Link href="/realizacje/ruda-slaska">
                <div className="relative mx-auto mb-8 sm:mb-16">
                  <img
                    src="https://damansdak.s3.eu-central-1.amazonaws.com/ruda_slaska_realizacja.jpeg"
                    layout="fill"
                    alt=""
                    className=""
                  />
                  <div className="absolute bottom-0 right-0 grid items-center p-2 mx-auto bg-black bg-opacity-50 hover:bg-opacity-100 hover:bg-black lg:bg-opacity-80 sm:w-2/3 lg:grid-cols-2 lg:p-8 sm:px-8 text-md">
                    <p className="text-xs text-white sm:text-base lg:px-8 2xl:text-2xl">
                      {t("Miejsce")}
                      <b>Ruda Śląska</b>
                      <br></br>
                      {t("Powierzchnia")}
                      <b>60 000 m²</b>
                      <br></br>
                      {t("Generalnywykonawca")}
                      <b>Kajima Poland Sp. z o.o.</b>
                      <br></br>
                      {t("Inwestor")}
                      <b>Panattoni</b>
                    </p>
                    <div className="z-40 hidden mx-auto text-white transition duration-150 ease-in-out hover:text-primary lg:block">
                      <a href="/realizacje/ruda-slaska">
                        <button className="flex items-center justify-center">
                          {t("zobaczwiecej")}
                          <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                            <svg
                              className="absolute w-8 h-8"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </LazyShow>
            {/* REALIZACJA 3 */}
            <LazyShow>
              <Link href="/realizacje/blonie">
                <div className="relative mx-auto mb-8 sm:mb-16">
                  <img
                    src="https://damansdak.s3.eu-central-1.amazonaws.com/blonie_realizacja.jpeg"
                    layout="fill"
                    alt=""
                    className=""
                  />
                  <div className="absolute bottom-0 right-0 grid items-center p-2 mx-auto bg-black bg-opacity-50 hover:bg-opacity-100 hover:bg-black lg:bg-opacity-80 sm:w-2/3 lg:grid-cols-2 lg:p-8 sm:px-8 text-md">
                    <p className="text-xs text-white sm:text-base lg:px-8 2xl:text-2xl">
                      {t("Miejsce")}
                      <b>Błonie k. W-wy</b>
                      <br></br>
                      {t("Powierzchnia")}
                      <b>34 000 m²</b>
                      <br></br>
                      {t("Generalnywykonawca")}
                      <b>Kajima Poland Sp. z o.o.</b>
                      <br></br>
                      {t("Inwestor")}
                      <b>P3 Logistigs</b>
                    </p>
                    <div className="z-40 hidden mx-auto text-white transition duration-150 ease-in-out hover:text-primary lg:block">
                      <a href="/realizacje/blonie">
                        <button className="flex items-center justify-center">
                          {t("zobaczwiecej")}
                          <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                            <svg
                              className="absolute w-8 h-8"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </LazyShow>
            <a href="/realizacje/">
              <p className="relative z-40 text-xl cursor-pointer ">
                {t("zobaczwszystkierealizacje")} &rarr;
              </p>
            </a>
          </div>
        </div>
        {/* REALIZACJE END */}
        <LazyShow>
          <div className="relative z-40">
            <Cta />
          </div>
        </LazyShow>
        {/* <div className="sticky hidden h-20 mb-2 ml-auto bg-white border-l-2 shadow-2xl w-28 lg:block border-primary bottom-2">
          <Link href="#link"><a><img alt="certyfikat VCS" className="w-20 h-auto px-3 pt-2 mx-auto" src="https://damansdak.s3.eu-central-1.amazonaws.com/vcs.png" layout="fill" /></a></Link>
          <p className="px-3 mt-1 text-xs leading-3 text-center"><a href="#link">Certyfikowana<br></br> firma</a></p>
        </div> */}
        <LazyShow>
          <Footer />
        </LazyShow>
        {/* LINES START */}
        {/* <div className="absolute inset-0 z-20 justify-center hidden mx-auto sm:flex h-min-full">
          <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
          <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
          <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
          <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
          <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
        </div> */}
        {/* LINES END */}
      </main>
    </div>
  );
};

export default Home;
