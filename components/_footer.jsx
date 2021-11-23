import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const Footer = () => {
  const { t, lang } = useTranslation("common");
  return (
    <>
      <div className="flex flex-col-reverse bg-black lg:flex-row">
        <div className="flex flex-col items-start px-8 pb-8 text-white 2xl:mx-auto 2xl:px-0 sm:flex-row lg:w-2/5 sm:py-12 lg:py-40 justify-evenly">
          <div className="">
            <div className="">
              <p className="text-lg 2xl:text-xl">{t("Przemyśl")}</p>
              <p className="mt-2 font-serif text-md 2xl:text-xl">
                {t("Mieroslawskiego")}
              </p>
              <p className="mt-2 font-serif text-md 2xl:text-xl">
                37-700 Przemyśl
              </p>
              <p className="font-serif text-md 2xl:text-xl">
                {t("Polska")}, {t("podkarpackie")}
              </p>
            </div>
            <div className="">
              <p className="mt-12 text-lg 2xl:text-xl"></p>
              <p className="mt-2 font-serif text-md 2xl:text-xl">
                KRS 0000894896
              </p>
              <p className="font-serif text-md 2xl:text-xl">NIP PL7952563292</p>
            </div>
          </div>
          <div className="">
            <div className="">
              <p className="mt-12 text-lg 2xl:text-xl sm:mt-0">
                {t("Warszawa")}
              </p>
              <p className="mt-2 font-serif text-md 2xl:text-xl">
                {t("Karolkowa")}
              </p>
              <p className="mt-2 font-serif text-md 2xl:text-xl">
                01-207 {t("Warszawa")}
              </p>
              <p className="font-serif text-md 2xl:text-xl">
                {t("Polska")}, {t("mazowieckie")}
              </p>
            </div>
            {/* <div className="">
              <p className="mt-12 text-md 2xl:text-xl">Damans Dak BV</p>
              <p className="relative z-40 mt-2 font-serif underline cursor-pointer text-md 2xl:text-xl"><Link href="https://damansdak.com"><a target="_blank" rel="noopener">damansdak.com</a></Link></p>
            </div> */}
          </div>
        </div>
        <div className="py-12 mx-auto lg:w-3/5 lg:py-40">
          <p className="px-8 mx-auto text-2xl text-white lg:w-11/12 lg:px-0">
            {t("footerText")}
          </p>
          <div className="mt-8 sm:mt-16">
            <div className="flex flex-col justify-around px-8 mx-auto mt-8 sm:flex-row lg:px-0 lg:w-11/12">
              <div className="flex items-center text-xl text-white">
                <svg
                  className="hidden w-8 h-8 mr-4 sm:block"
                  width="76px"
                  height="52px"
                  viewBox="0 0 76 52"
                  version="1.1"
                >
                  <g
                    id=""
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="email-svgrepo-com"
                      fill="CurrentColor"
                      fill-rule="nonzero"
                    >
                      <path
                        d="M66.097,0 L9.197,0 C4.126,0 0,4.126 0,9.197 L0,41.919 C0,46.99 4.126,51.116 9.197,51.116 L66.097,51.116 C71.168,51.116 75.2940002,46.99 75.2940002,41.919 L75.2940002,9.198 C75.295,4.126 71.169,0 66.097,0 Z M61.603,6 L37.647,21.434 L13.691,6 L61.603,6 Z M66.097,45.117 L9.197,45.117 C7.434,45.117 6,43.682 6,41.92 L6,9.368 L35.796,28.528 C35.836,28.553 35.879,28.57 35.92,28.593 C35.963,28.617 36.007,28.64 36.051,28.662 C36.282,28.781 36.52,28.877 36.763,28.94 C36.788,28.947 36.813,28.95 36.838,28.956 C37.105,29.019 37.375,29.058 37.645,29.058 C37.646,29.058 37.647,29.058 37.647,29.058 C37.649,29.058 37.65,29.058 37.651,29.058 C37.921,29.058 38.191,29.02 38.458,28.956 C38.483,28.95 38.508,28.947 38.533,28.94 C38.776,28.877 39.013,28.781 39.245,28.662 C39.289,28.64 39.333,28.617 39.376,28.593 C39.417,28.57 39.46,28.553 39.5,28.528 L69.296,9.368 L69.296,41.919 C69.295,43.682 67.86,45.117 66.097,45.117 Z"
                        id="Shape"
                      ></path>
                    </g>
                  </g>
                </svg>
                <p className="relative z-40 cursor-pointer">
                  <Link href="mailto:info@damansdak.pl">info@damansdak.pl</Link>
                </p>
              </div>
              <div className="flex items-center mt-8 text-xl sm:mt-0 sm:space-x-6 text-primary">
                <svg
                  className="hidden w-8 h-8 sm:block"
                  width="77px"
                  height="77px"
                  viewBox="0 0 77 77"
                  version="1.1"
                >
                  <g
                    id=""
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="phone-svgrepo-com-3"
                      fill="currentColor"
                      fill-rule="nonzero"
                    >
                      <path
                        d="M59.6061971,41.7009419 C58.8469608,40.9404448 57.8164396,40.5130933 56.7418033,40.5130933 C55.6671671,40.5130933 54.6366459,40.9404448 53.8774096,41.7009419 L47.4193563,48.1587289 C44.4253153,47.2674409 38.8383294,45.2417862 35.2973391,41.7009419 C31.7563488,38.1600975 29.7306106,32.5733419 28.8392859,29.5794244 L35.2973391,23.1216373 C36.0578675,22.3624323 36.4852367,21.3319536 36.4852367,20.2573616 C36.4852367,19.1827696 36.0578675,18.1522909 35.2973391,17.3930859 L19.0914338,1.1878486 C18.3321975,0.427351567 17.3016763,0 16.22704,0 C15.1524037,0 14.1218825,0.427351567 13.3626463,1.1878486 L2.37504246,12.1749995 C0.835481451,13.714497 -0.0315344841,15.8292805 0.000877326584,17.9886284 C0.0940612822,23.7576929 1.62146786,43.7954688 17.4141226,59.5874725 C33.2067773,75.3794763 53.2453793,76.9027686 59.018733,77 L59.1321744,77 C61.2713539,77 63.2930406,76.1573277 64.8244986,74.6259327 L75.8121024,63.6387818 C76.5726308,62.8795769 77,61.8490981 77,60.7745062 C77,59.6999142 76.5726308,58.6694354 75.8121024,57.9102305 L59.6061971,41.7009419 L59.6061971,41.7009419 Z M59.0916596,68.89333 C54.0354172,68.8082525 36.7356132,67.4510639 23.1429101,53.8548698 C9.5056408,40.2181626 8.18485952,22.8583022 8.10382999,17.9035509 L16.22704,9.78067568 L26.7041578,20.2573616 L21.4655989,25.4957046 C20.4981656,26.4623687 20.0837414,27.8518513 20.3635974,29.1904987 C20.4608328,29.6563992 22.8390494,40.7043198 29.5645001,47.4294932 C36.2899508,54.1546667 47.3383268,56.5327853 47.8042466,56.6300167 C49.1425317,56.9178331 50.5352453,56.5040065 51.499193,55.5321119 L56.7418033,50.2937689 L67.2189211,60.7704548 L59.0916596,68.89333 L59.0916596,68.89333 Z"
                        id="Shape"
                      ></path>
                    </g>
                  </g>
                </svg>
                <div className="">
                  <p className="relative z-40 cursor-pointer">
                    {t("OddzialPrzemysl")}
                  </p>
                  <p className="relative z-40 cursor-pointer">
                    <Link href="tel:+48532197746">+48 532 197 746</Link>
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-8 text-xl sm:mt-0 sm:space-x-6 text-primary">
                <svg
                  className="hidden w-8 h-8 sm:block"
                  width="77px"
                  height="77px"
                  viewBox="0 0 77 77"
                  version="1.1"
                >
                  <g
                    id=""
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="phone-svgrepo-com-3"
                      fill="currentColor"
                      fill-rule="nonzero"
                    >
                      <path
                        d="M59.6061971,41.7009419 C58.8469608,40.9404448 57.8164396,40.5130933 56.7418033,40.5130933 C55.6671671,40.5130933 54.6366459,40.9404448 53.8774096,41.7009419 L47.4193563,48.1587289 C44.4253153,47.2674409 38.8383294,45.2417862 35.2973391,41.7009419 C31.7563488,38.1600975 29.7306106,32.5733419 28.8392859,29.5794244 L35.2973391,23.1216373 C36.0578675,22.3624323 36.4852367,21.3319536 36.4852367,20.2573616 C36.4852367,19.1827696 36.0578675,18.1522909 35.2973391,17.3930859 L19.0914338,1.1878486 C18.3321975,0.427351567 17.3016763,0 16.22704,0 C15.1524037,0 14.1218825,0.427351567 13.3626463,1.1878486 L2.37504246,12.1749995 C0.835481451,13.714497 -0.0315344841,15.8292805 0.000877326584,17.9886284 C0.0940612822,23.7576929 1.62146786,43.7954688 17.4141226,59.5874725 C33.2067773,75.3794763 53.2453793,76.9027686 59.018733,77 L59.1321744,77 C61.2713539,77 63.2930406,76.1573277 64.8244986,74.6259327 L75.8121024,63.6387818 C76.5726308,62.8795769 77,61.8490981 77,60.7745062 C77,59.6999142 76.5726308,58.6694354 75.8121024,57.9102305 L59.6061971,41.7009419 L59.6061971,41.7009419 Z M59.0916596,68.89333 C54.0354172,68.8082525 36.7356132,67.4510639 23.1429101,53.8548698 C9.5056408,40.2181626 8.18485952,22.8583022 8.10382999,17.9035509 L16.22704,9.78067568 L26.7041578,20.2573616 L21.4655989,25.4957046 C20.4981656,26.4623687 20.0837414,27.8518513 20.3635974,29.1904987 C20.4608328,29.6563992 22.8390494,40.7043198 29.5645001,47.4294932 C36.2899508,54.1546667 47.3383268,56.5327853 47.8042466,56.6300167 C49.1425317,56.9178331 50.5352453,56.5040065 51.499193,55.5321119 L56.7418033,50.2937689 L67.2189211,60.7704548 L59.0916596,68.89333 L59.0916596,68.89333 Z"
                        id="Shape"
                      ></path>
                    </g>
                  </g>
                </svg>
                <div className="">
                  <p className="relative z-40 cursor-pointer">
                    {t("OddzialWarszawa")}
                  </p>
                  <p className="relative z-40 cursor-pointer">
                    <Link href="tel:+48538621732">+48 538 621 732</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CERTIFICATE */}
      {/* <div className="sticky hidden h-20 mb-2 ml-auto bg-white border-l-2 shadow-2xl w-28 lg:block border-primary bottom-2">
        <a href="link"><img className="w-20 h-auto px-3 pt-2 mx-auto" src="http://verdepro.pl/vcs.webp"
        layout="responsive" /></a>
        <p className="px-3 mt-1 text-xs leading-3 text-center"><a href="link">Certyfikowana<br></br> firma</a></p>
      </div> */}
      <footer className="relative z-50 flex flex-col items-center justify-between px-12 py-10 mx-auto text-gray-500 lg:flex-row">
        <div className="relative z-40 flex items-center space-x-4 lg:space-x-6">
          <Link href="https://www.facebook.com/DamansDakPolska">
            <a target="_blank" rel="noopener">
              <img
                className="cursor-pointer w-7 h-7"
                src="/Facebook_black.webp"
                alt="Facebook"
                layout="responsive"
                width={72}
                height={72}
              />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/company/damans-dak-polska/">
            <a target="_blank" rel="noopener">
              <img
                className="cursor-pointer w-7 h-7"
                src="/Linkedin_black.webp"
                layout="responsive"
                width={72}
                height={72}
                alt="Linkedin"
              />
            </a>
          </Link>
          {/* <Link href="#"><a target="_blank" rel="noopener"><img className="cursor-pointer w-7 h-7" src="/Instagram_black.webp"
          layout="responsive" alt="" /></a></Link> */}
          <Link href="https://www.tiktok.com/@damans_dak">
            <a target="_blank" rel="noopener">
              <img
                className="cursor-pointer w-7 h-7"
                src="/TikTok_black.webp"
                layout="responsive"
                width={72}
                height={72}
                alt="Tik Tok"
              />
            </a>
          </Link>
          <Link href="https://www.youtube.com/channel/UCg3l4VZq6DQnobjWMhv8o6Q">
            <a target="_blank" rel="noopener">
              <img
                className="cursor-pointer w-7 h-7"
                src="/YouTube_black.webp"
                layout="responsive"
                width={72}
                height={72}
                alt="YouTube"
              />
            </a>
          </Link>
          <Link href="https://twitter.com/bdamans">
            <a target="_blank" rel="noopener">
              <img
                className="cursor-pointer w-7 h-7"
                src="/Twitter_black.webp"
                layout="responsive"
                width={72}
                height={72}
                alt="Twitter"
              />
            </a>
          </Link>
        </div>
        <p className="hidden mt-4 space-x-8 text-sm uppercase 2xl:space-x-16 sm:flex lg:mt-0">
          <div className="">
            <Link href="/oferta">{t("oferta")}</Link>
          </div>
          <div className="">
            <Link href="/o-nas">{t("Onas")}</Link>
          </div>
          <div className="">
            <Link href="/realizacje">{t("Realizacje")}</Link>
          </div>
          {/* <div className=""><Link href="/kariera">KARIERA</Link></div> */}
          {/* <div className="">
                <Link href="/wideo">{t("Wideo")}</Link>
              </div> */}
          <div className="">
            <Link href="/kontakt">{t("Kontakt")}</Link>
          </div>
        </p>
        <div className="mt-5 text-sm lg:mt-0">
          ©2021 All right reserved | Stworzone na Podkarpaciu przez
          <a href="https://otherland.pl" target="_blank" rel="noopener">
            <svg
              className="mr-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 3201 565"
              class="inline-block h-4 pl-2 hover:text-primary"
            >
              <path
                fill="currentColor"
                d="M488.2 213.2a135.8 135.8 0 01-106.6-51.4 135.8 135.8 0 01-29.8-85 76.8 76.8 0 10-76.8 76.7A135.8 135.8 0 01381.6 205a135.8 135.8 0 0129.9 85 76.8 76.8 0 1076.7-76.7zM290 411.5A135.8 135.8 0 01183.4 360a135.8 135.8 0 01-29.9-85 76.8 76.8 0 10-76.7 76.7 135.8 135.8 0 01106.6 51.4 135.8 135.8 0 0129.8 85 76.8 76.8 0 1076.8-76.7z"
              ></path>
              <path
                fill="currentColor"
                d="M445.7 164.4a49.1 49.1 0 100-98.3 49.1 49.1 0 000 98.3zM119.3 400.6a49.1 49.1 0 100 98.3 49.1 49.1 0 000-98.3zM117.3 166.4a49.1 49.1 0 100-98.2 49.1 49.1 0 000 98.2zM453.8 401.8c-26.4-4-39.6-11-46.8-16.4a137 137 0 01-17.7-17.7c-15.2-17.7-18.3-54.4-17-76.6 0-3 .2-13.2-.1-17.6-2.7-46-42.8-82-89.9-82a90.5 90.5 0 00-90.7 90.8c0 47.1 35.8 87.2 81.9 89.9 4.4.3 14.6.2 17.6 0 22.2-1.2 59 2 76.6 17 6.6 5.3 12.3 11.4 17.7 17.8 5.4 7.2 12.3 20.2 16.4 46.8a48.4 48.4 0 0080.7 28.7 48.3 48.3 0 00-28.6-80.7zm-171.5-78.6a40.7 40.7 0 110-81.4 40.7 40.7 0 010 81.4zM1175.8 224.8v165.5c0 17.3-15 31.3-32.3 31.3a32 32 0 01-32.4-31.3V224.8h-53c-15.4 0-28-13-28-28.7a28.6 28.6 0 0128-28.7h170.7c15.5 0 28 13.2 28 28.7a28.3 28.3 0 01-28 28.7h-53zM1308.8 196.6a32 32 0 0132.4-31.2c18 0 32.4 13.9 32.4 31.2v67.7h95.6v-67.7a32 32 0 0132.3-31.2c18 0 32.4 13.9 32.4 31.2v195c0 17.2-15 31.2-32.4 31.2a32 32 0 01-32.3-31.3v-69.8h-95.6v69.8a32.2 32.2 0 01-32.4 31.3 32 32 0 01-32.4-31.3v-195zM1674.4 360.5h108.4a28.3 28.3 0 0127.7 28.7 28 28 0 01-27.7 28.7H1642c-18 0-32.4-14-32.4-31.3v-188a31.7 31.7 0 0132.4-31.2h140.8a28.3 28.3 0 0127.7 28.7 28 28 0 01-27.7 28.7h-108.4V263h89a28.3 28.3 0 0127.5 28.7 28 28 0 01-27.5 28.7h-89v40zM1937.8 390.3a32.2 32.2 0 01-32.3 31.3c-18.1 0-32.4-14-32.4-31.3V199a31.8 31.8 0 0132.4-31.6h85.7c24.6 0 47.7 5.2 64.3 18 18.8 14.7 29 39.4 29 65.9a81.4 81.4 0 01-37.4 69.5l33 52.6a29 29 0 014.5 15.4c0 17.3-15.1 32.8-32.8 32.8a31 31 0 01-27.2-15.1l-42.3-70.3h-44.5v54zm0-168.1v59.6h48.2c7.7 0 15.5-1.9 21.3-5.5 7-4.8 11.4-12.9 11.4-24.3 0-11-3.6-18.8-10.2-23.6a37 37 0 00-21.8-6.2h-48.9zM2154.1 195.3a31.7 31.7 0 0132.4-31.2c18 0 32.3 14 32.3 31.2v165.2h79.5a28.3 28.3 0 0127.6 28.7 28 28 0 01-27.6 28.7h-111.8c-18 0-32.4-14-32.4-31.3V195.3zM2834.5 164a31.5 31.5 0 00-32.2 30.8v109.7l-94-123.7A40.4 40.4 0 002676 164a37.6 37.6 0 00-38.5 36.6v190.5c0 17 14.2 30.4 32.3 30.4 17.7 0 32.1-13.7 32.1-30.4V280.8l93.7 124.4a40.2 40.2 0 0032.3 16.4c21.4 0 38.8-16.5 38.8-36.7V195c0-17-14.4-30.8-32.2-30.8zM2473.3 164A110.6 110.6 0 002363 274.6v114.7a32.5 32.5 0 0064.8 0V274.5a45.6 45.6 0 0191.2 0v114.7a32.5 32.5 0 0064.8 0V274.5c0-60.9-49.5-110.4-110.4-110.4z"
              ></path>
              <path
                fill="currentColor"
                d="M2473.3 336.2a27.2 27.2 0 100-54.4 27.2 27.2 0 000 54.4zM838 422.4c-79.3 0-147.8-55.3-147.8-139.7 0-85.3 68.5-140.5 147.7-140.5 78.9 0 147.3 55.2 147.3 140.5 0 85.6-68.4 139.7-147.3 139.7zm0-214.2c-42.5 0-72.9 31.2-72.9 74.5 0 43.2 30.4 74 72.8 74 42.5 0 72.5-30.8 72.5-74 0-43.3-30-74.5-72.5-74.5zM3166.5 377.6c-33.2 34.4-77.3 40.8-116.9 40.8H2978a34.5 34.5 0 01-35.2-34V179.7c0-18.8 15.6-34 35.3-34h76.8c40 0 78.5 6.4 111.7 40.8 20 20.8 33.6 51.6 33.6 95.3 0 44-13.6 74.8-33.6 95.7zM3013.2 359h31.6c30.4 0 55.3-7.6 69.6-27.2 8.8-12 13.7-28.4 13.7-50 0-25.6-6.8-43.7-18.9-55.7-14.8-15.2-37.2-21.2-64.4-21.2h-31.6v154.1z"
              ></path>
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
