import React, { useState, useEffect } from 'react';
import BannerInterno from '@components/generalComponents/BannerInterno';
import Card from '@components/generalComponents/Card';
import { getNoticesData, getEventsComunicadosGallery, getEventsComunicadosGalleryMaxSix } from 'api/centroDePrensaAPI';
import { API_URL } from 'utils/constants';

export default function Gallery() {
  const [data, setData] = useState(null);
  const loadAllGalleries = () => {
    (async () => {
      let response = await getEventsComunicadosGallery();

      setData(response);
    })();
  };
  useEffect(() => {
    (async () => {
      let response = await getEventsComunicadosGalleryMaxSix();

      console.log('aqui=>', response);
      setData(response);
    })();
  }, []);
  return (
    <>
      <BannerInterno
        title="Galeria"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNiKhuv0pfwFxwLB2idvrmaubdad0Fp9KYQ&usqp=CAU"
        description="Quisque nisl metus, placerat nec velit non, elementum ornare quam. Curabitur egestas blandit tempus. Pellentesque condimentum arcu quis consequat convallis. Cras ornare felis in diam gravida, vel auctor ante efficitur."
      />
      <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
          {data?.map(
            (item) =>
              item?.attributes?.Nombre &&
              item?.attributes?.Galeria_de_imagenes?.data?.length > 0 && (
                <Card
                  galleryType={item.attributes.Categoria_Evento_Noticia ? 'noticia' : 'comunicado'}
                  isGallery={true}
                  idGallery={item.id}
                  idNotice={item.id}
                  title={item.attributes.Nombre}
                  imageUrl={`${API_URL}${item.attributes.Imagen_Principal.data.attributes.url}`}
                />
              )
          )}
        </div>
        <div className="text-center">
          <button onClick={loadAllGalleries} className="mt-2 mb-1 bg-purpledark drop-shadow-lg h-9 px-8 rounded text-white text-sm duration-500 hover:bg-purplelight hover:duration-500 ">
            Ver más galerías
          </button>
        </div>
      </div>
    </>
  );
}
