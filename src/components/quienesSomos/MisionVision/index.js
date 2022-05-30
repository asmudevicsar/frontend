import React from 'react';

export default function MisionVision() {
  return (
    <div>
      <div className="container mt-16 mb-12 w-1/2">
        <h3 className="text-center font-bold text-purpledark text-4xl mb-5">Quiénes Somos</h3>
        <p className="text-[#606060] text-center font-bold text-lg w-3/4 m-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit lectus purus, et dignissim nulla faucibus ac. Nullam sit amet ipsum facilisis, viverra lorem quis, fermentum lorem.
        </p>
      </div>
      <div className="sm:max-w-4xl m-auto gap-6 columns-1 grid grid-cols-1  lg:grid-cols-3  ">
        <div className="bg-white rounded-3xl border-2 border-[#9D9A9B] cursor-pointer py-10">
          <img className="w-36 h-32 m-auto" src="https://www.unicef.org/sites/default/files/styles/hero_mobile/public/UN0336408-bluewashed.jpg?itok=eUdh_Mx-" />
          <div className="pt-7 px-5">
            <h3 className="text-center font-bold text-purpledark text-2xl mb-2">Misión</h3>
            <p className="text-base text-[#606060] m-auto text-center leading-5 px-4  break-words">Lorem ipsum dsaqefewfewfeedsaddsfdsadsadsaddadsdolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="bg-white rounded-3xl border-2 border-[#9D9A9B] cursor-pointer py-10">
          <img className="w-36 h-32 m-auto" src="https://www.unicef.org/sites/default/files/styles/hero_mobile/public/UN0336408-bluewashed.jpg?itok=eUdh_Mx-" />
          <div className="pt-7 px-5">
            <h3 className="text-center font-bold text-purpledark text-2xl mb-2">Visión</h3>
            <p className="text-base text-[#606060] m-auto text-center leading-5 px-4  break-words">Lorem ipsum dsaqefewfewfeedsaddsfdsadsadsaddadsdolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="bg-white rounded-3xl border-2 border-[#9D9A9B] cursor-pointer py-10">
          <img className="w-36 h-32 m-auto" src="https://www.unicef.org/sites/default/files/styles/hero_mobile/public/UN0336408-bluewashed.jpg?itok=eUdh_Mx-" />
          <div className="pt-7 px-5">
            <h3 className="text-center font-bold text-purpledark text-2xl mb-2">Objetivos</h3>
            <p className="text-base text-[#606060] m-auto text-center leading-5 px-4  break-words">Lorem ipsum dsaqefewfewfeedsaddsfdsadsadsaddadsdolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
