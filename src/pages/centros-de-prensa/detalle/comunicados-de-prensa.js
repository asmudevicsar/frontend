import React from 'react';
import BannerInterno from '@components/generalComponents/BannerInterno';

export default function ComunicadosPrensaDetalle() {
  return (
    <>
      <BannerInterno
        title="Comunicados de Prensa"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNiKhuv0pfwFxwLB2idvrmaubdad0Fp9KYQ&usqp=CAU"
        description="Quisque nisl metus, placerat nec velit non, elementum ornare quam. Curabitur egestas blandit tempus. Pellentesque condimentum arcu quis consequat convallis. Cras ornare felis in diam gravida, vel auctor ante efficitur."
      />
      <div className="container grid grid-cols-1 lg:grid-cols-6 lg:gap-20 h-full mt-14 mb-0">
        <div className="col-span-4">
          <div className="bg-white mb-12 border-2 rounded-sm duration-500 hover:drop-shadow-xl hover:duration-500 border border-[#E6E6E6] cursor-pointer">
            <img className="w-full !h-76 sm:!h-96" src="https://www.unicef.org/sites/default/files/styles/hero_mobile/public/UN0336408-bluewashed.jpg?itok=eUdh_Mx-" />
            <div className="p-3 sm:p-9 pb-0">
              <div className="flex justify-between">
                <h3 className="text-left font-normal text-purpledark text-2xl">Proyecto mi generación es capaz</h3>

                <button class="bg-purpledark drop-shadow-lg h-9 px-4 rounded-md text-white text-sm duration-500 hover:bg-purplelight hover:duration-500 ">Ver Más</button>
              </div>
              <div className="bg-purpledark d-block w-10 h-0.5 mt-1 mb-4"></div>
              <p className="text-sm font-bold text-gray text-justify text-xl w-100 text-description-eventnotice">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ad Lorem ipsum dolor sit amet, consectetur ad Lorem ipsum dolor sit amet, consectetur
                ad Lorem ipsum dolor sit amet, consectetur ad lor sit amet, consectetur ad lor sit amet, consectetur ad ad lor sit amet, consectetur ad ad lor sit amet, consectetur ad
              </p>
            </div>
          </div>
          <div className="bg-white mb-12 border-2 rounded-sm duration-500 hover:drop-shadow-xl hover:duration-500 border border-[#E6E6E6] cursor-pointer">
            <img className="w-full !h-76 sm:!h-96" src="https://www.unicef.org/sites/default/files/styles/hero_mobile/public/UN0336408-bluewashed.jpg?itok=eUdh_Mx-" />
            <div className="p-3 sm:p-9 pb-0">
              <div className="flex justify-between">
                <h3 className="text-left font-normal text-purpledark text-2xl">Proyecto mi generación es capaz</h3>

                <button class="bg-purpledark drop-shadow-lg h-9 px-4 rounded-md text-white text-sm duration-500 hover:bg-purplelight hover:duration-500 ">Ver Más</button>
              </div>
              <div className="bg-purpledark d-block w-10 h-0.5 mt-1 mb-4"></div>
              <p className="text-sm font-bold text-gray text-justify text-xl w-100 text-description-eventnotice">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ad Lorem ipsum dolor sit amet, consectetur ad Lorem ipsum dolor sit amet, consectetur
                ad Lorem ipsum dolor sit amet, consectetur ad lor sit amet, consectetur ad lor sit amet, consectetur ad
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="bg-white mb-8 rounded-sm duration-500 hover:drop-shadow-xl hover:duration-500 border border-[#E6E6E6] cursor-pointer">
            <img className="w-full h-76" src="https://www.unicef.org/sites/default/files/styles/hero_mobile/public/UN0336408-bluewashed.jpg?itok=eUdh_Mx-" />
            <div className="p-3 sm:p-7 pb-0">
              <h3 className="text-center font-medium text-purpledark text-2xl">Proyecto mi generación es capaz</h3>
              <div className="bg-purpledark d-block w-10 h-0.5 mx-auto my-3"></div>
              <p className="text-sm font-bold text-[#606060] w-4/5 text-description-eventnotice m-auto text-center text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="w-full text-center">
                <button class="mt-6 mb-8 bg-purpledark drop-shadow-lg h-9 px-4 rounded-md text-white text-sm duration-500 hover:bg-purplelight hover:duration-500 ">Ver Más</button>
              </div>
            </div>
          </div>
          <div className="bg-white mb-8 rounded-sm duration-500 hover:drop-shadow-xl hover:duration-500 border border-[#E6E6E6] cursor-pointer">
            <img className="w-full h-76" src="https://www.unicef.org/sites/default/files/styles/hero_mobile/public/UN0336408-bluewashed.jpg?itok=eUdh_Mx-" />
            <div className="p-3 sm:p-7 pb-0">
              <h3 className="text-center font-medium text-purpledark text-2xl">Proyecto mi generación es capaz</h3>
              <div className="bg-purpledark d-block w-10 h-0.5 mx-auto my-3"></div>
              <p className="text-sm font-bold text-[#606060] w-4/5 text-description-eventnotice m-auto text-center text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="w-full text-center">
                <button class="mt-6 mb-8 bg-purpledark drop-shadow-lg h-9 px-4 rounded-md text-white text-sm duration-500 hover:bg-purplelight hover:duration-500 ">Ver Más</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
