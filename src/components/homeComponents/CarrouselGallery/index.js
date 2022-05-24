import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// import required modules
import { EffectFade, Autoplay, Navigation } from 'swiper';

export default function CarrouselGallery() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        spaceBetween={1}
        loop={true}
        navigation={true}
        modules={[EffectFade, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full carrousel-gallery" src="https://www.fundacionmujeryhogar.org/wp-content/uploads/2019/09/BANNER-CARRUSEL-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full carrousel-gallery" src="https://cloudfront-us-east-1.images.arcpublishing.com/semana/L3QEPWUQJRAFXM5WV4UAMNO5M4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full carrousel-gallery" src="https://cloudfront-us-east-1.images.arcpublishing.com/semana/L3QEPWUQJRAFXM5WV4UAMNO5M4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
