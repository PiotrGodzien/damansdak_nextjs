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
            <h2 className="text-3xl  lg:text-5xl text-center lg:text-left text-white font-heading">Poznaj nas bliżej</h2>
          </div>
        </div>
        <div className="py-4 bg-pattern mb-6"></div>
        <LazyShow>
          <div className="px-8 py-8 mx-auto lg:w-3/5 sm:px-0 sm:w-4/5">
            <div className="text-3xl  lg:w-1/3 sm:text-5xl 2xl:text-7xl">Kim jesteśmy</div>
            <p className="mt-6 font-serif text-lg font-light text-gray-500 lg:w-10/12">Firma Damans Dak B.V. z siedzibą w m. Tilburg (Holandia) powstała w 2013 roku i od tego czasu zajmuje się wszystkimi formami płaskich pokryć dachowych z tworzyw sztucznych (membrany PVC, TPO/FPO, EPDM). Firma na początku składała się z 5 pracowników, z każdym rokiem rozwijaliśmy się. </p>
          </div>
        </LazyShow>
        <p className="px-8 mx-auto lg:w-3/5 mb-6 sm:px-0 sm:w-4/5 text-lg text-gray-500">Dział ofertowania i projektów:</p>
        <div className="flex mb-6 flex-col justify-center lg:flex-row flex-wrap px-8 mx-auto text-center items-center lg:w-3/5 sm:px-0 sm:w-4/5">
          <div className="lg:w-1/2 p-5">
            <img className="h-36 w-36 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Dariusz_Barbarowicz.jpeg" alt="" />
            <p className="mt-6 mb-2 font-serif  text-xl">Dariusz Barbarowicz</p>
            <p className="text-sm font-serif font-light">Project Director</p>
            <div className="flex text-sm font-serif mt-2 items-center justify-center">
              <svg className="hidden mr-3 w-5 h-5 sm:block" width="76px" height="52px" viewBox="0 0 76 52" version="1.1">
                <g id="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="email-svgrepo-com" fill="CurrentColor" fill-rule="nonzero">
                    <path d="M66.097,0 L9.197,0 C4.126,0 0,4.126 0,9.197 L0,41.919 C0,46.99 4.126,51.116 9.197,51.116 L66.097,51.116 C71.168,51.116 75.2940002,46.99 75.2940002,41.919 L75.2940002,9.198 C75.295,4.126 71.169,0 66.097,0 Z M61.603,6 L37.647,21.434 L13.691,6 L61.603,6 Z M66.097,45.117 L9.197,45.117 C7.434,45.117 6,43.682 6,41.92 L6,9.368 L35.796,28.528 C35.836,28.553 35.879,28.57 35.92,28.593 C35.963,28.617 36.007,28.64 36.051,28.662 C36.282,28.781 36.52,28.877 36.763,28.94 C36.788,28.947 36.813,28.95 36.838,28.956 C37.105,29.019 37.375,29.058 37.645,29.058 C37.646,29.058 37.647,29.058 37.647,29.058 C37.649,29.058 37.65,29.058 37.651,29.058 C37.921,29.058 38.191,29.02 38.458,28.956 C38.483,28.95 38.508,28.947 38.533,28.94 C38.776,28.877 39.013,28.781 39.245,28.662 C39.289,28.64 39.333,28.617 39.376,28.593 C39.417,28.57 39.46,28.553 39.5,28.528 L69.296,9.368 L69.296,41.919 C69.295,43.682 67.86,45.117 66.097,45.117 Z" id="Shape"></path>
                  </g>
                </g>
              </svg>
              <p className=""><a href="mailto:d.barbarowicz@damansdak.pl">d.barbarowicz@damansdak.pl</a></p>
            </div>
            {/* <div className="flex text-sm font-serif mt-2 items-center justify-center">
              <svg className="hidden w-5 h-5 mr-3 sm:block" width="77px" height="77px" viewBox="0 0 77 77" version="1.1">
                <g id="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="phone-svgrepo-com-3" fill="currentColor" fill-rule="nonzero">
                    <path d="M59.6061971,41.7009419 C58.8469608,40.9404448 57.8164396,40.5130933 56.7418033,40.5130933 C55.6671671,40.5130933 54.6366459,40.9404448 53.8774096,41.7009419 L47.4193563,48.1587289 C44.4253153,47.2674409 38.8383294,45.2417862 35.2973391,41.7009419 C31.7563488,38.1600975 29.7306106,32.5733419 28.8392859,29.5794244 L35.2973391,23.1216373 C36.0578675,22.3624323 36.4852367,21.3319536 36.4852367,20.2573616 C36.4852367,19.1827696 36.0578675,18.1522909 35.2973391,17.3930859 L19.0914338,1.1878486 C18.3321975,0.427351567 17.3016763,0 16.22704,0 C15.1524037,0 14.1218825,0.427351567 13.3626463,1.1878486 L2.37504246,12.1749995 C0.835481451,13.714497 -0.0315344841,15.8292805 0.000877326584,17.9886284 C0.0940612822,23.7576929 1.62146786,43.7954688 17.4141226,59.5874725 C33.2067773,75.3794763 53.2453793,76.9027686 59.018733,77 L59.1321744,77 C61.2713539,77 63.2930406,76.1573277 64.8244986,74.6259327 L75.8121024,63.6387818 C76.5726308,62.8795769 77,61.8490981 77,60.7745062 C77,59.6999142 76.5726308,58.6694354 75.8121024,57.9102305 L59.6061971,41.7009419 L59.6061971,41.7009419 Z M59.0916596,68.89333 C54.0354172,68.8082525 36.7356132,67.4510639 23.1429101,53.8548698 C9.5056408,40.2181626 8.18485952,22.8583022 8.10382999,17.9035509 L16.22704,9.78067568 L26.7041578,20.2573616 L21.4655989,25.4957046 C20.4981656,26.4623687 20.0837414,27.8518513 20.3635974,29.1904987 C20.4608328,29.6563992 22.8390494,40.7043198 29.5645001,47.4294932 C36.2899508,54.1546667 47.3383268,56.5327853 47.8042466,56.6300167 C49.1425317,56.9178331 50.5352453,56.5040065 51.499193,55.5321119 L56.7418033,50.2937689 L67.2189211,60.7704548 L59.0916596,68.89333 L59.0916596,68.89333 Z" id="Shape"></path>
                  </g>
                </g>
              </svg>
              <p className=""><a href="tel:+48538621733">+48 538 621 733</a></p>
            </div> */}
          </div>
          <div className="lg:w-1/2 p-5">
            <img className="h-36 w-36 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Artur_L.jpeg" alt="" />
            <p className="mt-6 mb-2 font-serif  text-xl">Artur Leszczyński</p>
            <p className="text-sm font-serif font-light">Kierownik Działu Ofertowania</p>
            <div className="flex text-sm font-serif mt-2 items-center justify-center">
              <svg className="hidden mr-3 w-5 h-5 sm:block" width="76px" height="52px" viewBox="0 0 76 52" version="1.1">
                <g id="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="email-svgrepo-com" fill="CurrentColor" fill-rule="nonzero">
                    <path d="M66.097,0 L9.197,0 C4.126,0 0,4.126 0,9.197 L0,41.919 C0,46.99 4.126,51.116 9.197,51.116 L66.097,51.116 C71.168,51.116 75.2940002,46.99 75.2940002,41.919 L75.2940002,9.198 C75.295,4.126 71.169,0 66.097,0 Z M61.603,6 L37.647,21.434 L13.691,6 L61.603,6 Z M66.097,45.117 L9.197,45.117 C7.434,45.117 6,43.682 6,41.92 L6,9.368 L35.796,28.528 C35.836,28.553 35.879,28.57 35.92,28.593 C35.963,28.617 36.007,28.64 36.051,28.662 C36.282,28.781 36.52,28.877 36.763,28.94 C36.788,28.947 36.813,28.95 36.838,28.956 C37.105,29.019 37.375,29.058 37.645,29.058 C37.646,29.058 37.647,29.058 37.647,29.058 C37.649,29.058 37.65,29.058 37.651,29.058 C37.921,29.058 38.191,29.02 38.458,28.956 C38.483,28.95 38.508,28.947 38.533,28.94 C38.776,28.877 39.013,28.781 39.245,28.662 C39.289,28.64 39.333,28.617 39.376,28.593 C39.417,28.57 39.46,28.553 39.5,28.528 L69.296,9.368 L69.296,41.919 C69.295,43.682 67.86,45.117 66.097,45.117 Z" id="Shape"></path>
                  </g>
                </g>
              </svg>
              <p className=""><a href="mailto:artur.leszczynski@damansdak.pl">artur.leszczynski@damansdak.pl</a></p>
            </div>
            {/* <div className="flex text-sm font-serif mt-2 items-center justify-center">
              <svg className="hidden w-5 h-5 mr-3 sm:block" width="77px" height="77px" viewBox="0 0 77 77" version="1.1">
                <g id="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="phone-svgrepo-com-3" fill="currentColor" fill-rule="nonzero">
                    <path d="M59.6061971,41.7009419 C58.8469608,40.9404448 57.8164396,40.5130933 56.7418033,40.5130933 C55.6671671,40.5130933 54.6366459,40.9404448 53.8774096,41.7009419 L47.4193563,48.1587289 C44.4253153,47.2674409 38.8383294,45.2417862 35.2973391,41.7009419 C31.7563488,38.1600975 29.7306106,32.5733419 28.8392859,29.5794244 L35.2973391,23.1216373 C36.0578675,22.3624323 36.4852367,21.3319536 36.4852367,20.2573616 C36.4852367,19.1827696 36.0578675,18.1522909 35.2973391,17.3930859 L19.0914338,1.1878486 C18.3321975,0.427351567 17.3016763,0 16.22704,0 C15.1524037,0 14.1218825,0.427351567 13.3626463,1.1878486 L2.37504246,12.1749995 C0.835481451,13.714497 -0.0315344841,15.8292805 0.000877326584,17.9886284 C0.0940612822,23.7576929 1.62146786,43.7954688 17.4141226,59.5874725 C33.2067773,75.3794763 53.2453793,76.9027686 59.018733,77 L59.1321744,77 C61.2713539,77 63.2930406,76.1573277 64.8244986,74.6259327 L75.8121024,63.6387818 C76.5726308,62.8795769 77,61.8490981 77,60.7745062 C77,59.6999142 76.5726308,58.6694354 75.8121024,57.9102305 L59.6061971,41.7009419 L59.6061971,41.7009419 Z M59.0916596,68.89333 C54.0354172,68.8082525 36.7356132,67.4510639 23.1429101,53.8548698 C9.5056408,40.2181626 8.18485952,22.8583022 8.10382999,17.9035509 L16.22704,9.78067568 L26.7041578,20.2573616 L21.4655989,25.4957046 C20.4981656,26.4623687 20.0837414,27.8518513 20.3635974,29.1904987 C20.4608328,29.6563992 22.8390494,40.7043198 29.5645001,47.4294932 C36.2899508,54.1546667 47.3383268,56.5327853 47.8042466,56.6300167 C49.1425317,56.9178331 50.5352453,56.5040065 51.499193,55.5321119 L56.7418033,50.2937689 L67.2189211,60.7704548 L59.0916596,68.89333 L59.0916596,68.89333 Z" id="Shape"></path>
                  </g>
                </g>
              </svg>
              <p className=""><a href="tel:+48538621732">+48 538 621 732</a></p>
            </div> */}
          </div>
        </div>
        <p className="px-8 mx-auto lg:w-3/5 mb-6 sm:px-0 sm:w-4/5 text-lg text-gray-500">Dział administracji:</p>
        <div className="flex mb-6 flex-col lg:flex-row flex-wrap px-8 pb-8 mx-auto text-center items-center lg:w-3/5 sm:px-0 sm:w-4/5">
          <div className="lg:w-1/2">
            <img className="h-36 w-36 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Ewelina_Grochowicz.jpeg" alt="" />
            <p className="mt-6 mb-2 font-serif  text-xl">Ewelina Grochowicz</p>
            <p className="text-sm font-serif font-light">Manager do spraw administracyjnych</p>
            <div className="flex text-sm font-serif mt-2 items-center justify-center">
              <svg className="hidden mr-3 w-5 h-5 sm:block" width="76px" height="52px" viewBox="0 0 76 52" version="1.1">
                <g id="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="email-svgrepo-com" fill="CurrentColor" fill-rule="nonzero">
                    <path d="M66.097,0 L9.197,0 C4.126,0 0,4.126 0,9.197 L0,41.919 C0,46.99 4.126,51.116 9.197,51.116 L66.097,51.116 C71.168,51.116 75.2940002,46.99 75.2940002,41.919 L75.2940002,9.198 C75.295,4.126 71.169,0 66.097,0 Z M61.603,6 L37.647,21.434 L13.691,6 L61.603,6 Z M66.097,45.117 L9.197,45.117 C7.434,45.117 6,43.682 6,41.92 L6,9.368 L35.796,28.528 C35.836,28.553 35.879,28.57 35.92,28.593 C35.963,28.617 36.007,28.64 36.051,28.662 C36.282,28.781 36.52,28.877 36.763,28.94 C36.788,28.947 36.813,28.95 36.838,28.956 C37.105,29.019 37.375,29.058 37.645,29.058 C37.646,29.058 37.647,29.058 37.647,29.058 C37.649,29.058 37.65,29.058 37.651,29.058 C37.921,29.058 38.191,29.02 38.458,28.956 C38.483,28.95 38.508,28.947 38.533,28.94 C38.776,28.877 39.013,28.781 39.245,28.662 C39.289,28.64 39.333,28.617 39.376,28.593 C39.417,28.57 39.46,28.553 39.5,28.528 L69.296,9.368 L69.296,41.919 C69.295,43.682 67.86,45.117 66.097,45.117 Z" id="Shape"></path>
                  </g>
                </g>
              </svg>
              <p className=""><a href="mailto:ewelina@damansdak.pl">ewelina@damansdak.pl</a></p>
            </div>
            {/* <div className="flex text-sm font-serif mt-2 items-center justify-center">
              <svg className="hidden w-5 h-5 mr-3 sm:block" width="77px" height="77px" viewBox="0 0 77 77" version="1.1">
                <g id="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="phone-svgrepo-com-3" fill="currentColor" fill-rule="nonzero">
                    <path d="M59.6061971,41.7009419 C58.8469608,40.9404448 57.8164396,40.5130933 56.7418033,40.5130933 C55.6671671,40.5130933 54.6366459,40.9404448 53.8774096,41.7009419 L47.4193563,48.1587289 C44.4253153,47.2674409 38.8383294,45.2417862 35.2973391,41.7009419 C31.7563488,38.1600975 29.7306106,32.5733419 28.8392859,29.5794244 L35.2973391,23.1216373 C36.0578675,22.3624323 36.4852367,21.3319536 36.4852367,20.2573616 C36.4852367,19.1827696 36.0578675,18.1522909 35.2973391,17.3930859 L19.0914338,1.1878486 C18.3321975,0.427351567 17.3016763,0 16.22704,0 C15.1524037,0 14.1218825,0.427351567 13.3626463,1.1878486 L2.37504246,12.1749995 C0.835481451,13.714497 -0.0315344841,15.8292805 0.000877326584,17.9886284 C0.0940612822,23.7576929 1.62146786,43.7954688 17.4141226,59.5874725 C33.2067773,75.3794763 53.2453793,76.9027686 59.018733,77 L59.1321744,77 C61.2713539,77 63.2930406,76.1573277 64.8244986,74.6259327 L75.8121024,63.6387818 C76.5726308,62.8795769 77,61.8490981 77,60.7745062 C77,59.6999142 76.5726308,58.6694354 75.8121024,57.9102305 L59.6061971,41.7009419 L59.6061971,41.7009419 Z M59.0916596,68.89333 C54.0354172,68.8082525 36.7356132,67.4510639 23.1429101,53.8548698 C9.5056408,40.2181626 8.18485952,22.8583022 8.10382999,17.9035509 L16.22704,9.78067568 L26.7041578,20.2573616 L21.4655989,25.4957046 C20.4981656,26.4623687 20.0837414,27.8518513 20.3635974,29.1904987 C20.4608328,29.6563992 22.8390494,40.7043198 29.5645001,47.4294932 C36.2899508,54.1546667 47.3383268,56.5327853 47.8042466,56.6300167 C49.1425317,56.9178331 50.5352453,56.5040065 51.499193,55.5321119 L56.7418033,50.2937689 L67.2189211,60.7704548 L59.0916596,68.89333 L59.0916596,68.89333 Z" id="Shape"></path>
                  </g>
                </g>
              </svg>
              <p className=""><a href="tel:+48532197746">+48 532 197 746</a></p>
            </div> */}
          </div>
        </div>
        <p className="px-8 mx-auto lg:w-3/5 mb-6 sm:px-0 sm:w-4/5 text-lg text-gray-500">Dział realizacji:</p>
        <div className="flex mb-6 flex-col lg:flex-row flex-wrap px-8 mx-auto text-center items-center lg:w-3/5 sm:px-0 sm:w-4/5">
          <div className="lg:w-1/2 p-5">
            <img className="h-36 w-36 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Mirosław_Łosobik.jpeg" alt="" />
            <p className="mt-6 mb-2 font-serif  text-xl">Mirosław Łosobik</p>
            <p className="text-sm font-serif font-light">Specjalista ds. marketingu</p>
            <div className="flex text-sm font-serif mt-2 items-center justify-center">
              <svg className="hidden mr-3 w-5 h-5 sm:block" width="76px" height="52px" viewBox="0 0 76 52" version="1.1">
                <g id="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="email-svgrepo-com" fill="CurrentColor" fill-rule="nonzero">
                    <path d="M66.097,0 L9.197,0 C4.126,0 0,4.126 0,9.197 L0,41.919 C0,46.99 4.126,51.116 9.197,51.116 L66.097,51.116 C71.168,51.116 75.2940002,46.99 75.2940002,41.919 L75.2940002,9.198 C75.295,4.126 71.169,0 66.097,0 Z M61.603,6 L37.647,21.434 L13.691,6 L61.603,6 Z M66.097,45.117 L9.197,45.117 C7.434,45.117 6,43.682 6,41.92 L6,9.368 L35.796,28.528 C35.836,28.553 35.879,28.57 35.92,28.593 C35.963,28.617 36.007,28.64 36.051,28.662 C36.282,28.781 36.52,28.877 36.763,28.94 C36.788,28.947 36.813,28.95 36.838,28.956 C37.105,29.019 37.375,29.058 37.645,29.058 C37.646,29.058 37.647,29.058 37.647,29.058 C37.649,29.058 37.65,29.058 37.651,29.058 C37.921,29.058 38.191,29.02 38.458,28.956 C38.483,28.95 38.508,28.947 38.533,28.94 C38.776,28.877 39.013,28.781 39.245,28.662 C39.289,28.64 39.333,28.617 39.376,28.593 C39.417,28.57 39.46,28.553 39.5,28.528 L69.296,9.368 L69.296,41.919 C69.295,43.682 67.86,45.117 66.097,45.117 Z" id="Shape"></path>
                  </g>
                </g>
              </svg>
              <p className=""><a href="mailto:miroslaw.łosobik@damansdak.pl">miroslaw.łosobik@damansdak.pl</a></p>
            </div>
            {/* <div className="flex text-sm font-serif mt-2 items-center justify-center">
              <svg className="hidden w-5 h-5 mr-3 sm:block" width="77px" height="77px" viewBox="0 0 77 77" version="1.1">
                <g id="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="phone-svgrepo-com-3" fill="currentColor" fill-rule="nonzero">
                    <path d="M59.6061971,41.7009419 C58.8469608,40.9404448 57.8164396,40.5130933 56.7418033,40.5130933 C55.6671671,40.5130933 54.6366459,40.9404448 53.8774096,41.7009419 L47.4193563,48.1587289 C44.4253153,47.2674409 38.8383294,45.2417862 35.2973391,41.7009419 C31.7563488,38.1600975 29.7306106,32.5733419 28.8392859,29.5794244 L35.2973391,23.1216373 C36.0578675,22.3624323 36.4852367,21.3319536 36.4852367,20.2573616 C36.4852367,19.1827696 36.0578675,18.1522909 35.2973391,17.3930859 L19.0914338,1.1878486 C18.3321975,0.427351567 17.3016763,0 16.22704,0 C15.1524037,0 14.1218825,0.427351567 13.3626463,1.1878486 L2.37504246,12.1749995 C0.835481451,13.714497 -0.0315344841,15.8292805 0.000877326584,17.9886284 C0.0940612822,23.7576929 1.62146786,43.7954688 17.4141226,59.5874725 C33.2067773,75.3794763 53.2453793,76.9027686 59.018733,77 L59.1321744,77 C61.2713539,77 63.2930406,76.1573277 64.8244986,74.6259327 L75.8121024,63.6387818 C76.5726308,62.8795769 77,61.8490981 77,60.7745062 C77,59.6999142 76.5726308,58.6694354 75.8121024,57.9102305 L59.6061971,41.7009419 L59.6061971,41.7009419 Z M59.0916596,68.89333 C54.0354172,68.8082525 36.7356132,67.4510639 23.1429101,53.8548698 C9.5056408,40.2181626 8.18485952,22.8583022 8.10382999,17.9035509 L16.22704,9.78067568 L26.7041578,20.2573616 L21.4655989,25.4957046 C20.4981656,26.4623687 20.0837414,27.8518513 20.3635974,29.1904987 C20.4608328,29.6563992 22.8390494,40.7043198 29.5645001,47.4294932 C36.2899508,54.1546667 47.3383268,56.5327853 47.8042466,56.6300167 C49.1425317,56.9178331 50.5352453,56.5040065 51.499193,55.5321119 L56.7418033,50.2937689 L67.2189211,60.7704548 L59.0916596,68.89333 L59.0916596,68.89333 Z" id="Shape"></path>
                  </g>
                </g>
              </svg>
              <p className=""><a href="tel:+48538621723"> +48 538 621 723</a></p>
            </div> */}
          </div>
        </div>
        <p className="px-8 mx-auto lg:w-3/5 mb-6 sm:px-0 sm:w-4/5 text-lg text-gray-500">Dział zamówień:</p>
        <div className="flex mb-6 flex-col lg:flex-row flex-wrap px-8 mx-auto text-center items-center lg:w-3/5 sm:px-0 sm:w-4/5">
          <div className="lg:w-1/2 p-5">
            <img className="h-36 w-36 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Pawel_Olech.jpeg" alt="" />
            <p className="mt-6 mb-2 font-serif  text-xl">Paweł Olech</p>
            <p className="text-sm font-serif font-light">Specjalista ds. zamówień</p>
            <div className="flex text-sm font-serif mt-2 items-center justify-center">
              <svg className="hidden mr-3 w-5 h-5 sm:block" width="76px" height="52px" viewBox="0 0 76 52" version="1.1">
                <g id="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="email-svgrepo-com" fill="CurrentColor" fill-rule="nonzero">
                    <path d="M66.097,0 L9.197,0 C4.126,0 0,4.126 0,9.197 L0,41.919 C0,46.99 4.126,51.116 9.197,51.116 L66.097,51.116 C71.168,51.116 75.2940002,46.99 75.2940002,41.919 L75.2940002,9.198 C75.295,4.126 71.169,0 66.097,0 Z M61.603,6 L37.647,21.434 L13.691,6 L61.603,6 Z M66.097,45.117 L9.197,45.117 C7.434,45.117 6,43.682 6,41.92 L6,9.368 L35.796,28.528 C35.836,28.553 35.879,28.57 35.92,28.593 C35.963,28.617 36.007,28.64 36.051,28.662 C36.282,28.781 36.52,28.877 36.763,28.94 C36.788,28.947 36.813,28.95 36.838,28.956 C37.105,29.019 37.375,29.058 37.645,29.058 C37.646,29.058 37.647,29.058 37.647,29.058 C37.649,29.058 37.65,29.058 37.651,29.058 C37.921,29.058 38.191,29.02 38.458,28.956 C38.483,28.95 38.508,28.947 38.533,28.94 C38.776,28.877 39.013,28.781 39.245,28.662 C39.289,28.64 39.333,28.617 39.376,28.593 C39.417,28.57 39.46,28.553 39.5,28.528 L69.296,9.368 L69.296,41.919 C69.295,43.682 67.86,45.117 66.097,45.117 Z" id="Shape"></path>
                  </g>
                </g>
              </svg>
              <p className=""><a href="mailto:p.olech@damansdak.pl">p.olech@damansdak.pl</a></p>
            </div>
            {/* <div className="flex text-sm font-serif mt-2 items-center justify-center">
              <svg className="hidden w-5 h-5 mr-3 sm:block" width="77px" height="77px" viewBox="0 0 77 77" version="1.1">
                <g id="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="phone-svgrepo-com-3" fill="currentColor" fill-rule="nonzero">
                    <path d="M59.6061971,41.7009419 C58.8469608,40.9404448 57.8164396,40.5130933 56.7418033,40.5130933 C55.6671671,40.5130933 54.6366459,40.9404448 53.8774096,41.7009419 L47.4193563,48.1587289 C44.4253153,47.2674409 38.8383294,45.2417862 35.2973391,41.7009419 C31.7563488,38.1600975 29.7306106,32.5733419 28.8392859,29.5794244 L35.2973391,23.1216373 C36.0578675,22.3624323 36.4852367,21.3319536 36.4852367,20.2573616 C36.4852367,19.1827696 36.0578675,18.1522909 35.2973391,17.3930859 L19.0914338,1.1878486 C18.3321975,0.427351567 17.3016763,0 16.22704,0 C15.1524037,0 14.1218825,0.427351567 13.3626463,1.1878486 L2.37504246,12.1749995 C0.835481451,13.714497 -0.0315344841,15.8292805 0.000877326584,17.9886284 C0.0940612822,23.7576929 1.62146786,43.7954688 17.4141226,59.5874725 C33.2067773,75.3794763 53.2453793,76.9027686 59.018733,77 L59.1321744,77 C61.2713539,77 63.2930406,76.1573277 64.8244986,74.6259327 L75.8121024,63.6387818 C76.5726308,62.8795769 77,61.8490981 77,60.7745062 C77,59.6999142 76.5726308,58.6694354 75.8121024,57.9102305 L59.6061971,41.7009419 L59.6061971,41.7009419 Z M59.0916596,68.89333 C54.0354172,68.8082525 36.7356132,67.4510639 23.1429101,53.8548698 C9.5056408,40.2181626 8.18485952,22.8583022 8.10382999,17.9035509 L16.22704,9.78067568 L26.7041578,20.2573616 L21.4655989,25.4957046 C20.4981656,26.4623687 20.0837414,27.8518513 20.3635974,29.1904987 C20.4608328,29.6563992 22.8390494,40.7043198 29.5645001,47.4294932 C36.2899508,54.1546667 47.3383268,56.5327853 47.8042466,56.6300167 C49.1425317,56.9178331 50.5352453,56.5040065 51.499193,55.5321119 L56.7418033,50.2937689 L67.2189211,60.7704548 L59.0916596,68.89333 L59.0916596,68.89333 Z" id="Shape"></path>
                  </g>
                </g>
              </svg>
              <p className=""><a href="tel:+48538621736">+48 538 621 736</a></p>
            </div> */}
          </div>
        </div>
        <p className="px-8 mx-auto lg:w-3/5 mb-6 sm:px-0 sm:w-4/5 text-lg text-gray-500">Dział rekrutacji:</p>
        <div className="flex mb-6 justify-center flex-col lg:flex-row flex-wrap px-8 mx-auto text-center items-center lg:w-3/5 sm:px-0 sm:w-4/5">
          <div className="lg:w-1/2 p-5">
            <img className="h-36 w-36 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Edyta_Hajnold.jpeg" alt="" />
            <p className="mt-6 mb-2 font-serif  text-xl">Edyta Hajnold</p>
            <p className="text-sm font-serif font-light">Specjalista ds. rekrutacji</p>
            <div className="flex text-sm font-serif mt-2 items-center justify-center">
              <svg className="hidden mr-3 w-5 h-5 sm:block" width="76px" height="52px" viewBox="0 0 76 52" version="1.1">
                <g id="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="email-svgrepo-com" fill="CurrentColor" fill-rule="nonzero">
                    <path d="M66.097,0 L9.197,0 C4.126,0 0,4.126 0,9.197 L0,41.919 C0,46.99 4.126,51.116 9.197,51.116 L66.097,51.116 C71.168,51.116 75.2940002,46.99 75.2940002,41.919 L75.2940002,9.198 C75.295,4.126 71.169,0 66.097,0 Z M61.603,6 L37.647,21.434 L13.691,6 L61.603,6 Z M66.097,45.117 L9.197,45.117 C7.434,45.117 6,43.682 6,41.92 L6,9.368 L35.796,28.528 C35.836,28.553 35.879,28.57 35.92,28.593 C35.963,28.617 36.007,28.64 36.051,28.662 C36.282,28.781 36.52,28.877 36.763,28.94 C36.788,28.947 36.813,28.95 36.838,28.956 C37.105,29.019 37.375,29.058 37.645,29.058 C37.646,29.058 37.647,29.058 37.647,29.058 C37.649,29.058 37.65,29.058 37.651,29.058 C37.921,29.058 38.191,29.02 38.458,28.956 C38.483,28.95 38.508,28.947 38.533,28.94 C38.776,28.877 39.013,28.781 39.245,28.662 C39.289,28.64 39.333,28.617 39.376,28.593 C39.417,28.57 39.46,28.553 39.5,28.528 L69.296,9.368 L69.296,41.919 C69.295,43.682 67.86,45.117 66.097,45.117 Z" id="Shape"></path>
                  </g>
                </g>
              </svg>
              <p className=""><a href="mailto:e.hajnold@DamansDak.pl">e.hajnold@damansdak.pl</a></p>
            </div>
            {/* <div className="flex text-sm font-serif mt-2 items-center justify-center">
              <svg className="hidden w-5 h-5 mr-3 sm:block" width="77px" height="77px" viewBox="0 0 77 77" version="1.1">
                <g id="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="phone-svgrepo-com-3" fill="currentColor" fill-rule="nonzero">
                    <path d="M59.6061971,41.7009419 C58.8469608,40.9404448 57.8164396,40.5130933 56.7418033,40.5130933 C55.6671671,40.5130933 54.6366459,40.9404448 53.8774096,41.7009419 L47.4193563,48.1587289 C44.4253153,47.2674409 38.8383294,45.2417862 35.2973391,41.7009419 C31.7563488,38.1600975 29.7306106,32.5733419 28.8392859,29.5794244 L35.2973391,23.1216373 C36.0578675,22.3624323 36.4852367,21.3319536 36.4852367,20.2573616 C36.4852367,19.1827696 36.0578675,18.1522909 35.2973391,17.3930859 L19.0914338,1.1878486 C18.3321975,0.427351567 17.3016763,0 16.22704,0 C15.1524037,0 14.1218825,0.427351567 13.3626463,1.1878486 L2.37504246,12.1749995 C0.835481451,13.714497 -0.0315344841,15.8292805 0.000877326584,17.9886284 C0.0940612822,23.7576929 1.62146786,43.7954688 17.4141226,59.5874725 C33.2067773,75.3794763 53.2453793,76.9027686 59.018733,77 L59.1321744,77 C61.2713539,77 63.2930406,76.1573277 64.8244986,74.6259327 L75.8121024,63.6387818 C76.5726308,62.8795769 77,61.8490981 77,60.7745062 C77,59.6999142 76.5726308,58.6694354 75.8121024,57.9102305 L59.6061971,41.7009419 L59.6061971,41.7009419 Z M59.0916596,68.89333 C54.0354172,68.8082525 36.7356132,67.4510639 23.1429101,53.8548698 C9.5056408,40.2181626 8.18485952,22.8583022 8.10382999,17.9035509 L16.22704,9.78067568 L26.7041578,20.2573616 L21.4655989,25.4957046 C20.4981656,26.4623687 20.0837414,27.8518513 20.3635974,29.1904987 C20.4608328,29.6563992 22.8390494,40.7043198 29.5645001,47.4294932 C36.2899508,54.1546667 47.3383268,56.5327853 47.8042466,56.6300167 C49.1425317,56.9178331 50.5352453,56.5040065 51.499193,55.5321119 L56.7418033,50.2937689 L67.2189211,60.7704548 L59.0916596,68.89333 L59.0916596,68.89333 Z" id="Shape"></path>
                  </g>
                </g>
              </svg>
              <p className=""><a href="tel:+48883846010">+48 883 846 010</a></p>
            </div> */}
          </div>
          <div className="lg:w-1/2 p-5">
            <img className="h-36 w-36 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Kateryna_Halkina.jpeg" alt="" />
            <p className="mt-6 mb-2 font-serif  text-xl">Kateryna Halkina</p>
            <p className="text-sm font-serif font-light">Specjalista ds. rekrutacji</p>
            <div className="flex text-sm font-serif mt-2 items-center justify-center">
              <svg className="hidden mr-3 w-5 h-5 sm:block" width="76px" height="52px" viewBox="0 0 76 52" version="1.1">
                <g id="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="email-svgrepo-com" fill="CurrentColor" fill-rule="nonzero">
                    <path d="M66.097,0 L9.197,0 C4.126,0 0,4.126 0,9.197 L0,41.919 C0,46.99 4.126,51.116 9.197,51.116 L66.097,51.116 C71.168,51.116 75.2940002,46.99 75.2940002,41.919 L75.2940002,9.198 C75.295,4.126 71.169,0 66.097,0 Z M61.603,6 L37.647,21.434 L13.691,6 L61.603,6 Z M66.097,45.117 L9.197,45.117 C7.434,45.117 6,43.682 6,41.92 L6,9.368 L35.796,28.528 C35.836,28.553 35.879,28.57 35.92,28.593 C35.963,28.617 36.007,28.64 36.051,28.662 C36.282,28.781 36.52,28.877 36.763,28.94 C36.788,28.947 36.813,28.95 36.838,28.956 C37.105,29.019 37.375,29.058 37.645,29.058 C37.646,29.058 37.647,29.058 37.647,29.058 C37.649,29.058 37.65,29.058 37.651,29.058 C37.921,29.058 38.191,29.02 38.458,28.956 C38.483,28.95 38.508,28.947 38.533,28.94 C38.776,28.877 39.013,28.781 39.245,28.662 C39.289,28.64 39.333,28.617 39.376,28.593 C39.417,28.57 39.46,28.553 39.5,28.528 L69.296,9.368 L69.296,41.919 C69.295,43.682 67.86,45.117 66.097,45.117 Z" id="Shape"></path>
                  </g>
                </g>
              </svg>
              <p className=""><a href="mailto:k.halkina@damansdak.pl">k.halkina@damansdak.pl</a></p>
            </div>
            {/* <div className="flex text-sm font-serif mt-2 items-center justify-center">
              <svg className="hidden w-5 h-5 mr-3 sm:block" width="77px" height="77px" viewBox="0 0 77 77" version="1.1">
                <g id="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="phone-svgrepo-com-3" fill="currentColor" fill-rule="nonzero">
                    <path d="M59.6061971,41.7009419 C58.8469608,40.9404448 57.8164396,40.5130933 56.7418033,40.5130933 C55.6671671,40.5130933 54.6366459,40.9404448 53.8774096,41.7009419 L47.4193563,48.1587289 C44.4253153,47.2674409 38.8383294,45.2417862 35.2973391,41.7009419 C31.7563488,38.1600975 29.7306106,32.5733419 28.8392859,29.5794244 L35.2973391,23.1216373 C36.0578675,22.3624323 36.4852367,21.3319536 36.4852367,20.2573616 C36.4852367,19.1827696 36.0578675,18.1522909 35.2973391,17.3930859 L19.0914338,1.1878486 C18.3321975,0.427351567 17.3016763,0 16.22704,0 C15.1524037,0 14.1218825,0.427351567 13.3626463,1.1878486 L2.37504246,12.1749995 C0.835481451,13.714497 -0.0315344841,15.8292805 0.000877326584,17.9886284 C0.0940612822,23.7576929 1.62146786,43.7954688 17.4141226,59.5874725 C33.2067773,75.3794763 53.2453793,76.9027686 59.018733,77 L59.1321744,77 C61.2713539,77 63.2930406,76.1573277 64.8244986,74.6259327 L75.8121024,63.6387818 C76.5726308,62.8795769 77,61.8490981 77,60.7745062 C77,59.6999142 76.5726308,58.6694354 75.8121024,57.9102305 L59.6061971,41.7009419 L59.6061971,41.7009419 Z M59.0916596,68.89333 C54.0354172,68.8082525 36.7356132,67.4510639 23.1429101,53.8548698 C9.5056408,40.2181626 8.18485952,22.8583022 8.10382999,17.9035509 L16.22704,9.78067568 L26.7041578,20.2573616 L21.4655989,25.4957046 C20.4981656,26.4623687 20.0837414,27.8518513 20.3635974,29.1904987 C20.4608328,29.6563992 22.8390494,40.7043198 29.5645001,47.4294932 C36.2899508,54.1546667 47.3383268,56.5327853 47.8042466,56.6300167 C49.1425317,56.9178331 50.5352453,56.5040065 51.499193,55.5321119 L56.7418033,50.2937689 L67.2189211,60.7704548 L59.0916596,68.89333 L59.0916596,68.89333 Z" id="Shape"></path>
                  </g>
                </g>
              </svg>
              <p className=""><a href="tel:+48729329815">+48 729 329 815</a></p>
            </div> */}
          </div>
        </div>
        <p className="px-8 mx-auto lg:w-3/5 mb-6 sm:px-0 sm:w-4/5 text-lg text-gray-500">Dział reklamy i social media:</p>
        <div className="flex mb-6 flex-col lg:flex-row flex-wrap px-8 mx-auto text-center items-center lg:w-3/5 sm:px-0 sm:w-4/5">
          <div className="lg:w-1/2 p-5">
            <img className="h-36 w-36 mx-auto rounded-full object-cover object-top" src="https://damansdak.s3.eu-central-1.amazonaws.com/pracownicy/Monika_Spiewak.jpeg" alt="" />
            <p className="mt-6 mb-2 font-serif  text-xl">Monika Śpiewak</p>
            <p className="text-sm font-serif font-light">Specjalista ds. marketingu</p>
            <div className="flex text-sm font-serif mt-2 items-center justify-center">
              <svg className="hidden mr-3 w-5 h-5 sm:block" width="76px" height="52px" viewBox="0 0 76 52" version="1.1">
                <g id="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="email-svgrepo-com" fill="CurrentColor" fill-rule="nonzero">
                    <path d="M66.097,0 L9.197,0 C4.126,0 0,4.126 0,9.197 L0,41.919 C0,46.99 4.126,51.116 9.197,51.116 L66.097,51.116 C71.168,51.116 75.2940002,46.99 75.2940002,41.919 L75.2940002,9.198 C75.295,4.126 71.169,0 66.097,0 Z M61.603,6 L37.647,21.434 L13.691,6 L61.603,6 Z M66.097,45.117 L9.197,45.117 C7.434,45.117 6,43.682 6,41.92 L6,9.368 L35.796,28.528 C35.836,28.553 35.879,28.57 35.92,28.593 C35.963,28.617 36.007,28.64 36.051,28.662 C36.282,28.781 36.52,28.877 36.763,28.94 C36.788,28.947 36.813,28.95 36.838,28.956 C37.105,29.019 37.375,29.058 37.645,29.058 C37.646,29.058 37.647,29.058 37.647,29.058 C37.649,29.058 37.65,29.058 37.651,29.058 C37.921,29.058 38.191,29.02 38.458,28.956 C38.483,28.95 38.508,28.947 38.533,28.94 C38.776,28.877 39.013,28.781 39.245,28.662 C39.289,28.64 39.333,28.617 39.376,28.593 C39.417,28.57 39.46,28.553 39.5,28.528 L69.296,9.368 L69.296,41.919 C69.295,43.682 67.86,45.117 66.097,45.117 Z" id="Shape"></path>
                  </g>
                </g>
              </svg>
              <p className=""><a href="mailto:m.spiewak@damansdak.pl">m.spiewak@damansdak.pl</a></p>
            </div>
            {/* <div className="flex text-sm font-serif mt-2 items-center justify-center">
              <svg className="hidden w-5 h-5 mr-3 sm:block" width="77px" height="77px" viewBox="0 0 77 77" version="1.1">
                <g id="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="phone-svgrepo-com-3" fill="currentColor" fill-rule="nonzero">
                    <path d="M59.6061971,41.7009419 C58.8469608,40.9404448 57.8164396,40.5130933 56.7418033,40.5130933 C55.6671671,40.5130933 54.6366459,40.9404448 53.8774096,41.7009419 L47.4193563,48.1587289 C44.4253153,47.2674409 38.8383294,45.2417862 35.2973391,41.7009419 C31.7563488,38.1600975 29.7306106,32.5733419 28.8392859,29.5794244 L35.2973391,23.1216373 C36.0578675,22.3624323 36.4852367,21.3319536 36.4852367,20.2573616 C36.4852367,19.1827696 36.0578675,18.1522909 35.2973391,17.3930859 L19.0914338,1.1878486 C18.3321975,0.427351567 17.3016763,0 16.22704,0 C15.1524037,0 14.1218825,0.427351567 13.3626463,1.1878486 L2.37504246,12.1749995 C0.835481451,13.714497 -0.0315344841,15.8292805 0.000877326584,17.9886284 C0.0940612822,23.7576929 1.62146786,43.7954688 17.4141226,59.5874725 C33.2067773,75.3794763 53.2453793,76.9027686 59.018733,77 L59.1321744,77 C61.2713539,77 63.2930406,76.1573277 64.8244986,74.6259327 L75.8121024,63.6387818 C76.5726308,62.8795769 77,61.8490981 77,60.7745062 C77,59.6999142 76.5726308,58.6694354 75.8121024,57.9102305 L59.6061971,41.7009419 L59.6061971,41.7009419 Z M59.0916596,68.89333 C54.0354172,68.8082525 36.7356132,67.4510639 23.1429101,53.8548698 C9.5056408,40.2181626 8.18485952,22.8583022 8.10382999,17.9035509 L16.22704,9.78067568 L26.7041578,20.2573616 L21.4655989,25.4957046 C20.4981656,26.4623687 20.0837414,27.8518513 20.3635974,29.1904987 C20.4608328,29.6563992 22.8390494,40.7043198 29.5645001,47.4294932 C36.2899508,54.1546667 47.3383268,56.5327853 47.8042466,56.6300167 C49.1425317,56.9178331 50.5352453,56.5040065 51.499193,55.5321119 L56.7418033,50.2937689 L67.2189211,60.7704548 L59.0916596,68.89333 L59.0916596,68.89333 Z" id="Shape"></path>
                  </g>
                </g>
              </svg>
              <p className=""><a href="tel:+48883846017">+48 883 846 017</a></p>
            </div> */}
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
            <p className="mt-6 font-serif text-xl  lg:w-10/12">
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


