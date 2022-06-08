import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// import required modules
import { EffectFade, Autoplay, Navigation } from 'swiper';
import { getEventsComunicadosGallery } from 'api/centroDePrensaAPI';
import { API_URL } from 'utils/constants';

export default function CarrouselGallery() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getEventsComunicadosGallery();
      setData(response);
    })();
  }, []);
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
        {data?.map((item,index) =>
          item?.attributes?.Galeria_de_imagenes?.data?.map((image,indexGallery) => (
            <SwiperSlide key={index+indexGallery}>
              <img className="w-full carrousel-gallery" src={`${API_URL}${image.attributes.url}`}  alt={`${API_URL}${image.attributes.url}`} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
}
