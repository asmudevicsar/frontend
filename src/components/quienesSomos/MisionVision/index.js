import HTMLReactParser from 'html-react-parser';
import React from 'react';

export default function MisionVision({ title, description, objetivos='', vision, mision, imageMision, imageVision, imageObjetivos }) {
  return (
    <div>
      <div className="container mt-16 mb-12 w-1/2">
        <h3 className="text-center font-bold text-purpledark text-4xl mb-5">{title}</h3>
        <p className="text-[#606060] text-center font-bold text-lg w-3/4 m-auto">{description}</p>
      </div>
      <div className="sm:max-w-4xl m-auto gap-6 columns-1 grid grid-cols-1  lg:grid-cols-3  ">
        <div className="bg-white rounded-3xl border-2 border-[#9D9A9B] cursor-pointer py-10">
          <img className="w-32 h-28 m-auto" src={imageMision} />
          <div className="pt-7 px-2">
            <h3 className="text-center font-bold text-purpledark text-2xl mb-2">Misión</h3>
            <p className="text-base text-[#606060] m-auto text-center leading-5 px-4  break-words">{mision}</p>
          </div>
        </div>
        <div className="bg-white rounded-3xl border-2 border-[#9D9A9B] cursor-pointer py-10">
         {imageVision && <img className="w-32 h-28 m-auto" src={imageVision} /> }
          <div className="pt-7 px-2">
            <h3 className="text-center font-bold text-purpledark text-2xl mb-2">Visión</h3>
            <p className="text-base text-[#606060] m-auto text-center leading-5 px-4  break-words">{vision}</p>
          </div>
        </div>
        <div className="bg-white rounded-3xl border-2 border-[#9D9A9B] cursor-pointer py-10">
          <img className="w-32 h-28 m-auto" src={imageObjetivos} />
          <div className="pt-7 px-2">
            <h3 className="text-center font-bold text-purpledark text-2xl mb-2">Objetivos</h3>
            <p className="text-base text-[#606060] m-auto text-center leading-5 px-4  break-words">{HTMLReactParser(objetivos)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
