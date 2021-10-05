import Head from 'next/head';
import { Link, Link as LinkScroll } from "react-scroll";

const Home = () => {
  return (

    <div className="">
      <Head>
        <title>Damansdak – dachy płaskie w technologii membran PVC i TPO</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Blinker:wght@400;700&display=swap" rel="stylesheet" />
      </Head>


      <main className="relative bg-gray-50">
        <div className="bg-herobanner flex flex-col text-white relative bg-cover bg-center h-screen">
          <div className="bg-gradient-to-b from-black z-20 absolute inset-0"></div>
          {/* <div className="bg-black opacity-30 z-0 absolute inset-0"></div> */}
          <div className="">
            <nav className="top-0 relative py-6 mx-auto text-2xl z-20 text-white">
              <div className="flex items-center justify-around w-full mx-auto ">
                <div className="h-auto w-72">
                  <img src="http://verdepro.pl/logo_damsdak.png" />
                </div>
                <div className="hidden space-x-12 lg:flex">
                  <div className="">Oferta</div>
                  <div className="">O nas</div>
                  <div className="">Realizacje</div>
                  <div className="">Kariera</div>
                </div>
                <div className="hidden lg:block">
                  <button className="flex items-center justify-center w-full px-10 py-4 text-center text-white bg-primary">
                    <p className="lg:text-2xl">kontakt</p>
                  </button>
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
          </div>
          <div className="relative z-30 my-auto">
            <div className="flex flex-col-reverse items-center justify-start w-3/5 mx-auto md:flex-row">
              <div className="items-center mt-6 p-l space-y-7 md:space-y-2 lg:space-y-16">
                <h1 className="text-3xl font-bold lg:text-8xl">Dachy płaskie w technologii membran PVC i TPO</h1>
                <p className="w-2/3 lg:text-3xl">Niezależnie od projektu, nasz zespół profesjonalistów jest gotowy, aby urzeczywistnić Twoje plany</p>
                <div className="flex w-2/3 space-x-8">
                  <button className="flex items-center justify-center px-16 py-4 text-center text-white bg-primary">
                    <p className="lg:text-2xl">kontakt</p>
                  </button>
                  <button className="flex items-center justify-center px-16 py-4 text-center border-2 border-white">
                    <p className="lg:text-2xl">więcej</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-32">
          <div className="w-3/5 mx-auto">
            <h1 className="text-3xl font-bold lg:text-8xl">Damansdak Polska</h1>
            <p className="text-3xl my-12 text-gray-400">DamansDak B.V.
              Jesteśmy szybko rozwijającą się firmą działającą na rynku od 2013 roku.
              Wykonujemy dachy płaskie w technologii membran PVC i TPO.
              Specjalizujemy się w wykonywaniu dachów nowych,
              jak również renowacją dachów starych o powierzchni od-
              1.000m2 do 200.000m2</p>
            <div class="text-center  bg-opacity-30 flex-col items-baseline justify-evenly">
              <div className="flex items-center">
                <div className="w-3/5">
                  <p className="font-bold lg:text-7xl">453</p>
                  <p className="text-3xl">projektów</p>
                </div>
                <div className="w-3/5">
                  <p className="font-bold lg:text-7xl">3 553 424</p>
                  <p className="text-3xl">m2</p>
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
        {/* <div className="flex">
          <div className="flex flex-col w-2/5">
            <div className="h-1/2">
            </div>
            <div className="bg-black h-1/2"></div>
          </div>
          <div className="relative z-0 w-3/5 ml-auto h-1/2">
            <img src="http://verdepro.pl/dach_wiatrak.jpg" alt="" className="" />
            <div class="absolute text-center bg-black bg-opacity-30 text-white inset-0 z-0 h-full flex-col items-baseline justify-around">
              <div className="flex items-center h-1/2">
                <div className="w-1/3">
                  <p className="font-bold lg:text-7xl">453</p>
                  <p className="text-3xl">projektów</p>
                </div>
                <div className="w-1/3">
                  <p className="font-bold lg:text-7xl">3 553 424</p>
                  <p className="text-3xl">m2</p>
                </div>
                <div className="w-1/3">
                  <p className="font-bold lg:text-7xl">5</p>
                  <p className="text-3xl">krajów</p>
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div> */}
        <div className="bg-black pb-32">
          <div className="w-3/5 mx-auto py-16">
            <div className="w-2/5 font-bold text-white uppercase text-7xl">oferta</div>
          </div>

          <div className="flex justify-around w-3/5 mx-auto">
            <img src="http://verdepro.pl/dach_oferta.jpg" alt="" className="w-1/2" />
            <div className="flex flex-col w-1/2 align-middle justify-evenly">
              <div className="flex items-center justify-end space-x-8 text-white">
                <div className="flex items-center justify-center p-10 my-auto text-5xl border-2 border-white rounded-full w-28 h-28">1</div>
                <div className="">
                  <h3 className="text-4xl font-bold">Dachy betonowe</h3>
                  <p className="pr-6 mt-4 text-xl">Tutaj będzie zajawka – krótki opis oferty.</p>
                  <button className="flex items-center justify-center mt-4 text-xl underline">
                    <Link href="/"><a>zobacz więcej</a></Link>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-end space-x-8 text-white">
                <div className="flex items-center justify-center p-10 my-auto text-5xl border-2 border-white rounded-full w-28 h-28">2</div>
                <div className="">
                  <h3 className="text-4xl font-bold">Dachy stalowe</h3>
                  <p className="pr-6 mt-4 text-xl">Tutaj będzie zajawka – krótki opis oferty.</p>
                  <button className="flex items-center justify-center mt-4 text-xl underline">
                    <Link href="/"><a>zobacz więcej</a></Link>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-end space-x-8 text-white">
                <div className="flex items-center justify-center p-10 my-auto text-5xl border-2 border-white rounded-full w-28 h-28">3</div>
                <div className="">
                  <h3 className="text-4xl font-bold">Renowacje dachów</h3>
                  <p className="pr-6 mt-4 text-xl">Tutaj będzie zajawka – krótki opis oferty.</p>
                  <button className="flex items-center justify-center mt-4 text-xl underline">
                    <Link href="/"><a>zobacz więcej</a></Link>
                  </button>
                </div>
              </div>
            </div>
          </div>



        </div>
        <div className="py-16 bg-white">
          <div className="flex items-center justify-between w-3/5 mx-auto">
            <div className="w-2/3 text-4xl font-bold">Masz pytania? Zapraszamy do kontaktu z nami.</div>
            <button className="flex items-center justify-center w-1/4 px-10 py-4 text-center text-white bg-primary">
              <p className="lg:text-2xl">kontakt</p>
            </button>
          </div>
        </div>
        <div className="py-16">
          <div className="w-3/5 mx-auto">
            <div className="w-1/3 pb-16 font-bold uppercase text-7xl">realizacje</div>
          </div>

          <div className="mx-auto w-3/5">
            <div className="relative mx-auto mb-16">
              <img src="http://verdepro.pl/dach_wiatrak.jpg" alt="" className="" />
              <div className="absolute bottom-0 right-0 grid items-center w-2/3 h-1/3 p-8 grid-cols-2 mx-auto bg-black">
                <p className="text-2xl text-center text-white">PROJEKT DSV THOLEN NIDERLADNY 94 209 m2</p>
                <div className="mx-auto text-white">
                  <button className="flex items-center justify-center text-xl">
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


            <div className="relative mx-auto mb-16">
              <img src="http://verdepro.pl/oferta3.jpg" alt="" className="" />
              <div className="absolute bottom-0 right-0 grid items-center w-2/3 h-1/3 p-8 grid-cols-2 mx-auto bg-black">
                <p className="text-2xl text-center text-white">PROJEKT DSV THOLEN NIDERLADNY 94 209 m2</p>
                <div className="mx-auto text-white">
                  <button className="flex items-center justify-center text-xl">
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


            <div className="relative mx-auto mb-16">
              <img src="http://verdepro.pl/oferta2.jpg" alt="" className="" />
              <div className="absolute bottom-0 right-0 grid items-center w-2/3 h-1/3 p-8 grid-cols-2 mx-auto bg-black">
                <p className="text-2xl text-center text-white">PROJEKT DSV THOLEN NIDERLADNY 94 209 m2</p>
                <div className="mx-auto text-white">
                  <button className="flex items-center justify-center text-xl">
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
        </div>

        <div className="w-3/5 mx-auto mb-32">
          <div className="w-1/3 pb-16 font-bold uppercase text-7xl">kontakt</div>
          <p className="text-3xl text-gray-400">DamansDak B.V.
            Jesteśmy szybko rozwijającą się firmą działającą na rynku od 2013 roku.
            Wykonujemy dachy płaskie w technologii membran PVC i TPO.
            Specjalizujemy się w wykonywaniu dachów nowych,
            jak również renowacją dachów starych o powierzchni od-
            1.000m2 do 200.000m2</p>
        </div>
        <div className="flex">
          <div className="flex items-center w-2/5 py-56 justify-evenly bg-gray-50">
            <div className="">
              <p className="text-3xl font-bold">Biuro</p>
              <p className="mt-2 text-xl">ul.  Sielska 2, 37-700 Przemyśl</p>
              <p className="text-xl">Polska, Podkarpackie</p>
            </div>
            <div className="">
              <p className="text-3xl font-bold">Firma</p>
              <p className="mt-2 text-xl">KRS 0000894896</p>
              <p className="text-xl">NIP PL7952563292</p>
            </div>
          </div>
          <div className="w-3/5 py-56 mx-auto bg-black">
            <p className="w-2/3 mx-auto text-2xl text-white">Jeżeli masz pytania dotyczące naszej oferty lub chcesz zapytać o wycenę zapraszamy do kontaktu z nami. Nasz zespół specjalistów czeka na Ciebie.</p>
            <div className="flex justify-start w-2/3 mx-auto mt-8">
              <p className="text-4xl font-bold text-white">info@damansdak.pl</p>
              <p className="ml-20 text-4xl font-bold text-primary">+48 532 197 746</p>
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
      <footer className="flex items-center justify-between w-4/5 py-10 mx-auto text-gray-500">

        <p className="">DAMANSDAK</p>
        <p className="flex space-x-16">
          <p className="">OFERTA</p>
          <p className="">O NAS</p>
          <p className="">REALIZACJE</p>
        </p>
        <p className="">©2021 All right reserved</p>

      </footer>
    </div >
  );
};

export default Home;
