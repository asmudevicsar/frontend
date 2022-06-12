import React from 'react';
import 'animate.css/animate.min.css';

import BannerHome from '@components/homeComponents/BannerHome';
import CarrouselGallery from '@components/homeComponents/CarrouselGallery';
import CategoriesProject from '@components/homeComponents/CategoriesProjects';
import Notices from '@components/homeComponents/Notices';
import QuienesSomos from '@components/homeComponents/QuienesSomos';
import FormContact from '@components/homeComponents/FormContact';
import CarrouselDescriptions from '@components/homeComponents/CarrouselDescriptions';
import Partners from '@components/homeComponents/Partners';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Seo from '@components/seo';

export default function Home() {
  return (
    <>
      <Seo title="Página Principal" description="Asociación de mujeres desplazadas y víctimas del conflicto armado" />
      <BannerHome />

      <AnimationOnScroll initiallyVisible={false} offset={0} animateIn="animate__fadeInLeftBig">
        <QuienesSomos />
      </AnimationOnScroll>
      <AnimationOnScroll initiallyVisible={false} offset={0} animateIn="animate__fadeInLeftBig">
        <CategoriesProject />
      </AnimationOnScroll>
      <AnimationOnScroll initiallyVisible={false} offset={0} animateIn="animate__fadeInLeftBig">
        <CarrouselGallery />
      </AnimationOnScroll>
      <AnimationOnScroll initiallyVisible={false} offset={0} animateIn="animate__fadeInLeftBig">
        <Notices />
      </AnimationOnScroll>
      <Partners />
      <AnimationOnScroll initiallyVisible={false} offset={0} animateIn="animate__fadeInLeftBig">
        <CarrouselDescriptions />
      </AnimationOnScroll>
      <AnimationOnScroll initiallyVisible={false} offset={10} animateIn="animate__fadeInLeftBig">
        <FormContact />
      </AnimationOnScroll>
    </>
  );
}
