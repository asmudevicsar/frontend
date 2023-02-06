import React, { useState, useEffect } from 'react';
import { FaHandHoldingWater, FaHands } from 'react-icons/fa';
import { getQuienesSomosData } from 'api/quienesSomosAPI';
import { API_URL } from 'utils/constants';

export default function QuienesSomos() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getQuienesSomosData();
      setData(response?.attributes);
    })();
  }, []);

  return (
    <div className="container grid-container grid grid-cols-1 lg:grid-cols-3 m-0 sm:m-4 xl:m-16 quienesomos">
      <div className='p-3 sm:p-0'>
        <h3 className="text-purplelight font-bold text-2xl lg:text-6xl">{data?.Titulo_QuienesSomos_Pagina_Principal}</h3>
        <p className="text-[#606060] text-sm sm:text-lg lg:text-xl mt-4">{data?.Quienes_Somos}</p>
        <div className="w-full text-center lg:w-inherit lg:text-left">
          <button className="bg-purpledark text-white rounded-3xl px-7 py-1 mt-5 text-lg duration-500 hover:bg-purplelight hover:duration-500">{data?.Boton_QuienesSomos_Pagina_Principal}</button>
        </div>
      </div>
      <div className="pt-0 sm:pt-24">
        <img src={`${API_URL}${data?.Imagen_Pagina_Principal?.data?.attributes?.url}`} alt="image"/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-0 lg:grid-cols-none grid-rows-none p-3 sm:p-0 xl:grid-rows-2  mt-5 lg:mt-0">
        <div className="w-full lg:w-full">
          <FaHandHoldingWater className="w-16 h-16 text-purpledark m-auto" />
          <h4 className="text-purpledark text-2xl lg:text-3xl font-black my-2 text-center">Misión</h4>
          <p className="text-[#606060] text-left leading-6 text-sm	">{data?.Mision}</p>
        </div>
        <div className="flex">
          <div className="w-0 lg:w-1/4"></div>
          <div className="w-full lg:w-full mt-3 lg:mt-0">
            <FaHands className="w-16 h-16 text-purpledark m-auto" />
            <h4 className="text-purpledark text-2xl lg:text-3xl font-black my-2 text-center">Visión</h4>
            <p className="text-[#606060] text-left sm:text-right leading-6 text-sm	">{data?.Vision}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
