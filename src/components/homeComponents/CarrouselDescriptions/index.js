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
import BannerWithImageLeft from '@components/generalComponents/BannerWithImageLeft';

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
          <BannerWithImageLeft />
        </SwiperSlide>
        <SwiperSlide>
          <BannerWithImageLeft />
        </SwiperSlide>
        <SwiperSlide>
          <BannerWithImageLeft />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
