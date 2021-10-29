import Navigation from "../components/_nav";
import Cta from "../components/_cta";
import Footer from "../components/_footer";
import LazyShow from "./LazyShow";

const Oferta = () => {
  return (
    <>
      <Navigation />
      <section className="lg:pt-20">
        <div className="relative flex items-center overflow-hidden text-center bg-cover py-36">
          <img className="absolute object-cover w-full h-full bg-center" src="https://damansdak.s3.eu-central-1.amazonaws.com/offer.jpg" alt="" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black to-primary opacity-70"></div>
          <div className="relative max-w-4xl px-4 mx-auto">
            <p className="font-serif font-light text-center text-white text-md lg:text-left">OFERTA</p>
            <h2 className="text-3xl text-center text-white lg:text-5xl lg:text-left font-heading">Co możemy dla Ciebie zrobić</h2>
          </div>
        </div>
        <div className="py-4 mb-6 bg-pattern"></div>
        
          <section className="mt-20 lg:mb-16" id="stal">
            <div className="px-8 mx-auto lg:flex lg:w-3/5 sm:px-0 sm:w-4/5">
              <img className="h-20" src="https://damansdak.s3.eu-central-1.amazonaws.com/roof.png" alt="" />
              <div className="lg:ml-6">
                <p className="mt-6 font-serif font-light text-md lg:mt-0 lg:text-left">DACHY PŁASKIE</p>
                <h2 className="text-3xl lg:text-5xl lg:text-left font-heading">Podłoże stalowe</h2>
              </div>
            </div>
            <div id="beton" class="relative px-8 mt-8 mx-auto lg:w-3/5 sm:px-0 sm:w-4/5">
              <p className="font-serif text-lg font-light text-gray-500 lg:w-10/12">Podłożem nośnym w tym przypadku jest profilowana blacha stalowa w kształcie trapezu, którą układają nasi pracownicy na podstawie projektu, tj. tzw. rozkroju z uwzględnieniem stref i uciągleleń. Paroziolację (najczęściej w postaci folii PE) układamy na blachę z odpowiednim zakładem, a następnie montujemy termoizolację (wełna mineralna, styropian EPS 100, rzadko polistyren ekstrudowany XPS) w postaci płyt prostych i płyt spadkowych lub też czasami kontrspadków. Izolację wodochronną stanowi membrana dachowa (PVC, TPO/FPO, EPDM) wraz z kołkami, które są dobierane indywidualnie do dachu.</p>
              {/* <img className="" src="https://damansdak.s3.eu-central-1.amazonaws.com/zory/zory4.jpg" alt="" /> */}
            </div>
          </section>
        
        
          <section className="lg:my-16">
            <div className="px-8 mx-auto mt-20 lg:flex lg:w-3/5 sm:px-0 sm:w-4/5">
              <img className="h-20" src="https://damansdak.s3.eu-central-1.amazonaws.com/brick-wall.png" alt="" />
              <div className="lg:ml-6">
                <p className="mt-6 font-serif font-light text-md lg:mt-0 lg:text-left">DACHY PŁASKIE</p>
                <h2 className="text-3xl lg:text-5xl lg:text-left font-heading">Podłoże betonowe</h2>
              </div>
            </div>

            <div id="renowacja" class="relative mt-8 px-8 mx-auto lg:w-3/5 sm:px-0 sm:w-4/5">
              <p className="font-serif text-lg font-light text-gray-500 lg:w-10/12">Jak sama nazwa wskazuje, podłożem nośnym jest płyta betonowa, na którą układamy paroizolację (najczęściej w postaci folii PE), termoizolację (wełna mineralna, styropian EPS 100, rzadko polistyren ekstrudowany XPS) w postaci płyt prostych i płyt spadkowych lub też czasami kontrspadków. Izolację wodochronną stanowi membrana dachowa (PVC, TPO/FPO, EPDM) wraz z kołkami, które są dobierane indywidualnie do dachu.</p>
              {/* <img className="" src="https://damansdak.s3.eu-central-1.amazonaws.com/zory/zory4.jpg" alt="" /> */}
            </div>
          </section>
        
        
          <section className="lg:mb-16">
            <div className="px-8 mx-auto mt-20 lg:flex lg:w-3/5 sm:px-0 sm:w-4/5">
              <img className="h-20" src="https://damansdak.s3.eu-central-1.amazonaws.com/hammer.png" alt="" />
              <div className="lg:ml-6">
                <p className="mt-6 font-serif font-light text-md lg:mt-0 lg:text-left">DACHY PŁASKIE</p>
                <h2 className="text-3xl lg:text-5xl lg:text-left font-heading">Serwis / renowacje</h2>
              </div>
            </div>
            <div class="relative px-8 mt-8 mx-auto lg:w-3/5 sm:px-0 sm:w-4/5">
              <p className="font-serif text-lg font-light text-gray-500 whitespace-pre-line lg:w-10/12">Wychodząc naprzeciw oczekiwaniom użytkowników dachów (Inwestorzy, Zarządcy budynków, itp.) firma Damans Dak Polska Sp. z o.o. oferuje następujące usługi:<br></br><br></br>
                <ul className="list-disc">
                  <li className="">Pogwarancyjny przegląd dachów,</li>
                  <li className="">Sezonowe przeglądy dachów (zgodnie z Art.62 Prawa Budowlanego) wraz z wykonaniem dokumentacji powykonawczej (opis, zalecenia, zdjęcia, film z drona, itp.),</li>
                  <li className="">Naprawy wielkopowierzchniowych dachów płaskich przy zastosowaniu membran PVC, TPO/FPO, EPDM,</li>
                  <li className="">Renowacje dachów płaskich.</li>
                </ul>
                <br></br>
                Firma nasza posiada wieloletnie doświadczenie w zakresie napraw i renowacji dachów płaskich. Wszystkie nasze zadania wykonywane są z dużą starannością przy zastosowaniu profesjonalnych maszyn i urządzeń.
                Dotychczas prace te wykonywane były w Holandii, Belgii i Francji, a obecnie przenosimy naszą wiedzę i jakość na rynek Polski.
                Zapraszamy do współpracy – z pasji do dachów płaskich!</p>
              {/* <img className="" src="https://damansdak.s3.eu-central-1.amazonaws.com/zory/zory4.jpg" alt="" /> */}
            </div>
          </section>
        
        
          <Cta />
        
        
          <Footer />
        
        {/* REALIZACJE END */}
      </section>
    </>
  );
};

export default Oferta;