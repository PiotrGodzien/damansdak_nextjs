import Link from 'next/link';
import React, { useState } from 'react';

const Navigation = () => {

  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="fixed top-0 z-50 w-full py-3 mx-auto text-xl text-white bg-black lg:py-6">

        <nav className="">
          <div className="flex items-center justify-between w-full px-4 mx-auto lg:px-20 ">
            <div className="h-auto w-36 lg:w-72">
              <Link href="/" className=""><img alt="" src="https://damansdak.s3.eu-central-1.amazonaws.com/logo_damsdak-3.png" /></Link>
            </div>
            <div className="items-center hidden space-x-12 lg:flex">
              <div className=""><Link href="/oferta">Oferta</Link></div>
              <div className="">O nas</div>
              <div className="">Realizacje</div>
              <div className="">Kariera</div>
              <div className="">Kontakt</div>
              <div className="flex space-x-4">
                {/* <img alt="" className="h-6 border border-white w-9" src="https://damansdak.s3.eu-central-1.amazonaws.com/germany.png" layout='fill' />
                <img alt="" className="h-6 border border-white w-9" src="https://damansdak.s3.eu-central-1.amazonaws.com/united.png" layout='fill' /> */}
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
          }  z-50 h-screen sm:h-full bg-black`}>
          <div className="flex flex-col w-2/3 py-16 mx-auto space-y-3 text-white">
            <div className="">Oferta</div>
            <div className="">O nas</div>
            <div className="">Realizacje</div>
            <div className="">Kariera</div>
            <div className="">Kontakt</div>
            <div className="flex mt-6 space-x-4">
              <img alt="" className="h-6 border border-white w-9" src="https://damansdak.s3.eu-central-1.amazonaws.com/germany.png" layout='fill' />
              <img alt="" className="h-6 border border-white w-9" src="https://damansdak.s3.eu-central-1.amazonaws.com/united.png" layout='fill' />
              <img alt="" className="h-6 border border-white w-9" src="https://damansdak.s3.eu-central-1.amazonaws.com/nederland.png" layout='fill' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;