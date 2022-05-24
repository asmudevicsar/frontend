import React, { useState, useEffect } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import dataSlider from './dataSlider';

export default function BannerHome() {
  const [slideIndex, setSlideIndex] = useState(1);
  const MINUTE_MS = 12000;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  });
  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  return (
    <div className="container-slider mx-auto flex">
      <div className="box-buttons-banner z-50 absolute right-0">
        <div className="bg-purpledark p-3 cursor-pointer duration-500 hover:bg-purplelight">
          <IoIosArrowForward onClick={nextSlide} className="text-white w-6	h-6" id="arrowforward" />
        </div>
        <div className="bg-white p-3 cursor-pointer duration-500 hover:bg-[#E6E6E6]">
          <IoIosArrowBack onClick={prevSlide} className="text-purpledark w-6	h-6" />
        </div>
      </div>
      {dataSlider.map((obj, index) => {
        return (
          <div style={{ backgroundImage: 'url(' + obj.img + ')' }} key={obj.id} className={slideIndex === index + 1 ? 'slide active-anim image-banner' : 'slide image-banner '}>
            <div className="box-cell">
              <div className="center-data">
                <h3 className=" text-white text-6xl font-bold">{obj.title}</h3>
                <p className="text-3xl font-medium text-white mt-2">{obj.subTitle}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
