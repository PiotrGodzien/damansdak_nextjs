import Navigation from "../components/_nav";
import Cta from "../components/_cta";
import Footer from "../components/_footer";
import useTranslation from "next-translate/useTranslation";

const Onas = () => {
  const { t, lang } = useTranslation("common");
  return (
    <>
      <Navigation />
      <section className="lg:pt-20">
        <div className="relative flex items-center overflow-hidden text-center bg-cover py-36">
          <img
            className="absolute object-cover w-full h-full bg-center"
            src="https://damansdak.s3.eu-central-1.amazonaws.com/about_us.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black to-primary opacity-70"></div>
          <div className="relative max-w-4xl px-4 mx-auto">
            <p className="font-serif font-light text-center text-white text-md lg:text-left">
              {t("ONAS")}
            </p>
            <h2 className="text-3xl text-center text-white lg:text-5xl lg:text-left font-heading">
              {t("Poznajnasblizej")}
            </h2>
          </div>
        </div>
        {/* <div className="py-4 pb-6 bg-pattern"></div> */}

        <div className="flex flex-col mx-auto lg:flex-row">
          <div className="max-w-4xl px-8 pt-20 mx-auto mb-8 lg:mb-0 lg:px-20">
            <div className="text-3xl sm:text-5xl 2xl:text-7xl">
              {t("Kimjestesmy")}
            </div>
            <div className="mt-6 space-y-6 font-serif text-lg font-light text-gray-500">
              {t("aboutText")
                .split("\n")
                .map((aboutText) => (
                  <p>{aboutText}</p>
                ))}
            </div>
            <p className="mt-6 space-y-6 font-serif text-xl font-bold">
              {t("aboutCta")}
            </p>
          </div>
          <div className="flex flex-col items-stretch py-20 lg:w-5/12 bg-pattern">
            {/* <div className="pb-6 text-3xl sm:text-5xl 2xl:text-7xl">Nasz zespół</div> */}
            {/* <div className="flex flex-col px-8 text-center justify-evenly lg:flex-row sm:px-0">
                <div className="">
                  <img className="object-cover object-top w-20 h-20 mx-auto rounded-full" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Damian_Mazurkiewicz.jpeg" alt="" />
                  <p className="mt-4 mb-2 font-serif">Damian Mazurkiewicz</p>
                  <p className="font-serif text-sm font-light">Właściciel</p>
                </div>
              </div> */}
            <div className="flex flex-col px-8 text-center justify-evenly lg:mt-8 lg:flex-row sm:px-0">
              <div className="lg:w-1/2 lg:mr-14">
                <img
                  className="object-cover object-top w-20 h-20 mx-auto rounded-full"
                  src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Dariusz_Barbarowicz.jpeg"
                  alt=""
                />
                <p className="mt-4 mb-2 font-serif">Dariusz Barbarowicz</p>
                <p className="font-serif text-sm font-light">
                  {t("projectdirector")}
                </p>
              </div>
              <div className="mt-8 lg:w-1/2 lg:mt-0">
                <img
                  className="object-cover object-top w-20 h-20 mx-auto rounded-full"
                  src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Artur_L.jpeg"
                  alt=""
                />
                <p className="mt-4 mb-2 font-serif">Artur Leszczyński</p>
                <div className="font-serif text-sm font-light">
                  {t("ofertowanie")
                    .split("\n")
                    .map((ofertowanie) => (
                      <p>{ofertowanie}</p>
                    ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center px-8 text-center lg:mt-8 lg:flex-row sm:px-0">
              <div className="mt-8 lg:w-1/2 lg:mr-14 lg:mt-0">
                <img
                  className="object-cover object-top w-20 h-20 mx-auto rounded-full"
                  src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Ewelina_Grochowicz.jpeg"
                  alt=""
                />
                <p className="mt-4 mb-2 font-serif">Ewelina Grochowicz</p>
                <p className="font-serif text-sm font-light">
                  {t("administracja")
                    .split("\n")
                    .map((administracja) => (
                      <p>{administracja}</p>
                    ))}
                </p>
              </div>
              <div className="mt-8 lg:w-1/2 lg:mt-0">
                <img
                  className="object-cover object-top w-20 h-20 mx-auto rounded-full"
                  src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Mirosław_Łosobik.jpeg"
                  alt=""
                />
                <p className="mt-4 mb-2 font-serif">Mirosław Łosobik</p>
                <p className="font-serif text-sm font-light">
                  {t("realizacja")
                    .split("\n")
                    .map((realizacja) => (
                      <p>{realizacja}</p>
                    ))}
                </p>
              </div>
            </div>
            <div className="flex flex-col px-8 text-center justify-evenly lg:mt-8 lg:flex-row sm:px-0">
              <div className="mt-8 lg:w-1/2 lg:mt-0 lg:mr-14">
                <img
                  className="object-cover object-top w-20 h-20 mx-auto rounded-full"
                  src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Przemys%C5%82aw_Krata.jpeg"
                  alt=""
                />
                <p className="mt-4 mb-2 font-serif">Przemysław Krata</p>
                <p className="font-serif text-sm font-light">
                  {t("budowa")
                    .split("\n")
                    .map((budowa) => (
                      <p>{budowa}</p>
                    ))}
                </p>
              </div>
              <div className="mt-8 lg:w-1/2 lg:mt-0">
                <img
                  className="object-cover object-top w-20 h-20 mx-auto rounded-full"
                  src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Monika_Zdybel.jpeg"
                  alt=""
                />
                <p className="mt-4 mb-2 font-serif">Monika Zdybel</p>
                <p className="font-serif text-sm font-light">
                  {t("BHP")
                    .split("\n")
                    .map((BHP) => (
                      <p>{BHP}</p>
                    ))}
                </p>
              </div>
            </div>
            <div className="flex flex-col px-8 text-center justify-evenly lg:mt-8 lg:flex-row sm:px-0">
              <div className="mt-8 lg:w-1/2 lg:mr-14 lg:mt-0">
                <img
                  className="object-cover object-top w-20 h-20 mx-auto rounded-full"
                  src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Pawel_Olech.jpeg"
                  alt=""
                />
                <p className="mt-4 mb-2 font-serif">Paweł Olech</p>
                <p className="font-serif text-sm font-light">
                  {t("zamowienia")}
                </p>
              </div>
              <div className="mt-8 lg:w-1/2 lg:mt-0">
                <img
                  className="object-cover object-top w-20 h-20 mx-auto rounded-full"
                  src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Monika_Spiewak.jpeg"
                  alt=""
                />
                <p className="mt-4 mb-2 font-serif">Monika Śpiewak</p>
                <p className="font-serif text-sm font-light">
                  {t("marketing")}
                </p>
              </div>
            </div>
            <div className="flex flex-col px-8 text-center justify-evenly lg:mt-8 lg:flex-row sm:px-0">
              <div className="mt-8 lg:w-1/2 lg:mr-14 lg:mt-0">
                <img
                  className="object-cover object-top w-20 h-20 mx-auto rounded-full"
                  src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Edyta_Hajnold.jpeg"
                  alt=""
                />
                <p className="mt-4 mb-2 font-serif">Edyta Hajnold</p>
                <p className="font-serif text-sm font-light">
                  {t("rekrutacja")
                    .split("\n")
                    .map((rekrutacja) => (
                      <p>{rekrutacja}</p>
                    ))}
                </p>
              </div>
              <div className="mt-8 lg:w-1/2 lg:mt-0">
                <img
                  className="object-cover object-top w-20 h-20 mx-auto rounded-full"
                  src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Kateryna_Halkina.jpeg"
                  alt=""
                />
                <p className="mt-4 mb-2 font-serif">Kateryna Halkina</p>
                <p className="font-serif text-sm font-light">
                  {t("rekrutacja")
                    .split("\n")
                    .map((rekrutacja) => (
                      <p>{rekrutacja}</p>
                    ))}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:-mt-14">
          <Cta />
        </div>

        <Footer />

        {/* REALIZACJE END */}
      </section>
    </>
  );
};

export default Onas;
