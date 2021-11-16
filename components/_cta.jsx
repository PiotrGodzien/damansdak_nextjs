import React from "react";
import { Link } from "react-scroll";
import useTranslation from "next-translate/useTranslation";

const Cta = () => {
  const { t, lang } = useTranslation("common");
  return (
    <>
      <div className="px-8 py-8 mx-auto lg:my-16 lg:w-3/5 sm:px-0 sm:w-4/5">
        <div className="text-3xl lg:w-1/3 sm:text-5xl 2xl:text-7xl">
          {t("Kontakt")}
        </div>
        <p className="mt-6 font-serif text-lg font-light text-gray-500 lg:w-10/12">
          {t("homeContact")}
        </p>
        <div className="flex flex-col justify-around mt-8 lg:flex-row sm:px-0 sm:mt-16">
          <div className="flex items-center text-xl sm:space-x-6">
            {/* <svg className="hidden w-8 h-8 sm:block" width="75px" height="56px" viewBox="0 0 75 56" version="1.1">
              <g id="" stroke="none" fill="none">
                <g id="" fill="currentColor">
                  <path d="M37.4427,56 C27.2102,56 16.9613,56 6.72887,56 C2.78323,56 0,53.2057 0,49.2839 C0,35.1001 0,20.9163 0,6.73242 C0,2.81062 2.78323,0.0163408 6.72887,0.0163408 C27.2429,0.0163408 47.7406,0.0326816 68.2547,0 C72.0693,0 75.0163,2.92501 74.9999681,6.73242 C74.9672,20.9163 74.9836,35.1001 74.9836,49.2839 C74.9836,53.2221 72.2003,56 68.2547,56 C57.9895,56 47.7079,56 37.4427,56 Z M5.50098,3.13744 C5.73018,3.38255 5.82842,3.52962 5.95939,3.644 C15.7498,12.5334 25.5403,21.4228 35.3307,30.2959 C36.8042,31.6358 38.1794,31.6195 39.6692,30.2632 C49.4269,21.4228 59.1846,12.5661 68.9259,3.70937 C69.0897,3.5623 69.2206,3.38255 69.4498,3.1211 C48.0681,3.13744 26.85,3.13744 5.50098,3.13744 Z M30.3863,29.9527 C21.8074,37.3224 13.6542,45.019 5.40275,52.8462 C26.8664,52.8462 48.1172,52.8462 69.5808,52.8462 C61.2475,44.9863 53.1106,37.2571 44.5645,29.9364 C43.7622,30.6554 43.0419,31.309 42.3215,31.979 C39.2763,34.7896 35.7236,34.806 32.6948,32.028 C31.9581,31.3417 31.2049,30.6881 30.3863,29.9527 Z M71.8238,50.6402 C71.8238,35.4923 71.8238,20.4587 71.8238,5.21272 C63.4086,12.8439 55.1571,20.3443 46.9711,27.7794 C55.2553,35.3942 63.4741,42.96 71.8238,50.6402 Z M3.14342,50.6402 C11.4767,42.9764 19.6955,35.4106 27.9797,27.7957 C19.7937,20.3443 11.5422,12.8439 3.14342,5.19638 C3.14342,20.475 3.14342,35.5086 3.14342,50.6402 Z" id="Shape"></path>
                </g>
              </g>
            </svg> */}
            <svg
              className="hidden w-8 h-8 sm:block"
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
          <div className="flex items-center mt-8 text-xl lg:mt-0 lg:ml-20 sm:space-x-6 text-primary">
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
            {/* <svg className="hidden w-8 h-8 sm:block" width="72px" height="72px" viewBox="0 0 72 72" version="1.1">
              <g id="" stroke="none" fill="none">
                <g id="" fill="currentColor">
                  <path d="M27.7233997,18.5669992 C27.2864997,19.8321992 26.9951997,21.0243992 26.4611997,22.0705992 C25.5630997,23.8710992 24.5435997,25.6228992 23.5241997,27.3746992 C23.1357997,28.0558992 23.1114997,28.5424992 23.6454997,29.1993992 C29.4467997,36.2308992 35.8305997,42.6541992 42.8939997,48.4204992 C43.4765997,48.9070992 43.8891997,48.8583992 44.4717997,48.5177992 C46.3164997,47.4472992 48.1854997,46.4253992 50.0787997,45.4034992 C52.5303997,44.0896992 54.9090997,44.1869992 57.2635997,45.7927992 C61.1957997,48.4690992 65.1765997,51.0967992 69.1330997,53.7487992 C72.2157997,55.8168992 72.8711997,58.4688992 70.7350997,61.5101992 C68.8175997,64.2351992 66.6814997,66.8385992 64.4483997,69.3202992 C62.3851997,71.5829992 59.7636997,72.3858992 56.6567997,71.7776992 C50.2486997,70.5367992 44.5445997,67.7144992 39.1316997,64.2108992 C31.0972997,59.0284992 24.3736997,52.3376992 17.8199997,45.4521992 C12.5284997,39.8804992 7.9166297,33.8221992 4.3727697,26.9853992 C2.3581097,23.0924992 0.853183697,19.0292992 0.124994697,14.6984992 C-0.336192303,11.9734992 0.489089697,9.61344918 2.4309297,7.86165918 C5.1009597,5.42861918 7.9166297,3.11722918 10.8778997,1.04914918 C13.5236997,-0.799966818 16.1693997,-0.143045818 18.0141997,2.53329918 C20.8783997,6.71812918 23.7182997,10.9272992 26.4611997,15.2093992 C27.0922997,16.1826992 27.3106997,17.4234992 27.7233997,18.5669992 Z M2.8435697,13.0926992 C2.9163897,13.1413992 2.9892097,13.1899992 3.0620297,13.2386992 C3.1348497,13.6765992 3.1833897,14.1145992 3.2562097,14.5524992 C4.3727697,20.9270992 7.1884397,26.5960992 10.8536997,31.8270992 C18.9607997,43.4083992 28.8641997,53.2621992 40.4423997,61.3398992 C45.5639997,64.9164992 51.1467997,67.6171992 57.3849997,68.7606992 C59.1083997,69.0769992 60.6860997,68.8336992 61.8268997,67.5441992 C64.0357997,65.0867992 66.1960997,62.5807992 68.2106997,59.9530992 C69.4243997,58.3472992 69.1573997,57.4956992 67.4582997,56.3521992 C63.3318997,53.5784992 59.2054997,50.8291992 55.0789997,48.0797992 C54.0352997,47.3742992 52.9672997,47.3985992 51.8749997,48.0067992 C49.6175997,49.2476992 47.3601997,50.4885992 45.0785997,51.7293992 C43.2580997,52.7269992 43.2580997,52.7269992 41.5832997,51.3643992 C33.7430997,45.0141992 26.6795997,37.9096992 20.3200997,30.0509992 C19.5433997,29.0777992 19.4705997,28.2505992 20.0773997,27.2042992 C21.3880997,24.9415992 22.6260997,22.6058992 23.9124997,20.3187992 C24.5678997,19.1265992 24.6406997,17.9587992 23.8396997,16.7908992 C21.0968997,12.7033992 18.3782997,8.61590918 15.6111997,4.52839918 C14.5188997,2.89825918 13.6450997,2.60628918 12.1158997,3.77414918 C9.4700997,5.79357918 6.8971597,7.95897918 4.4455897,10.2216992 C3.6931197,10.9272992 3.3532997,12.1194992 2.8435697,13.0926992 Z" id="Shape"></path>
                  <path d="M40.0780997,6.59647918 C40.1266997,5.57459918 40.1751997,4.65003918 40.2237997,3.55517918 C47.1172997,3.87146918 53.0883997,6.23151918 58.1129997,10.8055992 C63.8170997,15.9879992 66.7783997,22.5085992 67.3366997,30.2455992 C66.8997997,30.2942992 66.5841997,30.3672992 66.2686997,30.3672992 C65.6375997,30.3915992 65.0064997,30.3672992 64.2782997,30.3672992 C63.8656997,23.8953992 61.4383997,18.3480992 56.8507997,13.8225992 C52.2631997,9.29714918 46.7046997,6.96142918 40.0780997,6.59647918 Z" id="Path"></path>
                  <path d="M57.7003997,30.8540992 C56.8022997,30.8540992 55.8798997,30.8540992 54.9331997,30.8540992 C53.6710997,22.1194992 48.7193997,17.1073992 39.8353997,15.9638992 C39.8353997,15.0636992 39.8353997,14.1390992 39.8353997,13.1901992 C47.7969997,11.7790992 58.8896997,22.7277992 57.7003997,30.8540992 Z" id="Path"></path>
                </g>
              </g>
            </svg> */}
            <div className="">
              <p className="relative z-40 cursor-pointer">
                <Link href="tel:+48532197746">{t("OddzialPrzemysl")}</Link>
              </p>
              <p className="relative z-40 cursor-pointer">+48 532 197 746</p>
            </div>
          </div>
          <div className="flex items-center mt-8 text-xl lg:mt-0 lg:ml-20 sm:space-x-6 text-primary">
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
            {/* <svg className="hidden w-8 h-8 sm:block" width="72px" height="72px" viewBox="0 0 72 72" version="1.1">
              <g id="" stroke="none" fill="none">
                <g id="" fill="currentColor">
                  <path d="M27.7233997,18.5669992 C27.2864997,19.8321992 26.9951997,21.0243992 26.4611997,22.0705992 C25.5630997,23.8710992 24.5435997,25.6228992 23.5241997,27.3746992 C23.1357997,28.0558992 23.1114997,28.5424992 23.6454997,29.1993992 C29.4467997,36.2308992 35.8305997,42.6541992 42.8939997,48.4204992 C43.4765997,48.9070992 43.8891997,48.8583992 44.4717997,48.5177992 C46.3164997,47.4472992 48.1854997,46.4253992 50.0787997,45.4034992 C52.5303997,44.0896992 54.9090997,44.1869992 57.2635997,45.7927992 C61.1957997,48.4690992 65.1765997,51.0967992 69.1330997,53.7487992 C72.2157997,55.8168992 72.8711997,58.4688992 70.7350997,61.5101992 C68.8175997,64.2351992 66.6814997,66.8385992 64.4483997,69.3202992 C62.3851997,71.5829992 59.7636997,72.3858992 56.6567997,71.7776992 C50.2486997,70.5367992 44.5445997,67.7144992 39.1316997,64.2108992 C31.0972997,59.0284992 24.3736997,52.3376992 17.8199997,45.4521992 C12.5284997,39.8804992 7.9166297,33.8221992 4.3727697,26.9853992 C2.3581097,23.0924992 0.853183697,19.0292992 0.124994697,14.6984992 C-0.336192303,11.9734992 0.489089697,9.61344918 2.4309297,7.86165918 C5.1009597,5.42861918 7.9166297,3.11722918 10.8778997,1.04914918 C13.5236997,-0.799966818 16.1693997,-0.143045818 18.0141997,2.53329918 C20.8783997,6.71812918 23.7182997,10.9272992 26.4611997,15.2093992 C27.0922997,16.1826992 27.3106997,17.4234992 27.7233997,18.5669992 Z M2.8435697,13.0926992 C2.9163897,13.1413992 2.9892097,13.1899992 3.0620297,13.2386992 C3.1348497,13.6765992 3.1833897,14.1145992 3.2562097,14.5524992 C4.3727697,20.9270992 7.1884397,26.5960992 10.8536997,31.8270992 C18.9607997,43.4083992 28.8641997,53.2621992 40.4423997,61.3398992 C45.5639997,64.9164992 51.1467997,67.6171992 57.3849997,68.7606992 C59.1083997,69.0769992 60.6860997,68.8336992 61.8268997,67.5441992 C64.0357997,65.0867992 66.1960997,62.5807992 68.2106997,59.9530992 C69.4243997,58.3472992 69.1573997,57.4956992 67.4582997,56.3521992 C63.3318997,53.5784992 59.2054997,50.8291992 55.0789997,48.0797992 C54.0352997,47.3742992 52.9672997,47.3985992 51.8749997,48.0067992 C49.6175997,49.2476992 47.3601997,50.4885992 45.0785997,51.7293992 C43.2580997,52.7269992 43.2580997,52.7269992 41.5832997,51.3643992 C33.7430997,45.0141992 26.6795997,37.9096992 20.3200997,30.0509992 C19.5433997,29.0777992 19.4705997,28.2505992 20.0773997,27.2042992 C21.3880997,24.9415992 22.6260997,22.6058992 23.9124997,20.3187992 C24.5678997,19.1265992 24.6406997,17.9587992 23.8396997,16.7908992 C21.0968997,12.7033992 18.3782997,8.61590918 15.6111997,4.52839918 C14.5188997,2.89825918 13.6450997,2.60628918 12.1158997,3.77414918 C9.4700997,5.79357918 6.8971597,7.95897918 4.4455897,10.2216992 C3.6931197,10.9272992 3.3532997,12.1194992 2.8435697,13.0926992 Z" id="Shape"></path>
                  <path d="M40.0780997,6.59647918 C40.1266997,5.57459918 40.1751997,4.65003918 40.2237997,3.55517918 C47.1172997,3.87146918 53.0883997,6.23151918 58.1129997,10.8055992 C63.8170997,15.9879992 66.7783997,22.5085992 67.3366997,30.2455992 C66.8997997,30.2942992 66.5841997,30.3672992 66.2686997,30.3672992 C65.6375997,30.3915992 65.0064997,30.3672992 64.2782997,30.3672992 C63.8656997,23.8953992 61.4383997,18.3480992 56.8507997,13.8225992 C52.2631997,9.29714918 46.7046997,6.96142918 40.0780997,6.59647918 Z" id="Path"></path>
                  <path d="M57.7003997,30.8540992 C56.8022997,30.8540992 55.8798997,30.8540992 54.9331997,30.8540992 C53.6710997,22.1194992 48.7193997,17.1073992 39.8353997,15.9638992 C39.8353997,15.0636992 39.8353997,14.1390992 39.8353997,13.1901992 C47.7969997,11.7790992 58.8896997,22.7277992 57.7003997,30.8540992 Z" id="Path"></path>
                </g>
              </g>
            </svg> */}
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

      <div className="flex flex-col px-8 py-8 mx-auto lg:items-center lg:flex lg:flex-row sm:w-4/5 sm:px-0 lg:w-3/5 2xl:pb-32">
        <div className="">
          <div className="">
            <p className="z-40 text-3xl 2xl:text-4xl">{t("Przemyśl")}</p>
            <p className="mt-4 font-serif text-lg font-light text-gray-500">
              {t("Mieroslawskiego")}, 37-700 Przemyśl
            </p>
            <p className="font-serif text-lg font-light text-gray-500">
              {t("Polska")}, woj. Podkarpackie
            </p>
            <a
              target="_blank"
              href="https://www.google.com/maps/dir//Ludwika+Mierosławskiego+14,+37-700+Przemyśl/@49.7865609,22.7910231,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x473b7ed66bd661fd:0x9eeaeeb0562b92d6!2m2!1d22.7932118!2d49.7865609!3e0"
            >
              <p className="z-40 flex mt-4 font-serif text-lg font-light underline cursor-pointer">
                {t("sprawdzdojazd")}
              </p>
            </a>
          </div>
          <div className="mt-12">
            <p className="text-3xl 2xl:text-4xl">{t("Warszawa")}</p>
            <p className="mt-4 font-serif text-lg font-light text-gray-500">
              {t("Karolkowa")}, 01-207 {t("Warszawa")}
            </p>
            <p className="font-serif text-lg font-light text-gray-500">
              {t("Polska")}, woj. Mazowieckie
            </p>
            <a
              target="_blank"
              href="https://www.google.com/maps/dir//Karolkowa+30,+01-207+Warszawa/@52.2316937,20.975736,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x471ecc9d2419b109:0x242d2e55f3766695!2m2!1d20.9779247!2d52.2316937!3e0"
            >
              <p className="z-40 flex mt-4 font-serif text-lg font-light underline cursor-pointer">
                {t("sprawdzdojazd")}
              </p>
            </a>
          </div>
        </div>
        <img
          className="mx-auto mt-12 lg:w-5/12 sm:w-10/12 lg:mt-0"
          src="https://damansdak.s3.eu-central-1.amazonaws.com/poland_cropped_map.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Cta;
