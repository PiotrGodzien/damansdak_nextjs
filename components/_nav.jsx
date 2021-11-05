import Link from "next/link";
import React, { useState } from "react";
import SwitchLanguage from "./_switchLanguage";
import useTranslation from "next-translate/useTranslation";

const Navigation = () => {
  const [visible, setVisible] = useState(false);
  const { t, lang } = useTranslation("common");
  return (
    <>
      <div className="fixed top-0 z-50 w-full py-3 mx-auto text-xl text-white bg-black lg:py-6">
        <nav className="">
          <div className="flex items-center justify-between w-full px-4 mx-auto lg:px-20 ">
            <div className="h-auto w-36 lg:w-72">
              <Link href="/" className="">
                <img
                  alt=""
                  src="https://damansdak.s3.eu-central-1.amazonaws.com/logo_damsdak-3.png"
                />
              </Link>
            </div>
            <div className="items-center hidden space-x-8 text-base 2xl:text-lg lg:flex">
              <div className="">
                <Link href="/">{t("Stronaglowna")}</Link>
              </div>
              <div className="">
                <Link href="/oferta">{t("Oferta")}</Link>
              </div>
              <div className="">
                <Link href="/o-nas">{t("Onas")}</Link>
              </div>
              <div className="">
                <Link href="/realizacje">{t("Realizacje")}</Link>
              </div>
              {/* <div className=""><Link href="/kariera">Kariera</Link></div> */}
              <div className="">
                <Link href="/kontakt">{t("Kontakt")}</Link>
              </div>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  {" "}
                  <SwitchLanguage />
                </div>
                {/* <img alt="" className="h-6 border border-white w-9" src="https://damansdak.s3.eu-central-1.amazonaws.com/germany.png" layout='fill' />
                <img alt="" className="h-6 border border-white w-9" src="https://damansdak.s3.eu-central-1.amazonaws.com/united.png" layout='fill' /> */}
                <Link href="https://damansdak.com">
                  <a target="_blank">
                    <img
                      alt=""
                      className="h-14"
                      src="https://damansdak.s3.eu-central-1.amazonaws.com/damansdak_bv.jpg"
                      layout="fill"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="ml-auto lg:hidden">
              <button
                className="flex focus:outline-none"
                onClick={() => setVisible(!visible)}
              >
                <svg
                  className="p-3 border border-white "
                  viewBox="0 0 100 80"
                  fill="currentColor"
                  width="40"
                  height="40"
                >
                  <rect width="100" height="6"></rect>
                  <rect y="30" width="100" height="6"></rect>
                  <rect y="60" width="100" height="6"></rect>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div
          className={`${visible ? "block" : "hidden"
            }  z-50 h-screen sm:h-full bg-black`}
        >
          <div className="flex flex-col w-2/3 py-16 mx-auto space-y-3 text-white">
            <div className="">
              <Link href="/">Strona główna</Link>
            </div>
            <div className="">
              <Link href="/oferta">Oferta</Link>
            </div>
            <div className="">
              <Link href="/o-nas">O nas</Link>
            </div>
            <div className="">
              <Link href="/realizacje">Realizacje</Link>
            </div>
            {/* <div className=""><Link href="/kariera">Kariera</Link></div> */}
            <div className="">
              <Link href="/kontakt">Kontakt</Link>
            </div>
            <div className="flex mt-6 space-x-4">
              {/* <img alt="" className="h-6 border border-white w-9" src="https://damansdak.s3.eu-central-1.amazonaws.com/germany.png" layout='fill' />
              <img alt="" className="h-6 border border-white w-9" src="https://damansdak.s3.eu-central-1.amazonaws.com/united.png" layout='fill' /> */}
              <Link href="https://damansdak.com">
                <a target="_blank">
                  <img
                    alt=""
                    className="h-12"
                    src="https://damansdak.s3.eu-central-1.amazonaws.com/damansdak_bv.jpg"
                    layout="fill"
                  />
                </a>
              </Link>
            </div>
            <SwitchLanguage />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
