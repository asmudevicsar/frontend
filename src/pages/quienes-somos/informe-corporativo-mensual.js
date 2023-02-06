import BannerInterno from '@components/generalComponents/BannerInterno';
import { getInformesCorporativos } from 'api/quienesSomosAPI';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { API_URL } from 'utils/constants';

export default function InformeCorporativoMensual() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getInformesCorporativos();
      console.log('deeee=>', response);
      setData(response);
    })();
  }, []);

  return (
    <>
      <BannerInterno title="Informe Corporativo Mensual" />
      <div className="container px-4 sm:px-0 py-4">
        {data?.length > 0 &&
          data?.map((item) => (
            <div className="border-b-2 border-b-purplelight mb-8">
              <h4 className="text-purplelight font-bold text-sm sm:text-base">{item?.attributes?.createdAt.substr(0, 10)}</h4>
              <p className="font-bold text-gray text-base sm:text-xl">{item?.attributes?.Titulo}</p>
              <a href={`${API_URL}${item?.attributes?.Archivo?.data?.attributes?.url}`} target="_blank">
                <div className="flex cursor-pointer text-purpledark font-bold my-2">
                  <FaFileDownload className="" />
                  <span className="ml-2">Descargar</span>
                </div>
              </a>
            </div>
          ))}
      </div>
    </>
  );
}
