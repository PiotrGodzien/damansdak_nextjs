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
          <img className="absolute bg-center object-cover w-full h-full" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/pracownicy1.jpg" alt="" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative max-w-4xl mx-auto px-4">
            <p className="text-md text-white text-center lg:text-left font-light font-serif">O NAS</p>
            <h2 className="text-3xl font-bold lg:text-5xl text-center lg:text-left text-white font-heading">Poznaj nas bliżej</h2>
          </div>
        </div>
        <div className="py-4 bg-pattern mb-6"></div>
        <LazyShow>
          <div className="px-8 py-8 mx-auto lg:w-3/5 sm:px-0 sm:w-4/5">
            <div className="text-3xl font-bold lg:w-1/3 sm:text-5xl 2xl:text-7xl">Kim jesteśmy</div>
            <p className="mt-6 font-serif text-lg font-light text-gray-500 lg:w-10/12">Firma Damans Dak B.V. z siedzibą w m. Tilburg (Holandia) powstała w 2013 roku i od tego czasu zajmuje się wszystkimi formami płaskich pokryć dachowych z tworzyw sztucznych (membrany PVC, TPO/FPO, EPDM). Firma na początku składała się z 5 pracowników, z każdym rokiem rozwijaliśmy się. </p>
          </div>
        </LazyShow>

        <div class="flex flex-wrap mx-auto items-center w-full lg:w-7/12 px-4">
          <div class="w-full lg:w-1/2 px-3">
            <LazyShow><img class="mb-6 w-full h-64 object-cover" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/pracownicy6.jpg" alt="" /></LazyShow>
            <LazyShow><img class="w-full h-64 object-cover" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/pracownicy5.jpg" alt="" /></LazyShow>
          </div>
          <div class="w-full lg:w-1/2 px-3">
            <LazyShow><img class="w-full h-64 object-cover" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/pracownicy1.jpg" alt="" /></LazyShow>
          </div>
        </div>
        <LazyShow>
          <div className="px-8 py-8 mx-auto lg:w-3/5 sm:px-0 sm:w-4/5">
            <p className="mt-6 font-serif text-lg font-light text-gray-500 lg:w-10/12">Obecnie zatrudniamy ponad 100 osób. Dzięki skrupulatnej pracy poszerzamy swoją działalność na kraje Europy zachodniej i wschodniej. Realizujemy nasze usługi w siedmiu krajach.
              W Polsce rozpoczęliśmy działalność od kwietnia 2021 r. pod nazwą Damans Dak Polska. Prace nasze prowadzimy na terenie całego kraju oraz w Niemczech i na Litwie.</p>
            <p className="mt-6 font-serif text-lg font-light text-gray-500 lg:w-10/12">
              W Damans Dak jesteśmy dumni z osiągniętych wyników naszej pracy. Łącznie wykonaliśmy prawie 4 000 000 m² dachów płaskich. Jesteśmy profesjonalistami, dla których najważniejsza jest jakość wykonywanych usług i przede wszystkim zadowolenie naszych kontrahentów.</p>
            <p className="mt-6 font-serif text-lg font-light text-gray-500 lg:w-10/12">
              Zapewniamy klientom szeroki wachlarz usług dostosowanych do ich potrzeb. Niezależnie od projektu, nasz zespół doświadczonych pracowników jest gotowy, aby urzeczywistnić Twoje plany.</p>
            <p className="mt-6 font-serif text-xl font-bold lg:w-10/12">
              Zapraszamy do współpracy – z pasji do dachów płaskich!</p>
          </div>
        </LazyShow>
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

export default Onas;


