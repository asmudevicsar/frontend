import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'animate.css/animate.min.css';

import BannerInterno from '@components/generalComponents/BannerInterno';
import { useRouter } from 'next/router';

import { API_URL } from 'utils/constants';
import {  getProjectsMaxSixByCategory } from 'api/projectsAPI';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import HTMLReactParser from 'html-react-parser';

export default function Projects() {
  const query = useRouter();
  const [data, setData] = useState(null);
  const loadAllNotices = () => {
    (async () => {
      const response = await getProjectsAll(query.query.idcategory);
      setData(response?.data);
    })();
  };
  useEffect(() => {
    (async () => {
      const response = await getProjectsMaxSixByCategory(query.query.idcategory);
      setData(response?.data);
    })();
  }, [query]);
  return (
    <>
      <BannerInterno />
      <div className="container py-8 sm:py-16 px-8 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
          {data?.map(
            (item,index) =>
              item.attributes.Titulo && (
                <div key={index} style={{ animation: 'fadeIn 1s ease-in both' }}>
                  <AnimationOnScroll initiallyVisible={true} animateIn="animate__fadeInLeftBig">
                    <Link href={`/proyectos/${query.query.categoriaproyectos}/detalle/${item.id}`}>
                      <div className="bg-white card-container mb-8 rounded-sm duration-500 hover:drop-shadow-xl hover:duration-500 border border-[#E6E6E6] cursor-pointer">
                        <Image width="500" height="300" className="w-full !h-20 sm:h-36" src={`${API_URL}${item.attributes.Imagenes.data[0].attributes.url}`} />
                        <div className="p-3 pb-0">
                          <h3 className="text-center font-medium text-purpledark text-xl">{item.attributes.Titulo}</h3>
                          <div className="bg-purpledark d-block w-10 h-0.5 mx-auto my-3"></div>
                          <p className="text-base font-normal text-[#606060] w-4/5 text-description-eventnotice m-auto text-center text-lg">
                            {HTMLReactParser(item.attributes.Descripcion ? item.attributes.Descripcion : '')}
                          </p>
                          <div className="w-full text-center">
                            <button className="mt-5 mb-7 bg-purpledark drop-shadow-lg h-9 px-4 rounded-md text-white text-sm duration-500 hover:bg-purplelight hover:duration-500 ">Ver Más</button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </AnimationOnScroll>
                </div>
              )
          )}
        </div>
        <div className="text-center">
          <button onClick={loadAllNotices} className="mt-2 mb-1 bg-purpledark drop-shadow-lg h-9 px-8 rounded text-white text-sm duration-500 hover:bg-purplelight hover:duration-500 ">
            Ver más noticias
          </button>
        </div>
      </div>
    </>
  );
}
