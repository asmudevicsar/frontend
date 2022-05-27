import React from 'react';

export default function BannerInterno({ title, img, description }) {
  return (
    <div style={{ backgroundImage: 'url(' + img + ')' }} className={'relative mt-20 banner-interno active-anim image-banner h-52'}>
      <div className="content-image">
          <div className="center-data">
            <h3 className=" text-center font-bold text-5xl text-white">{title}</h3>
            <p className="mt-3 text-center font-semibold text-xl text-white">{description}</p>
          </div>
        </div>
    </div>
  );
}