import LazyShow from "./LazyShow";
import Navigation from "../components/_nav";
import Cta from "../components/_cta";
import Footer from "../components/_footer";
import { Link } from "react-scroll";

const Kontakt = () => {
  return (
    <>
      <Navigation />
      <section className="lg:pt-20">
        <div className="relative flex items-center py-36 text-center bg-cover overflow-hidden">
          <img className="absolute object-cover w-full h-full" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/pracownicy9.jpg" alt="" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative max-w-4xl mx-auto px-4">
            <p className="text-md text-white text-center lg:text-left font-light font-serif">KONTAKT</p>
            <h2 className="text-3xl font-bold lg:text-5xl text-white font-heading">Zapraszamy do kontaktu z nami</h2>
          </div>
        </div>
        {/* <div className="relative h-64 lg:h-144">
          <img className="object-cover w-full h-full bg-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/lublin_realizacja.jpeg" alt="" />
          <div className="absolute inset-0 top-1/2 container px-4 mx-auto">
            <div className="max-w-2xl mx-auto mb-6 text-center">
              <h2 className="text-3xl font-bold lg:text-5xl text-primary font-heading">Bremer Sp. z o.o. dla 7R w Lublinie</h2>
            </div>
          </div>
        </div> */}
        <div className="py-4 bg-pattern mb-6"></div>
        <LazyShow>

        </LazyShow>
        <LazyShow>
          <div className="px-8 py-8 mx-auto lg:my-16 lg:w-3/5 sm:px-0 sm:w-4/5">
            <div className="text-3xl font-bold lg:w-1/3 sm:text-5xl 2xl:text-7xl">Kontakt</div>
            <p className="mt-6 font-serif text-lg font-light text-gray-500 lg:w-10/12">Jeżeli masz pytania dotyczące naszej oferty lub chcesz zapytać o wycenę zapraszamy do kontaktu z nami. Nasz zespół specjalistów czeka na Ciebie.</p>
            <div className="flex flex-col justify-start mx-auto mt-8 lg:flex-row sm:px-0 sm:mt-16">
              <div className="flex items-center text-3xl font-bold sm:space-x-6">
                <svg className="hidden w-12 h-12 sm:block" width="75px" height="56px" viewBox="0 0 75 56" version="1.1">
                  <g id="Templates" stroke="none" fill="none">
                    <g id="Group" fill="currentColor">
                      <path d="M37.4427,56 C27.2102,56 16.9613,56 6.72887,56 C2.78323,56 0,53.2057 0,49.2839 C0,35.1001 0,20.9163 0,6.73242 C0,2.81062 2.78323,0.0163408 6.72887,0.0163408 C27.2429,0.0163408 47.7406,0.0326816 68.2547,0 C72.0693,0 75.0163,2.92501 74.9999681,6.73242 C74.9672,20.9163 74.9836,35.1001 74.9836,49.2839 C74.9836,53.2221 72.2003,56 68.2547,56 C57.9895,56 47.7079,56 37.4427,56 Z M5.50098,3.13744 C5.73018,3.38255 5.82842,3.52962 5.95939,3.644 C15.7498,12.5334 25.5403,21.4228 35.3307,30.2959 C36.8042,31.6358 38.1794,31.6195 39.6692,30.2632 C49.4269,21.4228 59.1846,12.5661 68.9259,3.70937 C69.0897,3.5623 69.2206,3.38255 69.4498,3.1211 C48.0681,3.13744 26.85,3.13744 5.50098,3.13744 Z M30.3863,29.9527 C21.8074,37.3224 13.6542,45.019 5.40275,52.8462 C26.8664,52.8462 48.1172,52.8462 69.5808,52.8462 C61.2475,44.9863 53.1106,37.2571 44.5645,29.9364 C43.7622,30.6554 43.0419,31.309 42.3215,31.979 C39.2763,34.7896 35.7236,34.806 32.6948,32.028 C31.9581,31.3417 31.2049,30.6881 30.3863,29.9527 Z M71.8238,50.6402 C71.8238,35.4923 71.8238,20.4587 71.8238,5.21272 C63.4086,12.8439 55.1571,20.3443 46.9711,27.7794 C55.2553,35.3942 63.4741,42.96 71.8238,50.6402 Z M3.14342,50.6402 C11.4767,42.9764 19.6955,35.4106 27.9797,27.7957 C19.7937,20.3443 11.5422,12.8439 3.14342,5.19638 C3.14342,20.475 3.14342,35.5086 3.14342,50.6402 Z" id="Shape"></path>
                    </g>
                  </g>
                </svg>
                <p className="relative z-40 cursor-pointer"><Link href="mailto:info@damansdak.pl">info@damansdak.pl</Link></p>
              </div>
              <div className="flex items-center mt-8 text-3xl font-bold lg:mt-0 lg:ml-20 sm:space-x-6 text-primary">
                <svg className="hidden w-12 h-12 sm:block" width="72px" height="72px" viewBox="0 0 72 72" version="1.1">
                  <g id="Templates" stroke="none" fill="none">
                    <g id="Group" fill="currentColor">
                      <path d="M27.7233997,18.5669992 C27.2864997,19.8321992 26.9951997,21.0243992 26.4611997,22.0705992 C25.5630997,23.8710992 24.5435997,25.6228992 23.5241997,27.3746992 C23.1357997,28.0558992 23.1114997,28.5424992 23.6454997,29.1993992 C29.4467997,36.2308992 35.8305997,42.6541992 42.8939997,48.4204992 C43.4765997,48.9070992 43.8891997,48.8583992 44.4717997,48.5177992 C46.3164997,47.4472992 48.1854997,46.4253992 50.0787997,45.4034992 C52.5303997,44.0896992 54.9090997,44.1869992 57.2635997,45.7927992 C61.1957997,48.4690992 65.1765997,51.0967992 69.1330997,53.7487992 C72.2157997,55.8168992 72.8711997,58.4688992 70.7350997,61.5101992 C68.8175997,64.2351992 66.6814997,66.8385992 64.4483997,69.3202992 C62.3851997,71.5829992 59.7636997,72.3858992 56.6567997,71.7776992 C50.2486997,70.5367992 44.5445997,67.7144992 39.1316997,64.2108992 C31.0972997,59.0284992 24.3736997,52.3376992 17.8199997,45.4521992 C12.5284997,39.8804992 7.9166297,33.8221992 4.3727697,26.9853992 C2.3581097,23.0924992 0.853183697,19.0292992 0.124994697,14.6984992 C-0.336192303,11.9734992 0.489089697,9.61344918 2.4309297,7.86165918 C5.1009597,5.42861918 7.9166297,3.11722918 10.8778997,1.04914918 C13.5236997,-0.799966818 16.1693997,-0.143045818 18.0141997,2.53329918 C20.8783997,6.71812918 23.7182997,10.9272992 26.4611997,15.2093992 C27.0922997,16.1826992 27.3106997,17.4234992 27.7233997,18.5669992 Z M2.8435697,13.0926992 C2.9163897,13.1413992 2.9892097,13.1899992 3.0620297,13.2386992 C3.1348497,13.6765992 3.1833897,14.1145992 3.2562097,14.5524992 C4.3727697,20.9270992 7.1884397,26.5960992 10.8536997,31.8270992 C18.9607997,43.4083992 28.8641997,53.2621992 40.4423997,61.3398992 C45.5639997,64.9164992 51.1467997,67.6171992 57.3849997,68.7606992 C59.1083997,69.0769992 60.6860997,68.8336992 61.8268997,67.5441992 C64.0357997,65.0867992 66.1960997,62.5807992 68.2106997,59.9530992 C69.4243997,58.3472992 69.1573997,57.4956992 67.4582997,56.3521992 C63.3318997,53.5784992 59.2054997,50.8291992 55.0789997,48.0797992 C54.0352997,47.3742992 52.9672997,47.3985992 51.8749997,48.0067992 C49.6175997,49.2476992 47.3601997,50.4885992 45.0785997,51.7293992 C43.2580997,52.7269992 43.2580997,52.7269992 41.5832997,51.3643992 C33.7430997,45.0141992 26.6795997,37.9096992 20.3200997,30.0509992 C19.5433997,29.0777992 19.4705997,28.2505992 20.0773997,27.2042992 C21.3880997,24.9415992 22.6260997,22.6058992 23.9124997,20.3187992 C24.5678997,19.1265992 24.6406997,17.9587992 23.8396997,16.7908992 C21.0968997,12.7033992 18.3782997,8.61590918 15.6111997,4.52839918 C14.5188997,2.89825918 13.6450997,2.60628918 12.1158997,3.77414918 C9.4700997,5.79357918 6.8971597,7.95897918 4.4455897,10.2216992 C3.6931197,10.9272992 3.3532997,12.1194992 2.8435697,13.0926992 Z" id="Shape"></path>
                      <path d="M40.0780997,6.59647918 C40.1266997,5.57459918 40.1751997,4.65003918 40.2237997,3.55517918 C47.1172997,3.87146918 53.0883997,6.23151918 58.1129997,10.8055992 C63.8170997,15.9879992 66.7783997,22.5085992 67.3366997,30.2455992 C66.8997997,30.2942992 66.5841997,30.3672992 66.2686997,30.3672992 C65.6375997,30.3915992 65.0064997,30.3672992 64.2782997,30.3672992 C63.8656997,23.8953992 61.4383997,18.3480992 56.8507997,13.8225992 C52.2631997,9.29714918 46.7046997,6.96142918 40.0780997,6.59647918 Z" id="Path"></path>
                      <path d="M57.7003997,30.8540992 C56.8022997,30.8540992 55.8798997,30.8540992 54.9331997,30.8540992 C53.6710997,22.1194992 48.7193997,17.1073992 39.8353997,15.9638992 C39.8353997,15.0636992 39.8353997,14.1390992 39.8353997,13.1901992 C47.7969997,11.7790992 58.8896997,22.7277992 57.7003997,30.8540992 Z" id="Path"></path>
                    </g>
                  </g>
                </svg>
                <p className="relative z-40 cursor-pointer">+48 532 197 746</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row flex-wrap px-8 py-8 mx-auto text-center items-center lg:my-16 lg:w-3/5 sm:px-0 sm:w-4/5">
            <div className="lg:w-1/2 p-5">
              <img className="h-24 w-24 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Ewelina_Grochowicz.jpeg" alt="" />
              <p className="mt-6 mb-2 font-serif font-bold text-xl">Ewelina Grochowicz</p>
              <p className="text-sm font-serif font-light">Manager do spraw administracyjnych</p>
            </div>
            <div className="lg:w-1/2 p-5">
              <img className="h-24 w-24 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Monika_Spiewak.jpeg" alt="" />
              <p className="mt-6 mb-2 font-serif font-bold text-xl">Monika Śpiewak</p>
              <p className="text-sm font-serif font-light">Specjalista ds. marketingu</p>
            </div>
            <div className="lg:w-1/2 p-5">
              <img className="h-24 w-24 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Edyta_Hajnold.jpeg" alt="" />
              <p className="mt-6 mb-2 font-serif font-bold text-xl">Edyta Hajnold</p>
              <p className="text-sm font-serif font-light">Specjalista ds. rekrutacji</p>
            </div>
            <div className="lg:w-1/2 p-5">
              <img className="h-24 w-24 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Pawel_Olech.jpeg" alt="" />
              <p className="mt-6 mb-2 font-serif font-bold text-xl">Paweł Olech</p>
              <p className="text-sm font-serif font-light">Specjalista ds. zamówień</p>
            </div>
            <div className="lg:w-1/2 p-5">
              <img className="h-24 w-24 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Artur_L.jpeg" alt="" />
              <p className="mt-6 mb-2 font-serif font-bold text-xl">Artur L.</p>
              <p className="text-sm font-serif font-light">Kierownik Działu Ofertowania</p>
            </div>
            <div className="lg:w-1/2 p-5">
              <img className="h-24 w-24 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Kateryna_Halkina.jpeg" alt="" />
              <p className="mt-6 mb-2 font-serif font-bold text-xl">Kateryna Halkina</p>
              <p className="text-sm font-serif font-light">Specjalista ds. rekrutacji</p>
            </div>
          </div>
          <div className="flex flex-col px-8 py-8 mx-auto lg:items-center lg:flex lg:flex-row sm:w-4/5 sm:px-0 lg:w-3/5 2xl:pb-32">
            <div className="">
              <div className="">
                <p className="text-3xl font-bold 2xl:text-4xl z-40">Przemyśl</p>
                <p className="mt-4 font-serif text-lg font-light text-gray-500">ul. Mierosławskiego 14, 37-700 Przemyśl</p>
                <p className="font-serif text-lg font-light text-gray-500">Polska, Podkarpackie</p>
                <a target="_blank" href="https://www.google.com/maps/dir//Ludwika+Mierosławskiego+14,+37-700+Przemyśl/@49.7865609,22.7910231,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x473b7ed66bd661fd:0x9eeaeeb0562b92d6!2m2!1d22.7932118!2d49.7865609!3e0">
                  <p className="flex z-40 cursor-pointer font-serif text-lg font-light mt-4 underline">
                    sprawdź dojazd
                  </p>
                </a>
              </div>
              <div className="mt-12">
                <p className="text-3xl font-bold 2xl:text-4xl">Warszawa</p>
                <p className="mt-4 font-serif text-lg font-light text-gray-500">ul. Karolkowa 30, 01-207 Warszawa</p>
                <p className="font-serif text-lg font-light text-gray-500">Polska, Mazowieckie</p>
                <a target="_blank" href="https://www.google.com/maps/dir//Karolkowa+30,+01-207+Warszawa/@52.2316937,20.975736,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x471ecc9d2419b109:0x242d2e55f3766695!2m2!1d20.9779247!2d52.2316937!3e0">
                  <p className="flex z-40 cursor-pointer font-serif text-lg font-light mt-4 underline">
                    sprawdź dojazd
                  </p>
                </a>
              </div>
            </div>
            <img className="mx-auto mt-12 lg:w-5/12 sm:w-10/12 lg:mt-0" src="https://damansdak.s3.eu-central-1.amazonaws.com/biuro.jpg" alt="" />
          </div>
        </LazyShow>
        {/* <div className="sticky hidden h-20 mb-2 ml-auto bg-white border-l-2 shadow-2xl w-28 lg:block border-primary bottom-2">
          <Link href="#link"><a><img alt="certyfikat VCS" className="w-20 h-auto px-3 pt-2 mx-auto" src="https://damansdak.s3.eu-central-1.amazonaws.com/vcs.png" layout="fill" /></a></Link>
          <p className="px-3 mt-1 text-xs leading-3 text-center"><a href="#link">Certyfikowana<br></br> firma</a></p>
        </div> */}
        <LazyShow>
          <Footer />
        </LazyShow>
      </section>
    </>
  );
};

export default Kontakt;