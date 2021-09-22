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
<nav className="top-0 py-6 mx-auto text-xl text-secondary bg-gray-50">
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
              <div className="py-3 border text-secondary border-primary px-9">Kontakt</div>
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
<div className="relative z-30 mt-32">
          <div className="flex flex-col-reverse items-center justify-start w-3/5 mx-auto md:flex-row">
            <div className="items-center w-2/3 mt-6 p-l space-y-7 md:space-y-2 lg:space-y-10">
              <h1 className="text-3xl font-bold lg:text-7xl">Dachy płaskie w technologii membran PVC i TPO</h1>
              <p className="text-gray-500 lg:text-2xl">Niezależnie od projektu, nasz zespół profesjonalistów jest gotowy, aby urzeczywistnić Twoje plany</p>
              <button className="flex items-center px-10 py-4 text-white bg-primary justify-self-end">
                <p className="lg:text-2xl">Skontaktuj się</p>
              </button>
            </div>
          </div>
        </div>
        <img src="http://verdepro.pl/dach_wiatrak.jpg" alt="" className="relative z-0 w-3/5 ml-auto h-1/2" />
{/* LINES START */}
  <div className="absolute inset-0 z-20 flex justify-center mx-auto h-min-full">
    <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
    <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
    <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
    <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
    <div className="w-1/5 border-r border-gray-300 border-opacity-40"></div>
  </div> 
{/* LINES END */}
</main>   


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
