import Navigation from "../components/_nav";
import Cta from "../components/_cta";
import Footer from "../components/_footer";
import useTranslation from "next-translate/useTranslation";
import { NextSeo } from "next-seo";

const Onas = () => {
  const { t, lang } = useTranslation("common");
  return (
    <>
      <NextSeo
        title={`Damansdak Polska - ${t("Onas")}`}
        description={`${t("aboutDescription")}`}
        // canonical="https://damansdak.pl/o-nas/"
        languageAlternates={[
          {
            hrefLang: "x-default",
            href: "https://damansdak.pl/o-nas/",
          },
          {
            hrefLang: "pl",
            href: "https://damansdak.pl/o-nas/",
          },
          {
            hrefLang: "de",
            href: "https://damansdak.pl/de/o-nas/",
          },
          {
            hrefLang: "ru",
            href: "https://damansdak.pl/ru/o-nas/",
          },
          {
            hrefLang: "en",
            href: "https://damansdak.pl/en/o-nas/",
          },
          {
            hrefLang: "x-default",
            href: "https://damansdak.pl/o-nas/",
          },
        ]}
        openGraph={{
          type: "website",
          url: "https://damansdak.pl/o-nas/",
          title: `Damansdak Polska – ${t("Onas")}`,
          description: t("aboutDescription"),
          images: [
            {
              url: "https://damansdak.mo.cloudinary.net/hero.webp",
              width: 800,
              height: 600,
              alt: `Damansdak Polska – ${t("Onas")}`,
            },
            {
              url: "https://damansdak.mo.cloudinary.net/hero.webp",
              width: 900,
              height: 800,
              alt: `Damansdak Polska – ${t("Onas")}`,
            },
            { url: "https://damansdak.mo.cloudinary.net/hero.webp" },
            { url: "https://damansdak.mo.cloudinary.net/hero.webp" },
          ],
          site_name: `Damansdak Polska – ${t("Onas")}`,
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
            src="https://damansdak.s3.eu-central-1.amazonaws.com/about_us.jpg"
            alt="Damansdak Polska – o firmie"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black to-primary opacity-70"></div>
          <div className="relative max-w-4xl px-4 mx-auto">
            <p className="font-serif font-light text-center text-white text-md lg:text-left">
              {t("ONAS")}
            </p>
            <h1 className="text-3xl text-center text-white lg:text-5xl lg:text-left font-heading">
              {t("Poznajnasblizej")}
            </h1>
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
            {/* <p className="mt-6 space-y-6 font-serif text-xl font-bold">
              {t("aboutCta")}
            </p> */}
            <img
              alt="Mapa Europy"
              className="mx-auto mt-12 lg:w-8/12 sm:w-10/12"
              src="https://damansdak.s3.eu-central-1.amazonaws.com/mapa_europy.jpg"
            />
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
                  src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Damian_Mazurkiewicz.jpeg"
                  alt="Damian Mazurkiewicz"
                />
                <p className="mt-4 mb-2 font-serif">Damian Mazurkiewicz</p>
                <p className="font-serif text-sm font-light">{t("Prezes")}</p>
              </div>
              <div className="mt-8 lg:w-1/2 lg:mt-0">
                <img
                  className="object-cover object-top w-20 h-20 mx-auto rounded-full"
                  src="/pracownicy/Sylwia_Mazurkiewicz.jpeg"
                  alt="Sylwia Mazurkiewicz"
                />
                <p className="mt-4 mb-2 font-serif">Sylwia Mazurkiewicz</p>
                <div className="font-serif text-sm font-light">
                  {t("Officemanager")}
                </div>
              </div>
            </div>
            <div className="flex flex-col px-8 text-center justify-evenly lg:mt-8 lg:flex-row sm:px-0">
              <div className="lg:w-1/2 lg:mr-14">
                <img
                  className="object-cover object-top w-20 h-20 mx-auto rounded-full"
                  src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Dariusz_Barbarowicz.jpeg"
                  alt="Dariusz Barbarowicz"
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
                  alt="Artur Leszczyński"
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
                  alt="Ewelina Grochowicz"
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
                  src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Pawel_Olech.jpeg"
                  alt="Paweł Olech"
                />
                <p className="mt-4 mb-2 font-serif">Paweł Olech</p>
                <p className="font-serif text-sm font-light">
                  {t("zamowienia")}
                </p>
              </div>
            </div>
            <div className="flex flex-col px-8 text-center justify-evenly lg:mt-8 lg:flex-row sm:px-0">
              <div className="mt-8 lg:w-1/2 lg:mt-0 lg:mr-14">
                <img
                  className="object-cover object-top w-20 h-20 mx-auto rounded-full"
                  src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Mirosław_Łosobik.jpeg"
                  alt="Mirosław Łosobik"
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
              <div className="mt-8 lg:w-1/2 lg:mt-0">
                <img
                  className="object-cover object-top w-20 h-20 mx-auto rounded-full"
                  src="/pracownicy/Janusz_Mazurkiewicz.jpg"
                  alt="Janusz Mazurkiewicz"
                />
                <p className="mt-4 mb-2 font-serif">Janusz Mazurkiewicz</p>
                <p className="font-serif text-sm font-light">
                  {t("Kontroler")}
                </p>
              </div>
            </div>
            <div className="flex flex-col px-8 text-center justify-evenly lg:mt-8 lg:flex-row sm:px-0">
              <div className="mt-8 lg:w-1/2 lg:mr-14 lg:mt-0">
                <img
                  className="object-cover object-top w-20 h-20 mx-auto rounded-full"
                  src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Kateryna_Halkina.jpeg"
                  alt="Kateryna Halkina"
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
              <div className="mt-8 lg:w-1/2 lg:mt-0">
                <img
                  className="object-cover object-top w-20 h-20 mx-auto rounded-full"
                  src="/pracownicy/Agnieszka_Jurkowska.jpeg"
                  alt="Agnieszka Jurkowska"
                />
                <p className="mt-4 mb-2 font-serif">Agnieszka Jurkowska</p>
                <p className="font-serif text-sm font-light">
                  {t("rekrutacja")
                    .split("\n")
                    .map((rekrutacja) => (
                      <p>{rekrutacja}</p>
                    ))}
                </p>
              </div>
            </div>
            <div className="flex flex-col px-8 text-center justify-evenly lg:mt-8 lg:flex-row sm:px-0">
              <div className="mt-8 lg:w-1/2 lg:mr-14 lg:mt-0">
                <img
                  className="object-cover object-top w-20 h-20 mx-auto rounded-full"
                  src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Monika_Zdybel.jpeg"
                  alt="Monika Zdybel"
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
              <div className="mt-8 lg:w-1/2 lg:mt-0">
                <img
                  className="object-cover object-top w-20 h-20 mx-auto rounded-full"
                  src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Monika_Spiewak.jpeg"
                  alt="Monika Śpiewak"
                />
                <p className="mt-4 mb-2 font-serif">Monika Śpiewak</p>
                <p className="font-serif text-sm font-light">
                  {t("marketing")}
                </p>
              </div>
            </div>
            <div className="flex flex-col px-8 text-center justify-evenly lg:mt-8 lg:flex-row sm:px-0">
              <div className="mt-8 lg:w-1/2 lg:mt-0">
                <img
                  className="object-cover object-top w-20 h-20 mx-auto rounded-full"
                  src="/pracownicy/Michal_Stec.jpg"
                  alt="Michał Stec"
                />
                <p className="mt-4 mb-2 font-serif">Michał Stec</p>
                <p className="font-serif text-sm font-light">{t("budowa")}</p>
              </div>
              <div className="mt-8 lg:w-1/2 lg:mt-0"></div>
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
