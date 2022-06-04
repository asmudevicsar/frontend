import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { getNoticesMaxThree } from 'api/centroDePrensaAPI';
import parse from 'html-react-parser';
import Link from 'next/link';
import { API_URL } from 'utils/constants';

export default function Notices() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getNoticesMaxThree();
      setData(response?.data);
    })();
  }, []);
  return (
    <div>
      <div className="mt-10 mb-4 sm:mt-16 sm:mb-12">
        <h3 className="text-center font-bold text-purpledark text-2xl">Noticias y eventos</h3>
        <p className="text-[#606060] text-center font-bold text-lg mt-2 sm:mt-0">Mantente informado en un solo clic</p>
      </div>

      <div className="container notices-home sm:gap-6 columns-1 grid grid-cols-1  lg:grid-cols-3 ">
        {data?.map((item) => (
          <div className="bg-white rounded-sm duration-500 hover:drop-shadow-xl hover:duration-500 border border-[#E6E6E6] cursor-pointer">
            <Image width="600" height="280" className="w-full h-48" src={`${API_URL}${item.attributes.Imagen_Principal.data.attributes.url}`} />
            <div className="p-3 sm:p-7 pb-0">
              <h3 className="text-center font-medium text-purpledark text-2xl">{item.attributes.Nombre}</h3>
              <div className="bg-purpledark d-block w-10 h-0.5 mx-auto my-3"></div>
              <div className="text-base data-div font-semibold !text-[#606060] w-4/5 m-auto text-center break-words">{parse(item.attributes.Descripcion)}</div>
              <div className="w-full text-center">
                <button class="mt-6 mb-8 bg-purpledark drop-shadow-lg h-9 px-4 rounded-md text-white text-sm duration-500 hover:bg-purplelight hover:duration-500 ">Ver Más</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/centros-de-prensa/eventos-y-noticias">
          <button className="mt-6 mb-2 sm:mt-10 sm:mb-8 bg-purpledark drop-shadow-lg h-9 px-8 rounded text-white text-sm duration-500 hover:bg-purplelight hover:duration-500 ">
            Ver más noticias
          </button>
        </Link>
      </div>
    </div>
  );
}
