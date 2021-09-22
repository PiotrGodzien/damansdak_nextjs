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

      <main className="text-secondary">

        <nav className="sticky top-0 z-50 py-6 text-xl text-white bg-black shadow-md">
          <div className="container flex items-center mx-auto bg-transparent">
            <div className="flex items-center justify-between w-1/2">
              <div className="">
                <div className="h-auto w-72">
                  <img src="http://verdepro.pl/logo_damsdak.png" />
                </div>
              </div>
              <div className="hidden w-1/2 space-x-12 lg:flex">
                <div className="">Oferta</div>
                <div className="">O nas</div>
                <div className="">Realizacje</div>
              </div>
            </div>
            <div className="hidden ml-auto lg:block">
              <div className="py-3 text-white border border-primary px-9">Kontakt</div>
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
        <div className="">
          <div className="flex flex-col-reverse items-center justify-between mx-auto bg-footerbanner md:flex-row">
            <div className="items-center px-8 mx-auto mt-6 space-y-7 md:space-y-2 lg:space-y-10">
              <h1 className="text-3xl font-bold lg:text-7xl">Damansdak</h1>
                <div className="flex">
                  <p className="text-gray-500 lg:text-2xl">Dachy płaskie w technologii membran PVC i TPO.</p>
                  <button className="flex items-center px-10 py-4 text-white bg-primary justify-self-end">
                    <p className="lg:text-2xl">Skontaktuj się</p>
                  </button>
                </div>
            </div>
            <div className="relative bg-gray-50">
              <img src="http://verdepro.pl/dachyyy.jpg" alt="" className="" />
              <div class="absolute inset-0 z-0 h-full bg-primary opacity-20"></div>
            </div>
          </div>

          <div className="relative z-20 items-center hidden w-full px-8 py-8 -mt-16 bg-white shadow-xl md:flex md:w-8/12 lg:py-20 text-secondary lg:-mt-28 justify-evenly">
            <div className="flex items-center justify-around">
              <p className="font-bold lg:text-5xl">453</p>
              <p className="ml-2 lg:ml-10">projektów</p>
            </div>
            <div className="flex items-center mt-12 md:mt-0">
              <p className="font-bold lg:text-5xl">3 553 424</p>
              <p className="ml-2 lg:ml-10">m2</p>
            </div>
            <div className="">
              <LinkScroll
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <button className="flex flex-col items-center justify-center mt-12 justify-self-end md:mt-0 md:flex-row">
                  zobacz więcej
                  <div className="relative flex items-center justify-center p-6 mt-6 ml-2 bg-white border border-gray-300 rounded-full lg:ml-6 md:mt-0">
                    <svg className="absolute w-12 h-12 rotate-90 text-secondary" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z" fill="currentColor" />
                    </svg>
                  </div>
                </button>
              </ LinkScroll>
            </div>
          </div>
        </div>



        <div className="px-8 mx-auto bg-cover bg-gray-50 py-44 lg:py-72 -mt-28" id="about">
          <div className="container mx-auto">
            <p className="hidden mx-auto -mb-12 text-gray-100 max-w-7xl text-9xl md:block">DAMANSDAK</p>
            <p className="max-w-5xl mx-auto text-left lg:text-2xl">
              Jesteśmy szybko rozwijającą się firmą działającą na rynku od 2013 roku.
              Wykonujemy dachy płaskie w technologii membran PVC i TPO.
              Specjalizujemy się w wykonywaniu dachów nowych,
              jak również renowacją dachów starych o powierzchni od-
              1.000m2 do 200.000m2
            </p>
          </div>
        </div>
        <div className="container flex flex-col px-8 mx-auto -mt-32 text-left justify-evenly lg:flex-row">
          <div className="justify-center hidden mr-20 text-lg font-light text-gray-400 lg:flex">
            <p>Nasza oferta</p>
          </div>

          <div className="px-8 py-20 transition duration-300 ease-out bg-white border-t-4 lg:w-1/4 border-primary hover:bg-secondary hover:text-white">
            <h3 className="text-2xl font-bold">Dachy betonowe</h3>
            <p className="pr-6 mt-4 text-gray-500">Tutaj będzie zajawka – krótki opis oferty.</p>
            <div className="">
              <button className="flex items-center justify-center mt-12 mr-auto">
                zobacz więcej
                <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                  <svg className="absolute w-12 h-12" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z" fill="currentColor" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="flex-col items-end px-8 py-20 transition duration-300 ease-out bg-white border-t-4 lg:w-1/4 border-primary hover:bg-secondary hover:text-white">
            <h3 className="text-2xl font-bold">Dachy stalowe</h3>
            <p className="pr-6 mt-4 text-gray-500">Tutaj będzie zajawka – krótki opis oferty.</p>
            <div className="">
              <button className="flex items-center justify-center mt-12 mr-auto">
                zobacz więcej
                <div className="relative flex items-center justify-center p-6 ml-2 bg-transparent border border-gray-300 rounded-full lg:ml-6">
                  <svg className="absolute w-12 h-12" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 16.6L9 15.11L12.42 11.8L9 8.49L10.5 7L15.3 11.8L10.5 16.6Z" fill="currentColor" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="flex-col items-end px-8 py-20 transition duration-300 ease-out bg-white border-t-4 lg:w-1/4 border-t-primary hover:bg-secondary hover:text-white">
            <h3 className="text-2xl font-bold">Renowacja dachów</h3>
            <p className="pr-6 mt-4 text-gray-500">Tutaj będzie zajawka – krótki opis oferty.</p>
            <div className="">
              <button className="flex items-center justify-center mt-12 mr-auto">
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
      </main >
      {/* CERTIFICATE */}
      <div className="sticky hidden h-20 mb-2 ml-auto bg-white border-l-2 shadow-2xl w-28 lg:block border-primary bottom-2">
        <a href="#link"><img className="w-20 h-auto px-3 pt-2 mx-auto" src="http://verdepro.pl/vcs.png" /></a>
        <p className="px-3 mt-1 text-xs leading-3 text-center"><a href="#link">Certyfikowana<br></br> firma</a></p>
      </div>
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
