import Navigation from "../components/_nav";
import Cta from "../components/_cta";
import Footer from "../components/_footer";
import useTranslation from "next-translate/useTranslation";
import { NextSeo } from "next-seo";

const Oferta = () => {
  const { t, lang } = useTranslation("common");
  return (
    <>
      {" "}
      <NextSeo
        title={`Damansdak Polska - ${t("Wideo")}`}
        description={`${t("wideoDescription")}`}
        // canonical="https://damansdak.pl/wideo/"
        languageAlternates={[
          {
            hrefLang: "x-default",
            href: "https://damansdak.pl/wideo/",
          },
          {
            hrefLang: "pl",
            href: "https://damansdak.pl/wideo/",
          },
          {
            hrefLang: "de",
            href: "https://damansdak.pl/de/wideo/",
          },
          {
            hrefLang: "ru",
            href: "https://damansdak.pl/ru/wideo/",
          },
          {
            hrefLang: "en",
            href: "https://damansdak.pl/en/wideo/",
          },
          {
            hrefLang: "x-default",
            href: "https://damansdak.pl/wideo/",
          },
        ]}
        openGraph={{
          type: "website",
          url: "https://damansdak.pl/wideo/ ",
          title: `Damansdak Polska – ${t("Wideo")}`,
          description: t("wideoDescription"),
          images: [
            {
              url: "https://damansdak.mo.cloudinary.net/hero.webp",
              width: 800,
              height: 600,
              alt: `Damansdak Polska – ${t("Wideo")}`,
            },
            {
              url: "https://damansdak.mo.cloudinary.net/hero.webp",
              width: 900,
              height: 800,
              alt: `Damansdak Polska – ${t("Wideo")}`,
            },
            { url: "https://damansdak.mo.cloudinary.net/hero.webp" },
            { url: "https://damansdak.mo.cloudinary.net/hero.webp" },
          ],
          site_name: `Damansdak Polska – ${t("Wideo")}`,
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
            src="/wideo_slider.webp"
            alt="Obraz wideo"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black to-primary opacity-70"></div>
          <div className="relative max-w-4xl px-4 mx-auto">
            <p className="font-serif font-light text-center text-white uppercase text-md lg:text-left">
              {t("Wideo")}
            </p>
            <h1 className="text-3xl text-center text-white lg:text-5xl lg:text-left font-heading">
              {t("titleWideo")}
            </h1>
          </div>
        </div>
        <div className="py-4 mb-6 bg-pattern"></div>
        <div className="object-cover max-w-4xl mx-auto">
          <video
            controls
            poster="/placeholder_video_damansdak.webp"
            loop
            playsinline
            player
            className=""
          >
            <source src="/video_damansdak_sound.webm" type="video/webm" />
            <source
              src="https://damansdak.s3.eu-central-1.amazonaws.com/video_damansdak.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="object-cover mt-4 lg:mt-12 max-w-4xl mx-auto">
          <video
            controls
            poster="/placeholder_video_zory.webp"
            loop
            playsinline
            player
            className=""
          >
            <source src="/zory.webm" type="video/webm" />
            <source
              src="https://damansdak.s3.eu-central-1.amazonaws.com/video_damansdak.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <Cta />

        <Footer />

        {/* REALIZACJE END */}
      </section>
    </>
  );
};

export default Oferta;
