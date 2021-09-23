import Head from 'next/head'
import { Link, Link as LinkScroll } from "react-scroll";
import ModalMain from '../components/_modal';

const Home = () => {
  return (

    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Blinker:wght@400;700&display=swap" rel="stylesheet" />
      </Head>


      <main className="relative bg-gray-50">
        <nav className="top-0 py-6 mx-auto text-2xl text-secondary bg-gray-50">
          <div className="flex items-center justify-between w-3/5 mx-auto ">


            <div className="h-auto w-72">
              <img src="http://verdepro.pl/logo_damsdak-dark.png" />
            </div>

            <div className="hidden space-x-12 lg:flex">
              <div className="">Oferta</div>
              <div className="">O nas</div>
              <div className="">Realizacje</div>
            </div>
            <div className="hidden lg:block">
              <div className="py-3 border-2 text-secondary border-primary px-9">Kontakt</div>
            </div>


            <div className="ml-auto lg:hidden">
              <svg className="p-3 border border-white" viewBox="0 0 100 80" fill="currentColor" width="40" height="40">
                <rect width="100" height="6"></rect>
                <rect y="30" width="100" height="6"></rect>
                <rect y="60" width="100" height="6"></rect>
              </svg>
            </div>
          </div>
        </nav>
        <div className="relative z-30 my-28">
          <div className="flex flex-col-reverse items-center justify-start w-3/5 mx-auto md:flex-row">
            <div className="items-center  mt-6 p-l space-y-7 md:space-y-2 lg:space-y-10">
              <h1 className="text-3xl font-bold lg:text-8xl">Dachy płaskie w technologii membran PVC i TPO</h1>
              <p className="text-gray-500 w-2/3 lg:text-3xl">Niezależnie od projektu, nasz zespół profesjonalistów jest gotowy, aby urzeczywistnić Twoje plany</p>
              <div className="flex space-x-2 w-1/3 justify-between">
                <button className="flex items-center w-full justify-center px-10 py-4 text-white bg-primary text-center">
                  <p className="lg:text-2xl">kontakt</p>
                </button>
                <button className="flex w-full items-center justify-center px-10 py-4 text-secondary border-2 border-secondary text-center">
                  <p className="lg:text-2xl">więcej</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col w-2/5">
            <div className="h-1/2">
            </div>
            <div className="bg-black h-1/2"></div>
          </div>
          <div className="relative z-0 w-3/5 ml-auto h-1/2">
            <img src="http://verdepro.pl/dach_wiatrak.jpg" alt="" className="" />
            <div class="absolute text-center bg-black bg-opacity-30 text-white inset-0 z-0 h-full flex-col items-baseline justify-around">
              <div className="flex h-1/2 items-center">
                <div className="w-1/3">
                  <p className="font-bold lg:text-7xl">453</p>
                  <p className="text-3xl">projektów</p>
                </div>
                <div className="w-1/3">
                  <p className="font-bold lg:text-7xl">453</p>
                  <p className="text-3xl">projektów</p>
                </div>
                <div className="w-1/3">
                  <p className="font-bold lg:text-7xl">453</p>
                  <p className="text-3xl">projektów</p>
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
        <div className="py-32 bg-black">
          <div className="w-3/5 mx-auto">
            <div className="w-2/5 text-7xl font-bold text-white">nasza oferta</div>
          </div>
          <div className="flex items-center pb-28 pt-40 w-4/5 mx-auto">

            <div className="flex-col text-white mx-auto">

              <h3 className="text-4xl font-bold">Dachy betonowe</h3>
              <p className="pr-6 text-xl mt-4">Tutaj będzie zajawka – krótki opis oferty.</p>
              <div className="">
                <button className="flex items-center text-xl justify-center mt-12 mr-auto">
                  zobacz więcej
                  <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                    <svg className="absolute w-12 h-12" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z" fill="currentColor" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex-col text-white mx-auto">

              <h3 className="text-4xl font-bold">Dachy stalowe</h3>
              <p className="pr-6 text-xl mt-4">Tutaj będzie zajawka – krótki opis oferty.</p>
              <div className="">
                <button className="flex items-center text-xl justify-center mt-12 mr-auto">
                  zobacz więcej
                  <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                    <svg className="absolute w-12 h-12" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z" fill="currentColor" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex-col text-white mx-auto">

              <h3 className="text-4xl font-bold">Renowacje dachów</h3>
              <p className="pr-6 text-xl mt-4">Tutaj będzie zajawka – krótki opis oferty.</p>
              <div className="">
                <button className="flex items-center text-xl justify-center mt-12 mr-auto">
                  zobacz więcej
                  <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                    <svg className="absolute w-12 h-12" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z" fill="currentColor" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>



        </div>
        <div className="py-16 bg-white">
          <div className="w-3/5 mx-auto flex justify-between items-center">
            <div className="w-2/3 text-4xl font-bold">Masz pytania? Zapraszamy do kontaktu z nami.</div>
            <button className="flex items-center w-1/4 justify-center px-10 py-4 text-white bg-primary text-center">
              <p className="lg:text-2xl">kontakt</p>
            </button>
          </div>
        </div>
        <div className="py-16">
          <div className="w-3/5 mx-auto">
            <div className="w-1/3 text-7xl font-bold pb-16">nasze realizacje</div>
          </div>

          <div className="w-3/5 mx-auto relative mb-16">
            <img src="http://verdepro.pl/dach_wiatrak.jpg" alt="" className="" />
            <div className="absolute bottom-0 grid grid-cols-2 items-center mx-auto right-0 bg-black h-1/3 w-2/3">
              <p className="text-white text-3xl text-center">PROJEKT DSV THOLEN NIDERLADNY 94 209 m2</p>
              <div className="text-white mx-auto">
                <button className="flex items-center text-xl justify-center">
                  zobacz więcej
                  <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                    <svg className="absolute w-12 h-12" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z" fill="currentColor" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="w-3/5 mx-auto relative mb-16">
            <img src="http://verdepro.pl/oferta2.jpg" alt="" className="" />
            <div className="absolute bottom-0 grid grid-cols-2 items-center mx-auto right-0 bg-black h-1/3 w-2/3">
              <p className="text-white text-3xl text-center">PROJEKT DSV THOLEN NIDERLADNY 94 209 m2</p>
              <div className="text-white mx-auto">
                <button className="flex items-center text-xl justify-center">
                  zobacz więcej
                  <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                    <svg className="absolute w-12 h-12" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z" fill="currentColor" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="w-3/5 mx-auto relative">
            <img src="http://verdepro.pl/oferta1.jpg" alt="" className="" />
            <div className="absolute bottom-0 grid grid-cols-2 items-center mx-auto right-0 bg-black h-1/3 w-2/3">
              <p className="text-white text-3xl text-center">PROJEKT DSV THOLEN NIDERLADNY 94 209 m2</p>
              <div className="text-white mx-auto">
                <button className="flex items-center text-xl justify-center">
                  zobacz więcej
                  <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                    <svg className="absolute w-12 h-12" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z" fill="currentColor" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

        </div>
        {/* LINES START */}
        <div className="absolute inset-0 z-20 flex justify-center mx-auto h-min-full">
          <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
          <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
          <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
          <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
          <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
        </div>
        {/* LINES END */}
      </main >


      {/* CERTIFICATE */}
      {/* <div className="sticky hidden h-20 mb-2 ml-auto bg-white border-l-2 shadow-2xl w-28 lg:block border-primary bottom-2">
        <a href="#link"><img className="w-20 h-auto px-3 pt-2 mx-auto" src="http://verdepro.pl/vcs.png" /></a>
        <p className="px-3 mt-1 text-xs leading-3 text-center"><a href="#link">Certyfikowana<br></br> firma</a></p>
      </div> */}
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div >
  );
};

export default Home;
