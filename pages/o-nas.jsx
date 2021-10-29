import Navigation from "../components/_nav";
import Cta from "../components/_cta";
import Footer from "../components/_footer";
import LazyShow from "./LazyShow";

const Onas = () => {
  return (
    <>
      <Navigation />
      <section className="lg:pt-20">
        <div className="relative flex items-center overflow-hidden text-center bg-cover py-36">
          <img className="absolute object-cover w-full h-full bg-center" src="https://damansdak.s3.eu-central-1.amazonaws.com/about_us.jpg" alt="" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black to-primary opacity-70"></div>
          <div className="relative max-w-4xl px-4 mx-auto">
            <p className="font-serif font-light text-center text-white text-md lg:text-left">O NAS</p>
            <h2 className="text-3xl text-center text-white lg:text-5xl lg:text-left font-heading">Poznaj nas bliżej</h2>
          </div>
        </div>
        {/* <div className="py-4 pb-6 bg-pattern"></div> */}
        
          <div className="flex flex-col items-start mx-auto lg:flex-row">
            <div className="px-8 pt-20 mb-8 lg:w-7/12 lg:mb-0 lg:px-20">
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
            <div className="flex flex-col items-stretch w-full py-20 lg:w-5/12 bg-pattern">
              {/* <div className="pb-6 text-3xl sm:text-5xl 2xl:text-7xl">Nasz zespół</div> */}
              {/* <div className="flex flex-col justify-center px-8 text-center lg:flex-row sm:px-0">
                <div className="">
                  <img className="object-cover object-top w-20 h-20 mx-auto rounded-full" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Damian_Mazurkiewicz.jpeg" alt="" />
                  <p className="mt-4 mb-2 font-serif">Damian Mazurkiewicz</p>
                  <p className="font-serif text-sm font-light">Właściciel</p>
                </div>
              </div> */}
              <div className="flex flex-col justify-center px-8 text-center lg:mt-8 lg:flex-row sm:px-0">
                <div className="lg:mr-14">
                  <img className="object-cover object-top w-20 h-20 mx-auto rounded-full" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Dariusz_Barbarowicz.jpeg" alt="" />
                  <p className="mt-4 mb-2 font-serif">Dariusz Barbarowicz</p>
                  <p className="font-serif text-sm font-light">Project Director</p>
                </div>
                <div className="mt-8 lg:mt-0">
                  <img className="object-cover object-top w-20 h-20 mx-auto rounded-full" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Artur_L.jpeg" alt="" />
                  <p className="mt-4 mb-2 font-serif">Artur Leszczyński</p>
                  <p className="font-serif text-sm font-light">Kierownik Działu Ofertowania</p>
                </div>
              </div>
              <div className="flex flex-col justify-center px-8 text-center lg:mt-8 lg:flex-row sm:px-0">
                <div className="mt-8 lg:mr-14 lg:mt-0">
                  <img className="object-cover object-top w-20 h-20 mx-auto rounded-full" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Ewelina_Grochowicz.jpeg" alt="" />
                  <p className="mt-4 mb-2 font-serif">Ewelina Grochowicz</p>
                  <p className="font-serif text-sm font-light">Manager do spraw<br></br> administracyjnych</p>
                </div>
                <div className="mt-8 lg:mt-0">
                  <img className="object-cover object-top w-20 h-20 mx-auto rounded-full" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Mirosław_Łosobik.jpeg" alt="" />
                  <p className="mt-4 mb-2 font-serif">Mirosław Łosobik</p>
                  <p className="font-serif text-sm font-light">Kierownik Działu Realizacji</p>
                </div>
              </div>
              <div className="flex flex-col justify-center px-8 text-center lg:mt-8 lg:flex-row sm:px-0">
                <div className="mt-8 lg:mr-14 lg:mt-0">
                  <img className="object-cover object-top w-20 h-20 mx-auto rounded-full" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Przemys%C5%82aw_Krata.jpeg" alt="" />
                  <p className="mt-4 mb-2 font-serif">Przemysław Krata</p>
                  <p className="font-serif text-sm font-light">Koordynator Budowy<br></br> - Kierownik Robót</p>
                </div>
                <div className="mt-8 lg:mt-0">
                  <img className="object-cover object-top w-20 h-20 mx-auto rounded-full" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Monika_Zdybel.jpeg" alt="" />
                  <p className="mt-4 mb-2 font-serif">Monika Zdybel</p>
                  <p className="font-serif text-sm font-light">Koordynator ds. BHP</p>
                </div>
              </div>
              <div className="flex flex-col justify-center px-8 text-center lg:mt-8 lg:flex-row sm:px-0">
                <div className="mt-8 lg:mr-14 lg:mt-0">
                  <img className="object-cover object-top w-20 h-20 mx-auto rounded-full" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Pawel_Olech.jpeg" alt="" />
                  <p className="mt-4 mb-2 font-serif">Paweł Olech</p>
                  <p className="font-serif text-sm font-light">Specjalista ds.zamówień</p>
                </div>
                <div className="mt-8 lg:mt-0">
                  <img className="object-cover object-top w-20 h-20 mx-auto rounded-full" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Monika_Spiewak.jpeg" alt="" />
                  <p className="mt-4 mb-2 font-serif">Monika Śpiewak</p>
                  <p className="font-serif text-sm font-light">Specjalista ds.marketingu</p>
                </div>
              </div>
              <div className="flex flex-col justify-center px-8 text-center lg:mt-8 lg:flex-row sm:px-0">
                <div className="mt-8 lg:mr-14 lg:mt-0">
                  <img className="object-cover object-top w-20 h-20 mx-auto rounded-full" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Edyta_Hajnold.jpeg" alt="" />
                  <p className="mt-4 mb-2 font-serif">Edyta Hajnold</p>
                  <p className="font-serif text-sm font-light">Specjalista ds.rekrutacji</p>
                </div>
                <div className="mt-8 lg:mt-0">
                  <img className="object-cover object-top w-20 h-20 mx-auto rounded-full" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Kateryna_Halkina.jpeg" alt="" />
                  <p className="mt-4 mb-2 font-serif">Kateryna Halkina</p>
                  <p className="font-serif text-sm font-light">Specjalista ds.rekrutacji</p>
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


