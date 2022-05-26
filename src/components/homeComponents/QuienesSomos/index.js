import React from 'react';
import { FaHandHoldingWater, FaHands } from 'react-icons/fa';

export default function QuienesSomos() {
  return (
    <div class="container grid-container grid grid-cols-1 lg:grid-cols-3 xl:p-4 m-4 xl:m-14 quienesomos">
      <div>
        <h3 className="text-purplelight font-bold text-2xl lg:text-6xl">Asociación de Mujeres</h3>
        <p className="text-[#606060] text-lg lg:text-xl mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et massa eu lorem accumsan ornare nec volutpat augue. Donec ac accumsan sapien, sit amet sollicitudin tellus.
        </p>
        <div className='w-full text-center lg:w-inherit lg:text-left'>
        <button className="bg-purpledark text-white rounded-3xl px-7 py-1 mt-5 text-lg duration-500 hover:bg-purplelight hover:duration-500">Ver más información</button>
        </div>
      </div>
      <div className="pt-8">
        <img src="http://localhost:3000/images/mujer.png" />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-0 lg:grid-cols-none grid-rows-none xl:grid-rows-2  mt-5 lg:mt-0">
        <div className="w-full lg:w-3/4">
          <FaHandHoldingWater className="w-16 h-16 text-purpledark m-auto" />
          <h4 className="text-purpledark text-2xl lg:text-3xl font-black my-2 text-center">Misión</h4>
          <p className="text-[#606060] text-center leading-5">Sed lacus urna, pulvinar dictum nunc ac, mattis efficitur tortor. Vestibulum lacus libero, dignissim.</p>
        </div>
        <div className="flex">
          <div className="w-0 lg:w-1/4"></div>
          <div className="w-full lg:w-3/4 mt-3 lg:mt-0">
            <FaHands className="w-16 h-16 text-purpledark m-auto" />
            <h4 className="text-purpledark text-2xl lg:text-3xl font-black my-2 text-center">Visión</h4>
            <p className="text-[#606060] text-center leading-5">Sed lacus urna, pulvinar dictum nunc ac, mattis efficitur tortor. Vestibulum lacus libero, dignissim.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
