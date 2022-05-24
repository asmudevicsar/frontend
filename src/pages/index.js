import React, { useRef } from 'react';
import BannerHome from '@components/homeComponents/BannerHome';
import CarrouselGallery from '@components/homeComponents/CarrouselGallery';
import CategoriesProject from '@components/homeComponents/CategoriesProjects';
import Notices from '@components/homeComponents/Notices';
import QuienesSomos from '@components/homeComponents/QuienesSomos';
import SmoothScroll from '@common/SmoothScroll';

export default function Home() {
  return (
    <>
      <SmoothScroll>
        <BannerHome />
        <QuienesSomos />
        <CategoriesProject />
        <CarrouselGallery />
        <Notices />
      </SmoothScroll>
    </>
  );
}
