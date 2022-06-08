import React from 'react';

export default function Origen({ description = '', title = '',image }) {
  return (
    <div className="carrousel-descriptions !h-96  !lg:h-96 slide active-anim my-10">
      <div className=" container grid grid-cols-1 sm:grid-cols-5 gap-4 h-full">
        <div className="col-span-1 sm:col-span-2 block xl:flex justify-end sm:mr-10">
        <div className="center-data-description !relative !sm:absolute">
            <img className="!h-32 !w-32 sm:!h-56 sm:!w-60 m-auto sm:m-0" alt="image" src={image} />
          </div>
        </div>
        <div className="col-span-1 sm:col-span-3">
          <div className="center-data-description !relative !xl:absolute">
            <h3 className="px-4 sm:px-0 text-purpledark text-xl xl:text-5xl w-full xl:w-1/2 text-aling-left font-bold">{title}</h3>
            <p className="px-4 sm:px-0 font-light text-lg w-full sm:w-4/5 text-left text-gray mt-3 leading-6">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
