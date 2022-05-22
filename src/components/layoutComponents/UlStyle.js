import Link from 'next/link';
import React from 'react';
import { FaCaretDown, FaHome, FaUsers, FaTasks, FaPhoneAlt, FaPhotoVideo, FaBullhorn } from 'react-icons/fa';
import SocialLinks from './SocialLinks';

export default function UlStyle({ hasClassMenuItemsResponsive }) {
  return (
    <>
      <ul className={hasClassMenuItemsResponsive + ' flex flex-col lg:flex-row list-none lg:ml-auto'}>
        <li className="nav-item xl:mb-0">
          <a className="px-2 py-2  flex items-center text-base  font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500" href="#pablo">
            <i className="fab fa-facebook-square text-lg leading-lg text-purpledark opacity-75"></i>
            {hasClassMenuItemsResponsive && <FaHome />}
            <span className="ml-2 title-responsive">Inicio</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="px-2 py-2 flex items-center text-base  font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500" href="#pablo">
            <i className="fab fa-twitter text-base leading-lg text-purpledark opacity-75"></i>
            {hasClassMenuItemsResponsive && <FaUsers />}
            <span className="ml-2 title-responsive title-responsive">Quienes Sómos</span>
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
          <a className="px-2 py-2 flex items-center text-base  font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500" href="#pablo">
            <i className="fab fa-pinterest text-lg leading-lg text-purpledark opacity-75"></i>
            {hasClassMenuItemsResponsive && <FaTasks />}
            <span className="ml-2 title-responsive">Proyectos</span>
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
          <a className="px-2 py-2 flex items-center text-base  font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500" href="#pablo">
            <i className="fab fa-pinterest text-lg leading-lg text-purpledark opacity-75"></i>
            {hasClassMenuItemsResponsive && <FaBullhorn />}
            <span className="ml-2 title-responsive">Centro de prensa</span>
            <FaCaretDown className="ml-1" />
          </a>
        </li>
        <li className="nav-item">
          <a className="px-2 py-2 flex items-center text-base font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500" href="#pablo">
            <i className="fab fa-pinterest text-lg leading-lg text-purpledark opacity-75"></i>
            {hasClassMenuItemsResponsive && <FaPhotoVideo />}
            <span className="ml-2 title-responsive">Galeria</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="px-2 py-2 flex items-center text-base  font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500" href="#pablo">
            <i className="fab fa-pinterest text-lg leading-lg text-purpledark opacity-75"></i>
            {hasClassMenuItemsResponsive && <FaPhoneAlt />}
            <span className="ml-2 title-responsive">Contáctenos</span>
          </a>
        </li>
        {hasClassMenuItemsResponsive && (
          <li>
            <SocialLinks isResponsive={false} />
          </li>
        )}
      </ul>
    </>
  );
}
