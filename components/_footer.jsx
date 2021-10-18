import React from "react";
import Link from 'next/link';

const Footer = () => {
  return (
    <>

      <div className="flex flex-col-reverse bg-black lg:flex-row">
        <div className="flex flex-col items-start px-8 pb-8 text-white 2xl:mx-auto 2xl:px-0 sm:flex-row lg:w-2/5 sm:py-12 lg:py-40 justify-evenly">
          <div className="">
            <div className="">
              <p className="text-lg font-bold 2xl:text-xl">Przemyśl</p>
              <p className="mt-2 font-serif text-md 2xl:text-xl">ul.  Mierosławskiego 14</p>
              <p className="mt-2 font-serif text-md 2xl:text-xl">37-700 Przemyśl</p>
              <p className="font-serif text-md 2xl:text-xl">Polska, Podkarpackie</p>
            </div>
            <div className="">
              <p className="mt-12 text-lg font-bold 2xl:text-xl">Firma</p>
              <p className="mt-2 font-serif text-md 2xl:text-xl">KRS 0000894896</p>
              <p className="font-serif text-md 2xl:text-xl">NIP PL7952563292</p>
            </div>
          </div>
          <div className="">
            <div className="">
              <p className="mt-12 text-lg font-bold 2xl:text-xl sm:mt-0">Warszawa</p>
              <p className="mt-2 font-serif text-md 2xl:text-xl">ul.  Karolkowa 30</p>
              <p className="mt-2 font-serif text-md 2xl:text-xl">01-207 Warszawa</p>
              <p className="font-serif text-md 2xl:text-xl">Polska, Mozowieckie</p>
            </div>
            <div className="">
              <p className="mt-12 font-bold text-md 2xl:text-xl">Damans Dak BV</p>
              <p className="relative z-40 mt-2 font-serif underline cursor-pointer text-md 2xl:text-xl"><Link href="https://damansdak.com"><a target="_blank">damansdak.com</a></Link></p>
            </div>
          </div>
        </div>
        <div className="py-12 mx-auto lg:w-3/5 lg:py-40">
          <p className="px-8 mx-auto text-2xl text-white 2xl:w-3/4 lg:px-0">Zapraszamy do kontaktu z nami. Nasi specjaliści zajmą się profesjonalnym doradztwem oraz wyceną projektów.</p>
          <div className="flex flex-col px-8 mx-auto mt-8 2xl:w-3/4 sm:flex-row lg:px-0 sm:mt-16">
            <div className="flex items-center text-3xl font-bold text-white sm:text-2xl lg:text-3xl sm:space-x-6">
              <svg className="hidden w-12 h-12 sm:block" width="76px" height="52px" viewBox="0 0 76 52" version="1.1">
                <g id="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="email-svgrepo-com" fill="CurrentColor" fill-rule="nonzero">
                    <path d="M66.097,0 L9.197,0 C4.126,0 0,4.126 0,9.197 L0,41.919 C0,46.99 4.126,51.116 9.197,51.116 L66.097,51.116 C71.168,51.116 75.2940002,46.99 75.2940002,41.919 L75.2940002,9.198 C75.295,4.126 71.169,0 66.097,0 Z M61.603,6 L37.647,21.434 L13.691,6 L61.603,6 Z M66.097,45.117 L9.197,45.117 C7.434,45.117 6,43.682 6,41.92 L6,9.368 L35.796,28.528 C35.836,28.553 35.879,28.57 35.92,28.593 C35.963,28.617 36.007,28.64 36.051,28.662 C36.282,28.781 36.52,28.877 36.763,28.94 C36.788,28.947 36.813,28.95 36.838,28.956 C37.105,29.019 37.375,29.058 37.645,29.058 C37.646,29.058 37.647,29.058 37.647,29.058 C37.649,29.058 37.65,29.058 37.651,29.058 C37.921,29.058 38.191,29.02 38.458,28.956 C38.483,28.95 38.508,28.947 38.533,28.94 C38.776,28.877 39.013,28.781 39.245,28.662 C39.289,28.64 39.333,28.617 39.376,28.593 C39.417,28.57 39.46,28.553 39.5,28.528 L69.296,9.368 L69.296,41.919 C69.295,43.682 67.86,45.117 66.097,45.117 Z" id="Shape"></path>
                  </g>
                </g>
              </svg>
              <p className="relative z-40 cursor-pointer"><Link href="mailto:info@damansdak.pl">info@damansdak.pl</Link></p>
            </div>
            <div className="flex items-center mt-8 text-3xl font-bold sm:text-2xl lg:text-3xl sm:mt-0 sm:ml-20 sm:space-x-6 text-primary">
              <svg className="hidden w-12 h-12 sm:block" width="77px" height="77px" viewBox="0 0 77 77" version="1.1">
                <g id="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="phone-svgrepo-com-3" fill="currentColor" fill-rule="nonzero">
                    <path d="M59.6061971,41.7009419 C58.8469608,40.9404448 57.8164396,40.5130933 56.7418033,40.5130933 C55.6671671,40.5130933 54.6366459,40.9404448 53.8774096,41.7009419 L47.4193563,48.1587289 C44.4253153,47.2674409 38.8383294,45.2417862 35.2973391,41.7009419 C31.7563488,38.1600975 29.7306106,32.5733419 28.8392859,29.5794244 L35.2973391,23.1216373 C36.0578675,22.3624323 36.4852367,21.3319536 36.4852367,20.2573616 C36.4852367,19.1827696 36.0578675,18.1522909 35.2973391,17.3930859 L19.0914338,1.1878486 C18.3321975,0.427351567 17.3016763,0 16.22704,0 C15.1524037,0 14.1218825,0.427351567 13.3626463,1.1878486 L2.37504246,12.1749995 C0.835481451,13.714497 -0.0315344841,15.8292805 0.000877326584,17.9886284 C0.0940612822,23.7576929 1.62146786,43.7954688 17.4141226,59.5874725 C33.2067773,75.3794763 53.2453793,76.9027686 59.018733,77 L59.1321744,77 C61.2713539,77 63.2930406,76.1573277 64.8244986,74.6259327 L75.8121024,63.6387818 C76.5726308,62.8795769 77,61.8490981 77,60.7745062 C77,59.6999142 76.5726308,58.6694354 75.8121024,57.9102305 L59.6061971,41.7009419 L59.6061971,41.7009419 Z M59.0916596,68.89333 C54.0354172,68.8082525 36.7356132,67.4510639 23.1429101,53.8548698 C9.5056408,40.2181626 8.18485952,22.8583022 8.10382999,17.9035509 L16.22704,9.78067568 L26.7041578,20.2573616 L21.4655989,25.4957046 C20.4981656,26.4623687 20.0837414,27.8518513 20.3635974,29.1904987 C20.4608328,29.6563992 22.8390494,40.7043198 29.5645001,47.4294932 C36.2899508,54.1546667 47.3383268,56.5327853 47.8042466,56.6300167 C49.1425317,56.9178331 50.5352453,56.5040065 51.499193,55.5321119 L56.7418033,50.2937689 L67.2189211,60.7704548 L59.0916596,68.89333 L59.0916596,68.89333 Z" id="Shape"></path>
                  </g>
                </g>
              </svg>
              <p className="relative z-40 cursor-pointer"><Link href="tel:+48532197746">+48 532 197 746</Link></p>
            </div>
          </div>
        </div>
      </div>
      {/* CERTIFICATE */}
      {/* <div className="sticky hidden h-20 mb-2 ml-auto bg-white border-l-2 shadow-2xl w-28 lg:block border-primary bottom-2">
        <a href="link"><img className="w-20 h-auto px-3 pt-2 mx-auto" src="http://verdepro.pl/vcs.png" /></a>
        <p className="px-3 mt-1 text-xs leading-3 text-center"><a href="link">Certyfikowana<br></br> firma</a></p>
      </div> */}
      <footer className="flex flex-col items-center justify-between w-4/5 py-10 mx-auto text-gray-500 lg:flex-row">
        <div className="relative z-40 flex items-center space-x-4 lg:space-x-6">
          <Link href="https://www.facebook.com/DamansDakPolska"><a target="_blank"><img className="cursor-pointer w-7 h-7" src="https://damansdak.s3.eu-central-1.amazonaws.com/Facebook_black.png" alt="" /></a></Link>
          <Link href="https://www.linkedin.com/company/damans-dak-polska/"><a target="_blank"><img className="cursor-pointer w-7 h-7" src="https://damansdak.s3.eu-central-1.amazonaws.com/Linkedin_black.png" alt="" /></a></Link>
          {/* <Link href="#"><a target="_blank"><img className="cursor-pointer w-7 h-7" src="https://damansdak.s3.eu-central-1.amazonaws.com/Instagram_black.png" alt="" /></a></Link> */}
          <Link href="https://www.tiktok.com/@damans_dak"><a target="_blank"><img className="cursor-pointer w-7 h-7" src="https://damansdak.s3.eu-central-1.amazonaws.com/TikTok_black.png" alt="" /></a></Link>
          <Link href="https://www.youtube.com/channel/UCg3l4VZq6DQnobjWMhv8o6Q"><a target="_blank"><img className="cursor-pointer w-7 h-7" src="https://damansdak.s3.eu-central-1.amazonaws.com/YouTube_black.png" alt="" /></a></Link>
          <Link href="https://twitter.com/bdamans"><a target="_blank"><img className="cursor-pointer w-7 h-7" src="https://damansdak.s3.eu-central-1.amazonaws.com/Twitter_black.png" alt="" /></a></Link>
        </div>
        <p className="hidden mt-4 space-x-8 2xl:space-x-16 sm:flex lg:mt-0">
          <div className=""><Link href="/oferta">OFERTA</Link></div>
          <div className=""><Link href="/o-nas">O NAS</Link></div>
          <div className=""><Link href="/realizacje">REALIZACJE</Link></div>
          {/* <div className=""><Link href="/kariera">KARIERA</Link></div> */}
          <div className=""><Link href="/kontakt">KONTAKT</Link></div>
        </p>
        <div className="mt-5 lg:mt-0">©2021 All right reserved</div>
      </footer>


    </>


  );
};

export default Footer;