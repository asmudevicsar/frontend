import HTMLReactParser from 'html-react-parser';
import Link from 'next/link';
import React from 'react';

export default function Card({idGallery, galleryType, isGallery, idNotice, title, description, imageUrl, typeCentroPrensa }) {
  const urLink = isGallery
    ? `/galeria/fotos/${galleryType == 'noticia' ? 'noticias' : 'comunicados'}/${idGallery}`
    : `/centros-de-prensa/${typeCentroPrensa != 'comunicadosdeprensa' ? 'eventos-y-noticias' : 'comunicados-de-prensa'}/${idNotice}`;
  return (
    <Link href={urLink}>
      <div className="bg-white card-container mb-8 rounded-sm duration-500 hover:drop-shadow-xl hover:duration-500 border border-[#E6E6E6] cursor-pointer">
        <img className="w-full h-36" src={imageUrl} />
        <div className="p-3 pb-0">
          <h3 className="text-center font-medium text-purpledark text-xl">{title}</h3>
          <div className="bg-purpledark d-block w-10 h-0.5 mx-auto my-3"></div>
          <p className="text-base font-normal text-[#606060] w-4/5 text-description-eventnotice m-auto text-center text-lg">{HTMLReactParser(description ? description : '')}</p>
          <div className="w-full text-center">
            <button class="mt-5 mb-7 bg-purpledark drop-shadow-lg h-9 px-4 rounded-md text-white text-sm duration-500 hover:bg-purplelight hover:duration-500 ">Ver Más</button>
          </div>
        </div>
      </div>
    </Link>
  );
}
