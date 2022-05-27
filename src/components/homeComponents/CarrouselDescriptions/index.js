import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper';

export default function CarrouselDescriptions() {
  return (
    <div className="section-carrousel-descriptions">
      <Swiper
        slidesPerView={1}
        pagination={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        spaceBetween={1}
        loop={true}
        navigation={true}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{ backgroundImage: 'url(https://www.fundacionmujeryhogar.org/wp-content/uploads/2019/09/BANNER-CARRUSEL-4.jpg)' }}
            className="carrousel-descriptions !h-56 sm:!h-72 !lg:h-96 slide active-anim image-banner mt-4"
          >
            <div className="content-image">
              <div className=" container grid grid-cols-5 gap-4 h-full">
                <div className="col-span-2 flex justify-center">
                  <div className="center-data-description">
                    <img className="!h-32 !w-32 sm:!h-56 sm:!w-60 rounded-full" src="https://www.unicef.org/sites/default/files/styles/hero_mobile/public/UN0336408-bluewashed.jpg?itok=eUdh_Mx-" />
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="center-data-description">
                    <h4 className="text-white font-light text-xl sm:text-3xl lg:text-4xl w-4/5 lg:w-1/2 text-center">Me siento orgulloso de pertenecer a esta gran familia</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: 'url(https://www.fundacionmujeryhogar.org/wp-content/uploads/2019/09/BANNER-CARRUSEL-4.jpg)' }}
            className="carrousel-descriptions !h-56 sm:!h-72 !lg:h-96 slide active-anim image-banner mt-4"
          >
            <div className="content-image">
              <div className=" container grid grid-cols-5 gap-4 h-full">
                <div className="col-span-2 flex justify-center">
                  <div className="center-data-description">
                    <img className="!h-32 !w-32 sm:!h-56 sm:!w-60 rounded-full" src="https://www.unicef.org/sites/default/files/styles/hero_mobile/public/UN0336408-bluewashed.jpg?itok=eUdh_Mx-" />
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="center-data-description">
                    <h4 className="text-white font-light text-xl sm:text-3xl lg:text-4xl w-4/5 lg:w-1/2 text-center">Meeeee siento orgulloso de pertenecer a esta gran familia</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: 'url(https://www.fundacionmujeryhogar.org/wp-content/uploads/2019/09/BANNER-CARRUSEL-4.jpg)' }}
            className="carrousel-descriptions !h-56 sm:!h-72 !lg:h-96 slide active-anim image-banner mt-4"
            y
          >
            <div className="content-image">
              <div className=" container grid grid-cols-5 gap-4 h-full">
                <div className="col-span-2 flex justify-center">
                  <div className="center-data-description">
                    <img className="!h-32 !w-32 sm:!h-56 sm:!w-60 rounded-full" src="https://www.unicef.org/sites/default/files/styles/hero_mobile/public/UN0336408-bluewashed.jpg?itok=eUdh_Mx-" />
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="center-data-description">
                    <h4 className="text-white font-light text-xl sm:text-3xl lg:text-4xl w-4/5 lg:w-1/2 text-center">Me siento orgulloso de pertenecer a esta gran familia</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}