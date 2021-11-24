import Navigation from "../components/_nav";
import Cta from "../components/_cta";
import Footer from "../components/_footer";
import useTranslation from "next-translate/useTranslation";
import { NextSeo } from "next-seo";

const Serwis = () => {
  const { t, lang } = useTranslation("common");
  return (
    <>
      <NextSeo
        title={`Damansdak Polska - ${t("Serwis/renowacje")}`}
        description={`${t("serviceDescription")}`}
        // canonical="https://damansdak.pl/serwis/"
        languageAlternates={[
          {
            hrefLang: "x-default",
            href: "https://damansdak.pl/serwis/",
          },
          {
            hrefLang: "pl",
            href: "https://damansdak.pl/serwis/",
          },
          {
            hrefLang: "de",
            href: "https://damansdak.pl/de/serwis/",
          },
          {
            hrefLang: "ru",
            href: "https://damansdak.pl/ru/serwis/",
          },
          {
            hrefLang: "en",
            href: "https://damansdak.pl/en/serwis/",
          },
          {
            hrefLang: "x-default",
            href: "https://damansdak.pl/serwis/",
          },
        ]}
        openGraph={{
          type: "website",
          url: "https://damansdak.pl/serwis/",
          title: `Damansdak Polska – ${t("Serwis/renowacje")}`,
          description: t("serviceDescription"),
          images: [
            {
              url: "https://damansdak.mo.cloudinary.net/hero.webp",
              width: 800,
              height: 600,
              alt: `Damansdak Polska – ${t("Serwis/renowacje")}`,
            },
            {
              url: "https://damansdak.mo.cloudinary.net/hero.webp",
              width: 900,
              height: 800,
              alt: `Damansdak Polska – ${t("Serwis/renowacje")}`,
            },
            { url: "https://damansdak.mo.cloudinary.net/hero.webp" },
            { url: "https://damansdak.mo.cloudinary.net/hero.webp" },
          ],
          site_name: `Damansdak Polska – ${t("Serwis/renowacje")}`,
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
            src="https://damansdak.s3.eu-central-1.amazonaws.com/offer.jpg"
            alt="Damansdak Oferta"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black to-primary opacity-70"></div>
          <div className="relative max-w-4xl px-4 mx-auto">
            <p className="font-serif font-light text-center text-white uppercase text-md lg:text-left">
              {t("Serwis/renowacje")}
            </p>
            <h1 className="text-3xl text-center text-white lg:text-5xl lg:text-left font-heading">
              {t("homeSerwis")}
            </h1>
          </div>
        </div>
        <div className="py-4 mb-6 bg-pattern"></div>

        <section className="lg:mb-16">
          <div className="px-8 mx-auto mt-20 lg:flex lg:w-3/5 sm:px-0 sm:w-4/5">
            <img
              className="h-20"
              src="https://damansdak.s3.eu-central-1.amazonaws.com/hammer.png"
              alt="Renowacja i konserwacja"
            />
            <div className="lg:ml-6">
              <p className="mt-6 font-serif font-light text-md lg:mt-0 lg:text-left">
                {t("DACHYPLASKIE")}
              </p>
              <h2 className="text-3xl lg:text-5xl lg:text-left font-heading">
                {t("Serwis/renowacje")}
              </h2>
            </div>
          </div>
          <div class="relative px-8 mt-8 mx-auto lg:w-3/5 sm:px-0 sm:w-4/5">
            <p className="font-serif text-lg font-light text-gray-500 whitespace-pre-line lg:w-10/12">
              {t("serviceTextOne")}
              <br></br>
              <br></br>
              <ul className="list-disc">
                <li className="">{t("serviceTextTwo")}</li>
                <li className="">{t("serviceTextThree")}</li>
                <li className="">{t("serviceTextFour")}</li>
                <li className="">{t("serviceTextFive")}</li>
              </ul>
              <br></br>
              {t("serviceTextSix")}
            </p>
            {/* <img className="" src="https://damansdak.s3.eu-central-1.amazonaws.com/zory/zory4.jpg" alt="" /> */}
          </div>
        </section>

        <Cta />

        <Footer />

        {/* REALIZACJE END */}
      </section>
    </>
  );
};

export default Serwis;
