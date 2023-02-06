import React, { useState, useEffect } from 'react';
import BannerInterno from '@components/generalComponents/BannerInterno';
import { getIdentidadCorporativa } from 'api/quienesSomosAPI';
import HTMLReactParser from 'html-react-parser';
import Link from 'next/link';
import Seo from '@components/seo';

export default function IdentidadCorporativa() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getIdentidadCorporativa();
      setData(response?.attributes);
    })();
  }, []);
  return (
    <>
    <Seo title="Identidad Corporativa" description="Identidad Corporativa"/>
      <BannerInterno
        title="Identidad Corporativa"
      />
       <div className="container">
       <nav className="flex mt-2 mb-6 breadcrumb" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center text-purpledark text-sm duration-500 hover: duration-500 	">
              <Link href="/">
                Página principal
              </Link>
            </li>
            <li className='text-purpledark text-sm duration-500 hover: duration-500 hover:text-purplelight'>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span href="#" className="text-purpledark">
                    Quiénes Somos
                </span>
              </div>
            </li>
            <li aria-current="page" className='text-purpledark duration-500 hover: duration-500  text-sm hover:text-purplelight'>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400 cursor-pointer">Identidad Corporativa</span>
            
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="container text-gray pt-0 pb-16">{HTMLReactParser(data?.Descripcion ? data?.Descripcion : '')}</div>
    </>
  );
}
