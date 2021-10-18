import Navigation from "../components/_nav";
import Cta from "../components/_cta";
import Footer from "../components/_footer";
import LazyShow from "./LazyShow";

const Oferta = () => {
  return (
    <>
      <Navigation />
      <section className="lg:pt-20">
        <div className="relative flex items-center py-36 text-center bg-cover overflow-hidden">
          <img className="absolute bg-center object-cover w-full h-full" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/pracownicy8.jpg" alt="" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative max-w-4xl mx-auto px-4">
            <p className="text-md text-white text-center lg:text-left font-light font-serif">OFERTA</p>
            <h2 className="text-3xl font-bold lg:text-5xl text-center lg:text-left text-white font-heading">Co możemy dla Ciebie zrobić</h2>
          </div>
        </div>
        <div className="py-4 bg-pattern mb-6"></div>
        <LazyShow>
          <section className="lg:mb-16 mt-20" >
            <div className="px-8 lg:flex mx-auto  lg:w-3/5 sm:px-0 sm:w-4/5">
              <img className="h-20" src="https://damansdak.s3.eu-central-1.amazonaws.com/roof.png" alt="" />
              <div className="lg:ml-6">
                <p className="text-md mt-6 lg:mt-0 lg:text-left font-light font-serif">DACHY PŁASKIE</p>
                <h2 className="text-3xl font-bold lg:text-5xl lg:text-left font-heading">Podłoże stalowe</h2>
              </div>
            </div>
            <div id="renowacja" class="relative px-8 mt-8 mx-auto lg:w-3/5 sm:px-0 sm:w-4/5">
              <p className="font-serif text-lg font-light text-gray-500 lg:w-10/12">Podłożem nośnym w tym przypadku jest profilowana blacha stalowa w kształcie trapezu, którą układają nasi pracownicy na podstawie projektu, tj. tzw. rozkroju z uwzględnieniem stref i uciągleleń. Paroziolację (najczęściej w postaci folii PE) układamy na blachę z odpowiednim zakładem, a następnie montujemy termoizolację (wełna mineralna, styropian EPS 100, rzadko polistyren ekstrudowany XPS) w postaci płyt prostych i płyt spadkowych lub też czasami kontrspadków. Izolację wodochronną stanowi membrana dachowa (PVC, TPO/FPO, EPDM) wraz z kołkami, które są dobierane indywidualnie do dachu.</p>
              {/* <img className="" src="https://damansdak.s3.eu-central-1.amazonaws.com/zory/zory4.jpg" alt="" /> */}
            </div>
          </section>
        </LazyShow>
        <LazyShow>
          <section className="lg:my-16" id="beton">
            <div className="px-8 lg:flex mx-auto lg:w-3/5 sm:px-0 sm:w-4/5">
              <img className="h-20" src="https://damansdak.s3.eu-central-1.amazonaws.com/brick-wall.png" alt="" />
              <div className="lg:ml-6">
                <p className="text-md mt-6 lg:mt-0 lg:text-left font-light font-serif">DACHY PŁASKIE</p>
                <h2 className="text-3xl font-bold lg:text-5xl lg:text-left font-heading">Podłoże betonowe</h2>
              </div>
            </div>

            <div id="stal" class="relative mt-8 px-8 mx-auto lg:w-3/5 sm:px-0 sm:w-4/5">
              <p className="font-serif text-lg font-light text-gray-500 lg:w-10/12">Jak sama nazwa wskazuje, podłożem nośnym jest płyta betonowa, na którą układamy paroizolację (najczęściej w postaci folii PE), termoizolację (wełna mineralna, styropian EPS 100, rzadko polistyren ekstrudowany XPS) w postaci płyt prostych i płyt spadkowych lub też czasami kontrspadków. Izolację wodochronną stanowi membrana dachowa (PVC, TPO/FPO, EPDM) wraz z kołkami, które są dobierane indywidualnie do dachu.</p>
              {/* <img className="" src="https://damansdak.s3.eu-central-1.amazonaws.com/zory/zory4.jpg" alt="" /> */}
            </div>
          </section>
        </LazyShow>
        <LazyShow>
          <section className="lg:mb-16">
            <div className="px-8 mt-20 lg:flex mx-auto  lg:w-3/5 sm:px-0 sm:w-4/5">
              <img className="h-20" src="https://damansdak.s3.eu-central-1.amazonaws.com/hammer.png" alt="" />
              <div className="lg:ml-6">
                <p className="text-md mt-6 lg:mt-0 lg:text-left font-light font-serif">DACHY PŁASKIE</p>
                <h2 className="text-3xl font-bold lg:text-5xl lg:text-left font-heading">Serwis / renowacje</h2>
              </div>
            </div>
            <div class="relative px-8 mt-8 mx-auto lg:w-3/5 sm:px-0 sm:w-4/5">
              <p className="font-serif text-lg font-light text-gray-500 lg:w-10/12">Zajmujemy się serwisowaniem oraz renowacjacją dachów płaskich. Posiadamy bogate doświadczenie w renowacji dachów wykonanaych z betonu oraz stali.</p>
              {/* <img className="" src="https://damansdak.s3.eu-central-1.amazonaws.com/zory/zory4.jpg" alt="" /> */}
            </div>
          </section>
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

export default Oferta;