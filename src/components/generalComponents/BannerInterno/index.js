import React from 'react';

export default function BannerInterno({ title, img, description }) {
  return (
    <div style={{ backgroundImage: 'url(' + img + ')' }} className={'relative mt-8 lg:mt-24 banner-interno active-anim image-banner h-52'}>
      <div className="content-image">
          <div className="!w-full center-data  md:!w-3/4 lg:!w-1/2">
            <h3 className=" text-center font-bold text-xl sm:text-4xl text-white">{title}</h3>
            <p className="mt-3 text-center font-semibold text-sm xl:text-base text-white !leading-5">{description}</p>
          </div>
        </div>
    </div>
  );
}