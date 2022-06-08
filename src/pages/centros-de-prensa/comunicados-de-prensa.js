import React, { useState, useEffect } from 'react';
import BannerInterno from '@components/generalComponents/BannerInterno';
import Card from '@components/generalComponents/Card';
import { getComunicadosPrensaData, getComunicadosPrensaDataMaxSix } from 'api/centroDePrensaAPI';
import { API_URL } from 'utils/constants';

export default function ComunicadosPrensa() {
  const [data, setData] = useState(null);
  const loadAllComunicadosPrensa = () => {
    (async () => {
      const response = await getComunicadosPrensaData();
      setData(response?.data);
    })();
  };
  useEffect(() => {
    (async () => {
      const response = await getComunicadosPrensaDataMaxSix();
      setData(response?.data);
    })();
  }, []);
  return (
    <>
      <BannerInterno />
      <div className="container py-8 sm:py-16 px-8 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
          {data?.map(
            (item,index) =>
              item.attributes.Nombre && (
                <div key={index} style={{ animation: "fadeIn 1s ease-in both" }}>
                  <Card
                    idNotice={item.id}
                    title={item.attributes.Nombre}
                    typeCentroPrensa="comunicadosdeprensa"
                    description={item.attributes.Descripcion}
                    imageUrl={`${API_URL}${item.attributes.Imagen_Principal.data.attributes.url}`}
                  />
                </div>
              )
          )}
        </div>
        <div className="text-center">
          <button onClick={loadAllComunicadosPrensa} className="mt-2 mb-1 bg-purpledark drop-shadow-lg h-9 px-8 rounded text-white text-sm duration-500 hover:bg-purplelight hover:duration-500 ">
            Ver más comunicados
          </button>
        </div>
      </div>
    </>
  );
}
