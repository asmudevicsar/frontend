const { API_URL } = require('utils/constants');

export async function getSocialLinks() {
  try {
    const url = `${API_URL}/api/redes-socialess?populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
