import React from 'react';

export default function Notices() {
  return (
    <div>
      <div className="mt-16 mb-12">
        <h3 className="text-center font-bold text-purpledark text-2xl">Nuestras noticias y eventos</h3>
        <p className="text-[#606060] text-center font-bold text-lg	">Mantente informado en un solo clic</p>
      </div>
      <div className="container gap-6 columns-1 grid grid-cols-1  lg:grid-cols-3 ">
        <div className="bg-white rounded-sm duration-500 hover:drop-shadow-2xl hover:duration-500 border border-[#E6E6E6] cursor-pointer">
          <img className="w-full h-76" src="https://www.unicef.org/sites/default/files/styles/hero_mobile/public/UN0336408-bluewashed.jpg?itok=eUdh_Mx-" />
          <div className="p-7 pb-0">
            <h3 className="text-center font-medium text-purpledark text-2xl">Proyecto mi generación es capaz</h3>
            <div className="bg-purpledark d-block w-10 h-0.5 mx-auto my-3"></div>
            <p className="text-sm font-bold text-[#606060] w-4/5 m-auto text-center text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="w-full text-center">
              <button class="mt-6 mb-8 bg-purpledark drop-shadow-lg h-9 px-4 rounded-md text-white text-sm duration-500 hover:bg-purplelight hover:duration-500 ">Ver Más</button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-sm duration-500 hover:drop-shadow-2xl hover:duration-500 border border-[#E6E6E6] cursor-pointer">
          <img className="w-full h-76" src="https://www.unicef.org/sites/default/files/styles/hero_mobile/public/UN0336408-bluewashed.jpg?itok=eUdh_Mx-" />
          <div className="p-7 pb-0">
            <h3 className="text-center font-medium text-purpledark text-2xl">Proyecto mi generación es capaz</h3>
            <div className="bg-purpledark d-block w-10 h-0.5 mx-auto my-3"></div>
            <p className="text-sm font-bold text-[#606060] w-4/5 m-auto text-center text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="w-full text-center">
              <button class="mt-6 mb-8 bg-purpledark drop-shadow-lg h-9 px-4 rounded-md text-white text-sm duration-500 hover:bg-purplelight hover:duration-500 ">Ver Más</button>
            </div>
          </div>
        </div>
        <div className="  bg-white rounded-sm duration-500 hover:drop-shadow-2xl hover:duration-500 border border-[#E6E6E6] cursor-pointer">
          <img className="w-full h-76" src="https://www.unicef.org/sites/default/files/styles/hero_mobile/public/UN0336408-bluewashed.jpg?itok=eUdh_Mx-" />
          <div className="p-7 pb-0">
            <h3 className="text-center font-medium text-purpledark text-2xl">Proyecto de vivienda urbanización Guadalupe</h3>
            <div className="bg-purpledark d-block w-10 h-0.5 mx-auto my-3"></div>
            <p className="text-sm font-bold text-[#606060] w-4/5 m-auto text-center text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="w-full text-center">
              <button className="mt-6 mb-8 bg-purpledark drop-shadow-lg h-9 px-4 rounded-md text-white text-sm duration-500 hover:bg-purplelight hover:duration-500 ">Ver Más</button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="mt-10 mb-8 bg-purpledark drop-shadow-lg h-9 px-8 rounded text-white text-sm duration-500 hover:bg-purplelight hover:duration-500 ">Ver más noticias</button>
      </div>
    </div>
  );
}
