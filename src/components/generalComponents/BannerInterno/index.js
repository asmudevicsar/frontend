import React, { useState, useEffect } from "react";
import {
  getBannersInternos,
  getBannersInternosCategory,
} from "api/bannerInternosAPI";
import { useRouter } from "next/router";
import { API_URL } from "utils/constants";
import Loader from "@common/Loader";

export default function BannerInterno({ title, img, description }) {
  const query = useRouter();
  const [dataBanner, setDataBanner] = useState(null);
  const [dataFull, setDataFull] = useState(false);

  useEffect(() => {
    (async () => {
      /* Obtener los datos de la API y luego mapearlos para obtener los datos que necesito. */
      const response = await getBannersInternos();
      response?.data?.map((item) => {
        if (
          item?.attributes?.Pagina?.data?.attributes?.Nombre ==
            "Quienes Somos" &&
          query.pathname.includes("/quienes-somos")
        ) {
          setDataBanner(item?.attributes);
        }
        if (
          item?.attributes?.Pagina?.data?.attributes?.Nombre == "Proyectos" &&
          query.pathname.includes("/proyectos")
        ) {
          setDataBanner(item?.attributes);
        }
        if (
          item.attributes?.Pagina?.data?.attributes?.Nombre == "Galeria" &&
          query.pathname.includes("/galeria")
        ) {
          setDataBanner(item?.attributes);
        }
        if (
          item?.attributes?.Pagina?.data?.attributes?.Nombre ==
            "Eventos y Noticias" &&
          query.pathname.includes("/centros-de-prensa/eventos-y-noticias")
        ) {
          setDataBanner(item?.attributes);
        }
        if (
          item?.attributes?.Pagina?.data?.attributes?.Nombre ==
            "Comunicados de Prensa" &&
          query.pathname.includes("/centros-de-prensa/comunicados-de-prensa")
        ) {
          setDataBanner(item?.attributes);
        }
        if (
          item?.attributes?.Pagina?.data?.attributes?.Nombre ==
            "Informe Corporativo Mensual" &&
          query.pathname.includes("/quienes-somos/informe-corporativo-mensual")
        ) {
          setDataBanner(item?.attributes);
        }
      });
      const responseBannersInternoProjects = await getBannersInternosCategory();

      responseBannersInternoProjects?.data?.map((itemProject, index) => {
        if (
          query.asPath.includes(
            `/proyectos/${itemProject?.attributes?.Categorias_de_proyectos?.data?.attributes?.Nombre_de_Categoria.trim()
              .toLowerCase()
              .normalize("NFD")
              .replace(
                /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
                "$1"
              )
              .normalize()
              .trim()
              .replace(/ /g, "")}`
          )
        ) {
          setDataBanner(itemProject?.attributes);
          setDataFull(true);
        }
      });
    })();
  }, [query]);
  return dataBanner ? (
    <div
      style={{
        backgroundImage: `url(${API_URL}${
          dataBanner.Imagen_de_fondo.data[0]
            ? dataBanner?.Imagen_de_fondo?.data[0]?.attributes?.url
            : dataBanner?.Imagen_de_fondo?.data?.attributes?.url
        })`,
      }}
      className={
        "relative mt-8 lg:mt-24 banner-interno active-anim image-banner h-52"
      }
    >
      <div className="content-image">
        <div className="!w-full center-data  md:!w-3/4 lg:!w-1/2">
          <h3 className=" text-center font-bold text-xl sm:text-4xl text-white">
            {title ? title : dataBanner?.Titulo}
          </h3>
          <p className="mt-3 text-center font-semibold text-sm xl:text-base text-white !leading-5">
            {description ? description : dataBanner?.Descripcion}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="container py-32 text-center font-bold">
      <Loader />
    </div>
  );
}
