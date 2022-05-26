import React from 'react';
import { FaHome } from 'react-icons/fa';
import { GiDramaMasks, GiPig } from 'react-icons/gi';
import { FaHandshake } from 'react-icons/fa';

export default function CategoriesProject() {
  return (
    <div class="container categoriasproyectos w-full grid-container grid grid-cols-2 sm:grid-cols-4  divide-x p-4 divide-[#E8E8E8] m-5 sm:m-14 ">
      <div className="duration-700 hover:bg-[#FBEAF1] hover:duration-700 cursor-pointer py-2">
        <FaHome className="m-auto w-20 h-20 text-purpledark" />
        <p className="text-center text-[#606060] text-lg sm:text-xl mt-1 font-medium leading-none w-3/4 m-auto">Vivienda</p>
      </div>
      <div className="duration-700 hover:bg-[#FBEAF1] hover:duration-700 cursor-pointer py-2">
        <GiDramaMasks className="m-auto w-20 h-20 text-purpledark" />
        <p className="text-center text-[#606060] text-lg sm:text-xl mt-1 font-medium leading-none w-3/4 m-auto">Cultura</p>
      </div>
      <div className="duration-700 hover:bg-[#FBEAF1] hover:duration-700 cursor-pointer py-2">
        <GiPig className="m-auto w-20 h-20 text-purpledark" />
        <p className="text-center text-[#606060] text-lg sm:text-xl mt-1 font-medium leading-none w-3/4 m-auto">Porcicula</p>
      </div>
      <div className="duration-700 hover:bg-[#FBEAF1] hover:duration-700 cursor-pointer py-2">
        <FaHandshake className="m-auto w-20 h-20 text-purpledark" />
        <p className="text-center text-[#606060] text-lg sm:text-xl mt- font-medium leading-none w-3/4 m-auto">Derechos humanos</p>
      </div>
    </div>
  );
}
