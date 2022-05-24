import React from 'react';
import { FaHandHoldingWater, FaHands } from 'react-icons/fa';

export default function QuienesSomos() {
  return (
    <div class="container grid-container grid grid-cols-3 p-4 m-14">
      <div>
        <h3 className="text-purplelight font-bold text-6xl">Asociación de Mujeres</h3>
        <p className="text-[#606060] text-xl mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et massa eu lorem accumsan ornare nec volutpat augue. Donec ac accumsan sapien, sit amet sollicitudin tellus.
        </p>
        <button className="bg-purpledark text-white rounded-3xl px-7 py-1 mt-5 text-lg duration-500 hover:bg-purplelight hover:duration-500">Ver más información</button>
      </div>
      <div className="pt-8">
        <img src="http://localhost:3000/images/mujer.png" />
      </div>
      <div class="grid grid-rows-2 gap-0">
        <div className="w-3/4">
          <FaHandHoldingWater className="w-16 h-16 text-purpledark m-auto" />
          <h4 className="text-purpledark text-3xl font-black my-2 text-center">Misión</h4>
          <p className="text-[#606060] text-center leading-5">Sed lacus urna, pulvinar dictum nunc ac, mattis efficitur tortor. Vestibulum lacus libero, dignissim.</p>
        </div>
        <div className="flex">
          <div className="w-1/4"></div>
          <div className="w-3/4">
            <FaHands className="w-16 h-16 text-purpledark m-auto" />
            <h4 className="text-purpledark text-3xl font-black my-2 text-center">Visión</h4>
            <p className="text-[#606060] text-center leading-5">Sed lacus urna, pulvinar dictum nunc ac, mattis efficitur tortor. Vestibulum lacus libero, dignissim.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
