import React from 'react';

export default function NuestraHistoria({ title, description, date, image }) {
  return (
    <div className="carrousel-descriptions !h-72 sm:!h-96 !lg:h-96 slide active-anim bg-[#AB7ED0]">
      <div className=" container grid grid-cols-5 gap-4 h-full">
        <div className="col-span-3">
          <div className="center-data-description !relative !xl:absolute  p-3 sm:p-0">
            <h3 className="text-[#4B225C] font-extrabold text-xl sm:text-4xl w-full sm:w-1/2 text-aling-left">{title}</h3>
            <h3 className="text-[#4B225C] font-bold text-xs sm:text-xl w-full sm:w-1/2 text-aling-left mb-1 sm:mb-5">Fecha de creación {date}</h3>
            <p className="font-light sm:font-normal text-xs sm:text-base w-full sm:w-1/2 text-left text-white ">{description}</p>
          </div>
        </div>
        <div className="col-span-2 flex justify-center">
          <div className="center-data-description !relative !xl:absolute nuestra-historia">
            <img className="!h-32 !w-full sm:!h-80" alt="image" src={image} />
          </div>
        </div>
      </div>
    </div>
  );
}
