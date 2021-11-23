import Navigation from "../components/_nav";
import Cta from "../components/_cta";
import Footer from "../components/_footer";
import useTranslation from "next-translate/useTranslation";
import { NextSeo } from "next-seo";

const Oferta = () => {
  const { t, lang } = useTranslation("common");
  return (
    <>
      <NextSeo
        title={`Damansdak Polska - ${t("Oferta")}`}
        description='{t("offerDescription")}'
        canonical="https://damansdak.pl/oferta/"
        openGraph={{
          url: "https://damansdak.pl/oferta/",
          title: `Damansdak Polska – ${t("Oferta")}`,
          description: t("offerDescription"),
          images: [
            {
              url: "https://damansdak.mo.cloudinary.net/hero.webp",
              width: 800,
              height: 600,
              alt: `Damansdak Polska – ${t("Oferta")}`,
            },
            {
              url: "https://damansdak.mo.cloudinary.net/hero.webp",
              width: 900,
              height: 800,
              alt: `Damansdak Polska – ${t("Oferta")}`,
            },
            { url: "https://damansdak.mo.cloudinary.net/hero.webp" },
            { url: "https://damansdak.mo.cloudinary.net/hero.webp" },
          ],
          site_name: `Damansdak Polska – ${t("Oferta")}`,
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
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black to-primary opacity-70"></div>
          <div className="relative max-w-4xl px-4 mx-auto">
            <p className="font-serif font-light text-center text-white uppercase text-md lg:text-left">
              {t("Oferta")}
            </p>
            <h2 className="text-3xl text-center text-white lg:text-5xl lg:text-left font-heading">
              {t("titleOffer")}
            </h2>
          </div>
        </div>
        <div className="py-4 mb-6 bg-pattern"></div>

        <section className="mt-20 lg:mb-16" id="stal">
          <div className="px-8 mx-auto lg:flex lg:w-3/5 sm:px-0 sm:w-4/5">
            <img
              className="h-20"
              src="https://damansdak.s3.eu-central-1.amazonaws.com/roof.png"
              alt=""
            />
            <div className="lg:ml-6">
              <p className="mt-6 font-serif font-light text-md lg:mt-0 lg:text-left">
                {t("DACHYPLASKIE")}
              </p>
              <h2 className="text-3xl lg:text-5xl lg:text-left font-heading">
                {t("Podlozestalowe")}
              </h2>
            </div>
          </div>
          <div
            id="beton"
            class="relative px-8 mt-8 mx-auto lg:w-3/5 sm:px-0 sm:w-4/5"
          >
            <p className="font-serif text-lg font-light text-gray-500 lg:w-10/12">
              {t("steelText")}
            </p>
            {/* <img className="" src="https://damansdak.s3.eu-central-1.amazonaws.com/zory/zory4.jpg" alt="" /> */}
          </div>
        </section>

        <section className="lg:my-16">
          <div className="px-8 mx-auto mt-20 lg:flex lg:w-3/5 sm:px-0 sm:w-4/5">
            <img
              className="h-20"
              src="https://damansdak.s3.eu-central-1.amazonaws.com/brick-wall.png"
              alt=""
            />
            <div className="lg:ml-6">
              <p className="mt-6 font-serif font-light text-md lg:mt-0 lg:text-left">
                {t("DACHYPLASKIE")}
              </p>
              <h2 className="text-3xl lg:text-5xl lg:text-left font-heading">
                {t("Podlozebetonowe")}
              </h2>
            </div>
          </div>

          <div
            id="renowacja"
            class="relative mt-8 px-8 mx-auto lg:w-3/5 sm:px-0 sm:w-4/5"
          >
            <p className="font-serif text-lg font-light text-gray-500 whitespace-pre-line lg:w-10/12">
              {t("betonText")}
            </p>
            {/* <img className="" src="https://damansdak.s3.eu-central-1.amazonaws.com/zory/zory4.jpg" alt="" /> */}
          </div>
        </section>

        <section className="lg:mb-16">
          <div className="px-8 mx-auto mt-20 lg:flex lg:w-3/5 sm:px-0 sm:w-4/5">
            <img
              className="h-20"
              src="https://damansdak.s3.eu-central-1.amazonaws.com/hammer.png"
              alt=""
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

export default Oferta;
