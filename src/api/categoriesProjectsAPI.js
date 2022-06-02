const { API_URL } = require('utils/constants');

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
