import React, { useState, useEffect } from 'react';
import { getCategoriesProjectsData } from 'api/projectsAPI';
import Link from 'next/link';
import { API_URL } from 'utils/constants';

export default function ProjectCategories() {
  const [categoriesProjects, setCategoriesProjects] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await getCategoriesProjectsData();
      setCategoriesProjects(response);
    })();
  }, []);
  return (
    <div className="container py-10 md:py-20 px-3 sm:px-0">
      <div className="lg:grid sm:grid-flow-col gap-10">
        <div className="box-shadow-category sm:row-span-3 items-center rounded-3xl flex duration-500 border-2 border-[#A7A6A6] cursor-pointer hover:duration-500">
          <Link href={`${categoriesProjects && categoriesProjects[0] && categoriesProjects[0]?.attributes?.Enlace}`}>
            <div className="px-8 py-8 lg:py-0">
              <img alt="image" className="w-24 m-auto" src={`${API_URL}${categoriesProjects && categoriesProjects[0] && categoriesProjects[0].attributes.Imagen_de_Categoria.data.attributes.url}`} />
              <h3 className="text-xl font-bold text-purpledark w-full m-auto text-center mt-4">
                {categoriesProjects && categoriesProjects[0] && categoriesProjects[0].attributes.Nombre_de_Categoria}
              </h3>
              <p className="text-[gray] font-bold text-sm m-auto text-center my-8">{categoriesProjects && categoriesProjects[0] && categoriesProjects[0]?.attributes?.Descripcion}</p>
              <div className="w-full text-center">
                <button className="bg-purpledark text-white m-auto text-center px-4 py-1 duration-500 rounded-md hover:bg-purplelight hover:duration-500">Ver más</button>
              </div>
            </div>
          </Link>
        </div>
        <div
          className="sm:col-span-2/* Agregando un margen superior de 5px en pantallas pequeñas y 0px en
        pantallas grandes. */
         mt-5 lg:mt-0"
        >
          <div className="sm:grid sm:grid-columns-2 grid-flow-col gap-10">
            <div className="box-shadow-category hover:duration-500 bg-white rounded-3xl duration-500 border-2 border-[#A7A6A6] cursor-pointer">
              <Link href={`${categoriesProjects && categoriesProjects[1] && categoriesProjects[1]?.attributes?.Enlace}`}>
                <div className="px-8 py-8">
                  <img alt="image" className="w-24 m-auto" src={`${API_URL}${categoriesProjects && categoriesProjects[1] && categoriesProjects[1].attributes.Imagen_de_Categoria.data.attributes.url}`} />
                  <h3 className="text-xl font-bold text-purpledark w-full m-auto text-center mt-4">
                    {categoriesProjects && categoriesProjects[1] && categoriesProjects[1].attributes.Nombre_de_Categoria}
                  </h3>
                  <p className="text-[gray] font-bold text-sm m-auto text-center my-4">{categoriesProjects && categoriesProjects[1] && categoriesProjects[1]?.attributes?.Descripcion}</p>
                  <div className="w-full text-center">
                    <button className="bg-purpledark text-white m-auto text-center px-4 py-1 duration-500 rounded-md hover:bg-purplelight hover:duration-500">Ver más</button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="bg-white rounded-3xl duration-500 box-shadow-category hover:duration-500 border-2 border-[#A7A6A6] cursor-pointer">
              <Link href={`${categoriesProjects && categoriesProjects[2] && categoriesProjects[2]?.attributes?.Enlace}`}>
                <div className="px-8 py-8">
                  <img alt="image" className="w-24 m-auto" src={`${API_URL}${categoriesProjects && categoriesProjects[2] && categoriesProjects[2].attributes.Imagen_de_Categoria.data.attributes.url}`} />
                  <h3 className="text-xl font-bold text-purpledark w-full m-auto text-center mt-4">
                    {categoriesProjects && categoriesProjects[2] && categoriesProjects[2].attributes.Nombre_de_Categoria}
                  </h3>
                  <p className="text-[gray] font-bold text-sm m-auto text-center my-4">{categoriesProjects && categoriesProjects[2] && categoriesProjects[2]?.attributes?.Descripcion}</p>

                  <div className="w-full text-center">
                    <button className="bg-purpledark text-white m-auto text-center px-4 py-1 duration-500 rounded-md hover:bg-purplelight hover:duration-500">Ver más</button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="row-span-1  mt-5 lg:mt-0  items-center bg-white rounded-3xl duration-500 box-shadow-category  hover:duration-500   border-2 border-[#A7A6A6] cursor-pointer">
          <Link href={`${categoriesProjects && categoriesProjects[3] && categoriesProjects[3]?.attributes?.Enlace}`}>
            <div className="px-8 py-8">
              <img alt="image" className="w-24 m-auto" src={`${API_URL}${categoriesProjects && categoriesProjects[3] && categoriesProjects[3].attributes.Imagen_de_Categoria.data.attributes.url}`} />
              <h3 className="text-xl font-bold text-purpledark w-full m-auto text-center mt-4">
                {categoriesProjects && categoriesProjects[3] && categoriesProjects[3].attributes.Nombre_de_Categoria}
              </h3>
              <p className="text-[gray] font-bold text-sm m-auto text-center my-4">{categoriesProjects && categoriesProjects[3] && categoriesProjects[3]?.attributes?.Descripcion}</p>
              <div className="w-full text-center">
                <button className="bg-purpledark text-white m-auto text-center px-4 py-1 duration-500 rounded-md hover:bg-purplelight hover:duration-500">Ver más</button>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="lg:grid sm:grid-flow-col gap-10">
        {categoriesProjects?.map(
          (element, index) =>
            index > 3 && (
              <div key={index} className="row-span-2  mt-5 lg:mt-5  items-center bg-white rounded-3xl duration-500 box-shadow-category  hover:duration-500   border-2 border-[#A7A6A6] cursor-pointer">
                <Link href={`${categoriesProjects && categoriesProjects[index] && categoriesProjects[index]?.attributes?.Enlace}`}>
                  <div className="px-8 py-8">
                    <img alt="image" className="w-24 m-auto" src={`${API_URL}${categoriesProjects && categoriesProjects[index] && categoriesProjects[index].attributes.Imagen_de_Categoria.data.attributes.url}`} />
                    <h3 className="text-xl font-bold text-purpledark w-full m-auto text-center mt-4">
                      {categoriesProjects && categoriesProjects[3] && categoriesProjects[index].attributes.Nombre_de_Categoria}
                    </h3>
                    <p className="text-[gray] font-bold text-sm m-auto text-center my-4">{categoriesProjects && categoriesProjects[index] && categoriesProjects[index]?.attributes?.Descripcion}</p>
                    <div className="w-full text-center">
                      <button className="bg-purpledark text-white m-auto text-center px-4 py-1 duration-500 rounded-md hover:bg-purplelight hover:duration-500">Ver más</button>
                    </div>
                  </div>
                </Link>
              </div>
            )
        )}
      </div>
    </div>
  );
}
