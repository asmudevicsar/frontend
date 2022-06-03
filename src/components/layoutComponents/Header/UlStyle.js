import Link from 'next/link';
import React from 'react';
import { FaCaretDown, FaHome, FaUsers, FaTasks, FaPhoneAlt, FaPhotoVideo, FaBullhorn } from 'react-icons/fa';
import SocialLinks from '@components/generalComponents/SocialLinks/SocialLinks';
import { useRouter } from 'next/router';
export default function UlStyle({ hasClassMenuItemsResponsive }) {
  const query = useRouter();
  return (
    <>
      <ul className={hasClassMenuItemsResponsive + ' flex flex-col lg:flex-row list-none lg:ml-auto'}>
        <li className="nav-item xl:mb-0">
          <div className="px-2 py-2  flex items-center text-base  font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500">
            <i className="fab fa-facebook-square text-lg leading-lg text-purpledark opacity-75"></i>
            {hasClassMenuItemsResponsive && (
              <Link href="/">
                <FaHome />
              </Link>
            )}
            <Link href="/">
              <span className="ml-2 title-responsive cursor-pointer">Inicio</span>
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div href="/quienes-somos" className="px-2 py-2 flex items-center text-base  font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500">
            <i className="fab fa-twitter text-base leading-lg text-purpledark opacity-75"></i>
            {hasClassMenuItemsResponsive && <FaUsers />}
            <Link href="/quienes-somos">
              <span className={`ml-2 title-responsive title-responsive ${query.pathname.includes("/quienes-somos") && ' active '} cursor-pointer`}>Quienes Sómos</span>
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div className="px-2 py-2 flex items-center text-base  font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500">
            <i className="fab fa-pinterest text-lg leading-lg text-purpledark opacity-75"></i>
            {hasClassMenuItemsResponsive && <FaTasks />}
            <Link href="/proyectos">
              <span className={`ml-2 title-responsive  ${query.pathname.includes("proyectos") && ' active '} cursor-pointer`}>Proyectos</span>
            </Link>
            <FaCaretDown className="ml-1" />
          </div>
          <ul className="subitem z-10 border-t-purpledark border-t-3 rounded-bl-2xl">
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
          <div className="px-2 py-2 flex items-center text-base  font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500">
            <i className="fab fa-pinterest text-lg leading-lg text-purpledark opacity-75"></i>
            {hasClassMenuItemsResponsive && <FaBullhorn />}

            <span className={`ml-2 title-responsive  ${query.pathname.includes("centros-de-prensa") && ' active '} cursor-pointer`}>Centro de prensa</span>

            <FaCaretDown className="ml-1" />
          </div>
          <ul className="subitem z-10 border-t-purpledark border-t-3 rounded-bl-2xl">
            <li className="py-1 hover:bg-purpledark cursor-pointer hover:text-white rounded-bl-2xl">
              <Link href="/centros-de-prensa/eventos-y-noticias">Eventos y noticias</Link>
            </li>
            <li className="py-1 hover:bg-purpledark cursor-pointer hover:text-white rounded-bl-2xl grid">
              <Link href="/centros-de-prensa/comunicados-de-prensa">Comunicados de prensa</Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <div className="px-2 py-2 flex items-center text-base font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500">
            <i className="fab fa-pinterest text-lg leading-lg text-purpledark opacity-75"></i>
            {hasClassMenuItemsResponsive && <FaPhotoVideo />}
            <Link href="/galeria">
              <span className={`ml-2 title-responsive ${query.pathname.includes("galeria") && ' active '} cursor-pointer`}>Galeria</span>
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div className="px-2 py-2 flex items-center text-base  font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500">
            <i className="fab fa-pinterest text-lg leading-lg text-purpledark opacity-75"></i>
            {hasClassMenuItemsResponsive && <FaPhoneAlt />}
            <Link href="/contactenos">
              <span className={`ml-2 title-responsive  ${query.pathname.includes("contactenos") && ' active '}  cursor-pointer`}>Contáctenos</span>
            </Link>
          </div>
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
