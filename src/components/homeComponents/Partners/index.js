import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper';
import { getPartners } from 'api/partners';
import { API_URL } from 'utils/constants';

export default function Partners() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      let response = await getPartners();
      setData(response?.data);
    })();
  }, []);
  return (
    <>
      {data && data?.length > 0 && (
        <div className="container mt-10 mb-12 partners">
          <h4 className="text-purpledark font-bold text-2xl text-center mb-4 sm:mb-12">Afiliaciones</h4>
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            modules={[Autoplay]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {data?.map((item, index) => (
              <SwiperSlide key={index}>
                <img alt="image" className="rounded-full w-28	h-28 m-auto" src={`${API_URL}${item?.attributes?.Imagen?.data?.attributes?.url}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}
