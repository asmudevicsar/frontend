import HTMLReactParser from 'html-react-parser';
import React from 'react';
import Image from 'next/image';

export default function BannerWithImageLeft({ imageLeft, description='', backgroundImageData }) {
  return (
    <div style={{ backgroundImage: `url(${backgroundImageData})` }} className="carrousel-descriptions !h-56 sm:!h-72 !lg:h-96 slide active-anim image-banner mt-4">
      <div className="content-image">
        <div className=" container grid grid-cols-5 gap-4 h-full">
          <div className="col-span-2 flex justify-center">
            <div className="center-data-description">
              <Image width="280" height="280" className="!h-32 !w-32 rounded-full" src={imageLeft} />
            </div>
          </div>
          <div className="col-span-3">
            <div className="center-data-description">
              <h4 className="text-white font-light text-xl sm:text-3xl lg:text-4xl w-4/5 lg:w-1/2 text-center">{HTMLReactParser(description)}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
