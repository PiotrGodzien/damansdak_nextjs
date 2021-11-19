import Navigation from "../components/_nav";
import Cta from "../components/_cta";
import Footer from "../components/_footer";
import useTranslation from "next-translate/useTranslation";

const Oferta = () => {
  const { t, lang } = useTranslation("common");
  return (
    <>
      <Navigation />
      <section className="lg:pt-20">
        <div className="relative flex items-center overflow-hidden text-center bg-cover py-36">
          <img
            className="absolute object-cover w-full h-full bg-center"
            src="/wideo_slider.webp"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black to-primary opacity-70"></div>
          <div className="relative max-w-4xl px-4 mx-auto">
            <p className="font-serif font-light text-center text-white uppercase text-md lg:text-left">
              {t("Wideo")}
            </p>
            <h2 className="text-3xl text-center text-white lg:text-5xl lg:text-left font-heading">
              {t("titleWideo")}
            </h2>
          </div>
        </div>
        <div className="py-4 mb-6 bg-pattern"></div>
        <div className="object-cover max-w-4xl mx-auto">
          <video
              autoPlay
              loop
              muted
              playsinline
              className=""
            >
              <source
                src="/video_damansdak.webm"
                type="video/webm"
              />
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
