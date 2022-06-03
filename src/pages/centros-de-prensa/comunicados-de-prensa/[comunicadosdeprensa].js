import React, { useState, useEffect } from 'react';
import BannerInterno from '@components/generalComponents/BannerInterno';
import Card from '@components/generalComponents/Card';
import { useRouter } from 'next/router';
import { getComunicadoPrensaByUrl, getComunicadosPrensaData } from 'api/centroDePrensaAPI';
import HTMLReactParser from 'html-react-parser';
import { API_URL } from 'utils/constants';
import Link from 'next/link';

export default function ComunicadosPrensaDetalle() {
  const { query } = useRouter();
  const [eventoComunicadoPrensa, setEventoComunicadoPrensa] = useState(null);
  let [otherComunicadosPrensa, setOtherComunicadosPrensa] = useState(null);

  let idComunicadosPrensaThree = [];
  let arrOtherComunicadosPrensa = [];
  let responseOtherComunicadosPrensa;
  useEffect(() => {
    (async () => {
      (async () => {
        const { data } = await getComunicadosPrensaData();
        const response = await getComunicadoPrensaByUrl(query.comunicadosdeprensa);
        setEventoComunicadoPrensa(response.data[0]);
        data?.map((idComunicadoPrensa, pos) => {
          if (idComunicadoPrensa.id != query.comunicadosdeprensa && pos <= 2) {
            idComunicadosPrensaThree.push(idComunicadoPrensa.id);
          }
        });
        let arrayWithoutRepeat = idComunicadosPrensaThree.filter((item, index) => {
          return idComunicadosPrensaThree.indexOf(item) === index;
        });
        console.log('oleeee=>', arrayWithoutRepeat);
        arrayWithoutRepeat.map(async (element) => {
          responseOtherComunicadosPrensa = await getComunicadoPrensaByUrl(element);
          arrOtherComunicadosPrensa.push(responseOtherComunicadosPrensa);
        });
        setTimeout(() => {
          setOtherComunicadosPrensa(arrOtherComunicadosPrensa);
          console.log(arrOtherComunicadosPrensa);
        }, 500);
      })();
    })();
  }, [query]);

  return (
    <>
      <BannerInterno />
      <div className="container">
        <nav class="flex mt-2 mb-6" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center text-purpledark text-sm duration-500 hover: duration-500 	">
              <Link href="/">Página principal</Link>
            </li>
            <li className="text-purpledark text-sm duration-500 hover: duration-500 hover:text-purplelight">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span href="#" class="text-purpledark">
                  Centros de prensa
                </span>
              </div>
            </li>
            <li aria-current="page" className="text-purpledark duration-500 hover: duration-500  text-sm hover:text-purplelight">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                <Link href="/centros-de-prensa/comunicados-de-prensa">
                  <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400 cursor-pointer">Comunicados de prensa</span>
                </Link>
              </div>
            </li>
            <li className="text-purpledark text-sm duration-500 hover: duration-500 hover:text-purplelight">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-purpledark">{eventoComunicadoPrensa?.attributes?.Nombre}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="container grid evento-noticia grid-cols-2 lg:grid-cols-8 lg:gap-10 h-full mt-0 mb-0">
        <div className="col-span-6">
          <div className="bg-white mb-12 border-2 rounded-sm border border-[#E6E6E6]">
            <img className="w-full !h-76 sm:!h-96" src={`${API_URL}${eventoComunicadoPrensa?.attributes?.Imagen_Principal.data.attributes.url}`} />
            <div className="p-3 sm:p-9 pb-0">
              <div className=" justify-between">
                <h3 className="text-left font-medium text-purpledark text-2xl">{eventoComunicadoPrensa?.attributes?.Nombre}</h3>
              </div>
              <h4 className="text-left font-normal text-purpledark text-lg">{eventoComunicadoPrensa?.attributes?.Fecha}</h4>

              <div className="bg-purpledark d-block w-10 h-0.5 mt-1 mb-4"></div>
              <p className="text-lg font-normal text-gray text-justify  w-100">
                {HTMLReactParser(eventoComunicadoPrensa?.attributes?.Descripcion ? eventoComunicadoPrensa?.attributes?.Descripcion : '')}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <h4 className="font-bold text-purpledark mb-2">Otros comunicados de prensa</h4>

          {otherComunicadosPrensa?.map(
            (element, index) =>
              index < 2 && (
                <Card
                  idNotice={element?.data[0]?.id}
                  title={element?.data[0]?.attributes?.Nombre}
                  description={element?.data[0]?.attributes?.Descripcion}
                  imageUrl={`${API_URL}${element?.data[0]?.attributes?.Imagen_Principal.data.attributes.url}`}
                  typeCentroPrensa="comunicadosdeprensa"
                />
              )
          )}
        </div>
      </div>
    </>
  );
}
