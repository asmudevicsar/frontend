import React from 'react';

export default function NuestraHistoria() {
  return (
    <div className="carrousel-descriptions !h-56 sm:!h-96 !lg:h-96 slide active-anim bg-[#AB7ED0]">
      <div className=" container grid grid-cols-5 gap-4 h-full">
        <div className="col-span-3">
          <div className="center-data-description">
            <h3 className="text-[#4B225C] font-extrabold text-4xl w-1/2 text-aling-left">Nuestra Historia</h3>
            <h3 className="text-[#4B225C] font-bold text-xl w-1/2 text-aling-left mb-5">Fecha de creación 26 de octubre de 1961.</h3>
            <p className="font-normal text-base w-1/2 text-left text-white ">
              Nam volutpat consequat libero ac placerat. Sed laoreet ut urna vitae cursus. Phasellus sed consequat diam. Proin dapibus lorem sed pharetra porta. Phasellus ullamcorper faucibus
              faucibus.Proin blandit, massa tempus ornare dignissim, nisl quam facilisis eros, sit amet lobortis ex nisl pharetra neque. Fusce lectus metus, posuere eget gravida eget, vehicula sed
              justo.
            </p>
          </div>
        </div>
        <div className="col-span-2 flex justify-center">
          <div className="center-data-description  nuestra-historia">
            <img className="!h-32 !w-full sm:!h-80" src="https://www.unicef.org/sites/default/files/styles/hero_mobile/public/UN0336408-bluewashed.jpg?itok=eUdh_Mx-" />
          </div>
        </div>
      </div>
    </div>
  );
}