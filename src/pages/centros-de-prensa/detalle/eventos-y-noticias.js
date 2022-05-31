import React from 'react';
import BannerInterno from '@components/generalComponents/BannerInterno';
import Card from '@components/generalComponents/Card';

export default function EventosNoticiasDetalle() {
  return (
    <>
      <BannerInterno
        title="Eventos y Noticias"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNiKhuv0pfwFxwLB2idvrmaubdad0Fp9KYQ&usqp=CAU"
        description="Quisque nisl metus, placerat nec velit non, elementum ornare quam. Curabitur egestas blandit tempus. Pellentesque condimentum arcu quis consequat convallis. Cras ornare felis in diam gravida, vel auctor ante efficitur."
      />
      <div className="container grid grid-cols-2 lg:grid-cols-8 lg:gap-10 h-full mt-14 mb-0">
        <div className="col-span-6">
          <div className="bg-white mb-12 border-2 rounded-sm border border-[#E6E6E6]">
            <img className="w-full !h-76 sm:!h-96" src="https://www.unicef.org/sites/default/files/styles/hero_mobile/public/UN0336408-bluewashed.jpg?itok=eUdh_Mx-" />
            <div className="p-3 sm:p-9 pb-0">
              <div className="flex justify-between">
                <h3 className="text-left font-normal text-purpledark text-2xl">Proyecto mi generación es capaz</h3>
              </div>
              <div className="bg-purpledark d-block w-10 h-0.5 mt-1 mb-4"></div>
              <p className="text-lg font-normal text-gray text-justify  w-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ad Lorem ipsum dolor sit amet, consectetur ad Lorem ipsum dolor sit amet, consectetur
                ad Lorem ipsum dolor sit amet, consectetur ad lor sit amet, consectetur ad lor sit amet, consectetur ad ad lor sit amet, consectetur ad ad lor sit amet, consectetur ad
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
