const { API_URL } = require('utils/constants');

export async function getBannersInternos() {
  try {
    const url = `${API_URL}/api/banners-internoss?populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
