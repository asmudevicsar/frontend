import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import _ from 'lodash';

import { FaCaretDown, FaHome, FaUsers, FaTasks, FaPhoneAlt, FaPhotoVideo, FaBullhorn } from 'react-icons/fa';
import SocialLinks from '@components/generalComponents/SocialLinks/SocialLinks';
import { useRouter } from 'next/router';
import { getCategoriesProjectsData, getProjects } from 'api/projectsAPI';

export default function UlStyle({ hasClassMenuItemsResponsive, onButtonClick }) {
  const [categoryProjects, setCategoryProjects] = useState(null);
  const [projects, setProjects] = useState(null);
  const arrCategories = [];

  useEffect(() => {
    (async () => {
      const responseCategories = await getCategoriesProjectsData();
      const responseProjects = await getProjects();
      responseCategories?.map((item) => {
        responseProjects?.map((element) => {
          if (element?.attributes?.Categoria_del_proyecto?.data?.attributes?.Nombre_de_Categoria == item?.attributes?.Nombre_de_Categoria) {
            arrCategories.push({
              urlName: item?.attributes?.Nombre_de_Categoria.trim()
                .toLowerCase()
                .normalize('NFD')
                .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, '$1')
                .normalize()
                .trim()
                .replace(/ /g, ''),
              namecategory: item?.attributes?.Nombre_de_Categoria,
              idCategory: item.id,
            });
          }
        });
      });

      let arr = _.uniqWith(arrCategories, _.isEqual);
      setCategoryProjects(arr);
    })();
  }, []);
  const query = useRouter();
  return (
    <>
      <ul className={hasClassMenuItemsResponsive + ' flex flex-col lg:flex-row list-none lg:ml-auto'}>
        <li className="nav-item xl:mb-0">
          <div className="px-2 py-2  flex items-center text-base  font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500">
            <i className="fab fa-facebook-square text-lg leading-lg text-purpledark opacity-75"></i>
            {hasClassMenuItemsResponsive && (
              <a href="/">
                <FaHome />
              </a>
            )}
            {!hasClassMenuItemsResponsive ? (
              <Link href="/">
                <span className="ml-2 title-responsive cursor-pointer" onClick={onButtonClick}>
                  Inicio
                </span>
              </Link>
            ) : (
              <a href="/">
                <span className="ml-2 title-responsive cursor-pointer" onClick={onButtonClick}>
                  Inicio
                </span>
              </a>
            )}
          </div>
        </li>
        <li className="nav-item">
          <div href="/quienes-somos" className="px-2 py-2 flex items-center text-base  font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500">
            <i className="fab fa-twitter text-base leading-lg text-purpledark opacity-75"></i>
            {hasClassMenuItemsResponsive && <FaUsers />}
            {!hasClassMenuItemsResponsive ? (
              <Link href="/quienes-somos">
                <span className={`ml-2 title-responsive title-responsive ${query.pathname.includes('/quienes-somos') && ' active '} cursor-pointer`}>Quienes Sómos</span>
              </Link>
            ) : (
              <a href="/quienes-somos">
                <span className={`ml-2 title-responsive title-responsive ${query.pathname.includes('/quienes-somos') && ' active '} cursor-pointer`}>Quienes Sómos</span>
              </a>
            )}
            <FaCaretDown className="ml-1" />
          </div>
          <ul className="subitem z-10 border-t-purpledark border-t-3 rounded-bl-2xl">
            <li className="py-1 hover:bg-purpledark cursor-pointer hover:text-white rounded-bl-2xl">
              {!hasClassMenuItemsResponsive ? <Link href="/centros-de-prensa/eventos-y-noticias">Inicio</Link> : <a href="/centros-de-prensa/eventos-y-noticias">Inicio</a>}
            </li>
            <li className="py-1 hover:bg-purpledark cursor-pointer hover:text-white rounded-bl-2xl grid">
              {!hasClassMenuItemsResponsive ? <Link href="/quienes-somos/identidad-corporativa">Identidad Corporativa</Link> : <a href="/quienes-somos/identidad-corporativa">Identidad Corporativa</a>}
            </li>
            <li className="py-1 hover:bg-purpledark cursor-pointer hover:text-white rounded-bl-2xl grid">
              {!hasClassMenuItemsResponsive ? (
                <Link href="/quienes-somos/identidad-organizativa">Identidad Organizativa</Link>
              ) : (
                <a href="/quienes-somos/identidad-organizativa">Identidad Organizativa</a>
              )}
            </li>
            <li className="py-1 hover:bg-purpledark cursor-pointer hover:text-white rounded-bl-2xl grid">
              {!hasClassMenuItemsResponsive ? (
                <Link href="/quienes-somos/informe-corporativo-mensual">Informe Corporativo Mensual</Link>
              ) : (
                <a href="/quienes-somos/informe-corporativo-mensual">Informe Corporativo Mensual</a>
              )}
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <div className="px-2 py-2 flex items-center text-base  font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500">
            <i className="fab fa-pinterest text-lg leading-lg text-purpledark opacity-75"></i>
            {hasClassMenuItemsResponsive && <FaTasks />}
            {!hasClassMenuItemsResponsive ? (
              <Link href="/proyectos">
                <span className={`ml-2 title-responsive  ${query.pathname.includes('proyectos') && ' active '} cursor-pointer`}>Proyectos</span>
              </Link>
            ) : (
              <a href="/proyectos">
                <span className={`ml-2 title-responsive  ${query.pathname.includes('proyectos') && ' active '} cursor-pointer`}>Proyectos</span>
              </a>
            )}

            <FaCaretDown className="ml-1" />
          </div>
          <ul className="subitem z-10 border-t-purpledark border-t-3 rounded-bl-2xl">
            {categoryProjects?.map((itemCategory, index) => (
              <li key={index} className="py-1 hover:bg-purpledark cursor-pointer hover:text-white rounded-bl-2xl">
                {!hasClassMenuItemsResponsive ? (
                  <Link href={`/proyectos/${itemCategory.urlName}/${itemCategory.idCategory}`}>{itemCategory.namecategory}</Link>
                ) : (
                  <a href={`/proyectos/${itemCategory.urlName}/${itemCategory.idCategory}`}>{itemCategory.namecategory}</a>
                )}
              </li>
            ))}
          </ul>
        </li>
        <li className="nav-item">
          <div className="px-2 py-2 flex items-center text-base font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500">
            <i className="fab fa-pinterest text-lg leading-lg text-purpledark opacity-75"></i>
            {hasClassMenuItemsResponsive && <FaBullhorn />}

            <span className={`ml-2 title-responsive text-[#444] ${query.pathname.includes('centros-de-prensa') && ' active '} cursor-pointer`}>Centro de prensa</span>

            <FaCaretDown className="ml-1" />
          </div>
          <ul className="subitem z-10 border-t-purpledark border-t-3 rounded-bl-2xl">
            <li className="py-1 hover:bg-purpledark cursor-pointer hover:text-white rounded-bl-2xl">
              {!hasClassMenuItemsResponsive ? <Link href="/centros-de-prensa/eventos-y-noticias">Eventos y noticias</Link> : <a href="/centros-de-prensa/eventos-y-noticias">Eventos y noticias</a>}
            </li>
            <li className="py-1 hover:bg-purpledark cursor-pointer hover:text-white rounded-bl-2xl grid">
              {!hasClassMenuItemsResponsive ? (
                <Link href="/centros-de-prensa/comunicados-de-prensa">Comunicados de prensa</Link>
              ) : (
                <a href="/centros-de-prensa/comunicados-de-prensa">Comunicados de prensa</a>
              )}
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <div className="px-2 py-2 flex items-center text-base font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500">
            <i className="fab fa-pinterest text-lg leading-lg text-purpledark opacity-75"></i>
            {hasClassMenuItemsResponsive && <FaPhotoVideo />}

            {!hasClassMenuItemsResponsive ? (
              <Link href="/galeria">
                <span className={`ml-2 title-responsive ${query.pathname.includes('galeria') && ' active '} cursor-pointer`}>Galeria</span>
              </Link>
            ) : (
              <a href="/galeria">
                <span className={`ml-2 title-responsive ${query.pathname.includes('galeria') && ' active '} cursor-pointer`}>Galeria</span>
              </a>
            )}
          </div>
        </li>
        <li className="nav-item">
          <div className="px-2 py-2 flex items-center text-base  font-bold leading-snug text-purpledark duration-500 hover:text-purplelight hover:duration-500">
            <i className="fab fa-pinterest text-lg leading-lg text-purpledark opacity-75"></i>
            {hasClassMenuItemsResponsive && <FaPhoneAlt />}

            {!hasClassMenuItemsResponsive ? (
              <Link href="/contactenos">
                <span className={`ml-2 title-responsive  ${query.pathname.includes('contactenos') && ' active '}  cursor-pointer`}>Contáctenos</span>
              </Link>
            ) : (
              <a href="/contactenos">
                <span className={`ml-2 title-responsive  ${query.pathname.includes('contactenos') && ' active '}  cursor-pointer`}>Contáctenos</span>
              </a>
            )}
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
