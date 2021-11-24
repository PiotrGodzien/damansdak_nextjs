import LazyShow from "./LazyShow";
import LazyShow2 from "./LazyShow2";
import LazyShow3 from "./LazyShow3";
import { animateScroll as scroll } from "react-scroll";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Navigation from "../components/_nav";
import Footer from "../components/_footer";
import Cta from "../components/_cta";
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
      <NextSeo
        title={`Damansdak Polska - ${t("slider")}`}
        description={`${t("sliderDescription")}`}
        // canonical="https://damansdak.pl/"
        languageAlternates={[
          {
            hrefLang: "x-default",
            href: "https://damansdak.pl/",
          },
          {
            hrefLang: "pl",
            href: "https://damansdak.pl/",
          },
          {
            hrefLang: "de",
            href: "https://damansdak.pl/de/",
          },
          {
            hrefLang: "ru",
            href: "https://damansdak.pl/ru/",
          },
          {
            hrefLang: "en",
            href: "https://damansdak.pl/en/",
          },
          {
            hrefLang: "x-default",
            href: "https://damansdak.pl/",
          },
        ]}
        openGraph={{
          url: "https://damansdak.pl/",
          title: `Damansdak Polska – ${t("slider")}`,
          description: t("contactText"),
          images: [
            {
              url: "https://damansdak.mo.cloudinary.net/hero.webp",
              width: 800,
              height: 600,
              alt: `Damansdak Polska – ${t("slider")}`,
            },
            {
              url: "https://damansdak.mo.cloudinary.net/hero.webp",
              width: 900,
              height: 800,
              alt: `Damansdak Polska – ${t("slider")}`,
            },
            { url: "https://damansdak.mo.cloudinary.net/hero.webp" },
            { url: "https://damansdak.mo.cloudinary.net/hero.webp" },
          ],
          site_name: `Damansdak Polska – ${t("slider")}`,
        }}
        twitter={{
          handle: "@BDamans",
          site: "@bdamans",
          cardType: "summary_large_image",
        }}
      />
      <main className="relative bg-gray-50">
        <div className="relative z-0">
          <img
            src="https://damansdak.mo.cloudinary.net/hero.webp"
            alt="Hero Damansdak Polska"
            className="object-cover w-full h-screen lg:hidden"
            layout="responsive"
            width={1920}
            height={1080}
          />

          {/* <SwiperCarousel /> */}
          <video
            autoPlay
            loop
            muted
            playsinline
            className="relative z-0 hidden object-cover w-full h-screen mx-auto lg:block lg:h-auto"
          >
            <source src="/video_damansdak.webm" type="video/webm" />
            <source
              src="https://damansdak.mo.cloudinary.net/video_damansdak.webm"
              type="video/webm"
            />
            <source
              src="https://damansdak.s3.eu-central-1.amazonaws.com/video_damansdak.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 z-20 overflow-hidden opacity-80 bg-gradient-to-b from-black"></div>

          <div className="absolute inset-0 z-20 overflow-hidden opacity-60 bg-gradient-to-b from-black"></div>

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
            </div>
          </div>
        </div>
        <LazyShow>
          {/* O NAS */}
          <div className="relative z-0 hidden w-4/5 mx-auto font-black text-center text-gray-100 uppercase lg:block -mb-28 text-9xl">
            {t("doswiadczenie")}
          </div>
          <div
            className="relative z-10 pt-16 pb-4 mx-auto lg:w-4/5 lg:flex-row"
            id="target"
          >
            <div className="px-4 mx-auto lg:px-0 lg:w-2/3">
              <h1 className="text-3xl sm:text-5xl 2xl:text-7xl">
                Damansdak {t("Polska")}
              </h1>
              <p className="my-4 font-serif text-lg font-light text-gray-500">
                {t("homeAbout")}
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-around pt-6 pb-12 mx-auto lg:flex-row lg:w-4/5 2xl:w-3/5">
            <LazyShow>
              <div className="flex flex-col items-center justify-center w-64 h-64 text-5xl text-white bg-black border-8 border-white rounded-full shadow-2xl">
                <h2 className="text-4xl font-bold font-heading">
                  <CountUp
                    start={428500}
                    end={429000}
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
                <span className="ml-3 text-lg">{t("mCount")}</span>
              </div>
            </LazyShow>
            <LazyShow2>
              <div className="flex flex-col items-center justify-center w-64 h-64 text-5xl text-white bg-black border-8 border-white rounded-full shadow-2xl">
                <h2 className="text-4xl font-bold font-heading">
                  <CountUp
                    start={0}
                    end={21}
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
                <span className="ml-3 text-lg">projektów</span>
              </div>
            </LazyShow2>
            <LazyShow3>
              <div className="flex flex-col items-center justify-center w-64 h-64 text-5xl text-white bg-black border-8 border-white rounded-full shadow-2xl">
                <h2 className="text-4xl font-bold font-heading">
                  <CountUp
                    start={50}
                    end={85}
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
                <span className="ml-3 text-lg">pracowników</span>
              </div>
            </LazyShow3>
          </div>

          {/* <div className="relative flex mx-auto lg:w-3/5">
            <img
              className="relative mx-auto"
              src="https://damansdak.mo.cloudinary.net/home_parallax.webp"
              alt="Zdjęcie realizacji dachu"
              width={2112}
              height={1187}
              layout="responsive"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 mx-auto lg:px-0 lg:w-3/5">
              <div className="text-center">
                <span className="text-white lg:text-2xl">{t("textCount")}</span>
              </div>
              <div className="mt-4 text-center lg:mt-0">
                <h2 className="text-4xl font-bold text-white lg:text-6xl font-heading">
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
                <span className="ml-3 text-white lg:text-3xl">
                  {t("mCount")}
                </span>
              </div>
            </div>
          </div> */}

          {/* <div className="-mt-14" id="target"></div>
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
                </div>
                <div className="relative lg:p-8 lg:w-2/3">
                  
                  <div className="relative bg-bottom bg-herobanner md:max-w-xl lg:max-w-2xl lg:ml-auto">

                    <div className="absolute inset-0 w-full h-full bg-primary mix-blend-multiply"></div>
                    
                    <div className="absolute bg-pattern -top-10 -right-10"></div>
                    <div className="relative z-10 p-8 text-center md:p-24">
                      <span className="mb-4 text-2xl text-white">
                        {t("textCount")}
                      </span>
                      <div className="flex flex-wrap items-end justify-center mt-6 mb-6">
                        <h2 className="text-4xl font-bold text-white lg:text-6xl font-heading">
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
              </div>
            </div>
          </div> */}
        </LazyShow>
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
          <div className="relative z-40 grid px-8 mx-auto xl:justify-center xl:flex sm:w-11/12 sm:px-0 lg:grid-cols-3 gap-x-8 items-strech">
            <LazyShow>
              <div className="px-8 py-12 transition duration-300 ease-out bg-white border-t-4 2xl:py-20 border-primary hover:bg-black hover:text-white">
                <h3 className="text-3xl uppercase sm:text-4xl">
                  {t("Dachybetonowe")}
                </h3>
                <p className="pr-6 mt-4 font-serif text-lg font-light text-gray-500">
                  {t("homeBeton")}
                </p>
                <div className="">
                  <a href="oferta/#beton">
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
                <h3 className="text-3xl uppercase sm:text-4xl">
                  {t("Dachystalowe")}
                </h3>
                <p className="pr-6 mt-4 font-serif text-lg font-light text-gray-500">
                  {t("homeStal")}
                </p>
                <div className="">
                  <Link href="oferta/">
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
                  {t("homeSerwis")}
                </p>
                <div className="relative z-40">
                  <Link href="oferta/#renowacja">
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
                {t("homeCta")}
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
              <Link href="realizacje/lublin">
                <div className="relative mx-auto mb-8 sm:mb-16">
                  <img
                    src="https://damansdak.mo.cloudinary.net/lublin_realizacja.webp"
                    layout="fill"
                    alt="Realizacja dachu w Lublinie"
                    className=""
                    width={1920}
                    height={1080}
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
                      <a href="realizacje/lublin">
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
              <Link href="realizacje/ruda-slaska">
                <div className="relative mx-auto mb-8 sm:mb-16">
                  <img
                    src="https://damansdak.mo.cloudinary.net/ruda_slaska_realizacja.webp"
                    layout="fill"
                    alt="Realizacja dachu w Rudzie Śląskiej"
                    className=""
                    width={1920}
                    height={1080}
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
                      <a href="realizacje/ruda-slaska">
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
              <Link href="realizacje/hala-w-szczecinie">
                <div className="relative mx-auto mb-8 sm:mb-16">
                  <img
                    src="realizacje/hala-w-szczecinie/realizacja_szczecin.webp"
                    layout="fill"
                    alt="Realizacja dachu w Szczecinie"
                    className=""
                    width={1920}
                    height={1080}
                  />
                  <div className="absolute bottom-0 right-0 grid items-center p-2 mx-auto bg-black bg-opacity-50 hover:bg-opacity-100 hover:bg-black lg:bg-opacity-80 sm:w-2/3 lg:grid-cols-2 lg:p-8 sm:px-8 text-md">
                    <p className="text-xs text-white sm:text-base lg:px-8 2xl:text-2xl">
                      {t("Miejsce")}
                      <b>Szczecin</b>
                      <br></br>
                      {t("Powierzchnia")}
                      <b>43 500 m²</b>
                      <br></br>
                      {t("Generalnywykonawca")}
                      <b>TRASKO Invest Sp. z o.o.</b>
                      <br></br>
                      {t("Inwestor")}
                      <b>Panattoni </b>
                    </p>
                    <div className="z-40 hidden mx-auto text-white transition duration-150 ease-in-out hover:text-primary lg:block">
                      <a href="realizacje/hala-w-szczecinie">
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
            <a href="realizacje/">
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
        <LazyShow>
          <Footer />
        </LazyShow>
      </main>
    </div>
  );
};

export default Home;
