import React, { useState, useEffect } from 'react';
import { getBannersInternos } from 'api/bannerInternosAPI';
import { useRouter } from 'next/router';
import { API_URL } from 'utils/constants';

export default function BannerInterno({ title, img, description }) {
  const query = useRouter();
  const [dataBanner, setDataBanner] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getBannersInternos();
      console.log('hay=>', response);
      response?.data?.map((item) => {
        if (item.attributes.Pagina.data?.attributes.Nombre == 'Quienes Somos' && query.pathname == '/quienes-somos') {
          setDataBanner(item.attributes);
        }
        if (item.attributes.Pagina.data?.attributes.Nombre == 'Proyectos' && query.pathname == '/proyectos') {
          setDataBanner(item.attributes);
        }
        if (item.attributes.Pagina.data?.attributes.Nombre == 'Galeria' && query.pathname == '/galeria') {
          setDataBanner(item.attributes);
        }
        if (item.attributes.Pagina.data?.attributes.Nombre == 'Eventos y Noticias' && query.pathname.includes('/centros-de-prensa/eventos-y-noticias')) {
          setDataBanner(item.attributes);
        }
        if (item.attributes.Pagina.data?.attributes.Nombre == 'Comunicados de Prensa' && query.pathname.includes('/centros-de-prensa/comunicados-de-prensa')) {
          setDataBanner(item.attributes);
        }
      });
    })();
  }, []);
  return dataBanner ? (
    <div style={{ backgroundImage: `url(${API_URL}${dataBanner?.Imagen_de_fondo?.data[0]?.attributes?.url})` }} className={'relative mt-8 lg:mt-24 banner-interno active-anim image-banner h-52'}>
      <div className="content-image">
        <div className="!w-full center-data  md:!w-3/4 lg:!w-1/2">
          <h3 className=" text-center font-bold text-xl sm:text-4xl text-white">{dataBanner?.Titulo}</h3>
          <p className="mt-3 text-center font-semibold text-sm xl:text-base text-white !leading-5">{dataBanner?.Descripcion}</p>
        </div>
      </div>
    </div>
  ) : (
    <div style={{ backgroundImage: 'url(' + img + ')' }} className={'relative mt-8 lg:mt-24 banner-interno active-anim image-banner h-52'}>
      <div className="content-image">
        <div className="!w-full center-data  md:!w-3/4 lg:!w-1/2">
          <h3 className=" text-center font-bold text-xl sm:text-4xl text-white">{title}</h3>
          <p className="mt-3 text-center font-semibold text-sm xl:text-base text-white !leading-5">{description}</p>
        </div>
      </div>
    </div>
  );
}
