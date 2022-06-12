import React, { useState, useEffect } from 'react';
import BannerInterno from '@components/generalComponents/BannerInterno';
import Origen from '@components/quienesSomos/Origen';
import NuestraHistoria from '@components/quienesSomos/NuestraHistoria';
import MisionVision from '@components/quienesSomos/MisionVision';
import IdentidadCorporativaOrganizativa from '@components/quienesSomos/IdentidadCorporativaOrganizativa';
import { getQuienesSomosData } from 'api/quienesSomosAPI';
import { API_URL } from 'utils/constants';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Seo from '@components/seo';

export default function QuienesSomos() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getQuienesSomosData();
      setData(response?.attributes);
    })();
  }, []);

  return (
    <div>
      <Seo title="Quíenes somos" description="Quíenes somos" />
      <BannerInterno />
      <AnimationOnScroll initiallyVisible={true} offset={0} animateIn="animate__fadeInLeftBig">
        <Origen description={data?.Origen} title={data?.Titulo_Origen_Pagina_Quienes_Somos} image={`${API_URL}${data?.Imagen_Origen.data.attributes.url}`} />
      </AnimationOnScroll>
      <AnimationOnScroll initiallyVisible={false} offset={0} animateIn="animate__fadeInLeftBig">
        <NuestraHistoria
          title={data?.Titulo_Nuestra_Historia_Pagina_Quienes_Somos}
          description={data?.Nuestra_Historia}
          date={data?.Fecha_Creacion_Asociacion}
          image={`${API_URL}${data?.Imagen_Nuestra_Historia.data.attributes.url}`}
        />
      </AnimationOnScroll>
      <AnimationOnScroll initiallyVisible={false} offset={0} animateIn="animate__fadeInLeftBig">
        <MisionVision
          imageMision={`${API_URL}${data?.Mision_Imagen?.data?.attributes?.url}`}
          imageVision={`${API_URL}${data?.Vision_Imagen?.data?.attributes?.url}`}
          imageObjetivos={`${API_URL}${data?.Objetivos_Imagen.data?.attributes?.url}`}
          title={data?.Titulo_QuienesSomos_Pagina_Quienes_Somos}
          description={data?.Quienes_Somos}
          objetivos={data?.Objetivos}
          vision={data?.Vision}
          mision={data?.Mision}
        />
      </AnimationOnScroll>
      <AnimationOnScroll initiallyVisible={false} offset={0} animateIn="animate__fadeInLeftBig">
        <IdentidadCorporativaOrganizativa
          titleIdentidadOrganizativa={data?.Identidad_Organizativa_Titulo}
          imageIdentidadOrganizativa={`${API_URL}${data?.Identidad_Organizativa_Imagen.data?.attributes?.url}`}
          titleIdentidadCorporativa={data?.Identidad_Corporativa_Titulo}
          imageIdentidadCorporativa={`${API_URL}${data?.Imagen_Identidad_Corporativa.data?.attributes?.url}`}
        />
      </AnimationOnScroll>
    </div>
  );
}
