import Navigation from "../components/_nav";
import Cta from "../components/_cta";
import Footer from "../components/_footer";
import { Link } from "react-scroll";
import useTranslation from "next-translate/useTranslation";
import { NextSeo } from "next-seo";

const Kontakt = () => {
  const { t, lang } = useTranslation("common");
  const title = t("title");
  return (
    <>
      <NextSeo
        title={`Damansdak Polska - ${t("Kontakt")}`}
        description={`${t("contactText")}`}
        canonical="https://damansdak.pl/kontakt/"
        languageAlternates={[
          {
            hrefLang: "de",
            href: "https://damansdak.pl/de/kontakt/",
          },
          {
            hrefLang: "ru",
            href: "https://damansdak.pl/ru/kontakt/",
          },
          {
            hrefLang: "en",
            href: "https://damansdak.pl/en/kontakt/",
          },
        ]}
        openGraph={{
          type: "website",
          url: "https://damansdak.pl/kontakt/",
          title: `Damansdak Polska – ${t("Kontakt")}`,
          description: t("contactText"),
          images: [
            {
              url: "https://damansdak.mo.cloudinary.net/hero.webp",
              width: 800,
              height: 600,
              alt: `Damansdak Polska – ${t("Kontakt")}`,
            },
            {
              url: "https://damansdak.mo.cloudinary.net/hero.webp",
              width: 900,
              height: 800,
              alt: `Damansdak Polska – ${t("Kontakt")}`,
            },
            { url: "https://damansdak.mo.cloudinary.net/hero.webp" },
            { url: "https://damansdak.mo.cloudinary.net/hero.webp" },
          ],
          site_name: `Damansdak Polska – ${t("Kontakt")}`,
        }}
        twitter={{
          handle: "@BDamans",
          site: "@bdamans",
          cardType: "summary_large_image",
        }}
      />
      <Navigation />
      <section className="lg:pt-20">
        <div className="relative flex items-center overflow-hidden text-center bg-top bg-cover py-36">
          <img
            className="absolute object-cover w-full h-full"
            src="https://damansdak.s3.eu-central-1.amazonaws.com/contact_us.jpg"
            alt="Damansdak Polska Kontakt"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black to-primary opacity-70"></div>
          <div className="relative max-w-4xl px-4 mx-auto">
            <p className="font-serif font-light text-center text-white uppercase text-md lg:text-left">
              {t("Kontakt")}
            </p>
            <h1 className="text-3xl text-white lg:text-5xl font-heading">
              {t("contactSlider")}
            </h1>
          </div>
        </div>
        <div className="py-4 mb-6 bg-pattern"></div>
        <div className="px-8 py-8 mx-auto lg:my-16 lg:w-3/5 sm:px-0 sm:w-4/5">
          <div className="text-3xl lg:w-1/3 sm:text-5xl 2xl:text-7xl">
            {t("Kontakt")}
          </div>
          <p className="mt-6 font-serif text-lg font-light text-gray-500 lg:w-10/12">
            {t("contactText")}
          </p>
          <div className="flex flex-col justify-between mt-8 lg:flex-row sm:px-0 sm:mt-16">
            <div className="flex items-center text-xl sm:space-x-6">
              <svg
                className="hidden w-8 h-8 sm:block"
                width="76px"
                height="52px"
                viewBox="0 0 76 52"
                version="1.1"
              >
                <g
                  id=""
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="email-svgrepo-com"
                    fill="CurrentColor"
                    fill-rule="nonzero"
                  >
                    <path
                      d="M66.097,0 L9.197,0 C4.126,0 0,4.126 0,9.197 L0,41.919 C0,46.99 4.126,51.116 9.197,51.116 L66.097,51.116 C71.168,51.116 75.2940002,46.99 75.2940002,41.919 L75.2940002,9.198 C75.295,4.126 71.169,0 66.097,0 Z M61.603,6 L37.647,21.434 L13.691,6 L61.603,6 Z M66.097,45.117 L9.197,45.117 C7.434,45.117 6,43.682 6,41.92 L6,9.368 L35.796,28.528 C35.836,28.553 35.879,28.57 35.92,28.593 C35.963,28.617 36.007,28.64 36.051,28.662 C36.282,28.781 36.52,28.877 36.763,28.94 C36.788,28.947 36.813,28.95 36.838,28.956 C37.105,29.019 37.375,29.058 37.645,29.058 C37.646,29.058 37.647,29.058 37.647,29.058 C37.649,29.058 37.65,29.058 37.651,29.058 C37.921,29.058 38.191,29.02 38.458,28.956 C38.483,28.95 38.508,28.947 38.533,28.94 C38.776,28.877 39.013,28.781 39.245,28.662 C39.289,28.64 39.333,28.617 39.376,28.593 C39.417,28.57 39.46,28.553 39.5,28.528 L69.296,9.368 L69.296,41.919 C69.295,43.682 67.86,45.117 66.097,45.117 Z"
                      id="Shape"
                    ></path>
                  </g>
                </g>
              </svg>
              <p className="relative z-40 cursor-pointer">
                <Link href="mailto:info@damansdak.pl">info@damansdak.pl</Link>
              </p>
            </div>
            <div className="flex items-center mt-8 text-xl lg:mt-0 sm:space-x-6 text-primary">
              <svg
                className="hidden w-8 h-8 sm:block"
                width="77px"
                height="77px"
                viewBox="0 0 77 77"
                version="1.1"
              >
                <g
                  id=""
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="phone-svgrepo-com-3"
                    fill="currentColor"
                    fill-rule="nonzero"
                  >
                    <path
                      d="M59.6061971,41.7009419 C58.8469608,40.9404448 57.8164396,40.5130933 56.7418033,40.5130933 C55.6671671,40.5130933 54.6366459,40.9404448 53.8774096,41.7009419 L47.4193563,48.1587289 C44.4253153,47.2674409 38.8383294,45.2417862 35.2973391,41.7009419 C31.7563488,38.1600975 29.7306106,32.5733419 28.8392859,29.5794244 L35.2973391,23.1216373 C36.0578675,22.3624323 36.4852367,21.3319536 36.4852367,20.2573616 C36.4852367,19.1827696 36.0578675,18.1522909 35.2973391,17.3930859 L19.0914338,1.1878486 C18.3321975,0.427351567 17.3016763,0 16.22704,0 C15.1524037,0 14.1218825,0.427351567 13.3626463,1.1878486 L2.37504246,12.1749995 C0.835481451,13.714497 -0.0315344841,15.8292805 0.000877326584,17.9886284 C0.0940612822,23.7576929 1.62146786,43.7954688 17.4141226,59.5874725 C33.2067773,75.3794763 53.2453793,76.9027686 59.018733,77 L59.1321744,77 C61.2713539,77 63.2930406,76.1573277 64.8244986,74.6259327 L75.8121024,63.6387818 C76.5726308,62.8795769 77,61.8490981 77,60.7745062 C77,59.6999142 76.5726308,58.6694354 75.8121024,57.9102305 L59.6061971,41.7009419 L59.6061971,41.7009419 Z M59.0916596,68.89333 C54.0354172,68.8082525 36.7356132,67.4510639 23.1429101,53.8548698 C9.5056408,40.2181626 8.18485952,22.8583022 8.10382999,17.9035509 L16.22704,9.78067568 L26.7041578,20.2573616 L21.4655989,25.4957046 C20.4981656,26.4623687 20.0837414,27.8518513 20.3635974,29.1904987 C20.4608328,29.6563992 22.8390494,40.7043198 29.5645001,47.4294932 C36.2899508,54.1546667 47.3383268,56.5327853 47.8042466,56.6300167 C49.1425317,56.9178331 50.5352453,56.5040065 51.499193,55.5321119 L56.7418033,50.2937689 L67.2189211,60.7704548 L59.0916596,68.89333 L59.0916596,68.89333 Z"
                      id="Shape"
                    ></path>
                  </g>
                </g>
              </svg>
              <div className="">
                <p className="relative z-40 cursor-pointer">
                  {t("OddzialPrzemysl")}
                </p>
                <p className="relative z-40 cursor-pointer">+48 532 197 746</p>
              </div>
            </div>
            <div className="flex items-center mt-8 text-xl lg:mt-0 sm:space-x-6 text-primary">
              <svg
                className="hidden w-8 h-8 sm:block"
                width="77px"
                height="77px"
                viewBox="0 0 77 77"
                version="1.1"
              >
                <g
                  id=""
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="phone-svgrepo-com-3"
                    fill="currentColor"
                    fill-rule="nonzero"
                  >
                    <path
                      d="M59.6061971,41.7009419 C58.8469608,40.9404448 57.8164396,40.5130933 56.7418033,40.5130933 C55.6671671,40.5130933 54.6366459,40.9404448 53.8774096,41.7009419 L47.4193563,48.1587289 C44.4253153,47.2674409 38.8383294,45.2417862 35.2973391,41.7009419 C31.7563488,38.1600975 29.7306106,32.5733419 28.8392859,29.5794244 L35.2973391,23.1216373 C36.0578675,22.3624323 36.4852367,21.3319536 36.4852367,20.2573616 C36.4852367,19.1827696 36.0578675,18.1522909 35.2973391,17.3930859 L19.0914338,1.1878486 C18.3321975,0.427351567 17.3016763,0 16.22704,0 C15.1524037,0 14.1218825,0.427351567 13.3626463,1.1878486 L2.37504246,12.1749995 C0.835481451,13.714497 -0.0315344841,15.8292805 0.000877326584,17.9886284 C0.0940612822,23.7576929 1.62146786,43.7954688 17.4141226,59.5874725 C33.2067773,75.3794763 53.2453793,76.9027686 59.018733,77 L59.1321744,77 C61.2713539,77 63.2930406,76.1573277 64.8244986,74.6259327 L75.8121024,63.6387818 C76.5726308,62.8795769 77,61.8490981 77,60.7745062 C77,59.6999142 76.5726308,58.6694354 75.8121024,57.9102305 L59.6061971,41.7009419 L59.6061971,41.7009419 Z M59.0916596,68.89333 C54.0354172,68.8082525 36.7356132,67.4510639 23.1429101,53.8548698 C9.5056408,40.2181626 8.18485952,22.8583022 8.10382999,17.9035509 L16.22704,9.78067568 L26.7041578,20.2573616 L21.4655989,25.4957046 C20.4981656,26.4623687 20.0837414,27.8518513 20.3635974,29.1904987 C20.4608328,29.6563992 22.8390494,40.7043198 29.5645001,47.4294932 C36.2899508,54.1546667 47.3383268,56.5327853 47.8042466,56.6300167 C49.1425317,56.9178331 50.5352453,56.5040065 51.499193,55.5321119 L56.7418033,50.2937689 L67.2189211,60.7704548 L59.0916596,68.89333 L59.0916596,68.89333 Z"
                      id="Shape"
                    ></path>
                  </g>
                </g>
              </svg>
              <div className="">
                <p className="relative z-40 cursor-pointer">
                  {t("OddzialWarszawa")}
                </p>
                <p className="relative z-40 cursor-pointer">
                  <Link href="tel:+48538621732">+48 538 621 732</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-8 mx-auto lg:my-8 lg:w-3/5 sm:px-0 sm:w-4/5">
          <div className="">
            <p className="z-40 text-3xl 2xl:text-4xl">
              {t("Dzialofertowania")}
            </p>
            <div className="flex mt-2 font-serif text-lg font-light text-gray-500">
              <svg
                className="hidden w-5 h-5 mr-3 sm:block"
                width="76px"
                height="52px"
                viewBox="0 0 76 52"
                version="1.1"
              >
                <g
                  id=""
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="email-svgrepo-com"
                    fill="CurrentColor"
                    fill-rule="nonzero"
                  >
                    <path
                      d="M66.097,0 L9.197,0 C4.126,0 0,4.126 0,9.197 L0,41.919 C0,46.99 4.126,51.116 9.197,51.116 L66.097,51.116 C71.168,51.116 75.2940002,46.99 75.2940002,41.919 L75.2940002,9.198 C75.295,4.126 71.169,0 66.097,0 Z M61.603,6 L37.647,21.434 L13.691,6 L61.603,6 Z M66.097,45.117 L9.197,45.117 C7.434,45.117 6,43.682 6,41.92 L6,9.368 L35.796,28.528 C35.836,28.553 35.879,28.57 35.92,28.593 C35.963,28.617 36.007,28.64 36.051,28.662 C36.282,28.781 36.52,28.877 36.763,28.94 C36.788,28.947 36.813,28.95 36.838,28.956 C37.105,29.019 37.375,29.058 37.645,29.058 C37.646,29.058 37.647,29.058 37.647,29.058 C37.649,29.058 37.65,29.058 37.651,29.058 C37.921,29.058 38.191,29.02 38.458,28.956 C38.483,28.95 38.508,28.947 38.533,28.94 C38.776,28.877 39.013,28.781 39.245,28.662 C39.289,28.64 39.333,28.617 39.376,28.593 C39.417,28.57 39.46,28.553 39.5,28.528 L69.296,9.368 L69.296,41.919 C69.295,43.682 67.86,45.117 66.097,45.117 Z"
                      id="Shape"
                    ></path>
                  </g>
                </g>
              </svg>
              <p className="">
                <a href="mailto:oferty@damansdak.pl">oferty@damansdak.pl</a>
              </p>
            </div>
            <div className="flex mt-2 font-serif text-lg font-light text-gray-500">
              <svg
                className="hidden w-5 h-5 mr-3 sm:block"
                width="77px"
                height="77px"
                viewBox="0 0 77 77"
                version="1.1"
              >
                <g
                  id=""
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="phone-svgrepo-com-3"
                    fill="currentColor"
                    fill-rule="nonzero"
                  >
                    <path
                      d="M59.6061971,41.7009419 C58.8469608,40.9404448 57.8164396,40.5130933 56.7418033,40.5130933 C55.6671671,40.5130933 54.6366459,40.9404448 53.8774096,41.7009419 L47.4193563,48.1587289 C44.4253153,47.2674409 38.8383294,45.2417862 35.2973391,41.7009419 C31.7563488,38.1600975 29.7306106,32.5733419 28.8392859,29.5794244 L35.2973391,23.1216373 C36.0578675,22.3624323 36.4852367,21.3319536 36.4852367,20.2573616 C36.4852367,19.1827696 36.0578675,18.1522909 35.2973391,17.3930859 L19.0914338,1.1878486 C18.3321975,0.427351567 17.3016763,0 16.22704,0 C15.1524037,0 14.1218825,0.427351567 13.3626463,1.1878486 L2.37504246,12.1749995 C0.835481451,13.714497 -0.0315344841,15.8292805 0.000877326584,17.9886284 C0.0940612822,23.7576929 1.62146786,43.7954688 17.4141226,59.5874725 C33.2067773,75.3794763 53.2453793,76.9027686 59.018733,77 L59.1321744,77 C61.2713539,77 63.2930406,76.1573277 64.8244986,74.6259327 L75.8121024,63.6387818 C76.5726308,62.8795769 77,61.8490981 77,60.7745062 C77,59.6999142 76.5726308,58.6694354 75.8121024,57.9102305 L59.6061971,41.7009419 L59.6061971,41.7009419 Z M59.0916596,68.89333 C54.0354172,68.8082525 36.7356132,67.4510639 23.1429101,53.8548698 C9.5056408,40.2181626 8.18485952,22.8583022 8.10382999,17.9035509 L16.22704,9.78067568 L26.7041578,20.2573616 L21.4655989,25.4957046 C20.4981656,26.4623687 20.0837414,27.8518513 20.3635974,29.1904987 C20.4608328,29.6563992 22.8390494,40.7043198 29.5645001,47.4294932 C36.2899508,54.1546667 47.3383268,56.5327853 47.8042466,56.6300167 C49.1425317,56.9178331 50.5352453,56.5040065 51.499193,55.5321119 L56.7418033,50.2937689 L67.2189211,60.7704548 L59.0916596,68.89333 L59.0916596,68.89333 Z"
                      id="Shape"
                    ></path>
                  </g>
                </g>
              </svg>
              <p className="">
                <a href="tel:+48538621732">+48 538 621 732</a>
              </p>
            </div>
          </div>
          <div className="mt-8 lg:mt-16">
            <p className="z-40 text-3xl 2xl:text-4xl">{t("Dzialrealizacji")}</p>
            <div className="flex mt-2 font-serif text-lg font-light text-gray-500">
              <svg
                className="hidden w-5 h-5 mr-3 sm:block"
                width="76px"
                height="52px"
                viewBox="0 0 76 52"
                version="1.1"
              >
                <g
                  id=""
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="email-svgrepo-com"
                    fill="CurrentColor"
                    fill-rule="nonzero"
                  >
                    <path
                      d="M66.097,0 L9.197,0 C4.126,0 0,4.126 0,9.197 L0,41.919 C0,46.99 4.126,51.116 9.197,51.116 L66.097,51.116 C71.168,51.116 75.2940002,46.99 75.2940002,41.919 L75.2940002,9.198 C75.295,4.126 71.169,0 66.097,0 Z M61.603,6 L37.647,21.434 L13.691,6 L61.603,6 Z M66.097,45.117 L9.197,45.117 C7.434,45.117 6,43.682 6,41.92 L6,9.368 L35.796,28.528 C35.836,28.553 35.879,28.57 35.92,28.593 C35.963,28.617 36.007,28.64 36.051,28.662 C36.282,28.781 36.52,28.877 36.763,28.94 C36.788,28.947 36.813,28.95 36.838,28.956 C37.105,29.019 37.375,29.058 37.645,29.058 C37.646,29.058 37.647,29.058 37.647,29.058 C37.649,29.058 37.65,29.058 37.651,29.058 C37.921,29.058 38.191,29.02 38.458,28.956 C38.483,28.95 38.508,28.947 38.533,28.94 C38.776,28.877 39.013,28.781 39.245,28.662 C39.289,28.64 39.333,28.617 39.376,28.593 C39.417,28.57 39.46,28.553 39.5,28.528 L69.296,9.368 L69.296,41.919 C69.295,43.682 67.86,45.117 66.097,45.117 Z"
                      id="Shape"
                    ></path>
                  </g>
                </g>
              </svg>
              <p className="">
                <a href="mailto:realizacja@damansdak.pl">
                  realizacja@damansdak.pl
                </a>
              </p>
            </div>
            <div className="flex mt-2 font-serif text-lg font-light text-gray-500">
              <svg
                className="hidden w-5 h-5 mr-3 sm:block"
                width="77px"
                height="77px"
                viewBox="0 0 77 77"
                version="1.1"
              >
                <g
                  id=""
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="phone-svgrepo-com-3"
                    fill="currentColor"
                    fill-rule="nonzero"
                  >
                    <path
                      d="M59.6061971,41.7009419 C58.8469608,40.9404448 57.8164396,40.5130933 56.7418033,40.5130933 C55.6671671,40.5130933 54.6366459,40.9404448 53.8774096,41.7009419 L47.4193563,48.1587289 C44.4253153,47.2674409 38.8383294,45.2417862 35.2973391,41.7009419 C31.7563488,38.1600975 29.7306106,32.5733419 28.8392859,29.5794244 L35.2973391,23.1216373 C36.0578675,22.3624323 36.4852367,21.3319536 36.4852367,20.2573616 C36.4852367,19.1827696 36.0578675,18.1522909 35.2973391,17.3930859 L19.0914338,1.1878486 C18.3321975,0.427351567 17.3016763,0 16.22704,0 C15.1524037,0 14.1218825,0.427351567 13.3626463,1.1878486 L2.37504246,12.1749995 C0.835481451,13.714497 -0.0315344841,15.8292805 0.000877326584,17.9886284 C0.0940612822,23.7576929 1.62146786,43.7954688 17.4141226,59.5874725 C33.2067773,75.3794763 53.2453793,76.9027686 59.018733,77 L59.1321744,77 C61.2713539,77 63.2930406,76.1573277 64.8244986,74.6259327 L75.8121024,63.6387818 C76.5726308,62.8795769 77,61.8490981 77,60.7745062 C77,59.6999142 76.5726308,58.6694354 75.8121024,57.9102305 L59.6061971,41.7009419 L59.6061971,41.7009419 Z M59.0916596,68.89333 C54.0354172,68.8082525 36.7356132,67.4510639 23.1429101,53.8548698 C9.5056408,40.2181626 8.18485952,22.8583022 8.10382999,17.9035509 L16.22704,9.78067568 L26.7041578,20.2573616 L21.4655989,25.4957046 C20.4981656,26.4623687 20.0837414,27.8518513 20.3635974,29.1904987 C20.4608328,29.6563992 22.8390494,40.7043198 29.5645001,47.4294932 C36.2899508,54.1546667 47.3383268,56.5327853 47.8042466,56.6300167 C49.1425317,56.9178331 50.5352453,56.5040065 51.499193,55.5321119 L56.7418033,50.2937689 L67.2189211,60.7704548 L59.0916596,68.89333 L59.0916596,68.89333 Z"
                      id="Shape"
                    ></path>
                  </g>
                </g>
              </svg>
              <p className="">
                <a href="tel:+48538621723">+48 538 621 723</a>
              </p>
            </div>
          </div>
          <div className="mt-8 lg:mt-16">
            <p className="z-40 text-3xl 2xl:text-4xl">{t("Dzialrekrutacji")}</p>
            <div className="flex mt-2 font-serif text-lg font-light text-gray-500">
              <svg
                className="hidden w-5 h-5 mr-3 sm:block"
                width="76px"
                height="52px"
                viewBox="0 0 76 52"
                version="1.1"
              >
                <g
                  id=""
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="email-svgrepo-com"
                    fill="CurrentColor"
                    fill-rule="nonzero"
                  >
                    <path
                      d="M66.097,0 L9.197,0 C4.126,0 0,4.126 0,9.197 L0,41.919 C0,46.99 4.126,51.116 9.197,51.116 L66.097,51.116 C71.168,51.116 75.2940002,46.99 75.2940002,41.919 L75.2940002,9.198 C75.295,4.126 71.169,0 66.097,0 Z M61.603,6 L37.647,21.434 L13.691,6 L61.603,6 Z M66.097,45.117 L9.197,45.117 C7.434,45.117 6,43.682 6,41.92 L6,9.368 L35.796,28.528 C35.836,28.553 35.879,28.57 35.92,28.593 C35.963,28.617 36.007,28.64 36.051,28.662 C36.282,28.781 36.52,28.877 36.763,28.94 C36.788,28.947 36.813,28.95 36.838,28.956 C37.105,29.019 37.375,29.058 37.645,29.058 C37.646,29.058 37.647,29.058 37.647,29.058 C37.649,29.058 37.65,29.058 37.651,29.058 C37.921,29.058 38.191,29.02 38.458,28.956 C38.483,28.95 38.508,28.947 38.533,28.94 C38.776,28.877 39.013,28.781 39.245,28.662 C39.289,28.64 39.333,28.617 39.376,28.593 C39.417,28.57 39.46,28.553 39.5,28.528 L69.296,9.368 L69.296,41.919 C69.295,43.682 67.86,45.117 66.097,45.117 Z"
                      id="Shape"
                    ></path>
                  </g>
                </g>
              </svg>
              <p className="">
                <a href="mailto:rekrutacja@damansdak.pl">
                  rekrutacja@damansdak.pl
                </a>
              </p>
            </div>
            <div className="flex mt-2 font-serif text-lg font-light text-gray-500">
              <svg
                className="hidden w-5 h-5 mr-3 sm:block"
                width="77px"
                height="77px"
                viewBox="0 0 77 77"
                version="1.1"
              >
                <g
                  id=""
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="phone-svgrepo-com-3"
                    fill="currentColor"
                    fill-rule="nonzero"
                  >
                    <path
                      d="M59.6061971,41.7009419 C58.8469608,40.9404448 57.8164396,40.5130933 56.7418033,40.5130933 C55.6671671,40.5130933 54.6366459,40.9404448 53.8774096,41.7009419 L47.4193563,48.1587289 C44.4253153,47.2674409 38.8383294,45.2417862 35.2973391,41.7009419 C31.7563488,38.1600975 29.7306106,32.5733419 28.8392859,29.5794244 L35.2973391,23.1216373 C36.0578675,22.3624323 36.4852367,21.3319536 36.4852367,20.2573616 C36.4852367,19.1827696 36.0578675,18.1522909 35.2973391,17.3930859 L19.0914338,1.1878486 C18.3321975,0.427351567 17.3016763,0 16.22704,0 C15.1524037,0 14.1218825,0.427351567 13.3626463,1.1878486 L2.37504246,12.1749995 C0.835481451,13.714497 -0.0315344841,15.8292805 0.000877326584,17.9886284 C0.0940612822,23.7576929 1.62146786,43.7954688 17.4141226,59.5874725 C33.2067773,75.3794763 53.2453793,76.9027686 59.018733,77 L59.1321744,77 C61.2713539,77 63.2930406,76.1573277 64.8244986,74.6259327 L75.8121024,63.6387818 C76.5726308,62.8795769 77,61.8490981 77,60.7745062 C77,59.6999142 76.5726308,58.6694354 75.8121024,57.9102305 L59.6061971,41.7009419 L59.6061971,41.7009419 Z M59.0916596,68.89333 C54.0354172,68.8082525 36.7356132,67.4510639 23.1429101,53.8548698 C9.5056408,40.2181626 8.18485952,22.8583022 8.10382999,17.9035509 L16.22704,9.78067568 L26.7041578,20.2573616 L21.4655989,25.4957046 C20.4981656,26.4623687 20.0837414,27.8518513 20.3635974,29.1904987 C20.4608328,29.6563992 22.8390494,40.7043198 29.5645001,47.4294932 C36.2899508,54.1546667 47.3383268,56.5327853 47.8042466,56.6300167 C49.1425317,56.9178331 50.5352453,56.5040065 51.499193,55.5321119 L56.7418033,50.2937689 L67.2189211,60.7704548 L59.0916596,68.89333 L59.0916596,68.89333 Z"
                      id="Shape"
                    ></path>
                  </g>
                </g>
              </svg>
              <p className="">
                <a href="tel:+48883846010">+48 883 846 010</a>
              </p>
            </div>
          </div>
        </div>
        <Cta />
        <Footer />
      </section>
    </>
  );
};

export default Kontakt;
