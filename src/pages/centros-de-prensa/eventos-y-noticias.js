import React, { useState, useEffect } from 'react';

import BannerInterno from '@components/generalComponents/BannerInterno';
import Card from '@components/generalComponents/Card';
import { getNoticesData, getNoticesDataMaxSix } from 'api/centroDePrensaAPI';
import { API_URL } from 'utils/constants';
import Seo from '@components/seo';

export default function EventosNoticias() {
  const [data, setData] = useState(null);
  const loadAllNotices = () => {
    (async () => {
      const response = await getNoticesData();
      setData(response?.data);
    })();
  };
  useEffect(() => {
    (async () => {
      const response = await getNoticesDataMaxSix();
      setData(response?.data);
    })();
  }, []);
  return (
    <>
    <Seo title="Eventos y Noticias" description="Eventos y Noticias" />
      <BannerInterno />
      <div className="container py-8 sm:py-16 px-8 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
          {data?.map(
            (item,index) =>
              item?.attributes?.Nombre && (
                <div key={index} style={{ animation: "fadeIn 1s ease-in both" }}>
                  <Card idNotice={item?.id} title={item?.attributes?.Nombre} description={item?.attributes?.Descripcion} imageUrl={`${API_URL}${item?.attributes?.Imagen_Principal?.data?.attributes?.url}`} />
                </div>
              )
          )}
        </div>
        <div className="text-center">
          <button onClick={loadAllNotices} className="mt-2 mb-1 bg-purpledark drop-shadow-lg h-9 px-8 rounded text-white text-sm duration-500 hover:bg-purplelight hover:duration-500 ">
            Ver más noticias
          </button>
        </div>
      </div>
    </>
  );
}
