import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import 'animate.css/animate.min.css';

import { getCategoriesProjectsData } from 'api/projectsAPI';
import { API_URL } from 'utils/constants';

export default function CategoriesProject() {
  const [categoriesProjects, setCategoriesProjects] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await getCategoriesProjectsData();
      setCategoriesProjects(response);
    })();
  }, []);
  return (
    <>
      {categoriesProjects && categoriesProjects?.length > 0 && (
        <div className={`container categoriasproyectos w-full grid-container grid grid-cols-2 sm:grid-cols-${categoriesProjects?.length}  divide-x p-4 divide-[#E8E8E8] m-5 sm:m-10`}>
          {categoriesProjects?.map((item, index) => (
            <Link href={`${item?.attributes?.Enlace}`} key={index}>
              <div className="duration-700 hover:bg-[#FBEAF1] hover:duration-700 cursor-pointer py-2">
                <img src={`${API_URL}${item?.attributes?.Imagen_de_Categoria?.data?.attributes?.url}`} alt={item?.attributes?.Nombre_de_Categoria} className="m-auto w-22 h-22 text-purpledark" />
                <p className="text-center text-[#606060] text-lg sm:text-xl mt-1 font-medium leading-none w-3/4 m-auto">{item?.attributes?.Nombre_de_Categoria}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
