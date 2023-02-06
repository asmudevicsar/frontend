import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import BannerInterno from '@components/generalComponents/BannerInterno';
import { getProjectById, getProjectsAll } from 'api/projectsAPI';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

import 'swiper/css/thumbs';
import { EffectFade, Autoplay, Navigation, Pagination, FreeMode, Thumbs } from 'swiper';
import { API_URL } from 'utils/constants';
import HTMLReactParser from 'html-react-parser';
import Seo from '@components/seo';

export default function ProjectDetail() {
  const [data, setData] = useState(null);
  const [idNoticeBefore, setIdNoticeBefore] = useState(0);
  const [idNoticeAfter, setIdNoticeAfter] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const arrIdProjects = [];
  const query = useRouter();
  console.log('llego query=>', query);
  let positionCurrently = 0;
  useEffect(() => {
    (async () => {
      const response = await getProjectById(query.query.project);
      const responseCategoryData = await getProjectsAll(response?.data[0]?.attributes?.Categoria_del_proyecto?.data?.id);
      responseCategoryData?.data?.map((itemcategory) => arrIdProjects.push(itemcategory?.id));

      if (arrIdProjects.length > 0) {
        positionCurrently = arrIdProjects.findIndex((item) => item == query.query.project);

        if (positionCurrently == 0) {
          setIdNoticeBefore(arrIdProjects[arrIdProjects.length - 1]);
          setIdNoticeAfter(arrIdProjects[positionCurrently + 1]);
        } else if (positionCurrently == arrIdProjects.length - 1) {
          setIdNoticeBefore(arrIdProjects[positionCurrently - 1]);
          setIdNoticeAfter(arrIdProjects[0]);
        } else {
          setIdNoticeBefore(arrIdProjects[positionCurrently - 1]);
          setIdNoticeAfter(arrIdProjects[positionCurrently + 1]);
        }
      }
      setData(response?.data[0]);
    })();
  }, [query]);
  return (
    <>
      <Seo title={data?.attributes?.Titulo} description={data?.attributes?.Titulo} />
      <div className="project-descripcion">
        <BannerInterno />
        <div className="container">
          <nav className="flex mt-2 mb-6 breadcrumb" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center text-purpledark text-sm duration-500 hover: duration-500 	">
                <Link href="/">Página principal</Link>
              </li>
              <li className="text-purpledark text-sm duration-500 hover: duration-500 hover:text-purplelight cursor-pointer">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <Link href="/proyectos">
                    <span href="#" className="text-purpledark">
                      Proyectos
                    </span>
                  </Link>
                </div>
              </li>
              <li aria-current="page" className="text-purpledark duration-500 hover: duration-500  text-sm hover:text-purplelight">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{data?.attributes?.Categoria_del_proyecto?.data?.attributes?.Nombre_de_Categoria}</span>
                </div>
              </li>
              <li className="text-purpledark text-sm duration-500 hover: duration-500 hover:text-purplelight">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span className="text-purpledark">{data?.attributes?.Titulo}</span>
                </div>
              </li>
            </ol>
          </nav>
          {arrIdProjects.length > 0 && (
            <div>
              <div className="bg-white p-2 sm:p-3 cursor-pointer duration-500 hover:bg-[#E6E6E6] absolute">
                <Link href={`/proyectos/${query.query.categoriaproyectos}/detalle/${idNoticeBefore}`}>
                  <IoIosArrowBack className="text-purpledark w-16	h-16" />
                </Link>
              </div>

              <div className="bg-white p-2 sm:p-3 cursor-pointer duration-500 hover:bg-[#E6E6E6] absolute right-0">
                <Link href={`/proyectos/${query.query.categoriaproyectos}/detalle/${idNoticeAfter}`}>
                  <IoIosArrowForward className="text-purpledark w-16	h-16 right-0" />
                </Link>
              </div>
            </div>
          )}
          {query?.query?.categoriaproyectos?.includes('vivienda') ? (
            <div className="my-2 sm:my-16 min-height-project-vivienda">
              <h2 className="font-bold text-center text-3xl text-purpledark mb-5">{data?.attributes?.Titulo}</h2>

              <div className="topSpacerDiv"></div>
              { data?.attributes?.Imagenes?.data.length > 0 && (
              <div className="image-rigth-projects ml-0 sm:ml-5 ">
                <Swiper
                  style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }}
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                  className="mySwiper2"
                >
                  {data?.attributes?.Imagenes?.data?.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img className="w-full projects carrousel-gallery-right" alt="image" src={`${API_URL}${image.attributes.url}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  {data?.attributes?.Imagenes?.data?.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img className="w-full h-16" alt="image" src={`${API_URL}${image.attributes.url}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              )
              }
              <div className="mx-4 sm:mx-0">
                <div className="content-project">{HTMLReactParser(data?.attributes?.Descripcion ? data?.attributes?.Descripcion : '')}</div>
              </div>
            </div>
          ) : query?.query?.categoriaproyectos?.includes('ingresos') ? (
            <div className="my-2 sm:my-16 min-height-project">
              <h2 className="font-bold text-3xl text-center text-purpledark mb-5">{data?.attributes?.Titulo}</h2>

              <div className="topSpacerDiv"></div>
              <div>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="mySwiper"
                >
                  {data?.attributes?.Imagenes?.data?.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img className="w-full projects carrousel-gallery cursor " alt="image" src={`${API_URL}${image.attributes.url}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="mx-4 sm:mx-0 mt-14">
                <div className="content-project">{HTMLReactParser(data?.attributes?.Descripcion ? data?.attributes?.Descripcion : '')}</div>
              </div>
            </div>
          ) : query?.query?.categoriaproyectos?.includes('derechoshumanos') ? (
            <div className="my-2 sm:my-16 min-height-project">
              <div className="topSpacerDiv"></div>
              <div className="image-rigth-projects">
                <Swiper
                  slidesPerView={1}
                  autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                  }}
                  effect={'fade'}
                  spaceBetween={1}
                  loop={true}
                  navigation={true}
                  modules={[EffectFade, Autoplay, Navigation]}
                  className="mySwiper"
                >
                  {data?.attributes?.Imagenes?.data?.map((image, index) => (
                    <SwiperSlide key={index} className=" float-left p-3">
                      <img className="w-full projects carrousel-gallery-right" alt="image" src={`${API_URL}${image.attributes.url}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="mx-4 sm:mx-0">
                <h2 className="font-bold text-3xl text-purpledark mb-5">{data?.attributes?.Titulo}</h2>
                <div className="content-project">{HTMLReactParser(data?.attributes?.Descripcion ? data?.attributes?.Descripcion : '')}</div>
              </div>
            </div>
          ) : (
            <div className="my-2 sm:my-16 min-height-project">
              <div className="topSpacerDiv"></div>
              <div className="image-left-projects">
                <Swiper
                  slidesPerView={1}
                  autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                  }}
                  effect={'fade'}
                  spaceBetween={1}
                  loop={true}
                  navigation={true}
                  modules={[EffectFade, Autoplay, Navigation]}
                  className="mySwiper"
                >
                  {data?.attributes?.Imagenes?.data?.map((image, index) => (
                    <SwiperSlide key={index} className=" float-left p-3">
                      <img className="w-full projects carrousel-gallery" alt="image" src={`${API_URL}${image.attributes.url}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="mx-4 sm:mx-0">
                <h2 className="font-bold text-3xl text-purpledark mb-5">{data?.attributes?.Titulo}</h2>
                <div className="content-project">{HTMLReactParser(data?.attributes?.Descripcion ? data?.attributes?.Descripcion : '')}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
