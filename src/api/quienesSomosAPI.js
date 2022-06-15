const { API_URL } = require('utils/constants');

export async function getQuienesSomosData() {
  try {
    const url = `${API_URL}/api/quienes-somoss?populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result.data[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getIdentidadCorporativa() {
  try {
    const url = `${API_URL}/api/identidad-corporativas?populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result.data[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getIdentidadOrganizativa() {
  try {
    const url = `${API_URL}/api/identidad-organizativas?populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result.data[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getInformesCorporativos() {
  try {
    const url = `${API_URL}/api/informe-corporativo-mensuals?populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}



