import Navigation from "../components/_nav";
import Cta from "../components/_cta";
import Footer from "../components/_footer";
import LazyShow from "./LazyShow";

const Onas = () => {
  return (
    <>
      <Navigation />
      <section className="lg:pt-20">
        <div className="relative flex items-center py-36 text-center bg-cover overflow-hidden">
          <img className="absolute bg-center object-cover w-full h-full" src="https://damansdak.s3.eu-central-1.amazonaws.com/about_us.jpg" alt="" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black to-primary opacity-70"></div>
          <div className="relative max-w-4xl mx-auto px-4">
            <p className="text-md text-white text-center lg:text-left font-light font-serif">O NAS</p>
            <h2 className="text-3xl  lg:text-5xl text-center lg:text-left text-white font-heading">Poznaj nas bliżej</h2>
          </div>
        </div>
        {/* <div className="py-4 bg-pattern pb-6"></div> */}
        <LazyShow>
          <div className="flex lg:flex-row flex-col mx-auto items-start">
            <div className="lg:w-7/12 pt-20 mb-8 px-8 lg:mb-0 lg:px-20">
              <div className="text-3xl sm:text-5xl 2xl:text-7xl">Kim jesteśmy</div>
              <p className="mt-6 font-serif text-lg font-light text-gray-500">Firma Damans Dak B.V. z siedzibą w m. Tilburg (Holandia) powstała w 2013 roku i od tego czasu zajmuje się wszystkimi formami płaskich pokryć dachowych z tworzyw sztucznych (membrany PVC, TPO/FPO, EPDM). Firma na początku składała się z 5 pracowników, z każdym rokiem rozwijaliśmy się. </p>
              <p className="mt-6 font-serif text-lg font-light text-gray-500">Obecnie zatrudniamy ponad 100 osób. Dzięki skrupulatnej pracy poszerzamy swoją działalność na kraje Europy zachodniej i wschodniej. Realizujemy nasze usługi w siedmiu krajach.
                W Polsce rozpoczęliśmy działalność od kwietnia 2021 r. pod nazwą Damans Dak Polska. Prace nasze prowadzimy na terenie całego kraju oraz w Niemczech i na Litwie.</p>
              <p className="mt-6 font-serif text-lg font-light text-gray-500">
                W Damans Dak jesteśmy dumni z osiągniętych wyników naszej pracy. Łącznie wykonaliśmy prawie 4 000 000 m² dachów płaskich. Jesteśmy profesjonalistami, dla których najważniejsza jest jakość wykonywanych usług i przede wszystkim zadowolenie naszych kontrahentów.</p>
              <p className="mt-6 font-serif text-lg font-light text-gray-500">
                Zapewniamy klientom szeroki wachlarz usług dostosowanych do ich potrzeb. Niezależnie od projektu, nasz zespół doświadczonych pracowników jest gotowy, aby urzeczywistnić Twoje plany.</p>
              <p className="mt-6 font-serif text-xl ">
                Zapraszamy do współpracy – z pasji do dachów płaskich!</p>
            </div>
            <div className="lg:w-5/12 py-20 w-full bg-pattern flex-col items-stretch flex">
              {/* <div className="text-3xl sm:text-5xl 2xl:text-7xl pb-6">Nasz zespół</div> */}
              <div className="flex justify-center flex-col text-center lg:flex-row px-8 sm:px-0">
                <div className="">
                  <img className="h-20 w-20 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Damian_Mazurkiewicz.jpeg" alt="" />
                  <p className="mt-4 mb-2 font-serif">Damian Mazurkiewicz</p>
                  <p className="text-sm font-serif font-light">Właściciel</p>
                </div>
              </div>
              <div className="flex justify-center lg:mt-8 flex-col text-center lg:flex-row px-8 sm:px-0">
                <div className="lg:mr-14">
                  <img className="h-20 w-20 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Dariusz_Barbarowicz.jpeg" alt="" />
                  <p className="mt-4 mb-2 font-serif">Dariusz Barbarowicz</p>
                  <p className="text-sm font-serif font-light">Project Director</p>
                </div>
                <div className="mt-8 lg:mt-0">
                  <img className="h-20 w-20 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Artur_L.jpeg" alt="" />
                  <p className="mt-4 mb-2 font-serif">Artur Leszczyński</p>
                  <p className="text-sm font-serif font-light">Kierownik Działu Ofertowania</p>
                </div>
              </div>
              <div className="flex justify-center lg:mt-8 flex-col text-center lg:flex-row px-8 sm:px-0">
                <div className="lg:mr-14 mt-8 lg:mt-0">
                  <img className="h-20 w-20 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Ewelina_Grochowicz.jpeg" alt="" />
                  <p className="mt-4 mb-2 font-serif">Ewelina Grochowicz</p>
                  <p className="text-sm font-serif font-light">Manager do spraw<br></br> administracyjnych</p>
                </div>
                <div className="mt-8 lg:mt-0">
                  <img className="h-20 w-20 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Mirosław_Łosobik.jpeg" alt="" />
                  <p className="mt-4 mb-2 font-serif">Mirosław Łosobik</p>
                  <p className="text-sm font-serif font-light">Kierownik Działu Realizacji</p>
                </div>
              </div>
              <div className="flex justify-center lg:mt-8 flex-col text-center lg:flex-row px-8 sm:px-0">
                <div className="lg:mr-14 mt-8 lg:mt-0">
                  <img className="h-20 w-20 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Przemys%C5%82aw_Krata.jpeg" alt="" />
                  <p className="mt-4 mb-2 font-serif">Przemysław Krata</p>
                  <p className="text-sm font-serif font-light">Koordynator Budowy<br></br> - Kierownik Robót</p>
                </div>
                <div className="mt-8 lg:mt-0">
                  <img className="h-20 w-20 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Monika_Zdybel.jpeg" alt="" />
                  <p className="mt-4 mb-2 font-serif">Monika Zdybel</p>
                  <p className="text-sm font-serif font-light">Koordynator ds. BHP</p>
                </div>
              </div>
              <div className="flex justify-center lg:mt-8 flex-col text-center lg:flex-row px-8 sm:px-0">
                <div className="lg:mr-14 mt-8 lg:mt-0">
                  <img className="h-20 w-20 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Pawel_Olech.jpeg" alt="" />
                  <p className="mt-4 mb-2 font-serif">Paweł Olech</p>
                  <p className="text-sm font-serif font-light">Specjalista ds.zamówień</p>
                </div>
                <div className="mt-8 lg:mt-0">
                  <img className="h-20 w-20 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Monika_Spiewak.jpeg" alt="" />
                  <p className="mt-4 mb-2 font-serif">Monika Śpiewak</p>
                  <p className="text-sm font-serif font-light">Specjalista ds.marketingu</p>
                </div>
              </div>
              <div className="flex justify-center lg:mt-8 flex-col text-center lg:flex-row px-8 sm:px-0">
                <div className="lg:mr-14 mt-8 lg:mt-0">
                  <img className="h-20 w-20 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Edyta_Hajnold.jpeg" alt="" />
                  <p className="mt-4 mb-2 font-serif">Edyta Hajnold</p>
                  <p className="text-sm font-serif font-light">Specjalista ds.rekrutacji</p>
                </div>
                <div className="mt-8 lg:mt-0">
                  <img className="h-20 w-20 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Kateryna_Halkina.jpeg" alt="" />
                  <p className="mt-4 mb-2 font-serif">Kateryna Halkina</p>
                  <p className="text-sm font-serif font-light">Specjalista ds.rekrutacji</p>
                </div>
              </div>
            </div>
          </div>
        </LazyShow>
        <LazyShow>
          <div className="lg:-mt-14">
            <Cta />
          </div>
        </LazyShow>
        <LazyShow>
          <Footer />
        </LazyShow>
        {/* REALIZACJE END */}
      </section>
    </>
  );
};

export default Onas;


