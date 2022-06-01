const { API_URL } = require('utils/constants');

export async function getFrasesCampanias() {
  try {
    const url = `${API_URL}/api/campanas-frases-pagina-principals?populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
