import useTranslation from "next-translate/useTranslation";
import Navigation from "../components/_nav";
import Cta from "../components/_cta";
import Footer from "../components/_footer";
import Link from "next/link";

const Realizacje = () => {
  const { t, lang } = useTranslation("common");
  return (
    <>
      <Navigation />
      <section className="lg:pt-20">
        <div className="relative flex items-center overflow-hidden text-center bg-cover py-36">
          <img
            className="absolute object-cover w-full h-full bg-center"
            src="https://damansdak.s3.eu-central-1.amazonaws.com/ruda_slaska_realizacja.jpeg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black to-primary opacity-70"></div>
          <div className="relative max-w-4xl px-4 mx-auto">
            <p className="font-serif font-light text-center text-white uppercase text-md lg:text-left">
              {t("wszystkierealizacje")}
            </p>
            <h2 className="text-3xl text-center text-white lg:text-5xl lg:text-left font-heading">
              {t("naszerealizacje")}
            </h2>
          </div>
        </div>
        <div className="py-4 mb-6 bg-pattern"></div>
        {/* REALIZACJE */}
        <div className="py-4 bg-white lg:py-16">
          <div className="px-8 mx-auto sm:w-4/5 sm:px-0 lg:w-3/5">
            <div className="w-1/3 pb-8 text-3xl sm:pb-16 sm:text-5xl 2xl:text-7xl">
              {t("Realizacje")}
            </div>
          </div>
          <div className="px-8 mx-auto sm:w-4/5 sm:px-0 lg:w-3/5">
            {/* REALIZACJA 1 */}

            <Link href="/realizacje/lublin">
              <div className="relative mx-auto mb-8 sm:mb-16">
                <img
                  src="https://damansdak.s3.eu-central-1.amazonaws.com/lublin_realizacja.jpeg"
                  layout="fill"
                  alt=""
                  className=""
                />
                <div className="absolute bottom-0 right-0 grid items-center p-2 mx-auto bg-black bg-opacity-50 hover:bg-opacity-100 hover:bg-black lg:bg-opacity-80 sm:w-2/3 lg:grid-cols-2 lg:p-8 sm:px-8 text-md">
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
                      <button className="flex items-center justify-center ">
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

            {/* REALIZACJA 2 */}

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
                    <Link href="/realizacje/ruda-slaska">
                      <button className="flex items-center justify-center ">
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
                    </Link>
                  </div>
                </div>
              </div>
            </Link>

            {/* REALIZACJA 3 */}

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

            {/* REALIZACJA 4 */}

            <Link href="/realizacje/zory">
              <div className="relative mx-auto mb-8 sm:mb-16">
                <img
                  src="https://damansdak.s3.eu-central-1.amazonaws.com/zory/zory7.jpg"
                  layout="fill"
                  alt=""
                  className=""
                />
                <div className="absolute bottom-0 right-0 grid items-center p-2 mx-auto bg-black bg-opacity-50 hover:bg-opacity-100 hover:bg-black lg:bg-opacity-80 sm:w-2/3 lg:grid-cols-2 lg:p-8 sm:px-8 text-md">
                  <p className="text-xs text-white sm:text-base lg:px-8 2xl:text-2xl">
                    {t("Miejsce")}
                    <b>Żory</b>
                    <br></br>
                    {t("Powierzchnia")}
                    <b>23 000 m²</b>
                    <br></br>
                    {t("Generalnywykonawca")}
                    <b>Joka Budownictwo Sp. z o.o.</b>
                    <br></br>
                    {t("Inwestor")}
                    <b>Proma Polska</b>
                  </p>
                  <div className="z-40 hidden mx-auto text-white transition duration-150 ease-in-out hover:text-primary lg:block">
                    <a href="/realizacje/zory">
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

            {/* REALIZACJA 5 */}

            <Link href="/realizacje/niemcy">
              <div className="relative mx-auto mb-8 sm:mb-16">
                <img
                  src="https://damansdak.s3.eu-central-1.amazonaws.com/niemcy/niemcy4.jpg"
                  layout="fill"
                  alt=""
                  className=""
                />
                <div className="absolute bottom-0 right-0 grid items-center p-2 mx-auto bg-black bg-opacity-50 hover:bg-opacity-100 hover:bg-black lg:bg-opacity-80 sm:w-2/3 lg:grid-cols-2 lg:p-8 sm:px-8 text-md">
                  <p className="text-xs text-white sm:text-base lg:px-8 2xl:text-2xl">
                    {t("Kraj")}
                    <b>{t("Niemcy")}</b>
                    <br></br>
                    {t("Miejsce")}
                    <b>Bedburg</b>
                    <br></br>
                    {t("Powierzchnia")}
                    <b>53 000m²</b>
                  </p>
                  <div className="z-40 hidden mx-auto text-white transition duration-150 ease-in-out hover:text-primary lg:block">
                    <a href="/realizacje/niemcy">
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

            {/* REALIZACJA 6 */}

            <Link href="/realizacje/litwa">
              <div className="relative mx-auto mb-8 sm:mb-16">
                <img
                  src="https://damansdak.s3.eu-central-1.amazonaws.com/litwa/litwa4.jpg"
                  layout="fill"
                  alt=""
                  className=""
                />
                <div className="absolute bottom-0 right-0 grid items-center p-2 mx-auto bg-black bg-opacity-50 hover:bg-opacity-100 hover:bg-black lg:bg-opacity-80 sm:w-2/3 lg:grid-cols-2 lg:p-8 sm:px-8 text-md">
                  <p className="text-xs text-white sm:text-base lg:px-8 2xl:text-2xl">
                    {t("Kraj")}
                    <b>{t("Litwa")}</b>
                    <br></br>
                    {t("Miejsce")}
                    <b>Wilno</b>
                    <br></br>
                    {t("Powierzchnia")}
                    <b>6 000m²</b>
                  </p>
                  <div className="z-40 hidden mx-auto text-white transition duration-150 ease-in-out hover:text-primary lg:block">
                    <a href="/realizacje/litwa">
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
          </div>
        </div>

        <Cta />

        <Footer />

        {/* REALIZACJE END */}
      </section>
    </>
  );
};

export default Realizacje;
