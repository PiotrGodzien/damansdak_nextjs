import { NextSeo } from "next-seo";
import React, { useEffect, useState } from "react";
import Navigation from "/components/_nav";
import Footer from "/components/_footer";
import Cta from "/components/_cta";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Gallery from "/components/gallery/_gallery_ruda_slaska";
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
    <>
      <NextSeo
        title={`Damansdak Polska - ${t("rudaTitle")}`}
        description={`${t("rudaDescription")}`}
        canonical="https://damansdak.pl/realizacje/ruda"
        languageAlternates={[
          {
            hrefLang: "pl",
            href: "https://damansdak.pl/realizacje/ruda",
          },
          {
            hrefLang: "de",
            href: "https://damansdak.pl/de/realizacje/ruda",
          },
          {
            hrefLang: "ru",
            href: "https://damansdak.pl/ru/realizacje/ruda",
          },
          {
            hrefLang: "en",
            href: "https://damansdak.pl/en/realizacje/ruda",
          },
        ]}
        openGraph={{
          type: "website",
          url: "https://damansdak.pl/realizacje/ruda",
          title: `Damansdak Polska – ${t("rudaTitle")}`,
          description: t("blonieDescription"),
          images: [
            {
              url: "https://damansdak.mo.cloudinary.net/hero.webp",
              width: 800,
              height: 600,
              alt: `Damansdak Polska – ${t("rudaTitle")}`,
            },
            {
              url: "https://damansdak.mo.cloudinary.net/hero.webp",
              width: 900,
              height: 800,
              alt: `Damansdak Polska – ${t("rudaTitle")}`,
            },
            { url: "https://damansdak.mo.cloudinary.net/hero.webp" },
            { url: "https://damansdak.mo.cloudinary.net/hero.webp" },
          ],
          site_name: `Damansdak Polska – ${t("rudaTitle")}`,
        }}
        twitter={{
          handle: "@BDamans",
          site: "@bdamans",
          cardType: "summary_large_image",
        }}
      />
      <Navigation />
      <section className="lg:pt-20">
        <div className="relative flex items-center overflow-hidden text-center bg-cover py-36">
          <img
            className="absolute object-cover w-full h-full bg-center"
            src="https://damansdak.s3.eu-central-1.amazonaws.com/ruda_slaska/ruda1.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative max-w-4xl px-4 mx-auto">
            <p className="font-serif font-light text-center text-white uppercase text-md lg:text-left">
              {t("Realizacja")}
            </p>
            <h1 className="text-3xl text-center text-white lg:text-5xl lg:text-left font-heading">
              {t("rudaName")}
            </h1>
          </div>
        </div>
        {/* <div className="relative h-64 lg:h-144">
          <img className="object-cover w-full h-full bg-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/lublin_realizacja.jpeg" alt="" />
          <div className="container absolute inset-0 px-4 mx-auto top-1/2">
            <div className="max-w-2xl mx-auto mb-6 text-center">
              <h2 className="text-3xl lg:text-5xl text-primary font-heading">Bremer Sp. z o.o. dla 7R w Lublinie</h2>
            </div>
          </div>
        </div> */}
        <div className="py-4 mb-6 bg-pattern"></div>

        <div className="mx-auto">
          <div className="px-8 mx-auto lg:w-3/5 sm:px-0 sm:w-4/5">
            <p className="mb-6 text-3xl lg:text-left lg:text-5xl font-heading">
              <CountUp start={55550} end={60000} duration={1.75} delay={0}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <span className="ml-2 text-lg text-gray-400">m²</span>
            </p>
            <div className="mb-6 space-y-6 font-serif text-lg font-light text-gray-500">
              {t("rudaText")
                .split("\n")
                .map((rudaText) => (
                  <p>{rudaText}</p>
                ))}
            </div>
          </div>
        </div>
      </section>
      <Gallery />

      <Cta />

      {/* <div className="sticky hidden h-20 mb-2 ml-auto bg-white border-l-2 shadow-2xl w-28 lg:block border-primary bottom-2">
          <Link href="#link"><a><img alt="certyfikat VCS" className="w-20 h-auto px-3 pt-2 mx-auto" src="https://damansdak.s3.eu-central-1.amazonaws.com/vcs.png" layout="fill" /></a></Link>
          <p className="px-3 mt-1 text-xs leading-3 text-center"><a href="#link">Certyfikowana<br></br> firma</a></p>
        </div> */}

      <Footer />
    </>
  );
};

export default Home;
