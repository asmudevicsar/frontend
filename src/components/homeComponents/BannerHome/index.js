import { getBannersPrincipal } from 'api/bannerPrincipalAPI';
import React, { useState, useEffect } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { API_URL } from 'utils/constants';

export default function BannerHome() {
  const [banners, setBanners] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await getBannersPrincipal();
      setBanners(response.data);
    })();
  }, []);

  const [slideIndex, setSlideIndex] = useState(1);
  const MINUTE_MS = 12000;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  });
  const nextSlide = () => {
    if (slideIndex !== banners.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === banners.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(banners.length);
    }
  };

  return (
    <div className="container-slider mx-auto flex">
      <div className="box-buttons-banner z-40 absolute right-0">
        <div className="bg-purpledark p-2 sm:p-3 cursor-pointer duration-500 hover:bg-purplelight" onClick={nextSlide}>
          <IoIosArrowForward className="text-white w-6	h-6" id="arrowforward" />
        </div>
        <div className="bg-white p-2 sm:p-3 cursor-pointer duration-500 hover:bg-[#E6E6E6]" onClick={prevSlide}>
          <IoIosArrowBack className="text-purpledark w-6	h-6" />
        </div>
      </div>
      {banners?.map((item, index) => {
        return (
          <div
            style={{ backgroundImage: 'url(' + API_URL + item.attributes.Imagen.data.attributes.url + ')' }}
            key={item.attributes.Titulo}
            className={slideIndex === index + 1 ? 'slide active-anim image-banner' : 'slide image-banner '}
          >
            <div className="box-cell">
              <div className="center-data">
                <h3 className="text-white text-3xl sm:text-5xl xl:text-6xl font-bold">{item.attributes.Titulo}</h3>
                <p className="text-xl sm:text-3xl font-medium text-white mt-2">{item.attributes.Descripcion}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
