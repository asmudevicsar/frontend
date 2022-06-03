import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import SocialLinksOnlyIcons from '@components/generalComponents/SocialLinks/SocialLinksOnlyIcons';

export default function Footer({logoBlanco,galleryData}) {
  const router = useRouter();
  return (
    <footer>
      {router.pathname != '/' && (
        <div className="grid-container grid grid-cols-2 sm:grid-cols-4 bg-purpledark">
          <div className="grid content-right ">
            <img className="logo-image-footer h-80 w-52" src={logoBlanco} alt="logoimage" />
          </div>
          <div className="block px-6 py-14 xl:px-12 text-center lg:text-left ">
            <h4 className="text-white font-bold	mb-1">Proyectos<hr className="line-color-middle-white" /></h4>
            
            <div className="pt-3">
              <p className="text-white cursor-pointer text-sm duration-500 hover:duration-500 hover:text-purplelight py-1">Porcicola</p>
              <p className="text-white cursor-pointer text-sm duration-500 hover:duration-500 hover:text-purplelight py-1">Vivienda</p>
              <p className="text-white cursor-pointer text-sm duration-500 hover:duration-500 hover:text-purplelight py-1">Otros</p>
            </div>
          </div>
          <div className="block px-6 py-14  xl:px-12 text-center lg:text-left">
            <h4 className="text-white font-bold	mb-1">Galeria<hr className="line-color-middle-white" /></h4>
            
            <div className="pt-3">
              {
                galleryData?.map(item =>(
                  <p className="text-white cursor-pointer text-sm duration-500 hover:duration-500 hover:text-purplelight py-1">{item.attributes.Nombre}</p>

                ))
              }
          
            </div>
          </div>
          <div className="block px-6 py-14  xl:px-12 text-center lg:text-left">
            <h4 className="text-white font-bold	mb-1">Centros de prensa          <hr className="line-color-middle-white" /></h4>
  
            <div className="pt-3">
              <Link href="/centros-de-prensa/eventos-y-noticias"><p className="text-white cursor-pointer text-sm duration-500 hover:duration-500 hover:text-purplelight py-1">Eventos y Noticias</p></Link>
              <Link href="/centros-de-prensa/comunicados-de-prensa"><p className="text-white cursor-pointer text-sm duration-500 hover:duration-500 hover:text-purplelight py-1">Comunicados de Prensa</p></Link>
              
            </div>
          </div>
        </div>
      )}
      <div class="block mx-auto bg-white rounded-lg  md:items-center md:justify-between dark:bg-gray-800">
        <div className="bg-purplelight py-4 content-center">
          <div className="container  grid grid-cols-1 sm:grid-cols-2 gap-1 justify-evenly content-center">
            <div className="float-right text-white text-sm mt-auto text-center sm:text-left">Derechos Reservados ASMUDEVICSAR</div>
            <div className="justify-start mt-0.5 m-auto sm:m-0">
              <SocialLinksOnlyIcons />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
