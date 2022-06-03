import React from 'react';
import Link from 'next/link';
import UlStyle from './UlStyle';
import SocialLinks from '@components/generalComponents/SocialLinks/SocialLinks';
import { FaWhatsapp } from 'react-icons/fa';
export default function Header({ numberCellphone, logoPrincipal }) {
  return (
    <>
      <nav className="w-full mx-auto border-b-2 border-b-purplelight z-50 fixed bg-[#fff]">
        <nav class="navbar-responsive bg-purpledark">
          <div class="navbar-container">
            <input type="checkbox" name="" id="" className="flex justify-end" />
            <div className="hamburger-lines flex justify-end">
              <span className="line line1 bg-white"></span>
              <span className="line line2 bg-white"></span>
              <span className="line line3 bg-white"></span>
            </div>
            <UlStyle hasClassMenuItemsResponsive="menu-items" />
          </div>
        </nav>
        <SocialLinks isResponsive={true} />
        <div className="container justify-between flex my-2 container-header">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start div-logo">
            <Link href="/" className=" text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-purpledark">
              <img className="cursor-pointer absolute logoresponsive top-1 w-24 h-20 sm:w-32 sm:h-28" src={logoPrincipal} alt="logoimage" />
            </Link>
          </div>
          <div className={'lg:flex flex-grow items-center hidden'}>
            <header>
              <UlStyle hasClassMenuItemsResponsive="" />
            </header>
          </div>
        </div>
      </nav>
      <button className="btn-general-whatsapp bg-purpledark duration-500 fixed z-50 top-1/3 p-2 rounded-full right-1 sm:right-6 hover:bg-purplelight hover:duration-500">
        <a target="_BLANK" href={`https://wa.me/57${numberCellphone}?text=Buenos%20dias`}>
          <FaWhatsapp className="text-3xl text-white" />
        </a>
      </button>
    </>
  );
}
