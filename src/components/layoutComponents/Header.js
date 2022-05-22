import React from 'react';
import Link from 'next/link';
import UlStyle from './UlStyle';
import SocialLinks from './SocialLinks';

export default function Navbar() {
  return (
    <>
      <nav className="w-full mx-auto">
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
        <div className="container px-2 justify-between flex mt-2">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start z-50 div-logo">
            <Link href="" className=" text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-purpledark">
              <img className="absolute logoresponsive top-1 w-28 h-24" src="http://localhost:3000/images/logo.png" alt="logoimage" />
            </Link>
          </div>
          <div className={'lg:flex flex-grow items-center hidden'}>
            <header>
              <UlStyle hasClassMenuItemsResponsive="" />
            </header>
          </div>
        </div>
      </nav>
    </>
  );
}
