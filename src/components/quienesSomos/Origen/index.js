import React from 'react';

export default function Origen() {
  return (
    <div className="carrousel-descriptions !h-56 sm:!h-72 !lg:h-96 slide active-anim my-10">
      <div className=" container grid grid-cols-1 sm:grid-cols-5 gap-4 h-full">
        <div className="col-span-2 flex justify-end mr-10">
          <div className="center-data-description">
            <img className="!h-32 !w-32 sm:!h-56 sm:!w-60" src="https://www.unicef.org/sites/default/files/styles/hero_mobile/public/UN0336408-bluewashed.jpg?itok=eUdh_Mx-" />
          </div>
        </div>
        <div className="col-span-3">
          <div className="center-data-description">
            <h3 className="text-purpledark text-5xl w-1/2 text-aling-left font-bold">Origen ASMUDEVICSAR</h3>
            <p className="font-light text-lg w-4/5 text-left text-gray mt-3 leading-6">
              Integer porta odio in molestie euismod. Integer ac cursus dui, sed tempor sapien. Quisque ut dictum massa. Maecenas mollis tristique porttitor. Aenean id luctus velit. In vel hendrerit
              augue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}