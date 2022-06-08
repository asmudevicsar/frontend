const { API_URL } = require('utils/constants');
export async function getProjectById(idProject) {
  try {
    const url = `${API_URL}/api/proyectoss?filters[id][$eq]=${idProject}&populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getCategoriesProjectsData() {
  try {
    const url = `${API_URL}/api/categorias-de-proyectos?sort[0]=orden:asc&populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getProjects() {
  try {
    const url = `${API_URL}/api/proyectoss?sort[0]=Fecha:desc&populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getProjectsAll(idCategory) {
  try {
    const url = `${API_URL}/api/proyectoss?sort[0]=Fecha:desc&filters[Categoria_del_proyecto][id][$eq]=${idCategory}&populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getProjectsMaxSixByCategory(idCategory) {
  try {
    const url = `${API_URL}/api/proyectoss?pagination[limit]=6&sort[0]=Fecha:desc&filters[Categoria_del_proyecto][id][$eq]=${idCategory}&populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
