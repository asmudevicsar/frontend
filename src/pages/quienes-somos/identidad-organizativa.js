import React, { useState, useEffect } from 'react';
import BannerInterno from '@components/generalComponents/BannerInterno';
import { getIdentidadOrganizativa } from 'api/quienesSomosAPI';
import HTMLReactParser from 'html-react-parser';
import Link from 'next/link';

export default function IdentidadOrganizativa() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getIdentidadOrganizativa();
      setData(response?.attributes);
    })();
  }, []);
  return (
    <>
      <BannerInterno
        title="Identidad Corporativa"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNiKhuv0pfwFxwLB2idvrmaubdad0Fp9KYQ&usqp=CAU"
        description="Quisque nisl metus, placerat nec velit non, elementum ornare quam. Curabitur egestas blandit tempus. Pellentesque condimentum arcu quis consequat convallis. Cras ornare felis in diam gravida, vel auctor ante efficitur."
      />
       <div className="container">
        <nav class="flex mt-2 mb-6" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center text-purpledark text-sm duration-500 hover: duration-500 	">
              <Link href="/">
                Página principal
              </Link>
            </li>
            <li className='text-purpledark text-sm duration-500 hover: duration-500 hover:text-purplelight'>
              <div class="flex items-center">
                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span href="#" class="text-purpledark">
                    Quiénes Somos
                </span>
              </div>
            </li>
            <li aria-current="page" className='text-purpledark duration-500 hover: duration-500  text-sm hover:text-purplelight'>
              <div class="flex items-center">
                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400 cursor-pointer">Identidad Organizativa</span>
            
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="container text-gray pt-0 pb-16">{HTMLReactParser(data?.Descripcion ? data?.Descripcion : '')}</div>
    </>
  );
}
