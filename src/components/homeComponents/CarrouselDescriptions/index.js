import React, { useEffect, useState } from 'react';
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
import { getFrasesCampanias } from 'api/frasesCampaniasAPI';
import { API_URL } from 'utils/constants';

export default function CarrouselDescriptions() {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await getFrasesCampanias();
      setData(response?.data);
    })();
  }, []);
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
        {data?.map((item) => (
          <SwiperSlide>
            <BannerWithImageLeft
              imageLeft={`${API_URL}${item.attributes.Imagen_Izquierda.data.attributes.url}`}
              description={item.attributes.Texto_Descripcion}
              backgroundImageData={`${API_URL}${item.attributes.Imagen_de_fondo.data.attributes.url}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
