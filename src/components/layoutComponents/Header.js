import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube, FaSnapchatGhost, FaPinterestP, FaCaretDown } from 'react-icons/fa';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="w-full mx-auto">
        <div className="flex justify-end">
          <div className=" flex bg-purpledark pt-5 pb-3 pr-6 px-6 text-white rounded-bl-2xl">
            <span>Síguenos</span>
            <Link href="home">
              <FaFacebookF className="ml-1.5 cursor-pointer duration-300 hover:text-purplelight  hover:duration-300" />
            </Link>
            <Link href="">
              <FaTwitter className="ml-1.5 cursor-pointer duration-300 hover:text-purplelight  hover:duration-300" />
            </Link>
            <Link href="">
              <FaInstagram className="ml-1.5 cursor-pointer duration-300 hover:text-purplelight  hover:duration-300" />
            </Link>
            <Link href="">
              <FaLinkedinIn className="ml-1.5 cursor-pointer duration-300 hover:text-purplelight  hover:duration-300" />
            </Link>
            <Link href="">
              <FaTiktok className="ml-1.5 cursor-pointer duration-300 hover:text-purplelight  hover:duration-300" />
            </Link>
            <Link href="">
              <FaYoutube className="ml-1.5 cursor-pointer duration-300 hover:text-purplelight  hover:duration-300" />
            </Link>
            <Link href="">
              <FaSnapchatGhost className="ml-1.5 cursor-pointer duration-300 hover:text-purplelight  hover:duration-300" />
            </Link>
            <Link href="">
              <FaPinterestP className="ml-1.5 cursor-pointer duration-300 hover:text-purplelight  hover:duration-300" />
            </Link>
          </div>
          <div></div>
        </div>
        <div className="container px-2 justify-between flex mt-2">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="" className=" text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-purpledark">
              <img className="absolute top-1 w-28 h-24" src="http://localhost:3000/images/logo.png" alt="logoimage" />
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className={'lg:flex flex-grow items-center' + (navbarOpen ? ' flex' : ' hidden')} id="example-navbar-danger">
            <header>
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-base  font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500" href="#pablo">
                    <i className="fab fa-facebook-square text-lg leading-lg text-purpledark opacity-75"></i>
                    <span className="ml-2">Inicio</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-base  font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500" href="#pablo">
                    <i className="fab fa-twitter text-base leading-lg text-purpledark opacity-75"></i>
                    <span className="ml-2">Quienes Sómos</span>
                    <FaCaretDown className="ml-1" />
                  </a>
                  <ul className="subitem border-t-purpledark border-t-2">
                    <li className="py-1 hover:bg-purpledark cursor-pointer hover:text-white rounded-bl-2xl">
                      <Link href="">Misión</Link>
                    </li>
                    <li className="py-1 hover:bg-purpledark cursor-pointer hover:text-white rounded-bl-2xl">
                      <Link href="">Visión</Link>
                    </li>
                    <li className="py-1 hover:bg-purpledark cursor-pointer hover:text-white rounded-bl-2xl">
                      <Link href="">Objetivos</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-base  font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500" href="#pablo">
                    <i className="fab fa-pinterest text-lg leading-lg text-purpledark opacity-75"></i>
                    <span className="ml-2">Proyectos</span>
                    <FaCaretDown className="ml-1" />
                  </a>
                  <ul className="subitem border-t-purpledark border-t-2">
                    <li className="py-1 hover:bg-purpledark cursor-pointer hover:text-white rounded-bl-2xl">
                      <Link href="">Misión</Link>
                    </li>
                    <li className="py-1 hover:bg-purpledark cursor-pointer hover:text-white rounded-bl-2xl">
                      <Link href="">Visión</Link>
                    </li>
                    <li className="py-1 hover:bg-purpledark cursor-pointer hover:text-white rounded-bl-2xl">
                      <Link href="">Objetivos</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-base  font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500" href="#pablo">
                    <i className="fab fa-pinterest text-lg leading-lg text-purpledark opacity-75"></i>
                    <span className="ml-2">Centro de prensa</span>
                    <FaCaretDown className="ml-1" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-base font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500" href="#pablo">
                    <i className="fab fa-pinterest text-lg leading-lg text-purpledark opacity-75"></i>
                    <span className="ml-2">Galeria</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-base  font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500" href="#pablo">
                    <i className="fab fa-pinterest text-lg leading-lg text-purpledark opacity-75"></i>
                    <span className="ml-2">Contáctenos</span>
                  </a>
                </li>
              </ul>
            </header>
          </div>
        </div>
      </nav>
    </>
  );
}
