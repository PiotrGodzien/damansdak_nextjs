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
                  alt="Logo Damansdak Polska"
                  src="https://damansdak.mo.cloudinary.net/logo_damsdak-3.webp"
                  layout="responsive"
                  width={820}
                  height={118}
                />
              </Link>
            </div>
            <div className="items-center hidden space-x-2 text-xs 2xl:space-x-4 lg:text-base 2xl:text-lg 2xl:flex">
              <div className="">
                <Link href="/">{t("Stronaglowna")}</Link>
              </div>
              <div className="">
                <Link href="/oferta">{t("Oferta")}</Link>
              </div>
              <div className="">
                <Link href="/serwis">{t("Serwis/renowacje")}</Link>
              </div>
              <div className="">
                <Link href="/o-nas">{t("Onas")}</Link>
              </div>
              <div className="">
                <Link href="/wideo">{t("Wideo")}</Link>
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
                <Link href="https://damansdak.com">
                  <a target="_blank" rel="noopener">
                    <img
                      alt="Logo Damansdak"
                      className="h-14"
                      src="https://damansdak.mo.cloudinary.net/damansdak_bv.webp"
                      layout="fill"
                      width={200}
                      height={71}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="ml-auto 2xl:hidden">
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
          className={`${
            visible ? "block" : "hidden"
          }  z-50 h-screen md:text-3xl md:space-y-8 bg-black`}
        >
          <div className="flex flex-col py-16 mx-auto space-y-3 text-center text-white">
            <div className="">
              <Link href="/">{t("Stronaglowna")}</Link>
            </div>
            <div className="">
              <Link href="/oferta">{t("Oferta")}</Link>
            </div>
            <div className="">
              <Link href="/serwis">{t("Serwis/renowacje")}</Link>
            </div>
            <div className="">
              <Link href="/o-nas">{t("Onas")}</Link>
            </div>
            <div className="">
              <Link href="/wideo">{t("Wideo")}</Link>
            </div>
            <div className="">
              <Link href="/realizacje">{t("Realizacje")}</Link>
            </div>
            {/* <div className=""><Link href="/kariera">Kariera</Link></div> */}
            <div className="">
              <Link href="/kontakt">{t("Kontakt")}</Link>
            </div>
            <div className="flex justify-center mt-6 space-x-4">
              {/* <img alt="" className="h-6 border border-white w-9" src="/germany.png" layout='fill' />
              <img alt="" className="h-6 border border-white w-9" src="/united.png" layout='fill' /> */}
              <Link href="https://damansdak.com">
                <a target="_blank" rel="noopener">
                  <img
                    alt="Logo Damansdak"
                    className="h-12"
                    src="/damansdak_bv.webp"
                    layout="fill"
                    width={200}
                    height={71}
                  />
                </a>
              </Link>
            </div>
            <div className="mx-auto">
            <SwitchLanguage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
