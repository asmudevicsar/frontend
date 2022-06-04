import React, { useEffect, useState } from 'react';

import Header from '@components/layoutComponents/Header';
import Footer from '@components/layoutComponents/Footer';
import { getGeneralInformation } from 'api/generalInformationAPI';
import { API_URL } from 'utils/constants';
import { getEventsComunicadosGalleryMaxSix } from 'api/centroDePrensaAPI';

export default function MainLayout({ children }) {
  const [data, setData] = useState(null);
  const [galleryData, setGalleryData] = useState(null);

  useEffect(() => {
    (async () => {
      let response = await getGeneralInformation();
      setData(response);

      let responseGallery = await getEventsComunicadosGalleryMaxSix();
      setGalleryData(responseGallery);
    })();
  }, []);

  return (
    <div className="min-h-full">
      <Header logoResponsive={data && data[0] && `${API_URL}${data[0]?.attributes?.Logo_en_Celular?.data?.attributes?.url}`} numberCellphone={data && data[0] && data[0].attributes.Numero_Celular_Para_Contacto} logoPrincipal={data && data[0] && `${API_URL}${data[0]?.attributes?.Logo_Principal?.data?.attributes?.url}`} />
      <main>
        <div className="max-w-full mx-auto py-4 pb-0">{children}</div>
      </main>
      <Footer galleryData={galleryData} logoBlanco={data && data[0] && `${API_URL}${data[0]?.attributes?.Logo_Blanco?.data?.attributes?.url}`} />
    </div>
  );
}
