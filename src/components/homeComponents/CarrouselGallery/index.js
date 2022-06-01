import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// import required modules
import { EffectFade, Autoplay, Navigation } from 'swiper';
import { getNoticesData } from 'api/noticesAPI';
import { API_URL } from 'utils/constants';

export default function CarrouselGallery() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getNoticesData();
      console.log('aaaa=>', response.data);
      setData(response?.data);
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
        {data?.map((item) =>
          item?.attributes?.Galeria_de_imagenes?.data.map((image) => (
            <SwiperSlide>
              <img className="w-full carrousel-gallery" src={`${API_URL}${image.attributes.url}`} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
}
