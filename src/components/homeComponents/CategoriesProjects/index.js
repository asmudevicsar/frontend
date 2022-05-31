import React, { useState, useEffect } from 'react';

import { getCategoriesProjectsData } from 'api/categoriesProjects';
import { API_URL } from 'utils/constants';

export default function CategoriesProject() {
  const [categoriesProjects, setCategoriesProjects] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await getCategoriesProjectsData();
      setCategoriesProjects(response);
      console.log('holaaa=>', response);
    })();
  }, []);
  return (
    <div class="container categoriasproyectos w-full grid-container grid grid-cols-2 sm:grid-cols-4  divide-x p-4 divide-[#E8E8E8] m-5 sm:m-14 ">
      {categoriesProjects?.map((item) => (
        <div className="duration-700 hover:bg-[#FBEAF1] hover:duration-700 cursor-pointer py-2">
          <img src={`${API_URL}${item.attributes.Imagen_de_Categoria.data.attributes.url}`} className="m-auto w-22 h-22 text-purpledark" />
          <p className="text-center text-[#606060] text-lg sm:text-xl mt-1 font-medium leading-none w-3/4 m-auto">{item.attributes.Nombre_de_Categoria}</p>
        </div>
      ))}
    </div>
  );
}
