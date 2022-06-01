import React from 'react';

export default function NuestraHistoria({ title, description, date, image }) {
  return (
    <div className="carrousel-descriptions !h-56 sm:!h-96 !lg:h-96 slide active-anim bg-[#AB7ED0]">
      <div className=" container grid grid-cols-5 gap-4 h-full">
        <div className="col-span-3">
          <div className="center-data-description">
            <h3 className="text-[#4B225C] font-extrabold text-4xl w-1/2 text-aling-left">{title}</h3>
            <h3 className="text-[#4B225C] font-bold text-xl w-1/2 text-aling-left mb-5">Fecha de creación {date}</h3>
            <p className="font-normal text-base w-1/2 text-left text-white ">{description}</p>
          </div>
        </div>
        <div className="col-span-2 flex justify-center">
          <div className="center-data-description  nuestra-historia">
            <img className="!h-32 !w-full sm:!h-80" src={image} />
          </div>
        </div>
      </div>
    </div>
  );
}
