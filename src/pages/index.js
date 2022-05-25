import React from 'react';
import BannerHome from '@components/homeComponents/BannerHome';
import CarrouselGallery from '@components/homeComponents/CarrouselGallery';
import CategoriesProject from '@components/homeComponents/CategoriesProjects';
import Notices from '@components/homeComponents/Notices';
import QuienesSomos from '@components/homeComponents/QuienesSomos';

export default function Home() {
  return (
    <>
      <BannerHome />
      <QuienesSomos />
      <CategoriesProject />
      <CarrouselGallery />
      <Notices />
    </>
  );
}
