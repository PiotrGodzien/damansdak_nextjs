import LazyShow from "./LazyShow";
import Navigation from "../components/_nav";
import Cta from "../components/_cta";
import Footer from "../components/_footer";

const Realizacje = () => {
  return (
    <>
      <Navigation />
      <section className="lg:pt-20">
        <div className="relative flex items-center py-36 text-center bg-cover overflow-hidden">
          <img className="absolute bg-center object-cover w-full h-full" src="https://damansdak.s3.eu-central-1.amazonaws.com/ruda_slaska_realizacja.jpeg" alt="" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black to-primary opacity-70"></div>
          <div className="relative max-w-4xl mx-auto px-4">
            <p className="text-md text-white text-center lg:text-left font-light font-serif">WSZYSTKIE REALIZACJE</p>
            <h2 className="text-3xl  lg:text-5xl text-center lg:text-left text-white font-heading">Zobacz nasze dotychczasowe realizacje</h2>
          </div>
        </div>
        <div className="py-4 bg-pattern mb-6"></div>
        {/* REALIZACJE */}
        <div className="py-4 bg-white lg:py-16">
          <div className="px-8 mx-auto sm:w-4/5 sm:px-0 lg:w-3/5">
            <div className="w-1/3 pb-8 text-3xl  sm:pb-16 sm:text-5xl 2xl:text-7xl">Realizacje</div>
          </div>
          <div className="px-8 mx-auto sm:w-4/5 sm:px-0 lg:w-3/5">
            {/* REALIZACJA 1 */}
            <LazyShow>
              <a href="/realizacje/lublin">
                <div className="relative mx-auto mb-8 sm:mb-16">
                  <img src="https://damansdak.s3.eu-central-1.amazonaws.com/lublin_realizacja.jpeg" layout="fill" alt="" className="" />
                  <div className="absolute bottom-0 right-0 grid items-center p-2 mx-auto hover:bg-opacity-100 hover:bg-black bg-black bg-opacity-50 lg:bg-opacity-80 sm:w-2/3 lg:grid-cols-2 lg:p-8 sm:px-8 text-md">
                    <p className="text-xs text-white sm:text-base lg:px-8 2xl:text-2xl">
                      Miejsce: <b>Lublin</b>
                      <br></br>
                      Powierzchnia: <b>36 000 m²</b>
                      <br></br>
                      Wykonawca / projekt: <b>Bremer Sp. z o.o. dla 7R</b>
                    </p>
                    <div className="z-40 hidden mx-auto text-white transition duration-150 ease-in-out hover:text-primary lg:block">
                      <a href="/realizacje/lublin"><button className="flex items-center justify-center ">
                        zobacz więcej
                        <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                          <svg className="absolute w-8 h-8" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z" fill="currentColor" />
                          </svg>
                        </div>
                      </button></a>
                    </div>
                  </div>
                </div>
              </a>
            </LazyShow>
            {/* REALIZACJA 2 */}
            <LazyShow>
              <a href="/realizacje/ruda-slaska">
                <div className="relative mx-auto mb-8 sm:mb-16">
                  <img src="https://damansdak.s3.eu-central-1.amazonaws.com/ruda_slaska_realizacja.jpeg" layout="fill" alt="" className="" />
                  <div className="absolute bottom-0 right-0 grid items-center p-2 mx-auto hover:bg-opacity-100 hover:bg-black bg-black bg-opacity-50 lg:bg-opacity-80 sm:w-2/3 lg:grid-cols-2 lg:p-8 sm:px-8 text-md">
                    <p className="text-xs text-white sm:text-base lg:px-8 2xl:text-2xl">
                      Miejsce: <b>Ruda Śląska</b>
                      <br></br>
                      Powierzchnia: <b>60 000 m²</b>
                      <br></br>
                      Wykonawca / projekt: <b>Kajima Poland Sp. z o.o. dla Panattoni</b>
                    </p>
                    <div className="z-40 hidden mx-auto text-white transition duration-150 ease-in-out hover:text-primary lg:block">
                      <a href="/realizacje/ruda-slaska"><button className="flex items-center justify-center ">
                        zobacz więcej
                        <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                          <svg className="absolute w-8 h-8" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z" fill="currentColor" />
                          </svg>
                        </div>
                      </button></a>
                    </div>
                  </div>
                </div>
              </a>
            </LazyShow>
            {/* REALIZACJA 3 */}
            <LazyShow>
              <a href="/realizacje/blonie">
                <div className="relative mx-auto mb-8 sm:mb-16">
                  <img src="https://damansdak.s3.eu-central-1.amazonaws.com/blonie_realizacja.jpeg" layout="fill" alt="" className="" />
                  <div className="absolute bottom-0 right-0 grid items-center p-2 mx-auto hover:bg-opacity-100 hover:bg-black bg-black bg-opacity-50 lg:bg-opacity-80 sm:w-2/3 lg:grid-cols-2 lg:p-8 sm:px-8 text-md">
                    <p className="text-xs text-white sm:text-base lg:px-8 2xl:text-2xl">
                      Miejsce: <b>Błonie k. W-wy</b>
                      <br></br>
                      Powierzchnia: <b>34 000 m²</b>
                      <br></br>
                      Wykonawca / projekt: <b>Kajima Poland Sp. z o.o. dla P3 Logistigs</b>
                    </p>
                    <div className="z-40 hidden mx-auto text-white transition duration-150 ease-in-out hover:text-primary lg:block">
                      <a href="/realizacje/blonie"><button className="flex items-center justify-center">
                        zobacz więcej
                        <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                          <svg className="absolute w-8 h-8" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z" fill="currentColor" />
                          </svg>
                        </div>
                      </button></a>
                    </div>
                  </div>
                </div>
              </a>
            </LazyShow>
            {/* REALIZACJA 4 */}
            <LazyShow>
              <a href="/realizacje/zory">
                <div className="relative mx-auto mb-8 sm:mb-16">
                  <img src="https://damansdak.s3.eu-central-1.amazonaws.com/zory/zory6.jpg" layout="fill" alt="" className="" />
                  <div className="absolute bottom-0 right-0 grid items-center p-2 mx-auto hover:bg-opacity-100 hover:bg-black bg-black bg-opacity-50 lg:bg-opacity-80 sm:w-2/3 lg:grid-cols-2 lg:p-8 sm:px-8 text-md">
                    <p className="text-xs text-white sm:text-base lg:px-8 2xl:text-2xl">
                      Miejsce: <b>Żory</b>
                      <br></br>
                      Powierzchnia: <b>23 000 m²</b>
                      <br></br>
                      Wykonawca / projekt: <b>Joka Budownictwo Sp. z o.o. dla Proma Polska</b>
                    </p>
                    <div className="z-40 hidden mx-auto text-white transition duration-150 ease-in-out hover:text-primary lg:block">
                      <a href="/realizacje/zory"><button className="flex items-center justify-center">
                        zobacz więcej
                        <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                          <svg className="absolute w-8 h-8" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z" fill="currentColor" />
                          </svg>
                        </div>
                      </button></a>
                    </div>
                  </div>
                </div>
              </a>
            </LazyShow>
            {/* REALIZACJA 5 */}
            <LazyShow>
              <a href="/realizacje/niemcy">
                <div className="relative mx-auto mb-8 sm:mb-16">
                  <img src="https://damansdak.s3.eu-central-1.amazonaws.com/niemcy/niemcy4.jpg" layout="fill" alt="" className="" />
                  <div className="absolute bottom-0 right-0 grid items-center p-2 mx-auto hover:bg-opacity-100 hover:bg-black bg-black bg-opacity-50 lg:bg-opacity-80 sm:w-2/3 lg:grid-cols-2 lg:p-8 sm:px-8 text-md">
                    <p className="text-xs text-white sm:text-base lg:px-8 2xl:text-2xl"><b>Niemcy</b><br></br> Rozpoczęliśmy inwestycję.</p>
                    <div className="z-40 hidden mx-auto text-white transition duration-150 ease-in-out hover:text-primary lg:block">
                      <a href="/realizacje/niemcy"><button className="flex items-center justify-center">
                        zobacz więcej
                        <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                          <svg className="absolute w-8 h-8" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z" fill="currentColor" />
                          </svg>
                        </div>
                      </button></a>
                    </div>
                  </div>
                </div>
              </a>
            </LazyShow>
            {/* REALIZACJA 6 */}
            <LazyShow>
              <a href="/realizacje/litwa">
                <div className="relative mx-auto mb-8 sm:mb-16">
                  <img src="https://damansdak.s3.eu-central-1.amazonaws.com/litwa/litwa4.jpg" layout="fill" alt="" className="" />
                  <div className="absolute bottom-0 right-0 grid items-center p-2 mx-auto hover:bg-opacity-100 hover:bg-black bg-black bg-opacity-50 lg:bg-opacity-80 sm:w-2/3 lg:grid-cols-2 lg:p-8 sm:px-8 text-md">
                    <p className="text-xs text-white sm:text-base lg:px-8 2xl:text-2xl"><b>Litwa</b><br></br> Rozpoczęliśmy inwestycję.</p>
                    <div className="z-40 hidden mx-auto text-white transition duration-150 ease-in-out hover:text-primary lg:block">
                      <a href="/realizacje/litwa"><button className="flex items-center justify-center">
                        zobacz więcej
                        <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                          <svg className="absolute w-8 h-8" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z" fill="currentColor" />
                          </svg>
                        </div>
                      </button></a>
                    </div>
                  </div>
                </div>
              </a>
            </LazyShow>
          </div>
        </div>
        <LazyShow>
          <Cta />
        </LazyShow>
        <LazyShow>
          <Footer />
        </LazyShow>
        {/* REALIZACJE END */}
      </section>
    </>
  );
};

export default Realizacje;