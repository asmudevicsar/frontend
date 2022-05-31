const { API_URL } = require('utils/constants');

export async function getQuienesSomosData() {
  try {
    const url = `${API_URL}/api/quienes-somoss`;
    const response = await fetch(url);
    const result = await response.json();
    return result.data[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}
