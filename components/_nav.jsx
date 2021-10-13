import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";


const Navigation = () => {
  const [small, setSmall] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 20)
      );
    }
  }, []);
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className={`fixed bg-black top-0 z-50 py-3 lg:py-6 mx-auto text-xl w-full text-white ${small ? "small" : ""}`}>

        <nav className="">
          <div className="flex items-center justify-between w-full px-4 mx-auto lg:px-20 ">
            <div className="h-auto w-36 lg:w-72">




            </div>
            <div className="items-center hidden space-x-12 lg:flex">
              <div className="">Oferta</div>
              <div className="">O nas</div>
              <div className="">Realizacje</div>
              <div className="">Kariera</div>
              <div className="">Kontakt</div>
              <div className="flex space-x-4">
                <img alt="" className="h-6 border border-white w-9" src="https://damansdak.s3.eu-central-1.amazonaws.com/germany.png" layout='fill' />
                <img alt="" className="h-6 border border-white w-9" src="https://damansdak.s3.eu-central-1.amazonaws.com/united.png" layout='fill' />
                <img alt="" className="h-6 border border-white w-9" src="https://damansdak.s3.eu-central-1.amazonaws.com/nederland.png" layout='fill' />
              </div>
            </div>
            <div className="ml-auto lg:hidden">
              <button className="flex focus:outline-none" onClick={() => setVisible(!visible)}>
                <svg className="p-3 border border-white " viewBox="0 0 100 80" fill="currentColor" width="40" height="40">
                  <rect width="100" height="6"></rect>
                  <rect y="30" width="100" height="6"></rect>
                  <rect y="60" width="100" height="6"></rect>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div className={`${visible ? 'block' : 'hidden'
          }  z-40 block h-screen sm:h-full bg-black lg:hidden`}>
          <div className="flex flex-col w-2/3 py-16 mx-auto space-y-3 text-white">
            <div className="">Oferta</div>
            <div className="">O nas</div>
            <div className="">Realizacje</div>
            <div className="">Kariera</div>
            <div className="">Kontakt</div>
            <div className="flex mt-6 space-x-4">

              <img alt="" className="h-6 border border-white w-9" src="https://damansdak.s3.eu-central-1.amazonaws.com/germany.png" layout='fill'  />
              <img alt="" className="h-6 border border-white w-9" src="https://damansdak.s3.eu-central-1.amazonaws.com/united.png" layout='fill'  />
              <img alt="" className="h-6 border border-white w-9" src="https://damansdak.s3.eu-central-1.amazonaws.com/nederland.png" layout='fill'  />


            </div>
          </div>
        </div>
      </div>
      {/* MOBILE */}

    </>
  );
};

export default Navigation;